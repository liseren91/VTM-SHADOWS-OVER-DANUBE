import React, { useEffect, useRef } from 'react';
import { Language } from '../types';
import { translateTexts } from '../services/geminiService';

interface RolesGridWidgetProps {
  lang: Language;
}

const RolesGridWidget: React.FC<RolesGridWidgetProps> = ({ lang }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let cancelled = false;

    const setContent = (html: string) => {
      if (cancelled) return;
      const container =
        containerRef.current || document.getElementById("allrpgRolesListDiv");
      if (container) container.innerHTML = html;
    };

    const translateHtmlIfNeeded = async (html: string) => {
      if (lang !== 'en') return html;
      if (!html.trim()) return html;

      try {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const walker = doc.createTreeWalker(doc.body, NodeFilter.SHOW_TEXT);

        const textNodes: Text[] = [];
        while (walker.nextNode()) {
          const node = walker.currentNode as Text;
          const value = node.nodeValue?.trim();
          if (value) textNodes.push(node);
        }

        if (!textNodes.length) return html;

        const originalTexts = textNodes.map((node) => node.nodeValue || '');
        const translated = await translateTexts(originalTexts, 'en');

        if (translated && translated.length === textNodes.length) {
          textNodes.forEach((node, idx) => {
            node.nodeValue = translated[idx];
          });
          return doc.body.innerHTML;
        }

        return html;
      } catch (error) {
        console.error("Roles translation failed:", error);
        return html;
      }
    };

    const fetchRoles = async () => {
      const container =
        containerRef.current || document.getElementById("allrpgRolesListDiv");

      if (container) {
        container.innerHTML = `<div class="text-gray-400 text-sm">${lang === 'en' ? 'Loading roles...' : 'Загрузка ролей...'}</div>`;
      }

      try {
        const formData = new FormData();
        formData.append("action", "get_roles_list");
        formData.append("command", "create");
        formData.append("project_id", "1365");
        formData.append("obj_type", "group");
        formData.append("obj_id", "all");

        const res = await fetch("https://www.allrpg.info/roles/", {
          method: "POST",
          body: formData,
        });

        const data = await res.json();
        if (data?.response === "success" && data.response_data) {
          const translatedHtml = await translateHtmlIfNeeded(data.response_data);
          setContent(translatedHtml);
        } else {
          setContent(
            `<div class="text-red-400 text-sm">${lang === 'en'
              ? 'Failed to load roles. Try again later.'
              : 'Не удалось загрузить роли. Попробуйте позже.'}</div>`
          );
        }
      } catch (err) {
        setContent(
          `<div class="text-red-400 text-sm">${lang === 'en'
            ? 'Roles service is unavailable. Please try later.'
            : 'Сервис ролей недоступен. Попробуйте позже.'}</div>`
        );
      }
    };

    fetchRoles();

    return () => {
      cancelled = true;
    };
  }, [lang]);

  return (
    <div className="bg-white/5 rounded-lg p-4 overflow-x-auto min-h-[300px] border border-white/10">
      {/* @ts-ignore */}
      <div ref={containerRef} id="allrpgRolesListDiv" project_id="1365"></div>
      <style>{`
        #allrpgRolesListDiv {
          color: #e5e7eb;
          font-size: 15px;
          line-height: 1.5;
        }
        #allrpgRolesListDiv .allrpgRolesListGroup {
          border: 1px solid #2a2a2a;
          border-radius: 10px;
          margin-bottom: 16px;
          background: rgba(255,255,255,0.03);
          overflow: hidden;
          box-shadow: 0 6px 14px rgba(0,0,0,0.35);
        }
        #allrpgRolesListDiv .allrpgRolesListGroupHeader {
          padding: 14px 16px;
          background: linear-gradient(90deg, rgba(45,45,45,0.9), rgba(30,30,30,0.9));
          border-bottom: 1px solid #2f2f2f;
        }
        #allrpgRolesListDiv .allrpgRolesListGroupName a {
          color: #fca5a5;
          font-weight: 700;
          text-decoration: none;
          letter-spacing: 0.3px;
        }
        #allrpgRolesListDiv .allrpgRolesListGroupName a:hover {
          color: #fecaca;
          text-decoration: underline;
        }
        #allrpgRolesListDiv .allrpgRolesListGroupNamePath {
          margin-top: 4px;
          color: #94a3b8;
          font-size: 13px;
        }
        #allrpgRolesListDiv .allrpgRolesListGroupNamePath a {
          color: #cbd5e1;
        }
        #allrpgRolesListDiv .allrpgRolesListGroupNamePathSeparator {
          margin: 0 6px;
          color: #64748b;
        }
        #allrpgRolesListDiv .allrpgRolesListGroupDescription {
          margin-top: 6px;
          color: #cbd5e1;
        }
        #allrpgRolesListDiv .allrpgRolesListGroupDescriptionImage {
          margin-top: 8px;
        }
        #allrpgRolesListDiv .allrpgRolesListStrings {
          display: grid;
          grid-template-columns: 1fr;
        }
        #allrpgRolesListDiv .allrpgRolesListString {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 12px;
          padding: 14px 16px;
          border-top: 1px solid #2a2a2a;
          align-items: flex-start;
        }
        #allrpgRolesListDiv .allrpgRolesListStringOdd {
          background: rgba(255,255,255,0.02);
        }
        #allrpgRolesListDiv .allrpgRolesListStringEven {
          background: rgba(255,255,255,0.01);
        }
        #allrpgRolesListDiv .allrpgRolesListCharacterName a {
          color: #f8fafc;
          font-weight: 600;
          text-decoration: none;
        }
        #allrpgRolesListDiv .allrpgRolesListCharacterName a:hover {
          color: #fca5a5;
          text-decoration: underline;
        }
        #allrpgRolesListDiv .allrpgRolesListCharacterDescription {
          color: #94a3b8;
          margin-top: 4px;
        }
        #allrpgRolesListDiv .allrpgRolesListApplication,
        #allrpgRolesListDiv .allrpgRolesListApplicationsList {
          color: #e5e7eb;
          font-size: 14px;
          text-align: right;
        }
        #allrpgRolesListDiv .allrpgRolesListLoading::after {
          content: 'Загрузка...';
          display: block;
          padding: 12px 0;
          color: #94a3b8;
          font-size: 14px;
          text-align: center;
        }
        @media (max-width: 768px) {
          #allrpgRolesListDiv .allrpgRolesListString {
            grid-template-columns: 1fr;
          }
          #allrpgRolesListDiv .allrpgRolesListApplication,
          #allrpgRolesListDiv .allrpgRolesListApplicationsList {
            text-align: left;
          }
        }
      `}</style>
    </div>
  );
};

export default RolesGridWidget;