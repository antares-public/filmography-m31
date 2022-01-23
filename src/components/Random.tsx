import React, { useState } from "react";

export const Random: React.FC<any> = ({ filmsList, updateFilmsList }) => {
  const [film, setFilm] = useState("");

  const hanlerRandomFilm = () => {
    setFilm(filmsList[Math.floor(Math.random() * filmsList.length)].name);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>RANDOM FILM</h2>
      <button onClick={hanlerRandomFilm}>Random</button>
      <p>{film}</p>
    </div>
  );
};
