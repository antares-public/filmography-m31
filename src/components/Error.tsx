import React from "react";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

export const Error: React.FC<any> = ({ text }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 10,
        left: "50%",
        padding: "2px 20px",
        backgroundColor: "#FF3C3C",
        transform: "translate(-50%, 0)",
        borderRadius: "2px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <WarningAmberIcon />
      <p style={{ marginLeft: 5 }}>{text}</p>
    </div>
  );
};
