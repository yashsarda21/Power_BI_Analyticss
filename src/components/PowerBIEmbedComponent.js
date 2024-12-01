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
            "H4sIAAAAAAAEACWUt66EVgBE_-W1WCInSy7IObOkjnDJaYElrOV_97PcTzNHZ-bvHzd_xiWvfv786UmmfBfcHVVLoDHS56K0EWxSpHcffXXVW0ZMWe7VHfNk2LcOyo69a8IVXv_SstBSZcrrni-y06fkDiEvCtsr5jkzzSGdqEzG_H7CLmcqRZt4_E-7FSl1uI6Dj5N1QE8dNzu3ExHVhaOeId8RNFi9Qd6E1o-G5Bxe4QCtJn5j3M62OnYbjl4cVF_nkYAT7gZoNTzeGlDcbjRYxYCNUw5CkBA28C89u4KzGvK6rn2XSrUnSlMFZsVZsnW9l92E7j23I8yQc5730SfQtOEjm7D7UmHfxo71dBlqaFgqOfGSuLmNLhVu3YVYVZ7wGDOs7yqsDDyQ6vPAIjVPjm9M2j21sHAHLfpypJTr9j3q-3qEDjp5lAvt0Cov3RSu3FYU1UnsnkONDUclGeKNqaU4sSw4c4v2pXg2Zppx-VALMuVpKgbie2Zw0PcLI0nTwGl_q-AU0u1NCB5N0S-_kLv5MN-RRwfrDPDIVq7F35q4fDKUmu4HLFQU-QBjU5bgou8aIOsdJUJ13rHp8x8dWNWhja6YBZYY-rbBX5VLUGvJTx0aL-WIY7NzUnPQgOnt5B7N7FPhh5ivvN9v-KuCaYkwqahns80ckSs2jb5jYpm-ZGhTxq9t5GN8vVk3Ubp6R3W0v0JdohrZ715GDSVyai9tv4_J25V2GneA9jkCNwFTAby7hcO5MuepoxHM0DLAS1AkQztkM4uKhZ7gXKlHkVNzDDDj7VRPsg2Ms3d58iRX9vcGFgTqCPt15eUF3XE2UgSSx51A7_vPHz_C9qzHYoDndw7D5yCH2kNeocQ752bD-DoWjRWVHVL0ijGFRN3R4TSGKHKHDDLF2fyVbmwMc5i9v9QzhLBiucolEmgWfmbsGXbDcbbYNolUYYiY5e2zFay4IqNGxFu4d6hjXlCVmqzPU2jCV_W3kMPrdKkE09VmzJxDiJAPpq-16blTcSUTDokB9Iox1f9UPGPvhIF--NymcFBsD2BpdzDQPbC-fo-RsOXz4pBr4nW-zBN2MN7IqJDzcgsZ5KL7oCfCaIZ3k-2xCERFP8qjae9Hl8qDxv3tXH1eN-qx1B3NG1Ys4wFO2Svts0lBSHvv7WxLSgitCx6cTGYWCvP0QQndyLYX3S4BvghIkzR__fUf5mdtwaZFv5QBQCFuY34vp8DPZza_b0TM_08FXTPnx2cDvzEzRePfrkuWKZrGS44ARDmZ0wte4wjmIv-ldt9XOou3-mAayYd-XUd054aZGgKBJifWBby7VrC8yUOslfnV2C_3lT1WXJiskKGWZ_nt8rG41bQFmFjg7G3cjbCuiq99p3dyLvVCco9J2BvYAg2sZ4i6Nm4Lmgoy1oRbW_WfZnjBAjjKtT3XVea0unT6NdUhk0If99D7lMIPtMy4pf2uCj-KjqlTsGmdEtyGzh4w4YqlwzNHbUGcx1aWYLoLfLsqZiAKuWHFaqOaHkaoPkWTeHpzB649waXAyOdTYd6zM9Jbz69L4H-FPMle1YyA9uLDvMFXOvSBd4OKyiqlIT9hViX6eP1i_udfugcuggIGAAA=.eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUlORElBLUNFTlRSQUwtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZXhwIjoxNzMyNDQwMzcxLCJhbGxvd0FjY2Vzc092ZXJQdWJsaWNJbnRlcm5ldCI6dHJ1ZX0=",
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
