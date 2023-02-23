import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MisdemeanourDataType,
  MisdemeanourKind,
} from "../../types/misdemeanours.types";

export interface ConfessionContextType {
  confessions: MisdemeanourDataType[];
  confess: (mis: MisdemeanourKind) => void;
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

  const confess = async (mis: MisdemeanourKind) => {
    // construct a fake data
    try {
      const response = await fetch(`http://localhost:8080/api/misdemeanours/1`);
      const json = await response.json();
      json.misdemeanours[0].misdemeanour = mis;
      await setconfessions(json.misdemeanours);
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
