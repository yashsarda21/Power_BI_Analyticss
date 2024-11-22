import React, { useEffect, useRef } from "react";
import * as powerbi from "powerbi-client";

const PowerBIEmbedComponent = ({ embedUrl, accessToken, reportId }) => {
  const embedContainer = useRef(null);

  useEffect(() => {
    const powerbiService = new powerbi.service.Service(
      powerbi.factories.hpmFactory,
      powerbi.factories.wpmpFactory,
      powerbi.factories.routerFactory
    );

    // Clean up any existing embedded component in the container
    if (powerbiService.find(embedContainer.current)) {
      powerbiService.reset(embedContainer.current);
    }

    // Embed the Power BI report
    const config = {
      type: "report",
      id: reportId,
      embedUrl: embedUrl,
      accessToken: accessToken,
      tokenType: powerbi.models.TokenType.Aad,
      settings: {
        panes: {
          filters: { visible: false },
          pageNavigation: { visible: true },
        },
      },
    };

    powerbiService.embed(embedContainer.current, config);

    // Cleanup function to reset the embedded report on unmount
    return () => {
      powerbiService.reset(embedContainer.current);
    };
  }, [embedUrl, accessToken, reportId]);

  return (
    <div
      ref={embedContainer}
      style={{
        width: "100%",
        height: "600px",
        border: "1px solid #ddd",
      }}
    ></div>
  );
};

export default PowerBIEmbedComponent;
