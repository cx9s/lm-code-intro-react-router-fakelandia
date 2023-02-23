import { ConfessionFormData } from "./confessionForm.types";
import {
  SUBJECT_MIN_LENGTH,
  SUBJECT_MAX_LENGTH,
  DETAILS_MIN_LENGTH,
  DETAILS_MAX_LENGTH,
} from "./validationConstants";
import {
  maxLength,
  minLength,
  mustBeSelected,
  ValidationFunction,
} from "./validationRules";

const apply = (rules: ValidationFunction[], value: string) => {
  return rules.map((r) => r(value)).filter(Boolean) as string[];
};

export const validateSubject: (value: string) => string[] = (value) => {
  const rules = [minLength(SUBJECT_MIN_LENGTH), maxLength(SUBJECT_MAX_LENGTH)];

  return apply(rules, value);
};

export const validateReason: (value: string) => string[] = (value) => {
  const rules = [mustBeSelected()];

  return apply(rules, value);
};

export const validateDetails: (value: string) => string[] = (value) => {
  const rules = [minLength(DETAILS_MIN_LENGTH), maxLength(DETAILS_MAX_LENGTH)];

  return apply(rules, value);
};

export const validateAll: (formData: ConfessionFormData) => boolean = (
  formData
) => {
  const subject = validateSubject(formData.subject).length === 0;
  const reason = validateReason(formData.reason).length === 0;
  const details = validateDetails(formData.details).length === 0;

  return !(subject && reason && details);
};
