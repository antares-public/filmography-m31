import React, { useState } from "react";
import { Error } from "./Error";

export const Form: React.FC<any> = ({ filmsList, updateFilmsList }) => {
  const [filmDataInfo, setFilmDataInfo] = useState({ name: "" });
  const [error, setError] = useState(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilmDataInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const duplicate = filmsList.find((f: any) => f.name === filmDataInfo.name);
    if (!duplicate) {
      updateFilmsList((prev: any) => [...prev, filmDataInfo]);
    } else {
      setError("This film has already been added");

      setTimeout(() => {
        setError(null);
      }, 2000);
    }
  };

  return (
    <div>
      <h2>CREATE NEW</h2>
      <form
        onSubmit={(e) => handleSubmit(e)}
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <input
          name="name"
          required
          onChange={handleChange}
          placeholder="TITLE"
        />
        <input
          style={{ marginTop: 10 }}
          name="desc"
          onChange={handleChange}
          placeholder="DESCRIPTION"
        />
        <button style={{ marginTop: 10 }} type="submit">
          ADD FILM in collection
        </button>
      </form>
      {error && <Error text={error} />}
    </div>
  );
};
