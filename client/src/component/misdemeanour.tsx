import { useEffect, useState } from "react";
import { MisdemeanourDataType } from "../../types/misdemeanours.types";
import MisList from "./misList";

const Misdemeanour: React.FC = () => {
  const fetchUrl = "http://localhost:8080/api/misdemeanours/10";
  const [misdemeanours, setMisdemeanour] = useState<MisdemeanourDataType[]>([]);

  const fetchMisdemeanours = async (url: string) => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setMisdemeanour(json.misdemeanours);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchMisdemeanours(fetchUrl);
  }, []);

  return (
    <div>
      <MisList misList={misdemeanours} />
    </div>
  );
};

export default Misdemeanour;
