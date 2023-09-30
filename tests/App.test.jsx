import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
// import userEvent from "@testing-library/user-event";
import App from "../src/App";

describe("App", () => {
  it("has navigation links", () => {
    render(<App />);
    // const user = userEvent.setup();
    expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Store" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Cart" })).toBeInTheDocument();
  });
});
