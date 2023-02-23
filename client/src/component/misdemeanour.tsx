import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  MisdemeanourKind,
  MisdemeanourDataType,
  MISDEMEANOURS,
} from "../../types/misdemeanours.types";
import MisList from "./misList";
import MisSelect from "./misSelect";

const Misdemeanour: React.FC = () => {
  const fetchUrl = "http://localhost:8080/api/misdemeanours/";
  const [misSelect, setMisSelect] = useState<MisdemeanourKind | "">("");
  const [misdemeanours, setMisdemeanour] = useState<MisdemeanourDataType[]>([]);

  const param = useParams().misdemeanour as MisdemeanourKind;

  const fetchMisdemeanours = async (number: number) => {
    try {
      if (MISDEMEANOURS.includes(param)) {
        const response = await fetch(`${fetchUrl}1`);
        const json = await response.json();
        json.misdemeanours[0].misdemeanour = param;
        setMisdemeanour(json.misdemeanours);
      } else {
        const response = await fetch(fetchUrl + number);
        const json = await response.json();
        setMisdemeanour(json.misdemeanours);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchMisdemeanours(10);
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
