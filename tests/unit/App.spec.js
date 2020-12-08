import { render } from "@testing-library/vue";
import "@testing-library/jest-dom";

import App from "@/App";

describe("App.vue", () => {
  it("doesn't crash", () => {
    render(App);
    expect.anything();
  });
});
