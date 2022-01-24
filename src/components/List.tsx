import React, { useMemo, useState } from "react";
import { FullListFilms } from "./Modal/FullListFilms";

export const List: React.FC<any> = ({ filmsList }) => {
  const [open, setOpen] = useState(false);

  const flattenNodes = useMemo(
    () =>
      filmsList.map(
        (f: any, i: number) =>
          i < 3 && (
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
          )
      ),
    [filmsList]
  );

  return (
    <div style={{ marginTop: 50 }}>
      <h2>FILMOGRAPHY</h2>
      {flattenNodes}
      <button
        onClick={() => setOpen(true)}
        style={{ width: "100%", marginTop: 10 }}
      >
        Learn More
      </button>

      <FullListFilms open={open} filmsList={filmsList} setOpen={setOpen} />
    </div>
  );
};
