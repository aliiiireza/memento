import React from "react";

import { ObjectSchema } from "yup";
export interface VFormProps {
  schema: SchemaInterface;
  values?: FormInterface;
  onSubmit: OnFormSubmit;
}

export interface VFieldProps extends FieldInterface {
  onChange: any;
  value: any;
  errorMessage?: string;
}

export type OnFormSubmit = (form: FormInterface) => void;

export interface SchemaInterface {
  fields: Array<FieldInterface>;
  rules?: FormInterface;
}

export interface FieldInterface {
  title: string;
  name: string;
  type: FieldTypes;
  rules?: any;
  attributes?: {
    [key: string]: any;
  };
  Component?: React.ReactNode | any;
}

export const enum FieldTypes {
  Text,
  Component,
}

export interface FormInterface {
  [key: string]: any;
}
export interface ErrorsInterface {
  [key: string]: string;
}
