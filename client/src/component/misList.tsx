import {
  MisdemeanourDataType,
  MisdemeanourIcons,
} from "../../types/misdemeanours.types";

const MisList: React.FC<{ misList: MisdemeanourDataType[] }> = ({
  misList,
}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Citizen ID</th>
          <th>Date</th>
          <th>Misdemeanour</th>
          <th>Punishment idea</th>
        </tr>
      </thead>
      <tbody>
        {misList.map((mis) => {
          const iconUrl = `https://picsum.photos/50/50?${mis.citizenId}`;
          return (
            <tr key={mis.citizenId}>
              <td>{mis.citizenId}</td>
              <td>{mis.date}</td>
              <td>
                {mis.misdemeanour} {MisdemeanourIcons[mis.misdemeanour]}
              </td>
              <td>
                <img src={iconUrl} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default MisList;
