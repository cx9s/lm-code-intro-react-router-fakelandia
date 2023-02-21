import { useState } from "react";
import Subject from "./subject";

const Confession: React.FC = () => {
  const [subject, setSubject] = useState<string>("");

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
      <form className="form">
        <Subject subject={subject} setSubject={setSubject} />
      </form>
    </>
  );
};

export default Confession;
