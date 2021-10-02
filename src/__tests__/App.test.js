import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

// Describe is a test suite
describe("Testing app functionalities", () => {
// It is an individual test
  it("renders Contact screen", () => {
    const { getByText } = render(<App />);
    const contacts = getByText("Contacts");
    expect(contacts).toBeVisible();
  });
});