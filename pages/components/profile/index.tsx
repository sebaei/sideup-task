import profilePicture from "../../public/assets/profilePicture.jpg";
import singleOrder from "../../public/assets/singleOrder.jpg";
import bulkOrder from "../../public/assets/bulkOrder.jpg";
import Image from "next/image";
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
} from "recharts";

import { BlueDisk } from "../../../public/constants";

const data = [
  { name: "", yv: 42000, gv: 40000, rv: 30000 },
  { name: "week 1", yv: 50000, gv: 28000, rv: 34000 },
  { name: "week 2", yv: 49500, gv: 22000, rv: 26000 },
  { name: "week 3", yv: 28000, gv: 46000, rv: 26000 },
  { name: "week 4", yv: 34000, gv: 45000, rv: 40000 },
  { name: "", yv: 49000, gv: 38000, rv: 32000 },
];

const RenderLineChart = () => {
  return (
    // <ResponsiveContainer width="100%">
    <LineChart width={600} height={300} data={data}>
      <Line type="monotone" dataKey="yv" stroke="#FFFF00" />
      <Line type="monotone" dataKey="gv" stroke="#00FF00" />
      <Line type="monotone" dataKey="rv" stroke="#FF0000" />

      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />

      <XAxis dataKey="name" strokeDasharray="5 5" />
      <YAxis type="number" domain={[10000, 60000]} strokeDasharray="5 5" />
    </LineChart>
    // </ResponsiveContainer>
  );
};

const pieData = [
  { name: "Net Sales", value: 70, color: "#00FF00" },
  { name: "Total Cash", value: 30, color: "#EDD329" },
];

const COLORS = ["#17A21A", "#EDD329"];

