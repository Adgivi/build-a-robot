import { render } from "@testing-library/vue";
import "@testing-library/jest-dom";

import RobotPage from "@/pages/Robot.page";

describe("RobotPage.vue", () => {
  it("renders robot image", () => {
    const { getByAltText } = render(RobotPage);
    expect(getByAltText("robot")).toBeVisible();
  });
});
