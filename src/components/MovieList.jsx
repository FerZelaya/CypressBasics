import React, { useState } from "react";

const MovieList = () => {
  const [moviesData, SetMoviesData] = useState([]);
  return (
    <div class="container-fluid vh-100 text-center bg-dark d-flex justify-content-center align-items-center">
      <div className="row w-50">
        <table class="table table-dark table-striped text-white">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col bold">Rating</th>
            </tr>
          </thead>
          <tbody>
            {moviesData.length > 0 ? (
              <tr>
                <td>None</td>
                <td>None</td>
              </tr>
            ) : (
              <tr data-cy='empty'>
                No movies
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MovieList;
