import type { NextPage } from "next";
import {
  VForm,
  SchemaInterface,
  FieldTypes,
  OnFormSubmit,
} from "../components/VForm";
import * as yup from "yup";

const schema: SchemaInterface = {
  fields: [
    {
      name: "username",
      title: "Username",
      type: FieldTypes.Text,
      rules: yup.string().required(),
    },
    {
      name: "password",
      title: "Password",
      type: FieldTypes.Text,
      rules: yup.string().required(),
    },
  ],
};

const onSubmit: OnFormSubmit = (form, { setLoading }) => {
  setTimeout(() => {
    console.log(form);
    setLoading(false);
  }, 1000);
};

const Login: NextPage = () => {
  return (
    <div>
      <h1>Login</h1>
      <VForm schema={schema} onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
