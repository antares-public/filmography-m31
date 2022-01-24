import React, { useState } from "react";

export const Random: React.FC<any> = ({ filmsList, updateFilmsList }) => {
  const [film, setFilm] = useState(null);

  const hanlerRandomFilm = () => {
    setFilm(filmsList[Math.floor(Math.random() * filmsList.length)]);
  };

  const handleDelete = (name: string) => {
    updateFilmsList((prev: any) => prev.filter((e: any) => e.name !== name));
    setFilm(null);
  };

  return (
    <div>
      <h2>RANDOM FILM</h2>
      <button style={{ width: "100%" }} onClick={hanlerRandomFilm}>
        Random
      </button>

      {film && (
        <div style={{ marginTop: 30 }}>
          <h3 style={{ margin: 0 }}>{film.name}</h3>
          <p style={{ margin: "5px 0" }}>{film.desc}</p>
          <button
            style={{
              margin: "10px 0",
              backgroundColor: "#FF9C9C",
              padding: 10,
            }}
            onClick={handleDelete.bind(null, film.name)}
          >
            Delete
          </button>
          <button
            style={{
              margin: "10px 20px",
              backgroundColor: "#9CFFA0",
              padding: 10,
            }}
            onClick={handleDelete.bind(null, film.name)}
          >
            Watched
          </button>
        </div>
      )}
    </div>
  );
};
