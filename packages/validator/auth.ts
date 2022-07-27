import * as yup from "yup";

export const register = {
  email: yup.string().required().email(),
  password: yup.string().required().min(8, "Your password is too short."),
  password_confirmation: yup
    .string()
    .required()
    .oneOf([yup.ref("password")], "Your passwords do not match."),
};
