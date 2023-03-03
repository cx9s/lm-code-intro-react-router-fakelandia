import { Chart } from "react-google-charts";

export interface MisChartProps {
  rudeness: number;
  vegetables: number;
  lift: number;
  united: number;
}

const MisChart: React.FC<MisChartProps> = ({
  rudeness = 0,
  vegetables = 0,
  lift = 0,
  united = 0,
}) => {
  const data = [
    ["Misdemeanour kind", "numbers in total"],
    ["Rudeness", rudeness],
    ["Vegetables", vegetables],
    ["Lift", lift],
    ["United", united],
  ];

  const total = rudeness + vegetables + lift + united;

  const options = {
    title: `Misdemeanours: ${total}`,
    height: 500,
    colors: ["#fc891c", "#1a1a1a", "#008842", "#c70101"],
  };

  return <Chart chartType="PieChart" data={data} options={options} />;
};

export default MisChart;
