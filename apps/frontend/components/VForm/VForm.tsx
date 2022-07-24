import { useState } from "react";
import { object, ValidationError, ObjectSchema } from "yup";
import { VRow, VCol } from "../Layout";
import {
  VField,
  VFormProps,
  ErrorsInterface,
  FormInterface,
  FieldInterface,
  extractRulesFromFields,
  extractErrorsFromYup,
} from "./index";

export const VForm = ({ schema, onSubmit, values = {} }: VFormProps) => {
  const [form, setForm] = useState(values as FormInterface);
  const [errors, setErrors] = useState({} as ErrorsInterface);
  const [loading, setLoading] = useState(false as boolean);

  let yupSchema: ObjectSchema<FormInterface> = object().shape(
    extractRulesFromFields(schema.fields)
  );

  const onFieldChange = (key: string, value: any) => {
    setForm({ ...form, [key]: value });
  };

  const onFormSubmit = () => {
    setErrors({});
    yupSchema
      .validate(form, { abortEarly: false })
      .then(async () => {
        setLoading(true);
        try {
          // set server side errors
          const { errors }: any = await onSubmit(form);
          if (errors) setErrors(errors);
        } catch (error: any) {
        } finally {
          setLoading(false);
        }
      })
      .catch((e: ValidationError) => {
        // set client side errors
        setErrors(extractErrorsFromYup(e));
      });
  };

  return (
    <div>
      <VRow>
        {schema.fields.map((field) => (
          <VCol key={field.name}>
            <VField
              {...field}
              onChange={onFieldChange}
              value={form[field.name]}
              errorMessage={errors[field.name] || ""}
            />
          </VCol>
        ))}

        <VCol>
          <button onClick={onFormSubmit}>
            {loading ? "submitting..." : "submit"}
          </button>
        </VCol>
      </VRow>
    </div>
  );
};
