import React, { useState } from "react";
import ErrorMessage from "./errorMessage";
import {
  ConfessionFormChangeHandler,
  ConfessionFormData,
} from "./confessionForm.types";

export interface TextInputProps {
  id: string;
  name: keyof ConfessionFormData;
  type: "text" | "textarea";
  label: string;
  placeholder?: string;
  value: string;
  onChangeHandler: ConfessionFormChangeHandler;
  validate: (value: string) => string[];
}

export const TextInput: React.FC<TextInputProps> = ({
  id,
  name,
  type,
  label,
  placeholder,
  onChangeHandler,
  value,
  validate,
}) => {
  const [touched, setTouched] = useState(false);

  const validationErrors = validate(value);

  return (
    <>
      <div className="confessionForm_item">
        <label htmlFor={name}>{label}: </label>
        {type === "textarea" && (
          <textarea
            id={id}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={(e) => {
              setTouched(true);
              onChangeHandler(e.target.value, name);
            }}
          />
        )}
        {type === "text" && (
          <input
            id={id}
            name={name}
            placeholder={placeholder}
            type={type}
            value={value}
            onChange={(e) => {
              setTouched(true);
              onChangeHandler(e.target.value, name);
            }}
          />
        )}
      </div>
      {touched && <ErrorMessage name={name} messages={validationErrors} />}
    </>
  );
};
