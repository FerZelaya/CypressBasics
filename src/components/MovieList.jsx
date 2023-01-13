import React, { useState } from "react";
import Header from "./Header";
import axios from "axios";
const options = {
  method: "GET",
  url: "https://moviesdatabase.p.rapidapi.com/titles",
  params: { year: "2019", limit: "20" },
  headers: {
    "X-RapidAPI-Key": "0ad69e9dbfmshf43b5b5162df91cp1575edjsn9f130c205688",
    "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
  },
};

const MovieList = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [moviesExist, setMoviesExist] = useState(false);

  const getMovies = async () => {
    const moviesToSave = [];
    await axios
      .request(options)
      .then(function (response) {
        response.data.results.forEach((element) => {
          const movie = {
            title: element.titleText.text,
            year: element.releaseYear.year,
          };
          moviesToSave.push(movie);
        });
        setMoviesExist(true);
      })
      .catch(function (error) {
        console.error(error);
      });
    setMoviesData(moviesToSave);
  };

  const clearMovies = () => {
    setMoviesData([]);
    setMoviesExist(false);
  };

  return (
    <div className="container-fluid min-vh-100 overflow-y-scroll text-center bg-dark d-flex flex-column justify-content-evenly align-items-center p-5">
      <Header />
      <div className="w-50 cursor-pointer d-flex justify-content-center  align-items-center flex-column">
        <button
          data-cy="loadOrClearButton"
          className="w-50 m-5 btn-primary btn"
          onClick={() => {
            moviesExist ? clearMovies() : getMovies();
          }}
        >
          {moviesExist ? "Clear movies" : "Load movies"}
        </button>
        <table
          data-cy="moviesTable"
          className="table table-dark table-striped text-white"
        >
          {moviesExist && (
            <>
              <thead>
                <tr>
                  <th scope="col bold">Title</th>
                  <th scope="col bold">Release Year</th>
                </tr>
              </thead>
              <tbody>
                {moviesData.map((movie, index) => {
                  return (
                    <tr key={index}>
                      <td>{movie.title}</td>
                      <td>{movie.year}</td>
                    </tr>
                  );
                })}
              </tbody>
            </>
          )}
        </table>
        {moviesData.length === 0 && (
          <span
            data-cy="emptyMovieList"
            className="w-50  bg-info bg-opacity-10 border 
            border-info rounded p-3 text-white fw-bold"
          >
            No Movies
          </span>
        )}
      </div>
    </div>
  );
};

export default MovieList;
