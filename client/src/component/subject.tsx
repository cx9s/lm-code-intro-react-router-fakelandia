import { useState } from "react";

interface SubjectProps {
  subject: string;
  setSubject: (subject: string) => void;
}

const validSubject = (value: string) => {
  return /^[a-zA-Z]{1,50}$/.test(value);
};

const Subject: React.FC<SubjectProps> = ({ subject, setSubject }) => {
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  const onChangeHandler = (value: string) => {
    const validated = validSubject(value);
    const message = validated
      ? undefined
      : "Must be between 1 and 50 characters.";
    setErrorMessage(message);
    setSubject(value);
  };

  return (
    <div>
      <label htmlFor="subject">Subject: </label>
      <input
        id="subject"
        type="text"
        placeholder="Please input subject"
        value={subject}
        onChange={(e) => {
          onChangeHandler(e.target.value);
        }}
      />
      <span className="error">{errorMessage}</span>
    </div>
  );
};

export default Subject;
