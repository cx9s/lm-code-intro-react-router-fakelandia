interface SubjectProps {
  subject: string;
}

const Subject: React.FC<SubjectProps> = ({ subject }) => {
  return (
    <div>
      <label htmlFor="subject">Subject: </label>
      <input
        id="subject"
        type="text"
        placeholder="Please input subject"
        value={subject}
      />
    </div>
  );
};

export default Subject;
