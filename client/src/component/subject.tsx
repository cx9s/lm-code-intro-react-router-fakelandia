interface SubjectProps {
  subject: string;
  setSubject: (subject: string) => void;
}

const Subject: React.FC<SubjectProps> = ({ subject, setSubject }) => {
  return (
    <div>
      <label htmlFor="subject">Subject: </label>
      <input
        id="subject"
        type="text"
        placeholder="Please input subject"
        value={subject}
        onChange={(e) => {
          setSubject(e.target.value);
        }}
      />
    </div>
  );
};

export default Subject;
