import { useEffect, useState, useContext } from "react";
import {
  MisdemeanourKind,
  MisdemeanourDataType,
} from "./misdemeanour/misdemeanours.types";
import MisList from "./misdemeanour/misList";
import MisSelect from "./misdemeanour/misSelect";
import { ConfessionContext, ConfessionContextType } from "./confessionContext";

const Misdemeanour: React.FC = () => {
  const fetchUrl = "http://localhost:8080/api/misdemeanours/10";
  const [misSelect, setMisSelect] = useState<MisdemeanourKind | "">("");
  const [misdemeanours, setMisdemeanour] = useState<MisdemeanourDataType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { confessions } = useContext(
    ConfessionContext
  ) as ConfessionContextType;

  const fetchMisdemeanours = async (url: string) => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      const newMis = [...confessions, ...json.misdemeanours];
      setMisdemeanour(newMis);
      setIsLoading(false);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchMisdemeanours(fetchUrl);
  }, []);

  return (
    <>
      {isLoading && (
        <div className="isLoading">
          <div className="container">
            <div className="item item-1">rudeness</div>
            <div className="item item-2">vegetables</div>
            <div className="item item-3">lift</div>
            <div className="item item-4">united</div>
          </div>
        </div>
      )}
      {!isLoading && (
        <>
          <MisSelect setMis={setMisSelect} />
          <MisList
            misList={misdemeanours.filter((mis) =>
              mis.misdemeanour.includes(misSelect)
            )}
          />
        </>
      )}
    </>
  );
};

export default Misdemeanour;
