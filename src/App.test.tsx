import App from "./App";
import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { store } from "./store";
import { Provider } from "react-redux";

vi.mock("./components/maps/Map", () => {
  return {
    default: () => <div>Mock Map</div>,
  };
});

describe("#App", () => {
  it("serial test", () => {
    const { container } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(container.textContent).toMatchSnapshot();
  });
});
