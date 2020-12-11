import { render } from "@testing-library/vue";
import "@testing-library/jest-dom";

import RobotBuilder from "@/components/RobotBuilder.component";

describe("RobotBuilder component", () => {
  it("renders all robot parts", () => {
    const { getByAltText } = render(RobotBuilder);

    ["head", "center", "left", "bottom", "right"].forEach(part =>
      expect(getByAltText(`${part} robot part`)).toBeVisible()
    );
  });
});
