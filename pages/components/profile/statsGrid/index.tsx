import { Attempts } from "../../../../public/constants";
import styles from "../../../../public/style";
import { SVG } from "../../svgs";
import {
  CircleProgressBar,
  HalfCircleProgressBar,
  RenderBarChart,
  RenderDelivery,
  RenderLineChart,
  RenderPieChart,
  RenderTotalCash,
} from "../charts";
import NetSales from "./netSales";

const StatsGrid = () => {
  return (
    <div className="grid sm:grid-cols-6 grid-cols-2 gap-4 mt-4">
      <div className="col-span-2 flex sm:hidden justify-around items-end py-5 text-[18px] font-semibold bg-white rounded-lg shadow-lg">
        <div className="flex flex-col w-[15%] text-center ">
          <p>To Be Picked</p>
          <div className="text-black bg-gray-300 rounded-md text-center py-4">
            45
          </div>
        </div>
        <div className="flex flex-col w-[15%] text-center">
          <p>Picked</p>
          <div className="text-black bg-gray-300 rounded-md text-center py-4">
            45
          </div>
        </div>
        <div className="flex flex-col  w-[15%] text-center">
          <p>Delivered</p>
          <div className="text-black bg-gray-300 rounded-md text-center py-4">
            45
          </div>
        </div>
        <div className="flex flex-col  w-[15%] text-center">
          <p>Returned</p>
          <div className="text-black bg-gray-300 rounded-md text-center py-4">
            45
          </div>
        </div>
      </div>
      <NetSales />
      <div className="flex flex-col  bg-white rounded-lg shadow-lg px-4">
        <div className="flex pt-4 items-center">
          {SVG.Disk("#4278B8")}
          <p className={`${styles.gridTitle} ml-2`}>Pending</p>
        </div>

        <p className="my-4 text-[18px]">2,755,890 LE</p>
        <div className="flex justify-start flex-wrap">
          <p className="text-[#17A21A] font-semibold text-[18px] mr-2">15%</p>
          {SVG.Line}{" "}
          <span className={`${styles.smallText} text-[16px] text-gray-500`}>
            Compared to Last Week
          </span>
        </div>
      </div>
      <div className="col-span-2 hidden sm:flex flex-wrap justify-around items-end text-[14px] md:text-[18px] font-semibold pb-[20%] bg-white rounded-lg shadow-lg">
        <div className="flex flex-col flex-wrap w-[15%] text-center">
          <p>To Be Picked</p>
          <div className="text-black bg-gray-300 rounded-md text-center py-4">
            45
          </div>
        </div>
        <div className="flex flex-col w-[15%] text-center">
          <p>Picked</p>
          <div className="text-black bg-gray-300 rounded-md text-center py-4">
            45
          </div>
        </div>
        <div className="flex flex-col  w-[15%] text-center">
          <p>Delivered</p>
          <div className="text-black bg-gray-300 rounded-md text-center py-4">
            45
          </div>
        </div>
        <div className="flex flex-col  w-[15%] text-center">
          <p>Returned</p>
          <div className="text-black bg-gray-300 rounded-md text-center py-4">
            45
          </div>
        </div>
      </div>
      <div className="flex flex-col  bg-white rounded-lg shadow-lg p-4">
        <div className="flex items-center">
          {SVG.Disk("#4278B8")}
          <p className={`${styles.gridTitle} ml-2`}>Actions</p>
        </div>

        <div className="flex w-full flex-wrap justify-evenly items-center py-2 my-auto rounded-md bg-gray-100">
          <p className="border-b-red-400 border-b-2 font-bold text-[18px] mr-2">
            10
          </p>{" "}
          <button className="underline text-blue-400">Take action</button>
        </div>
      </div>
      <div className="col-span-2 row-span-2 hidden sm:flex flex-col justify-around  bg-white rounded-lg shadow-lg p-4">
        <div className="flex">
          {SVG.Disk("#4278B8")}
          <p className={`${styles.gridTitle} ml-2`}>Attempts</p>
          <div className="text-black bg-gray-300 p-2 rounded-md font-semibold text-center ml-auto">
            30
          </div>
        </div>
        {Attempts.map((attempt, index) => {
          return (
            <div
              key={index}
              className={`flex items-center ${
                Attempts.length - 1 !== index
                  ? "border-b-blue-500"
                  : "border-b-transparent"
              } border-b-[1.5px] py-2`}
            >
              <div className={`bg-${attempt.color} w-4 rounded-sm h-3 mr-4`} />

              <p>{attempt.title}</p>
              <p className="ml-auto">{attempt.total}</p>
            </div>
          );
        })}
      </div>

      <div className="bg-white rounded-lg shadow-lg p-4">
        <div className="flex justify-start items-center">
          {SVG.Disk("#4278B8")}
          <p className={`${styles.gridTitle} ml-2`}>Daily Orders</p>
        </div>
        <div className="flex justify-center flex-wrap ml-2 mt-6">
          <CircleProgressBar progress={75} />
          <div className="hidden sm:block md:hidden text-black bg-gray-300 rounded-md text-center p-4">
            10
          </div>
          <div className="flex flex-col">
            <div className="flex flex-wrap">
              <p className="text-[16px] mr-1">63%</p>
              {SVG.arrowDown}
            </div>
            <span className={`${styles.smallText} text-[16px] text-gray-500`}>
              Compared to yesterday
            </span>
          </div>
        </div>
      </div>
      <div className="bg-white w-full rounded-lg shadow-lg p-4">
        <div className="flex items-center">
          {SVG.Disk("#4278B8")}
          <p className={`${styles.gridTitle} ml-2`}>Success Rate</p>
        </div>
        <div className="flex justify-center flex-wrap items-center mt-4">
          <div className="mx-1">
            <RenderPieChart />
          </div>
          <div className="hidden sm:block md:hidden text-black bg-gray-300 rounded-md text-center p-4">
            10
          </div>
          <div className="flex justify-evenly">
            <div className="flex flex-col mr-1 items-center">
              <p className="text-[14px] font-bold">Net Sales</p>
              <div className="text-black bg-gray-300 rounded-md text-center p-3">
                <p className="border-b-2 border-b-green-500">70%</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-[14px] font-bold">Total Cash</p>
              <div className="text-black bg-gray-300 rounded-md text-center p-3">
                <p className="border-b-2 border-b-yellow-600">30%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-white rounded-lg shadow-lg p-4 flex flex-col">
        <div className="flex items-center">
          {SVG.Disk("#4278B8")}
          <p className={`${styles.gridTitle} ml-2`}>New Customers</p>
        </div>
        <div className="flex flex-wrap justify-center mt-6 ml-2">
          <HalfCircleProgressBar progress={10} />
          <div className="block lg:hidden text-black bg-gray-300 rounded-md text-center p-4">
            10
          </div>

          <div className="flex flex-col">
            <div className="flex flex-wrap">
              <p className="text-[16px] mr-1">75%</p>
              {SVG.arrowUp}
            </div>
            <span className={`${styles.smallText} text-[16px] text-gray-500`}>
              Compared to yesterday
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-white rounded-lg shadow-lg p-4">
        <div className="flex items-center">
          {SVG.Disk("#4278B8")}
          <p className={`${styles.gridTitle} ml-2`}>Gifts</p>
        </div>
        <div className="flex my-auto justify-center items-center">
          <div className="flex items-center  bg-gray-100 p-2 rounded-md mr-2">
            <p className="border-b-green-400 border-b-2 font-bold text-[18px]">
              10
            </p>
            {SVG.Gift}
          </div>
          <div className="hidden lg:flex flex-col">
            <div className="bg-gray-200 w-[80%] h-2 rounded-md">
              <div className="bg-green-500 rounded-md h-2 w-[75%]" />
            </div>
            <span className={`${styles.smallText} text-[12px] text-gray-500`}>
              Compared to Last Week
            </span>
          </div>
        </div>
      </div>

      <div className="col-span-2 row-span-2 flex sm:hidden flex-col justify-around  bg-white rounded-lg shadow-lg p-4">
        <div className="flex items-center">
          {SVG.Disk("#4278B8")}
          <p className={`${styles.gridTitle} ml-2`}>Attempts</p>
          <div className="text-black bg-gray-300 p-2 rounded-md font-semibold text-center ml-auto">
            30
          </div>
        </div>
        {Attempts.map((attempt, index) => {
          return (
            <div
              key={index}
              className={`flex items-center ${
                Attempts.length - 1 !== index
                  ? "border-b-blue-500"
                  : "border-b-transparent"
              } border-b-[1.5px] py-2`}
            >
              <div className={` bg-${attempt.color} w-4 rounded-sm h-3 mr-4`} />
              <p className={`${styles.gridTitle}`}>{attempt.title}</p>
              <p className="ml-auto">{attempt.total}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StatsGrid;
