import { MisdemeanourKind } from "../../../types/misdemeanours.types";

export type ReasonSelect = "NOT_SELECTED" | MisdemeanourKind;

export type ConfessionFormData = {
  subject: string;
  reason: ReasonSelect;
  details: string;
};

export type ConfessionFormChangeHandler = <
  TKey extends keyof ConfessionFormData
>(
  value: ConfessionFormData[TKey],
  name: TKey
) => void;
