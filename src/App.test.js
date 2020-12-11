import { render } from "@testing-library/vue";
import "@testing-library/jest-dom";

import App from "@/App.component";

describe("App.vue", () => {
  it("doesn't throw an error", () => {
    render(App);
    expect.anything();
  });
});
