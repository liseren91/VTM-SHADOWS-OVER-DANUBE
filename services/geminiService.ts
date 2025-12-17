import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { Language } from "../types";

const getSystemInstruction = (lang: Language) => `
You are the "SchreckNET Administrator," a cynical and knowledgeable Nosferatu managing a secure information terminal for Neonates in a Vampire: The Masquerade (V20) city.
Your tone is secretive, slightly condescending but helpful, and immersive. Use V20 terminology (Kindred, Kine, Masquerade, Blood Hunt, etc.).

CRITICAL INSTRUCTION: You MUST reply in the following language: ${lang === 'ru' ? 'RUSSIAN' : 'ENGLISH'}.

You have the following SPECIFIC information about the upcoming LARP game:
1. Setting: Urban game, sunset to sunrise.
2. Players: Neonates of the Camarilla.
3. Schedule: 
   - Mandatory Group Events: 20:00-22:00 AND 00:00-02:00.
   - Triggers: Sheriff or Primogen will send players to these.
   - Downtime/Elysium: Outside these hours.
   - Personal Events: Possible depending on backstory, but usually not near dawn.
4. Rules: 
   - Heavy PvE focus.
   - 6 Traditions of Camarilla strictly enforced (No casual killing of other Kindred).
   - Politics over violence.
   - Death is possible (Blood Hunt, stupidity in PvE, PvP revenge later) but rare.
   - Elders/Ancillae are hard to kill without major help/artifacts.
5. Roles:
   - Prince, Seneschal, Harpy, Ancillae, Elders: NON-PLAYER CHARACTERS (NPCs/Tech). They exist for plot, not to win. They have set triggers/secrets.
   - Sheriff: Player Character (PC) but with restrictions/obligations.
6. Call to Action: People who know lore and want to be NPCs should apply via the link.

Answer player questions based strictly on this information. If they ask something outside this scope, answer creatively based on general V20 lore but remind them to check with the Storytellers.
`;

export const sendMessageToGemini = async (
  history: { role: string; parts: { text: string }[] }[],
  newMessage: string,
  lang: Language
): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      return lang === 'ru' 
        ? "ОТКАЗАНО В ДОСТУПЕ: Ключ API отсутствует в протоколах окружения." 
        : "ACCESS DENIED: API Key missing from environment protocols.";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: getSystemInstruction(lang),
        temperature: 0.8,
      },
      history: history,
    });

    const result: GenerateContentResponse = await chat.sendMessage({
      message: newMessage
    });

    return result.text || (lang === 'ru' ? "Соединение прервано. Сигнал потерян." : "Connection interrupted. Signal lost.");
  } catch (error) {
    console.error("SchreckNET Error:", error);
    return lang === 'ru' 
      ? "СИСТЕМНЫЙ СБОЙ: Невозможно получить доступ к узлу. Попробуйте позже." 
      : "SYSTEM FAILURE: Unable to access the node. Try again later.";
  }
};

export const generateClanPortrait = async (
  clanName: string,
  stereotype: string,
  description: string
): Promise<string | null> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.error("API Key missing");
      return null;
    }

    const ai = new GoogleGenAI({ apiKey });

    const prompt = `A cinematic portrait of a ${clanName} vampire from Vampire: The Masquerade, year 2026. ${stereotype}. 
    ${description.substring(0, 200)}
    
    Style: Dark urban fantasy, gothic punk aesthetic, World of Darkness atmosphere. Modern setting with timeless vampire elegance.
    Composition: Close-up portrait, dramatic angle, intense gaze, showing personality and clan characteristics.
    Lighting: Moody chiaroscuro, deep shadows, selective highlights, nocturnal ambiance, cinematic color grading.
    Details: Photorealistic, highly detailed facial features, atmospheric depth, 8K quality.
    Mood: Mysterious, predatory, sophisticated danger. No text.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: prompt }]
      },
      config: {
        imageConfig: {
          aspectRatio: "16:9",
        }
      }
    });

    if (response.candidates && response.candidates[0].content && response.candidates[0].content.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData && part.inlineData.data) {
          return `data:image/png;base64,${part.inlineData.data}`;
        }
      }
    }

    return null;
  } catch (error) {
    console.error("Image Generation Error:", error);
    return null;
  }
};