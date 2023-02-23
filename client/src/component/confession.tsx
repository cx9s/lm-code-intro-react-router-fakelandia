import { useState, useContext } from "react";
import { TextInput } from "./confessionForm/textInput";
import {
  ConfessionFormChangeHandler,
  ConfessionFormData,
} from "./confessionForm/confessionForm.types";
import {
  validateDetails,
  validateReason,
  validateSubject,
  validateAll,
} from "./confessionForm/validateForm";
import { SelectInput } from "./confessionForm/selectInput";
import FormHead from "./confessionForm/formHead";
import { useNavigate } from "react-router-dom";
import { ConfessionContext, ConfessionContextType } from "./confessionContext";
import { MisdemeanourKind } from "../../types/misdemeanours.types";

const defaultFormData: ConfessionFormData = {
  subject: "",
  reason: "NOT_SELECTED",
  details: "",
};

const Confession: React.FC = () => {
  const [formData, setFormData] = useState<ConfessionFormData>(defaultFormData);
  const [submittable, setSubmittable] = useState<boolean>(true);
  const [responseMessage, setResponseMessage] = useState<string>("");

  const { confess } = useContext(ConfessionContext) as ConfessionContextType;

  const navigate = useNavigate();

  const onChangeHandler: ConfessionFormChangeHandler = <
    TKey extends keyof ConfessionFormData
  >(
    value: ConfessionFormData[TKey],
    name: TKey
  ) => {
    const newData: ConfessionFormData = { ...formData };
    newData[name] = value;
    setFormData(newData);
    setSubmittable(validateAll(newData));
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/confess", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const { success, justTalked, message } = await response.json();
      if (!success) {
        setResponseMessage(message);
      } else if (success && justTalked) {
        setResponseMessage(message);
      } else if (success && !justTalked) {
        confess(formData.reason as MisdemeanourKind);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <FormHead />
      {responseMessage !== "" && <h2 className="message">{responseMessage}</h2>}
      <form
        className="confessionForm"
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <TextInput
          id="subject"
          type="text"
          name="subject"
          value={formData.subject}
          placeholder="Enter subject"
          label="Subject"
          validate={validateSubject}
          onChangeHandler={onChangeHandler}
        />
        <SelectInput
          id="reason"
          name="reason"
          value={formData.reason ?? ""}
          label="Reason"
          validate={validateReason}
          onChangeHandler={onChangeHandler}
          options={[
            { value: "NOT_SELECTED", display: "-Select one reason-" },
            { value: "rudeness", display: "Mild Public Rudeness" },
            { value: "lift", display: "Speaking in a Lift" },
            { value: "vegetables", display: "Not Eating Your Vegetables" },
            { value: "united", display: "Supporting Manchester United" },
            { value: "just-talk", display: "I just want to talk" },
          ]}
        />
        <TextInput
          id="details"
          type="textarea"
          name="details"
          value={formData.details}
          placeholder="Enter details"
          label="Details"
          validate={validateDetails}
          onChangeHandler={onChangeHandler}
        />
        <div className="confessionForm_item">
          <button type="submit" disabled={submittable}>
            Confess
          </button>
        </div>
      </form>
    </>
  );
};

export default Confession;
