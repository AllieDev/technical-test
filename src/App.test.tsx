import App from "./App";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

describe("#App", () => {
  it("serial test", () => {
    render(<div></div>);
    expect(screen).toMatchSnapshot();
  });
});
