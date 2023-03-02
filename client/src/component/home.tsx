import { useState, useEffect, useContext } from "react";
import { ConfessionContext } from "./confessionContext";
import HomeImage from "./home/homeImage";
import MisChart from "./home/misChart";
import { fetchMisdemeanours } from "./misdemeanour/fetchMisdemeanours";
import {
  MisdemeanourDataType,
  MisdemeanourKind,
} from "./misdemeanour/misdemeanours.types";

const Home: React.FC = () => {
  const [misKinds, setMisKinds] = useState<any>();
  const gotMisKinds = { rudeness: 0, vegetables: 0, lift: 0, united: 0 };

  const { confessions } = useContext(ConfessionContext);

  const getMisData = async () => {
    try {
      const gotMis: MisdemeanourDataType[] = await fetchMisdemeanours(
        "http://localhost:8080/api/misdemeanours/100"
      );
      if (gotMis) {
        for (const key in gotMisKinds) {
          gotMisKinds[key as MisdemeanourKind] = gotMis.filter(
            (mis) => mis.misdemeanour === key
          ).length;
        }
        setMisKinds(gotMisKinds);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getMisData();
  }, []);

  return (
    <>
      <HomeImage />
      <div className="homeContainer">
        <div className="confessStats">
          <h2>Confessions today</h2>
          <p className="confessStats__p">{confessions.length}</p>
        </div>
        <div className="misChart">
          <h2>Misdemeanour kinds</h2>
          {misKinds && (
            <MisChart
              rudeness={misKinds.rudeness}
              vegetables={misKinds.vegetables}
              lift={misKinds.lift}
              united={misKinds.united}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
