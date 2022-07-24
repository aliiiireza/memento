import type { NextPage } from "next";
import * as yup from "yup";
import {
  VForm,
  SchemaInterface,
  FieldTypes,
  OnFormSubmit,
} from "components/VForm";
import axios from "lib/axios";

const schema: SchemaInterface = {
  fields: [
    {
      name: "email",
      title: "Email",
      type: FieldTypes.Text,
      rules: yup.string().required().email(),
    },
    {
      name: "password",
      title: "Password",
      type: FieldTypes.Text,
      rules: yup.string().required().min(8, "Your password is too short."),
      attributes: {
        type: "password",
      },
    },
    {
      name: "password_confirmation",
      title: "Password Confirmation",
      type: FieldTypes.Text,
      rules: yup
        .string()
        .required()
        .oneOf([yup.ref("password")], "Your passwords do not match."),
      attributes: {
        type: "password",
      },
    },
  ],
};

const onSubmit: OnFormSubmit = async (variables) => {
  try {
    const { data } = await axios.post("auth/register", variables);
    console.log(data);
    return {};
  } catch (error: any) {
    return { errors: error.response.data.errors };
  }
};

const Login: NextPage = () => {
  return (
    <div>
      <h1>Sign up</h1>
      <VForm schema={schema} onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
