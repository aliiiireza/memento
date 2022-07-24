import React from "react";
import { render, screen } from "@testing-library/react";
import { LoginForm } from "./LoginForm";

describe("Home", () => {
  it("renders a heading", () => {
    render(<LoginForm />);

    const heading = screen.getByRole("heading", {
      name: /Login/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
