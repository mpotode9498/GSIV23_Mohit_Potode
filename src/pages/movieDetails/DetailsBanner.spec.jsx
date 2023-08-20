import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import DetailsBanner from "./DetailsBanner";
import { fetchAPI } from "../../utils/fetchAPI";

jest.mock("react-router-dom", () => ({
  useParams: jest.fn(),
}));

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
}));

jest.mock("../../utils/fetchAPI", () => ({
  fetchAPI: jest.fn(),
}));

describe("DetailsBanner component", () => {
  it("should renders loading text while data is loading", () => {
    useParams.mockReturnValue({ id: "1" });
    useSelector.mockReturnValue({ movies: { url: { backdrop: "" } } });
    fetchAPI.mockReturnValue({});
    render(<DetailsBanner />);
    expect(screen.getByText("Loading ...")).toBeInTheDocument();
  });

  it("should renders movie details when data is available", async () => {
    useParams.mockReturnValue({ id: "1" });
    useSelector.mockReturnValue({
      movies: { url: { backdrop: "https://test.com/" } },
    });
    const movieDetailData = {
      id: 1,
      name: "Test Movie",
      tagline: "A test movie",
      release_date: "2023-08-20",
      runtime: 120,
      vote_average: 8.5,
      poster_path: "/poster.jpg",
      overview: "This is a test movie.",
    };
    fetchAPI.mockReturnValue(movieDetailData);
    render(<DetailsBanner />);
    await waitFor(() => {
      expect(screen.getByTestId("rating")).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByTestId("desc")).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByTestId("releasedate")).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByTestId("title")).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByTestId("runtime")).toBeInTheDocument();
    });
  });
});
