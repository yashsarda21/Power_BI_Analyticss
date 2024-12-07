import React, { useEffect, useRef, useState } from "react";
import { PowerBIEmbed } from "powerbi-client-react";
import { models } from "powerbi-client";
import "./../index.css";

const PowerBIEmbedComponent = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [key, setKey] = useState(0); // Unique key to force re-render

  const getLayoutType = () =>
    screenWidth <= 576
      ? models.LayoutType.MobilePortrait
      : models.LayoutType.Custom;

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      if (
        (screenWidth <= 576 && newWidth > 576) || // Transition to desktop
        (screenWidth > 576 && newWidth <= 576) // Transition to mobile
      ) {
        setScreenWidth(newWidth); // Update screen width
        setKey((prevKey) => prevKey + 1); // Force re-render by updating key
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth]);

  return (
    <div
      className="PowerBIEmbed"
      style={{ width: "90vw", height: "100vh", margin: "auto" }}
    >
      <PowerBIEmbed
        key={key} // Unique key to force re-render
        embedConfig={{
          type: "report", // Report type
          id: "0b990e17-28c6-4902-9ad1-f1cb573695c0",
          embedUrl:
            "https://app.powerbi.com/reportEmbed?reportId=0b990e17-28c6-4902-9ad1-f1cb573695c0&groupId=365a215f-7d66-471f-8f7d-cc4a848da49d",
          accessToken:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Inp4ZWcyV09OcFRrd041R21lWWN1VGR0QzZKMCIsImtpZCI6Inp4ZWcyV09OcFRrd041R21lWWN1VGR0QzZKMCJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMzI3NTNjODktYzNlNy00N2YxLTg0YTMtZjk5MTQ2MzU4OGM1LyIsImlhdCI6MTczMzA2MzEyOSwibmJmIjoxNzMzMDYzMTI5LCJleHAiOjE3MzMwNjcwMjksImFpbyI6ImsyQmdZTWp4Rk9NVk5WejY4K3c4RzdaRUJ4a1hBQT09IiwiYXBwaWQiOiJkOWMzNzUyMS02ZGNiLTQ2NjMtOWE0Ni02ZGYxMWM3YWQzMWUiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC8zMjc1M2M4OS1jM2U3LTQ3ZjEtODRhMy1mOTkxNDYzNTg4YzUvIiwiaWR0eXAiOiJhcHAiLCJvaWQiOiI2MDRkY2ZiNC01ZGUzLTQ3MmQtYTViYi0xYTBhZjcyMTAzOWYiLCJyaCI6IjEuQWNZQWlUeDFNdWZEOFVlRW9fbVJSaldJeFFrQUFBQUFBQUFBd0FBQUFBQUFBQURHQUFER0FBLiIsInJvbGVzIjpbIlRlbmFudC5SZWFkV3JpdGUuQWxsIiwiVGVuYW50LlJlYWQuQWxsIl0sInN1YiI6IjYwNGRjZmI0LTVkZTMtNDcyZC1hNWJiLTFhMGFmNzIxMDM5ZiIsInRpZCI6IjMyNzUzYzg5LWMzZTctNDdmMS04NGEzLWY5OTE0NjM1ODhjNSIsInV0aSI6IktiRTNJOWptSzBHMDRjV3hyUTdwQUEiLCJ2ZXIiOiIxLjAiLCJ4bXNfaWRyZWwiOiI3IDYifQ.Lq0lYBuM5YmthljtaD_DP0mWiWGpszFhh2UMQcmtRiSYy22wQdPQAO-Ld3LMm2uTmvi_Ske3S57YmBt4oCITKHLs3SzXaVb-AWcrknMJqm30ERt0aZpeDZx9CULZaz9bUVM8k7y3doarB2OeciE-sW5XvRmv8byt7oQvKFc1NPR-Ku_NsbYu0qGOuTxlqh63_cGMzK_dEk4eM67SMoQHYV0dIYVvQwEbBlPEsDLdPiR0ljhDogvlMyUtdac3nfkCj8fr4c4dvviPYCx84ptTF2xfMuAilNDOJcF7Zf_msOef4zyxlMLzVTRdK188UA_fJUYpEykrb3eeOtmg3nmQvg",
          tokenType: models.TokenType.Embed,
          settings: {
            layoutType: getLayoutType(), // Dynamically apply layout based on screen size
          },
        }}
        eventHandlers={
          new Map([
            [
              "loaded",
              function () {
                console.log("Report loaded with layout:", getLayoutType());
              },
            ],
            [
              "error",
              function (event) {
                console.error("Error loading report:", event.detail);
              },
            ],
          ])
        }
        cssClassName={"Embed-container"}
        getEmbeddedComponent={(embeddedReport) => {
          window.report = embeddedReport;
        }}
      />
    </div>
  );
};

export default PowerBIEmbedComponent;
