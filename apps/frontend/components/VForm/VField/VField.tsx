import { VFieldProps, FieldTypes } from "../index";
import { Wrapper, Label, Field, Error } from "./VField.styled";

export const VField = ({
  name,
  title,
  type,
  onChange,
  value,
  errorMessage,
  attributes = {},
  Component,
}: VFieldProps) => {
  const commonAttributes = {
    id: `${name}-input`,
    type: "text",
    placeholder: title,
    onChange: (e: any) => onChange(name, e.target.value),
    value: value,
    ...attributes,
  };

  return (
    <Wrapper>
      <Label htmlFor={`${name}-input`}>{title}</Label>
      <Field hasError={!!errorMessage}>
        {FieldTypes.Text === type && <input {...commonAttributes} />}
        {FieldTypes.Component === type && <Component {...commonAttributes} />}
      </Field>
      <Error>{errorMessage}</Error>
    </Wrapper>
  );
};
