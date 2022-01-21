import React, { useEffect, useMemo, useState } from "react";
import { filmsData } from "../filmsData";

const App: React.FC = () => {
  const [allFilmsList, setFilmsList] = useState<
    Array<{ [key: string]: string }>
  >(JSON.parse(localStorage.getItem("films")) || filmsData);
  const [film, setFilm] = useState("");
  const [filmDataInfo, setFilmDataInfo] = useState({ name: "" });
  const [error, setError] = useState(null);

  useEffect(() => {
    localStorage.setItem("films", JSON.stringify(allFilmsList));
  }, [allFilmsList]);

  const hanlerRandomFilm = () => {
    setFilm(allFilmsList[Math.floor(Math.random() * allFilmsList.length)].name);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const duplicate = allFilmsList.find((f) => f.name === filmDataInfo.name);
    if (!duplicate) {
      setFilmsList((prev) => [...prev, filmDataInfo]);
    } else {
      setError("This film has already been added");

      setTimeout(() => {
        setError(null);
      }, 2000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilmDataInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleDelete = (name: string) => {
    setFilmsList((prev) => prev.filter((e) => e.name !== name));
  };

  const flattenNodes = useMemo(
    () =>
      allFilmsList.map((f) => (
        <div
          key={f.name}
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <p>{f.name}</p>
          <button
            style={{ margin: 10 }}
            onClick={handleDelete.bind(null, f.name)}
          >
            Delete
          </button>
        </div>
      )),
    [allFilmsList]
  );

  return (
    <div>
      <p>{film || "Random film"}</p>
      <button onClick={hanlerRandomFilm}>Random</button>

      <div>
        <h4>FilmList</h4>
        {flattenNodes}
      </div>

      <form
        onSubmit={(e) => handleSubmit(e)}
        style={{
          margin: "40px 0",
          display: "flex",
          flexDirection: "column",
          width: "200px",
        }}
      >
        <input name="name" required onChange={handleChange} />
        <input name="desc" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>

      {error && <p>{error}</p>}
    </div>
  );
};

export default App;
