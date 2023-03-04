import { ReasonSelect } from "./confessionForm.types";

export const SELECTOPTIONS = [
  { value: "NOT_SELECTED", display: "-Select one reason-" },
  { value: "rudeness", display: "Mild Public Rudeness" },
  { value: "lift", display: "Speaking in a Lift" },
  { value: "vegetables", display: "Not Eating Your Vegetables" },
  { value: "united", display: "Supporting Manchester United" },
  { value: "just-talk", display: "I just want to talk" },
] as { value: ReasonSelect; display: string }[];
