import styles from "../../../public/style";
import { SVG } from "../../svgs";
import {
  RenderBarChart,
  RenderDelivery,
  RenderLineChart,
  RenderTotalCash,
} from "../charts";

const NetSales = () => {
  return (
    <div className="col-span-2 sm:col-span-3 row-span-2 bg-white p-4 rounded-lg shadow-lg ">
      <div className="flex items-center ">
        {SVG.Disk("#4278B8")}
        <p className={`${styles.gridTitle} ml-2`}>Net Sales</p>
        <p className="ml-auto bg-[#4278B8] text-white p-2 rounded mb-3 font-bold text-[18px]">
          2,755,890 LE
        </p>
      </div>
      <div className="flex flex-col sm:flex-row">
        <div className="flex sm:flex-col w-[40$] justify-around pr-3 mb-2">
          <div className="flex flex-col justify-around bg-gray-100 border-l-blue-500 border-l-2 rounded-lg p-1">
            <div className="flex">
              {SVG.Disk("#4278B8")}
              <p>Total Cash</p>
            </div>
            <span className="my-3">2,755,890 LE</span>
            <p className="flex flex-wrap items-center">
              <span className="text-[#17A21A] font-semibold">15%</span>{" "}
              <RenderTotalCash />{" "}
              <span className={`${styles.smallText} text-[12px] text-gray-500`}>
                Compared to Last Week
              </span>
            </p>
          </div>
          <div className="flex flex-col justify-around bg-gray-100 border-l-blue-500 border-l-2 rounded-lg p-2 mt-2">
            <div className="flex">
              {SVG.Disk("#4278B8")}
              <p>Delivery Fees</p>
            </div>
            <span className="my-3">2,755,890 LE</span>
            <p className="flex flex-wrap items-center">
              <span className="text-[#ED565C] font-semibold">10% </span>
              <RenderDelivery />{" "}
              <span className={`${styles.smallText} text-[12px] text-gray-500`}>
                Compared to Last Week
              </span>
            </p>
          </div>
        </div>
        {/* <div className="w-2/3 mt-4 "> */}
        <RenderBarChart />
        <RenderLineChart />
        {/* </div> */}
      </div>
    </div>
  );
};

export default NetSales;
