import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import { useParams } from "react-router-dom";
import SearchResultPage from "./SearchResultPage";
import { fetchAPI } from "../../utils/fetchAPI";

jest.mock("react-router-dom", () => ({
  useParams: jest.fn(),
}));

jest.mock("../../utils/fetchAPI", () => ({
  fetchAPI: jest.fn(),
}));

describe("SearchResultPage", () => {
  it("should render loading text while data is loading", () => {
    useParams.mockReturnValue({ query: "test" });
    fetchAPI.mockReturnValue({});

   render(<SearchResultPage />);
    expect(screen.getByText("Loading ...")).toBeInTheDocument();
    expect(screen.getByText("Loading ...")).not.toBeNull()
  });

  it("should not render movie cards when no results are available", async () => {
    useParams.mockReturnValue({ query: "test" });
    const emptySearchResults = {
      results: [],
    };
    fetchAPI.mockResolvedValue(emptySearchResults);
    render(<SearchResultPage />);
    await waitFor(() => {
      expect(screen.queryByText("Latest Upcoming Movies")).toBeNull();
    });
  });
});