const RenderPieChart = () => {
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

const CircleProgressBar = ({ progress }) => {
  const radius = 50;
  const circumference = radius * 2 * Math.PI;

  return (
    <div className="text-center mt-4">
      <svg width={radius * 2} height={radius * 2}>
        <circle
          stroke="#333"
          strokeWidth="10"
          fill="transparent"
          r={radius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#1abc9c"
          strokeWidth="10"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={`${((100 - progress) / 100) * circumference}`}
          fill="transparent"
          r={radius}
          cx={radius}
          cy={radius}
        />
      </svg>
      <div style={{ position: "relative", top: "-50%" }}>{`${progress}%`}</div>
    </div>
  );
};

const HalfCircleProgressBar = ({ progress }) => {
  const radius = 50;
  const circumference = radius * Math.PI;

  return (
    <div className="text-center mt-4">
      <svg width={radius * 2} height={radius}>
        <circle
          stroke="#333"
          strokeWidth="10"
          fill="transparent"
          r={radius}
          cx={radius}
          cy={radius}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset="50"
        />
        <circle
          stroke="#1abc9c"
          strokeWidth="10"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={`${((100 - progress) / 100) * circumference}`}
          fill="transparent"
          r={radius}
          cx={radius}
          cy={radius}
        />
      </svg>
      <div style={{ position: "relative", top: "-50%" }}>{`${progress}%`}</div>
    </div>
  );
};

const Profile = () => {
  return (
    <section className="mx-5">
      <div className="hidden md:flex w-full">
        <div className="flex items-center w-[48%] h-[80px] bg-white p-4 rounded-lg shadow-lg">
          <Image src={profilePicture} alt="profile" className="my-auto" />
          <p className="text-[24px] ml-5">Welcome Back, John Doe</p>
        </div>
        <div className="flex justify-start items-center w-[21%] h-[80px] bg-white pl-2 rounded-lg shadow-lg mx-auto cursor-pointer">
          {/* <Image src={singleOrder} alt="single" /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="27"
            viewBox="0 0 24 27"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.9839 3.34641L0 6.72529L0.0139306 13.5074L0.0278602 20.2895L5.99783 23.6444C9.28132 25.4897 11.9822 26.9997 11.9999 27C12.0176 27.0003 14.7185 25.4906 18.002 23.6451L23.9719 20.2895L23.9859 13.5074L24 6.72529L18.0736 3.37904C14.8141 1.53865 12.1069 0.0181402 12.0575 0.000159373C12.0082 -0.0178214 9.27503 1.48797 5.9839 3.34641ZM16.8884 4.33724C19.5486 5.8419 21.7252 7.10112 21.7252 7.13545C21.7252 7.21429 12.0649 12.6775 11.9686 12.6531C11.7912 12.608 2.24022 7.17229 2.25639 7.12558C2.27848 7.06177 11.8725 1.61573 11.9776 1.6073C12.0184 1.60403 14.2282 2.83251 16.8884 4.33724ZM6.67186 11.3045L11.2617 13.8983L11.278 19.4474L11.2945 24.9967L10.9199 24.7885C10.7139 24.674 8.50439 23.4345 6.01003 22.0341L1.47478 19.4879L1.47349 13.9357L1.47221 8.38348L1.77713 8.54707C1.94486 8.63703 4.14746 9.8779 6.67186 11.3045ZM22.5262 13.9396L22.5249 19.4879L17.9903 22.0341C15.4963 23.4345 13.2868 24.674 13.0805 24.7885L12.7053 24.9967L12.7218 19.4485L12.7381 13.9003L17.6142 11.1459C20.2961 9.63088 22.4988 8.39134 22.509 8.39134C22.5193 8.39134 22.527 10.888 22.5262 13.9396Z"
              fill="#4278B8"
            />
          </svg>
          <select className="ml-2 ">
            <option>Single Order</option>
          </select>
        </div>
        <div className="flex justify-center items-center w-[21%] h-[80px] bg-white p-2 rounded-lg shadow-lg cursor-pointer">
          {/* <Image src={bulkOrder} alt="bulk" /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 22"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.6355 0.0764938C8.26766 1.56543 5.89733 2.64347 5.81506 2.72368C5.71419 2.82199 5.71004 2.96447 5.71693 6.07837C5.72271 8.6759 5.70959 9.34153 5.65178 9.38565C5.61202 9.41611 4.38084 9.97659 2.91589 10.6312C1.33856 11.336 0.20086 11.8756 0.126168 11.9544L0 12.0873V15.5536C0 18.0711 0.0178315 19.0581 0.0652146 19.1594C0.107271 19.2495 0.254972 19.3563 0.482243 19.461C0.802935 19.6088 4.85905 21.4401 5.6811 21.8083C5.87193 21.8937 6.07548 21.9796 6.13346 21.999C6.20484 22.0229 7.15239 21.6276 9.06589 20.7757C10.6207 20.0835 11.9292 19.5171 11.9738 19.5171C12.0183 19.5171 13.2938 20.0744 14.8083 20.7555C16.4499 21.4937 17.6254 21.9921 17.7191 21.9895C17.8054 21.9872 17.9986 21.9247 18.1483 21.8509C18.298 21.777 19.6318 21.1832 21.1121 20.5312C22.5925 19.8793 23.8479 19.2955 23.9019 19.2341C23.9931 19.1301 24 18.8759 24 15.6078C24 12.3157 23.9937 12.0857 23.8999 11.9728C23.8404 11.9011 22.6876 11.3567 21.0541 10.6289L18.3084 9.40566L18.2804 6.12768L18.2523 2.84976L18.1164 2.7087C18.0416 2.63111 17.9604 2.56763 17.9358 2.56763C17.9113 2.56763 16.5936 1.98944 15.0077 1.28275C13.3237 0.53238 12.0575 -0.00125533 11.964 2.2179e-06C11.8758 0.00120509 11.728 0.0355963 11.6355 0.0764938ZM14.2375 2.04296C15.4461 2.58141 16.4149 3.04091 16.3904 3.06409C16.3428 3.10903 12.3548 4.89365 12.1028 4.98266C11.9721 5.02892 11.681 4.91465 9.77574 4.06925C8.57804 3.5378 7.57845 3.08514 7.55445 3.06332C7.51228 3.0251 11.937 1.02501 12.0059 1.05114C12.0247 1.05825 13.0289 1.50457 14.2375 2.04296ZM9.12521 4.9047L11.4374 5.93019L11.4383 8.67766C11.4389 10.1887 11.4204 11.4253 11.3972 11.4255C11.374 11.4257 10.3149 10.9644 9.04346 10.4003L6.73177 9.37477L6.73037 6.62731C6.72959 5.11624 6.74787 3.87969 6.77103 3.87952C6.79419 3.87936 7.85355 4.34066 9.12521 4.9047ZM17.215 6.63562V9.39139L17.0607 9.44662C16.976 9.47696 15.9159 9.94466 14.7051 10.4859L12.5037 11.4701L12.5182 8.70095L12.5327 5.93184L14.8318 4.90776C16.0963 4.34449 17.1497 3.8828 17.1729 3.88177C17.1961 3.88073 17.215 5.11995 17.215 6.63562ZM8.51322 11.2935C10.6052 12.2228 10.7092 12.2759 10.5596 12.3367C10.4728 12.372 9.45948 12.8196 8.3077 13.3315L6.21353 14.2622L4.00778 13.2682C2.7946 12.7215 1.81436 12.2623 1.82944 12.2475C1.9135 12.1656 6.15426 10.2848 6.22469 10.2982C6.27118 10.3072 7.30099 10.755 8.51322 11.2935ZM19.7503 11.159C20.8386 11.6441 21.8384 12.089 21.9722 12.1478L22.2154 12.2546L20.1217 13.1831C18.9702 13.6937 17.9492 14.1443 17.8529 14.1842C17.6828 14.2548 17.6136 14.2283 15.5256 13.2921C14.3421 12.7614 13.37 12.3027 13.3654 12.2726C13.3586 12.2275 17.6039 10.2902 17.7316 10.2801C17.7536 10.2783 18.662 10.6739 19.7503 11.159ZM4.14953 14.4626L5.63551 15.1329L5.65004 17.9051C5.66164 20.1159 5.65026 20.6721 5.59396 20.6509C5.55516 20.6364 4.52036 20.173 3.29439 19.6211L1.06542 18.6177V15.8454V13.0732L1.86449 13.4328C2.304 13.6306 3.33224 14.094 4.14953 14.4626ZM11.4393 15.8485V18.6316L11.285 18.6868C11.2003 18.7172 10.1404 19.1848 8.92991 19.7259L6.72897 20.7098V17.935V15.1601L9.07009 14.117C10.3577 13.5433 11.4176 13.072 11.4252 13.0697C11.4329 13.0673 11.4393 14.3178 11.4393 15.8485ZM15.6028 14.4572L17.1589 15.1556V17.9163C17.1589 20.5225 17.1534 20.6751 17.0607 20.642C17.0068 20.6228 15.9599 20.1589 14.7344 19.611L12.5061 18.615L12.5054 15.8432L12.5047 13.0715L13.2757 13.4151C13.6998 13.6041 14.747 14.0731 15.6028 14.4572ZM22.9346 15.841V18.6165L20.6776 19.6115C19.4362 20.1586 18.3761 20.6223 18.3219 20.6419C18.2284 20.6755 18.224 20.5314 18.2378 17.9085L18.2523 15.1395L20.5794 14.1063C21.8593 13.538 22.9128 13.0712 22.9206 13.0692C22.9283 13.0671 22.9346 14.3144 22.9346 15.841Z"
              fill="#4278B8"
            />
          </svg>
          <p className="ml-2">Bulk Order</p>
        </div>
      </div>
      <div className="hidden md:flex flex-1 justify-around my-5">
        {profileIcons.map((icon, index) => (
          <Image key={index} src={icon} alt="icon" className="object-contain" />
        ))}
      </div>
      <div className="grid sm:grid-cols-6 grid-cols-2 gap-5 mt-4">
        <div className="col-span-3 row-span-2 bg-white p-4 rounded-lg shadow-lg ">
          <div className="flex">
            <BlueDisk />
            <p>Net Sales</p>
            <p className="ml-auto bg-[#4278B8] text-white p-2 rounded">
              2,755,890 LE
            </p>
          </div>
          <div className="flex">
            <div className="flex flex-col justify-around">
              <div className="bg-gray-200 border-l-blue-300 border-2 rounded-lg">
                <p>Total Cash</p>
                <span>2,755,890</span>
                <p>15% Compared to Last Week</p>
              </div>
              <div className="bg-gray-200 border-l-blue-300 border-2 rounded-lg">
                <p>Delivery Fees</p>
                <span>2,755,890</span>
                <p>10% Compared to Last Week</p>
              </div>
            </div>
            <RenderLineChart />
          </div>
        </div>
        <div className="flex flex-col justify-evenly bg-white rounded-lg shadow-lg px-4">
          <div className="flex">
            <BlueDisk />
            <p className="ml-2">Pending</p>
          </div>
          <p className="my-2">2,755,890 LE</p>
          <div className="flex">
            <p>15%</p> <p>Compared to Last Week</p>
          </div>
        </div>
        <div className="col-span-2 flex flex-wrap justify-around items-center text-[18px] font-semibold bg-white rounded-lg shadow-lg">
          <div className="flex flex-col w-[20%] text-center">
            <p>To Be Picked</p>
            <div className="text-black bg-gray-300 rounded-md text-center py-4">
              45
            </div>
          </div>
          <div className="flex flex-col w-[20%] text-center">
            <p>Picked</p>
            <div className="text-black bg-gray-300 rounded-md text-center py-4">
              45
            </div>
          </div>
          <div className="flex flex-col  w-[20%] text-center">
            <p>Delivered</p>
            <div className="text-black bg-gray-300 rounded-md text-center py-4">
              45
            </div>
          </div>
          <div className="flex flex-col  w-[20%] text-center">
            <p>Returned</p>
            <div className="text-black bg-gray-300 rounded-md text-center py-4">
              45
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-evenly bg-white rounded-lg shadow-lg px-4">
          <div className="flex">
            <BlueDisk />
            <p>Actions</p>
          </div>

          <div className="flex items-center w-max bg-gray-200">
            <p className="border-b-red-400 border-2">10</p>{" "}
            <button className="underline text-blue-400">Take Action</button>
          </div>
        </div>
        <div className="col-span-2 row-span-2 flex flex-col bg-white rounded-lg shadow-lg p-4">
          <div className="flex">
            <BlueDisk />
            Attempts
            <div className="text-black bg-gray-300 p-2 rounded-md font-semibold text-center ml-auto">
              30
            </div>
          </div>
          <div className="flex border-2 border-b-blue-500">
            <div className=" block bg-gradient-to-r from-green-500 to-white w-5 h-3" />
            <p>Successfull Attempts</p>
            <p className="ml-auto">25</p>
          </div>

          <div className="flex border-2 border-b-blue-500">
            <div className="block bg-gradient-to-r from-orange-600 to-white w-5 h-3" />

            <p>From First Attempt</p>
            <p className="ml-auto">10</p>
          </div>
          <div className="flex border-2 border-b-blue-500">
            <div className="block bg-gradient-to-r from-orange-600 to-white w-5 h-3" />

            <p>From Second Attempt</p>
            <p className="ml-auto">3</p>
          </div>
          <div className="flex border-2 border-b-blue-500">
            <div className="block bg-gradient-to-r from-orange-600 to-white w-5 h-3" />

            <p>From Third Attempt</p>
            <p className="ml-auto">12</p>
          </div>
          <div className="flex border-2 border-b-blue-500">
            <div className="block bg-gradient-to-r from-red-600 to-white w-5 h-3" />

            <p>Returned</p>
            <p className="ml-auto">4</p>
          </div>
          <div className="flex">
            <div className="block bg-gradient-to-r from-black to-white w-5 h-3" />

            <p>Canceled</p>
            <p className="ml-auto">1</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg">
          <div className="flex">
            <BlueDisk />
            Daily Orders
          </div>
          <CircleProgressBar progress={63} />
        </div>
        <div className="bg-white rounded-lg shadow-lg">
          <div className="flex">
            <BlueDisk />
            Success Rate
          </div>
          <div className="flex">
            <div>
              <RenderPieChart />
            </div>
            <div className="flex flex-col bg-red-200">
              <p>Net Sales</p>
              <p>70%</p>
            </div>
            <div className="flex flex-col">
              <p>Total Cash</p>
              <p>30%</p>
            </div>
          </div>
        </div>
        <div className="bg-white flex flex-col rounded-lg shadow-lg">
          <div className="flex">
            <BlueDisk />
            <p>New Customers</p>
          </div>
          <div className="flex">
            {/* Graph */}
            <HalfCircleProgressBar progress={75} />
            <p>Compared to Yesterday</p>
          </div>
        </div>
        <div className="flex flex-col justify-evenly bg-white rounded-lg shadow-lg px-4">
          <div className="flex">
            <BlueDisk />
            <p>Gifts</p>
          </div>
          <div className="flex">
            <div className="flex items-center bg-gray-200">
              <p className="border-b-green-400 border-2 p-0">10</p>{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="23"
                viewBox="0 0 28 23"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.81407 0.119392C5.679 0.273719 5.64439 0.641253 5.74874 0.8115C5.78247 0.866496 6.16897 1.04619 6.60768 1.21087C7.67532 1.61177 8.62359 2.16745 9.55013 2.9352C10.6575 3.85286 11.7434 5.14947 12.3659 6.29748C12.5097 6.56279 12.7072 6.81744 12.8048 6.86337C13.046 6.97709 13.3472 6.85849 13.4895 6.59364C13.5965 6.3946 13.5897 6.35948 13.357 5.90709C12.9035 5.02508 12.1351 3.99309 11.2455 3.0714C9.97661 1.75665 8.81639 0.941908 7.37912 0.35629C6.44109 -0.0258698 5.99965 -0.0926735 5.81407 0.119392ZM21.0773 0.173626C18.7068 1.03682 16.5779 2.81949 15.0634 5.20935C14.4703 6.14528 14.392 6.35042 14.5304 6.60544C14.6684 6.85979 14.9724 6.97527 15.2098 6.86337C15.3073 6.81744 15.5048 6.56279 15.6486 6.29748C16.2711 5.14947 17.357 3.85286 18.4644 2.9352C19.3909 2.16745 20.3392 1.61177 21.4068 1.21087C21.8456 1.04619 22.232 0.866496 22.2658 0.8115C22.374 0.634854 22.3343 0.244772 22.1946 0.114059C22.0135 -0.0555016 21.6539 -0.0363062 21.0773 0.173626ZM12.0188 1.28293C11.9378 1.36672 11.8715 1.49888 11.8715 1.57666C11.8715 1.65451 12.0712 2.16007 12.3152 2.70021C13.0519 4.33077 12.9766 4.21247 13.2964 4.23966C13.6441 4.26922 13.86 4.09349 13.86 3.78095C13.86 3.53925 13.1646 1.88866 12.8663 1.42256C12.7091 1.17682 12.6389 1.13059 12.4228 1.13059C12.2643 1.13059 12.1098 1.18886 12.0188 1.28293ZM15.2617 1.28034C14.9845 1.56706 14.1545 3.44708 14.1545 3.78826C14.1545 4.09394 14.3731 4.26899 14.7181 4.23966C15.0379 4.21247 14.9626 4.33077 15.6993 2.70021C15.9433 2.16007 16.143 1.65451 16.143 1.57666C16.143 1.19016 15.5438 0.988602 15.2617 1.28034ZM6.68272 4.22253C4.82309 4.80974 4.14186 5.05654 4.02543 5.1852C3.75971 5.47862 1.19388 8.29275 0.587705 8.95561C-0.381845 10.0156 -0.328673 10.0817 2.10577 10.8416C3.1142 11.1564 3.95097 11.4139 3.96533 11.4139C3.97969 11.4139 3.9914 13.2796 3.9914 15.56C3.9914 19.1271 4.00672 19.7217 4.10091 19.8192C4.23753 19.9605 4.01983 19.8888 9.45962 21.5833L14.0073 23L18.5549 21.5833C23.9947 19.8888 23.777 19.9605 23.9136 19.8192C24.0078 19.7217 24.0231 19.1271 24.0231 15.56C24.0231 13.2796 24.0359 11.4139 24.0516 11.4139C24.0673 11.4139 24.9041 11.1566 25.9112 10.8421C27.8166 10.2471 28 10.1527 28 9.76807C28 9.63797 27.6701 9.22496 26.8401 8.31568C26.2021 7.61679 25.2721 6.59707 24.7733 6.04961C24.2746 5.50216 23.8272 5.03323 23.7791 5.00764C23.731 4.98204 22.5548 4.6075 21.1652 4.17522C18.426 3.32323 18.3452 3.31157 18.146 3.74126C18.0668 3.91212 18.0668 3.98616 18.1458 4.15846C18.2474 4.37982 18.4324 4.45272 20.817 5.21095L21.6983 5.49119L17.8528 6.69061L14.0073 7.89003L10.1593 6.68984L6.31125 5.48959L7.15818 5.22039C7.62399 5.07231 8.39315 4.82772 8.86736 4.67697C9.74124 4.3991 9.95673 4.25101 9.95673 3.92857C9.95673 3.71019 9.62407 3.41456 9.38929 3.42431C9.27609 3.42903 8.05813 3.78819 6.68272 4.22253ZM11.4481 8.22618C12.2886 8.48623 12.9762 8.72176 12.9762 8.74964C12.9762 8.84204 9.95143 12.0995 9.86563 12.0995C9.7338 12.0995 1.67811 9.58015 1.61742 9.5199C1.58767 9.49035 2.25638 8.70911 3.10345 7.78376L4.64368 6.10141L7.28176 6.92735C8.73273 7.38165 10.6075 7.96612 11.4481 8.22618ZM24.9006 7.77417C25.7533 8.705 26.4266 9.49027 26.3969 9.51929C26.3363 9.57855 18.2784 12.0995 18.1496 12.0995C18.0664 12.0995 15.0383 8.84059 15.0383 8.75101C15.0383 8.7245 16.9025 8.11725 19.1809 7.40153C21.4594 6.68573 23.3295 6.096 23.3369 6.09097C23.3442 6.08595 24.0479 6.84341 24.9006 7.77417ZM13.4707 21.6683C13.4586 21.6808 11.5532 21.1012 9.23647 20.3802L5.02429 19.0693L5.02333 15.4321C5.02274 12.8803 5.04616 11.7948 5.10191 11.7948C5.14558 11.7948 6.27863 12.1383 7.61965 12.5581C9.36012 13.1029 10.1053 13.3046 10.2232 13.2627C10.3141 13.2304 11.0784 12.4517 11.9217 11.5322L13.4549 9.86047L13.4738 15.7531C13.4842 18.9939 13.4827 21.6558 13.4707 21.6683ZM16.4189 11.8854C17.0926 12.6265 17.7171 13.2518 17.8067 13.2751C17.9038 13.3003 18.9505 13.0102 20.4014 12.5561C21.7388 12.1374 22.8689 11.7948 22.9126 11.7948C22.9684 11.7948 22.9918 12.8804 22.9912 15.4321L22.9903 19.0693L18.8486 20.3565C16.5707 21.0644 14.6655 21.6594 14.6148 21.6786C14.5417 21.7064 14.5228 20.496 14.5228 15.7862V9.85879L14.8585 10.1984C15.043 10.3851 15.7452 11.1443 16.4189 11.8854Z"
                  fill="#F25A29"
                />
              </svg>
            </div>
            <p>Compared to Last Week</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
