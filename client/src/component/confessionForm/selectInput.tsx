import React, { useState } from "react";
import ErrorMessage from "./errorMessage";
import {
  ReasonSelect,
  ConfessionFormChangeHandler,
  ConfessionFormData,
} from "./confessionForm.types";

export interface SelectProps {
  id: string;
  name: keyof ConfessionFormData;
  options: {
    value: ReasonSelect;
    display: string;
  }[];
  label: string;
  value: string;
  onChangeHandler: ConfessionFormChangeHandler;
  validate: (value: string) => string[];
}

export const SelectInput: React.FC<SelectProps> = ({
  id,
  name,
  options,
  label,
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
        <select
          id={id}
          value={value}
          onChange={(e) => {
            setTouched(true);
            onChangeHandler(e.target.value, name);
          }}
        >
          {options.map((o, index) => (
            <option key={`select-${name}-o-${index}`} value={o.value}>
              {o.display}
            </option>
          ))}
        </select>
      </div>
      {touched && <ErrorMessage name={name} messages={validationErrors} />}
    </>
  );
};
