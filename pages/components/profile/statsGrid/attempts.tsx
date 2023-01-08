import { SVG } from "../../svgs";
import { Attempts } from "../../../../public/constants";
import styles from "../../../../public/style";

const AttemptsCell = () => {
  return (
    <>
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
    </>
  );
};

export default AttemptsCell;
