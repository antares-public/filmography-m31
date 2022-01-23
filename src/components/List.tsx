import React, { useMemo } from "react";

export const List: React.FC<any> = ({ filmsList, updateFilmsList }) => {
  const handleDelete = (name: string) => {
    updateFilmsList((prev: any) => prev.filter((e: any) => e.name !== name));
  };

  const flattenNodes = useMemo(
    () =>
      filmsList.map((f: any) => (
        <div
          key={f.name}
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <p>{f.name}</p>
          {/* <button
            style={{ margin: 10 }}
            onClick={handleDelete.bind(null, f.name)}
          >
            Delete
          </button> */}
        </div>
      )),
    [filmsList]
  );

  return (
    <div style={{ marginTop: 50 }}>
      <h2>FILMOGRAPHY</h2>
      {flattenNodes}
    </div>
  );
};
