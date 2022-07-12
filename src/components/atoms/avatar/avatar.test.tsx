import { fireEvent } from "@testing-library/react";
import setupTest from "../../../utils/test.utils";

import Avatar from "./Avatar";

describe("Avatar interactivty", () => {
  it("runs function that is supplied by onClick prop", () => {
    const mockFunction = jest.fn();
    const { getByRole } = setupTest(
      <Avatar size="small" onClick={mockFunction} />
    );
    fireEvent.click(getByRole("img"));
    expect(mockFunction).toHaveBeenCalled();
  });
});
