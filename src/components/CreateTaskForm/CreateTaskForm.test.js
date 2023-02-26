import { fireEvent, render, screen } from "@testing-library/react";
import { CreateTaskForm } from "./CreateTaskForm";

describe("CreateTaskForm", () => {
  const handleCreateNewTaskMock = jest.fn();
  it("renders correctly", () => {
    render(<CreateTaskForm />);
    expect(screen.getByTestId("form")).toBeDefined();
  });

  it("submit form after button click", () => {
    render(<CreateTaskForm handleCreateNewTask={handleCreateNewTaskMock} />);
    fireEvent.click(screen.getByText("Add new task"));
    expect(handleCreateNewTaskMock).toBeCalledTimes(1);
  });

  it("submits form with proper values", () => {
    render(<CreateTaskForm handleCreateNewTask={handleCreateNewTaskMock} />);
    const expectedText = "test todo";
    const expectedDate = "11-02-2022";

    fireEvent.change(screen.getByLabelText("Task"), {
      target: { value: expectedText },
    });
    fireEvent.change(screen.getByLabelText("Date"), {
      target: { value: "2022-02-11" },
    });

    fireEvent.click(screen.getByText("Add new task"));
    expect(handleCreateNewTaskMock).toBeCalledWith({
      taskName: expectedText,
      taskDate: expectedDate,
    });
  });
});
