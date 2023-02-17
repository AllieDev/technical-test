import Header from "./Header";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

describe("Header", () => {
  it("should render", () => {
    const { container } = render(<Header />);
    expect(container.textContent).toMatchSnapshot();
  });
});
