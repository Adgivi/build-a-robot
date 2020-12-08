import { render } from "@testing-library/vue";
import "@testing-library/jest-dom";

import RobotPage from "@/components/RobotPage.vue";

describe("RobotPage.vue", () => {
  it("doesn't crash", () => {
    render(RobotPage);
    expect.anything();
  });

  it("renders robot image", () => {
    const { getByAltText } = render(RobotPage);
    expect(getByAltText("robot")).toBeVisible();
  });
});
