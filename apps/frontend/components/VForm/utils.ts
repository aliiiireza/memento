import { ErrorsInterface } from "./VForm.types";
import { ValidationError } from "yup";

/*
extract yup validation rules from fields and create yup validation schema
 */
export const extractRulesFromFields = (fields: any) => {
  const rules: any = {};
  fields.forEach((field: any) => {
    if (field.rules) rules[field.name] = field.rules;
  });
  return rules;
};

export const extractErrorsFromYup = (e: ValidationError) => {
  let errors: ErrorsInterface = {};
  e.inner.forEach((error: ValidationError) => {
    if (error.path) errors[error.path] = error.errors[0] || "";
  });
  return errors;
};
