import App from "./App";
import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { store } from "./store";
import { Provider } from "react-redux";
import { setLoading } from "./slice";

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
  it("should display a loading", () => {
    const { container } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(container.textContent).to.include("Loading");
  });
  it("should not display a loading", () => {
    store.dispatch(setLoading(false));
    const { container } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(container.textContent).not.to.include("Loading");
  });
});
