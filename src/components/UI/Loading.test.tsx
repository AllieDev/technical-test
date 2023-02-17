import Loading from "./Loading";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

describe("Loading", () => {
  it("should render", () => {
    const { container } = render(<Loading />);
    expect(container.textContent).toMatchSnapshot();
  });
});
