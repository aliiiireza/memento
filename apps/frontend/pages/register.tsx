import type { NextPage } from "next";
import * as yup from "yup";
import {
  VForm,
  SchemaInterface,
  FieldTypes,
  OnFormSubmit,
} from "components/VForm";
import axios from "lib/axios";
import { rules } from "@memento/validator";
const schema: SchemaInterface = {
  rules: rules.auth.register,
  fields: [
    {
      name: "email",
      title: "Email",
      type: FieldTypes.Text,
    },
    {
      name: "password",
      title: "Password",
      type: FieldTypes.Text,
      attributes: {
        type: "password",
      },
    },
    {
      name: "password_confirmation",
      title: "Password Confirmation",
      type: FieldTypes.Text,
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
