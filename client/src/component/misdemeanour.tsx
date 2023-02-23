import { useEffect, useState, useContext } from "react";
import {
  MisdemeanourKind,
  MisdemeanourDataType,
} from "../../types/misdemeanours.types";
import MisList from "./misList";
import MisSelect from "./misSelect";
import { ConfessionContext, ConfessionContextType } from "./confessionContext";

const Misdemeanour: React.FC = () => {
  const fetchUrl = "http://localhost:8080/api/misdemeanours/10";
  const [misSelect, setMisSelect] = useState<MisdemeanourKind | "">("");
  const [misdemeanours, setMisdemeanour] = useState<MisdemeanourDataType[]>([]);

  const { confessions } = useContext(
    ConfessionContext
  ) as ConfessionContextType;

  const fetchMisdemeanours = async (url: string) => {
    if (confessions.length !== 0) {
      setMisdemeanour(confessions);
    } else {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setMisdemeanour(json.misdemeanours);
      } catch (e) {
        console.error(e);
      }
    }
  };

  useEffect(() => {
    fetchMisdemeanours(fetchUrl);
  }, []);

  return (
    <>
      <MisSelect setMis={setMisSelect} />
      <MisList
        misList={misdemeanours.filter((mis) =>
          mis.misdemeanour.includes(misSelect)
        )}
      />
    </>
  );
};

export default Misdemeanour;
