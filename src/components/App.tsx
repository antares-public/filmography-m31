import React, { useEffect, useState } from "react";
import { Random } from "./Random";
import { Form } from "./Form";
import { List } from "./List";

const App: React.FC = () => {
  const [allFilmsList, setFilmsList] = useState<
    Array<{ [key: string]: string }>
  >(JSON.parse(localStorage.getItem("films")));

  useEffect(() => {
    localStorage.setItem("films", JSON.stringify(allFilmsList));
  }, [allFilmsList]);

  return (
    <div className="wrapper">
      <div className="inner">
        <div style={{ width: 300 }}>
          <Form filmsList={allFilmsList} updateFilmsList={setFilmsList} />
          <List filmsList={allFilmsList} />
        </div>
        <div style={{ width: 300 }}>
          <Random filmsList={allFilmsList} updateFilmsList={setFilmsList} />
        </div>
      </div>
    </div>
  );
};

export default App;
