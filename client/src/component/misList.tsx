import {
  MisdemeanourDataType,
  MisdemeanourIcons,
} from "../../types/misdemeanours.types";

const MisList: React.FC<{ misList: MisdemeanourDataType[] }> = ({
  misList,
}) => {
  return (
    <table className="misList">
      <thead>
        <tr className="misList__thead">
          <th>Citizen ID</th>
          <th>Date</th>
          <th>Misdemeanour</th>
          <th>Punishment idea</th>
        </tr>
      </thead>
      <tbody>
        {misList.map((mis, index) => {
          const punishUrl = `https://picsum.photos/50/50?${mis.citizenId}`;
          return (
            <tr
              className={
                index % 2 === 0
                  ? "misList__tr misList__tr--even"
                  : "misList__tr misList__tr--odd"
              }
              key={mis.citizenId}
            >
              <td className="misList__td">{mis.citizenId}</td>
              <td className="misList__td">{mis.date}</td>
              <td className="misList__td">
                {mis.misdemeanour} {MisdemeanourIcons[mis.misdemeanour]}
              </td>
              <td className="misList__td">
                <img className="misList__punish" src={punishUrl} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default MisList;
