// src/components/Header.test.js
import React from "react";
import { render } from "@testing-library/react";
import Header from "./header";

test("renders header correctly", () => {
  const { getByText } = render(<Header />);
  expect(getByText(/Home/i)).toBeInTheDocument();
  expect(getByText(/Cart/i)).toBeInTheDocument();
});
