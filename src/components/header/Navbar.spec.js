import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Navbar from "./Navbar";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("Navbar component", () => {
  it("should render", () => {
    render(<Navbar />);
  });

  it("should updates input value on typing", () => {
    render(<Navbar />);

    const searchInput = screen.getByPlaceholderText("Search...");
    fireEvent.change(searchInput, { target: { value: "test" } });
    expect(searchInput.value).toBe("test");
  });

  it("should navigates to search page on search button click", () => {
    const mockNavigate = jest.fn();
    require("react-router-dom").useNavigate.mockReturnValue(mockNavigate);
    render(<Navbar />);

    const searchInput = screen.getByPlaceholderText("Search...");
    const searchButton = screen.getByRole("button");
    fireEvent.change(searchInput, { target: { value: "test" } });
    fireEvent.click(searchButton);
    expect(mockNavigate).toHaveBeenCalledWith("/search/test");
  });

  it("should navigates to home page on home icon click", () => {
    const mockNavigate = jest.fn();
    require("react-router-dom").useNavigate.mockReturnValue(mockNavigate);
    render(<Navbar />);
    const homeIcon = screen.getByTestId("home-icon");
    fireEvent.click(homeIcon);
    expect(mockNavigate).toHaveBeenCalledWith("/");
  });
});
