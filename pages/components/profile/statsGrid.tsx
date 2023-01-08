import { Attempts, BlueDisk } from "../../../public/constants";
import {
  CircleProgressBar,
  HalfCircleProgressBar,
  RenderDelivery,
  RenderLineChart,
  RenderPieChart,
  RenderTotalCash,
} from "./charts";

const StatsGrid = () => {
  return (
    <div className="grid sm:grid-cols-6 grid-cols-2 gap-4 mt-4">
      <div className="col-span-2 flex sm:hidden justify-around items-end pb-12 text-[18px] font-semibold bg-white rounded-lg shadow-lg">
        <div className="flex flex-col w-[15%] text-center ">
          <p>
            To Be <br />
            Picked
          </p>
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
      <div className="col-span-2 sm:col-span-3 row-span-2 bg-white p-4 rounded-lg shadow-lg ">
        <div className="flex">
          <BlueDisk />
          <p className="ml-2">Net Sales</p>
          <p className="ml-auto bg-[#4278B8] text-white p-2 rounded">
            2,755,890 LE
          </p>
        </div>
        <div className="flex">
          <div className="flex flex-col w-[40$] justify-around pr-3">
            <div className="flex flex-col justify-around bg-gray-100 border-l-blue-500 border-l-2 rounded-lg p-1">
              <div className="flex">
                <BlueDisk />
                <p>Total Cash</p>
              </div>
              <span className="my-3">2,755,890 LE</span>
              <p className="flex flex-wrap items-center">
                <span className="text-[#17A21A] font-semibold">15%</span>{" "}
                <RenderTotalCash /> Compared to Last Week
              </p>
            </div>
            <div className="flex flex-col justify-around bg-gray-100 border-l-blue-500 border-l-2 rounded-lg p-2 mt-2">
              <div className="flex">
                <BlueDisk />
                <p>Delivery Fees</p>
              </div>
              <span className="my-3">2,755,890 LE</span>
              <p className="flex flex-wrap items-center">
                <span className="text-[#ED565C] font-semibold">10% </span>
                <RenderDelivery /> Compared to Last Week
              </p>
            </div>
          </div>
          {/* <div className="w-2/3 mt-4 "> */}
          <RenderLineChart />
          {/* </div> */}
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
      <div className="col-span-2 hidden sm:flex justify-around items-end pb-12 text-[18px] font-semibold bg-white rounded-lg shadow-lg">
        <div className="flex flex-col w-[15%] text-center ">
          <p>
            To Be <br />
            Picked
          </p>
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
      <div className="flex flex-col justify-evenly bg-white rounded-lg shadow-lg px-4">
        <div className="flex">
          <BlueDisk />
          <p>Actions</p>
        </div>

        <div className="flex w-full justify-evenly items-center py-2 rounded-md bg-gray-100">
          <p className="border-b-red-400 border-b-2">10</p>{" "}
          <button className="underline text-blue-400">Take action</button>
        </div>
      </div>
      <div className="col-span-2 row-span-2 hidden sm:flex flex-col justify-around  bg-white rounded-lg shadow-lg p-4">
        <div className="flex">
          <BlueDisk />
          Attempts
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
              } border-b-[1.5px]   py-2`}
            >
              <div
                className={`block bg-gradient-to-r ${attempt.color} to-white w-5 h-3 mr-4`}
              />

              <p>{attempt.title}</p>
              <p className="ml-auto">{attempt.total}</p>
            </div>
          );
        })}
      </div>
      <div className="bg-white rounded-lg shadow-lg p-4">
        <div className="flex justify-start ">
          <BlueDisk />
          <p> Daily Orders</p>
        </div>
        <div className="flex flex-row flex-wrap">
          <CircleProgressBar progress={75} />

          <div className="flex flex-col flex-wrap">
            <p>63%</p>
            <p>Compared to yesterday</p>
          </div>
        </div>
      </div>
      <div className="bg-white w-full rounded-lg shadow-lg p-2">
        <div className="flex">
          <BlueDisk />
          Success Rate
        </div>
        <div className="flex flex-wrap justify-start items-center">
          <RenderPieChart />
          <div className="flex">
            <div className="flex flex-col items-center">
              <p>Net Sales</p>
              <div className="text-black bg-gray-300 rounded-md text-center p-4">
                <p className="border-b-2 border-b-green-500">70%</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <p>Total Cash</p>
              <div className="text-black bg-gray-300 rounded-md text-center p-4">
                <p className="border-b-2 border-b-yellow-600">30%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-white rounded-lg shadow-lg p-4 flex flex-col">
        <div className="flex">
          <BlueDisk />
          <p>New Customers</p>
        </div>
        <div className="flex flex-wrap justify-evenly ">
          {/* Graph */}
          <HalfCircleProgressBar progress={10} />
          <p>Compared to Yesterday</p>
        </div>
      </div>
      <div className="flex flex-col justify-evenly bg-white rounded-lg shadow-lg px-4">
        <div className="flex">
          <BlueDisk />
          <p>Gifts</p>
        </div>
        <div className="flex">
          <div className="flex items-center bg-gray-100 p-2 rounded-md mr-2">
            <p className="border-b-green-400 border-b-2 p-0">10</p>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="23"
              viewBox="0 0 28 23"
              fill="none"
              className="ml-2"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.81407 0.119392C5.679 0.273719 5.64439 0.641253 5.74874 0.8115C5.78247 0.866496 6.16897 1.04619 6.60768 1.21087C7.67532 1.61177 8.62359 2.16745 9.55013 2.9352C10.6575 3.85286 11.7434 5.14947 12.3659 6.29748C12.5097 6.56279 12.7072 6.81744 12.8048 6.86337C13.046 6.97709 13.3472 6.85849 13.4895 6.59364C13.5965 6.3946 13.5897 6.35948 13.357 5.90709C12.9035 5.02508 12.1351 3.99309 11.2455 3.0714C9.97661 1.75665 8.81639 0.941908 7.37912 0.35629C6.44109 -0.0258698 5.99965 -0.0926735 5.81407 0.119392ZM21.0773 0.173626C18.7068 1.03682 16.5779 2.81949 15.0634 5.20935C14.4703 6.14528 14.392 6.35042 14.5304 6.60544C14.6684 6.85979 14.9724 6.97527 15.2098 6.86337C15.3073 6.81744 15.5048 6.56279 15.6486 6.29748C16.2711 5.14947 17.357 3.85286 18.4644 2.9352C19.3909 2.16745 20.3392 1.61177 21.4068 1.21087C21.8456 1.04619 22.232 0.866496 22.2658 0.8115C22.374 0.634854 22.3343 0.244772 22.1946 0.114059C22.0135 -0.0555016 21.6539 -0.0363062 21.0773 0.173626ZM12.0188 1.28293C11.9378 1.36672 11.8715 1.49888 11.8715 1.57666C11.8715 1.65451 12.0712 2.16007 12.3152 2.70021C13.0519 4.33077 12.9766 4.21247 13.2964 4.23966C13.6441 4.26922 13.86 4.09349 13.86 3.78095C13.86 3.53925 13.1646 1.88866 12.8663 1.42256C12.7091 1.17682 12.6389 1.13059 12.4228 1.13059C12.2643 1.13059 12.1098 1.18886 12.0188 1.28293ZM15.2617 1.28034C14.9845 1.56706 14.1545 3.44708 14.1545 3.78826C14.1545 4.09394 14.3731 4.26899 14.7181 4.23966C15.0379 4.21247 14.9626 4.33077 15.6993 2.70021C15.9433 2.16007 16.143 1.65451 16.143 1.57666C16.143 1.19016 15.5438 0.988602 15.2617 1.28034ZM6.68272 4.22253C4.82309 4.80974 4.14186 5.05654 4.02543 5.1852C3.75971 5.47862 1.19388 8.29275 0.587705 8.95561C-0.381845 10.0156 -0.328673 10.0817 2.10577 10.8416C3.1142 11.1564 3.95097 11.4139 3.96533 11.4139C3.97969 11.4139 3.9914 13.2796 3.9914 15.56C3.9914 19.1271 4.00672 19.7217 4.10091 19.8192C4.23753 19.9605 4.01983 19.8888 9.45962 21.5833L14.0073 23L18.5549 21.5833C23.9947 19.8888 23.777 19.9605 23.9136 19.8192C24.0078 19.7217 24.0231 19.1271 24.0231 15.56C24.0231 13.2796 24.0359 11.4139 24.0516 11.4139C24.0673 11.4139 24.9041 11.1566 25.9112 10.8421C27.8166 10.2471 28 10.1527 28 9.76807C28 9.63797 27.6701 9.22496 26.8401 8.31568C26.2021 7.61679 25.2721 6.59707 24.7733 6.04961C24.2746 5.50216 23.8272 5.03323 23.7791 5.00764C23.731 4.98204 22.5548 4.6075 21.1652 4.17522C18.426 3.32323 18.3452 3.31157 18.146 3.74126C18.0668 3.91212 18.0668 3.98616 18.1458 4.15846C18.2474 4.37982 18.4324 4.45272 20.817 5.21095L21.6983 5.49119L17.8528 6.69061L14.0073 7.89003L10.1593 6.68984L6.31125 5.48959L7.15818 5.22039C7.62399 5.07231 8.39315 4.82772 8.86736 4.67697C9.74124 4.3991 9.95673 4.25101 9.95673 3.92857C9.95673 3.71019 9.62407 3.41456 9.38929 3.42431C9.27609 3.42903 8.05813 3.78819 6.68272 4.22253ZM11.4481 8.22618C12.2886 8.48623 12.9762 8.72176 12.9762 8.74964C12.9762 8.84204 9.95143 12.0995 9.86563 12.0995C9.7338 12.0995 1.67811 9.58015 1.61742 9.5199C1.58767 9.49035 2.25638 8.70911 3.10345 7.78376L4.64368 6.10141L7.28176 6.92735C8.73273 7.38165 10.6075 7.96612 11.4481 8.22618ZM24.9006 7.77417C25.7533 8.705 26.4266 9.49027 26.3969 9.51929C26.3363 9.57855 18.2784 12.0995 18.1496 12.0995C18.0664 12.0995 15.0383 8.84059 15.0383 8.75101C15.0383 8.7245 16.9025 8.11725 19.1809 7.40153C21.4594 6.68573 23.3295 6.096 23.3369 6.09097C23.3442 6.08595 24.0479 6.84341 24.9006 7.77417ZM13.4707 21.6683C13.4586 21.6808 11.5532 21.1012 9.23647 20.3802L5.02429 19.0693L5.02333 15.4321C5.02274 12.8803 5.04616 11.7948 5.10191 11.7948C5.14558 11.7948 6.27863 12.1383 7.61965 12.5581C9.36012 13.1029 10.1053 13.3046 10.2232 13.2627C10.3141 13.2304 11.0784 12.4517 11.9217 11.5322L13.4549 9.86047L13.4738 15.7531C13.4842 18.9939 13.4827 21.6558 13.4707 21.6683ZM16.4189 11.8854C17.0926 12.6265 17.7171 13.2518 17.8067 13.2751C17.9038 13.3003 18.9505 13.0102 20.4014 12.5561C21.7388 12.1374 22.8689 11.7948 22.9126 11.7948C22.9684 11.7948 22.9918 12.8804 22.9912 15.4321L22.9903 19.0693L18.8486 20.3565C16.5707 21.0644 14.6655 21.6594 14.6148 21.6786C14.5417 21.7064 14.5228 20.496 14.5228 15.7862V9.85879L14.8585 10.1984C15.043 10.3851 15.7452 11.1443 16.4189 11.8854Z"
                fill="#F25A29"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <div className="bg-gray-200 w-[80%] h-2 rounded-md">
              <div className="bg-green-500 rounded-md h-2 w-[75%]" />
            </div>
            <p>Compared to Last Week</p>
          </div>
        </div>
      </div>
      <div className="col-span-2 row-span-2 flex sm:hidden flex-col justify-around  bg-white rounded-lg shadow-lg p-4">
        <div className="flex">
          <BlueDisk />
          Attempts
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
              } border-b-[1.5px]   py-2`}
            >
              <div
                className={`block bg-gradient-to-r ${attempt.color} to-white w-5 h-3 mr-4`}
              />

              <p>{attempt.title}</p>
              <p className="ml-auto">{attempt.total}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StatsGrid;
