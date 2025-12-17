import React, { useEffect, useRef } from 'react';

const RolesGridWidget: React.FC = () => {
  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current) return;
    mounted.current = true;

    const scriptUrl = "https://www.allrpg.info/js/roles.min.js";
    
    const initWidget = () => {
      if ((window as any).allrpgRolesList) {
        (window as any).allrpgRolesList("create");
      }
    };

    let script = document.querySelector(`script[src="${scriptUrl}"]`) as HTMLScriptElement;
    
    if (!script) {
      script = document.createElement("script");
      script.src = scriptUrl;
      script.type = "text/javascript";
      script.async = true;
      script.onload = initWidget;
      document.head.appendChild(script);
    } else {
      initWidget();
    }
  }, []);

  return (
    <div className="bg-white/5 rounded-lg p-4 overflow-x-auto min-h-[300px] border border-white/10">
      {/* @ts-ignore */}
      <div id="allrpgRolesListDiv" project_id="1365"></div>
      <style>{`
        /* Minimal style overrides for the external widget to fit the dark theme better if possible */
        #allrpgRolesListDiv table { width: 100%; border-collapse: collapse; color: #d4d4d4; }
        #allrpgRolesListDiv th, #allrpgRolesListDiv td { padding: 8px; border-bottom: 1px solid #333; }
        #allrpgRolesListDiv a { color: #8a0b0b; text-decoration: none; }
        #allrpgRolesListDiv a:hover { text-decoration: underline; }
      `}</style>
    </div>
  );
};

export default RolesGridWidget;