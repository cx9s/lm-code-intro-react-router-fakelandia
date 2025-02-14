import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MisdemeanourDataType } from "./misdemeanour/misdemeanours.types";
import { ConfessionFormData } from "./confessionForm/confessionForm.types";

export interface ConfessionContextType {
  confessions: MisdemeanourDataType[];
  confess: (confession: ConfessionFormData) => void;
}

interface ConfessionProviderProps {
  children: React.ReactNode;
}

// export ConfessionContext
export const ConfessionContext = React.createContext<ConfessionContextType>({
  confessions: [],
  confess: () => {},
});

// ConfessionProvider
const ConfessionProvider: React.FC<ConfessionProviderProps> = ({
  children,
}) => {
  const [confessions, setconfessions] = useState<MisdemeanourDataType[]>([]);
  const navigate = useNavigate();

  const confess = async (confession: ConfessionFormData) => {
    // construct a fake data add into confessions
    try {
      const response = await fetch(`http://localhost:8080/api/misdemeanours/1`);
      const json = await response.json();
      json.misdemeanours[0].subject = confession.subject;
      json.misdemeanours[0].misdemeanour = confession.reason;
      json.misdemeanours[0].details = confession.details;
      await setconfessions([...confessions, json.misdemeanours[0]]);
      navigate(`/misdemeanour`);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <ConfessionContext.Provider value={{ confessions, confess }}>
        {children}
      </ConfessionContext.Provider>
    </>
  );
};

export default ConfessionProvider;
