import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { useSelector } from "react-redux";
import  { useNavigate } from "react-router-dom";
import MovieListingCard from "./MovieListingCard";

jest.mock("react-redux");
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("MovieListingCard", () => {
  beforeEach(() => {
    useSelector.mockReturnValue({ url: { backdrop: "https://image.tmdb.org/t/p/original" } });
    useNavigate.mockReturnValue(jest.fn());
  });

  it("should renders the movie card with data", () => {
    const movieData = {
      id: 1,
      poster_path: "/poster.jpg",
      title: "Test Movie",
      vote_average: 8.5,
      overview: "This is a test movie.",
    };

    render(
        <MovieListingCard data={movieData} />
    );

    expect(screen.getByText("Test Movie")).toBeInTheDocument();
    expect(screen.getByText("(8.5/10)")).toBeInTheDocument();
    expect(screen.getByText("This is a test movie.")).toBeInTheDocument();
  });

  it("should navigates to the movie detail page on click", () => {
    const movieData = {
      id: 1,
      poster_path: "/poster.jpg",
      title: "Test Movie",
      vote_average: 8.5,
      overview: "This is a test movie.",
    };

    render( 
        <MovieListingCard data={movieData} />
    );

    const movieCard = screen.getByTestId("moviecard");
    expect(movieCard).toBeInTheDocument();
    fireEvent.click(movieCard);
  });
});
