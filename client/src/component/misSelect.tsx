import { MisdemeanourKind } from "../../types/misdemeanours.types";

const MisSelect: React.FC<{
  setMis: (value: MisdemeanourKind | "") => void;
}> = ({ setMis }) => {
  return (
    <select
      className="misSelect"
      name="misSelect"
      onChange={(e) => setMis(e.target.value as MisdemeanourKind | "")}
    >
      <option value="">All</option>
      <option value="rudeness">Rudeness</option>
      <option value="vegetables">Vegetables</option>
      <option value="lift">Lift</option>
      <option value="united">United</option>
    </select>
  );
};

export default MisSelect;
