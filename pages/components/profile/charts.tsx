import { profileIcons } from "../../../public/constants";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Pie,
  PieChart,
  Cell,
  Tooltip,
  Legend,
  BarChart,
  Bar,
} from "recharts";

const totalCashData = [
  { x: "A", y: 10 },
  { x: "B", y: 40 },
  { x: "C", y: 70 },
  { x: "D", y: 100 },
];

const deliveryData = [
  { x: "A", y: 100 },
  { x: "B", y: 70 },
  { x: "C", y: 40 },
  { x: "D", y: 10 },
];

export const RenderTotalCash = () => {
  return (
    <BarChart width={50} height={30} data={totalCashData}>
      {/* <XAxis dataKey="x" />
      <YAxis /> */}
      {/* <CartesianGrid stroke="#ccc" strokeDasharray="5 5" /> */}
      {/* <Tooltip />
      <Legend /> */}
      <Bar dataKey="y" fill="#27D02B" />
    </BarChart>
  );
};

export const RenderDelivery = () => {
  return (
    <BarChart width={50} height={30} data={deliveryData}>
      {/* <XAxis dataKey="x" />
      <YAxis /> */}
      {/* <CartesianGrid stroke="#ccc" strokeDasharray="5 5" /> */}
      {/* <Tooltip />
      <Legend /> */}
      <Bar dataKey="y" fill="#ED565C" />
    </BarChart>
  );
};

const data = [
  { name: "", "Total Cash": 42000, "Net Sales": 40000, "Delivery Fees": 30000 },
  {
    name: "Week 1",
    "Total Cash": 50000,
    "Net Sales": 28000,
    "Delivery Fees": 34000,
  },
  {
    name: "Week 2",
    "Total Cash": 49500,
    "Net Sales": 22000,
    "Delivery Fees": 26000,
  },
  {
    name: "Week 3",
    "Total Cash": 28000,
    "Net Sales": 46000,
    "Delivery Fees": 26000,
  },
  {
    name: "Week 4",
    "Total Cash": 34000,
    "Net Sales": 45000,
    "Delivery Fees": 40000,
  },
  { name: "", "Total Cash": 49000, "Net Sales": 38000, "Delivery Fees": 32000 },
];

export const RenderLineChart = () => {
  return (
    <ResponsiveContainer width="60%" height={300}>
      <LineChart data={data}>
        <Line type="monotone" dataKey="Net Sales" stroke="#17A21A" />
        <Line type="monotone" dataKey="Total Cash" stroke="#DCC320" />
        <Line type="monotone" dataKey="Delivery Fees" stroke="#CE0C14" />
        <Tooltip />
        <Legend />
        <CartesianGrid
          stroke="#ccc"
          strokeDasharray="2 10"
          strokeDashoffset={5}
        />
        <XAxis dataKey="name" />
        <YAxis type="number" domain={[10000, 60000]} />
      </LineChart>
    </ResponsiveContainer>
  );
};

const pieData = [
  { name: "Net Sales", value: 70, color: "#00FF00" },
  { name: "Total Cash", value: 30, color: "#EDD329" },
];

const COLORS = ["#17A21A", "#EDD329"];

export const RenderPieChart = () => {
  return (
    <PieChart width={100} height={100}>
      <Pie
        data={pieData}
        cx="50%"
        cy="50%"
        labelLine={false}
        // label={renderCustomizedLabel}
        outerRadius={50}
        fill="#8884d8"
        dataKey="value"
      >
        {pieData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export const CircleProgressBar = ({ progress }: any) => {
  const radius = 30;
  const circumference = radius * 2 * Math.PI;

  return (
    <div className="relative">
      <svg width={100} height={100}>
        <circle
          stroke="gray"
          strokeWidth="2"
          fill="transparent"
          r={radius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#17A21A"
          strokeWidth="10"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={`${((100 - progress) / 100) * circumference}`}
          fill="transparent"
          r={radius}
          cx={radius}
          cy={radius}
        />
      </svg>
      <div className="absolute top-[18%] left-[18%]">{`${progress}`}</div>
    </div>
  );
};

export const HalfCircleProgressBar = ({ progress }: any) => {
  const radius = 30;
  const circumference = radius * Math.PI;

  return (
    <div className="relative">
      <svg width={100} height={100}>
        <circle
          stroke="gray"
          strokeWidth="10"
          fill="transparent"
          r={radius}
          cx={radius}
          cy={radius}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset="50"
        />
        <circle
          stroke="#17A21A"
          strokeWidth="10"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={`${((100 - progress) / 100) * circumference}`}
          fill="transparent"
          r={radius}
          cx={radius}
          cy={radius}
        />
      </svg>
      <div className="absolute top-[18%] left-[18%]">{`${progress}`}</div>
    </div>
  );
};
