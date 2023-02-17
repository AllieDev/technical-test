import Footer from "./Footer";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

describe("Footer", () => {
  it("should render", () => {
    const { container } = render(<Footer />);
    expect(container.textContent).toMatchSnapshot();
  });
});
