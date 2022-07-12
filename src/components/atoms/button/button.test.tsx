import userEvent from "@testing-library/user-event";
import setupTest from "../../../utils/test.utils";
import Button from "./Button";

describe("Basic button", () => {
  it("calls function if it is button", () => {
    const mockFunction = jest.fn();
    const { getByRole } = setupTest(
      <Button appearance="primary" onClick={mockFunction}>
        Click Me!
      </Button>
    );
    userEvent.click(getByRole("button"));
    expect(mockFunction).toHaveBeenCalled();
  });
  it("shows loading status", () => {
    const { getByText } = setupTest(
      <Button appearance="primary" isLoading>
        Click Me!
      </Button>
    );
    expect(getByText(/loading.../i)).toBeTruthy();
  });

  it("shows disabled status", () => {
    const { getByRole } = setupTest(
      <Button appearance="primary" isDisabled>
        Click Me!
      </Button>
    );
    expect(getByRole("button")).toHaveStyle("cursor: not-allowed;");
  });
});
