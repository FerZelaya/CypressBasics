import React from "react";
import MovieList from "./MovieList";

describe.skip("<MovieList />", () => {
  beforeEach(() => {
    cy.mount(<MovieList />);
  });

  it("Check empty table", () => {
    //It should first be empty
    cy.get("[data-cy=emptyMovieList]").contains("No Movies");
    const button = cy.get("[data-cy=loadButton]");
    const moviesTable = cy.get("[data-cy=moviesTable]");
    button.should("not.be.disabled");
    moviesTable.children().should("have.length", 0);
  });

  it("Check table with data", () => {
    const button = cy.get("[data-cy=loadButton]");
    const moviesTable = cy.get("[data-cy=moviesTable]");
    button.click();
    button.should("be.disabled");
    moviesTable.children("tbody").find("tr").should("have.length", 20);
  });
});

describe("Basic API test examples", () => {
  const options = {
    method: "GET",
    url: "https://moviesdatabase.p.rapidapi.com/titles",
    headers: {
      "X-RapidAPI-Key": "0ad69e9dbfmshf43b5b5162df91cp1575edjsn9f130c205688",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };

  it("GET movies request and verify the length of the results to be 10", () => {
    cy.request(options).then((response) => {
      cy.log("movies", response.body.results);
      expect(response.body.results).to.be.a("array");
      expect(response.body.results).to.have.length(10);
    });
  });
});
