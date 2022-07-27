import { object } from "yup";

import * as auth from "./auth";

export const rules = {
  auth,
};

export const validate = async (rules, form) => {
  let isValid = true;
  let errors = {};

  const validator = object().shape(rules);

  await validator.validate(form, { abortEarly: false }).catch((e) => {
    e.inner.forEach((error) => {
      if (error.path) errors[error.path] = error.errors[0] || "";
    });
    isValid = false;
  });

  return { isValid, errors };
};
