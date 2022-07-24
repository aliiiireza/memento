import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { VForm, SchemaInterface, FieldTypes } from "./index";
import * as yup from "yup";

describe("VForm", () => {
  const schema: SchemaInterface = {
    fields: [
      {
        type: FieldTypes.Text,
        title: "Name",
        name: "name",
        rules: yup.string().required(),
      },
    ],
  };

  it("should render schema ", () => {
    const onSubmit = jest.fn();
    render(<VForm schema={schema} onSubmit={onSubmit} />);
    const input = screen.getByLabelText("Name");
    expect(input).toBeInTheDocument();
  });

  it("should validate form and prevent submit", async () => {
    const onSubmit = jest.fn();
    render(<VForm schema={schema} onSubmit={onSubmit} />);
    fireEvent.click(screen.getByText(/submit/i));
    await waitFor(() => {
      expect(screen.getByText(/name is a required field/i)).toBeInTheDocument();
      expect(onSubmit).toBeCalledTimes(0);
    });
  });

  it("should called submit", async () => {
    const onSubmit = jest.fn();
    render(<VForm schema={schema} onSubmit={onSubmit} />);

    fireEvent.change(screen.getByLabelText(/Name/i), {
      target: { value: "memento" },
    });
    fireEvent.click(screen.getByText(/submit/i));
    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalled();
    });
  });
});
