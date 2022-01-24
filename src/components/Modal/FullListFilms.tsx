import React, { useMemo } from "react";
import CloseIcon from "@mui/icons-material/Close";

export const FullListFilms: React.FC<any> = ({ filmsList, open, setOpen }) => {
  if (!open) {
    return null;
  }

  const flattenNodes = useMemo(
    () =>
      filmsList.map((f: any, i: number) => (
        <div
          key={f.name}
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 20,
          }}
        >
          <h3 style={{ margin: 0 }}>{f.name}</h3>
          <p style={{ margin: "5px 0" }}>{f.desc}</p>
        </div>
      )),
    [filmsList]
  );

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        backgroundColor: "#222",

        top: 0,
        left: 0,
        zIndex: 10,
      }}
    >
      <div className="full-list-inner">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h2>Full List</h2>
          <div onClick={() => setOpen(false)}>
            <CloseIcon />
          </div>
        </div>
        {flattenNodes}
      </div>
    </div>
  );
};
