import { useState } from "react";
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

const defaultFormData: ConfessionFormData = {
  subject: "",
  reason: "NOT_SELECTED",
  details: "",
};

const Confession: React.FC = () => {
  const [formData, setFormData] = useState<ConfessionFormData>(defaultFormData);
  const [submittable, setSubmittable] = useState<boolean>(true);

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

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <p className="confession__p">
        It's very difficult to catch people committing misdemeanours, so we
        appreciate it when citizens confess to us directly.
      </p>
      <p className="confession__p">
        However, if you're just having a hard day and need to vent then you're
        welcome to contact us here too. Up to you!
      </p>
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
            { value: "vegetables", display: "Speaking in a Lift" },
            { value: "lift", display: "Not Eating Your Vegetables" },
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
