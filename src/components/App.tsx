import React, { useEffect, useState } from "react";
import { filmsData } from "../filmsData";
import { Random } from "./Random";
import { Form } from "./Form";
import { List } from "./List";

const App: React.FC = () => {
  const [allFilmsList, setFilmsList] = useState<
    Array<{ [key: string]: string }>
  >(JSON.parse(localStorage.getItem("films")) || filmsData);

  useEffect(() => {
    localStorage.setItem("films", JSON.stringify(allFilmsList));
  }, [allFilmsList]);

  return (
    <div className="wrapper">
      <div
        style={{
          padding: "10px 70px",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div>
          <Form filmsList={allFilmsList} updateFilmsList={setFilmsList} />
          <List filmsList={allFilmsList} updateFilmsList={setFilmsList} />
        </div>
        <div>
          <Random filmsList={allFilmsList} updateFilmsList={setFilmsList} />
        </div>
      </div>
    </div>
  );
};

export default App;
