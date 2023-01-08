import { Attempts, BlueDisk } from "../../../public/constants";
import styles from "../../../public/style";
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
      <div className="col-span-2 sm:col-span-3 row-span-2 bg-white p-4 rounded-lg shadow-lg ">
        <div className="flex ">
          <BlueDisk />
          <p className={`${styles.gridTitle} ml-2`}>Net Sales</p>
          <p className="ml-auto bg-[#4278B8] text-white p-2 rounded mb-3 font-bold text-[18px]">
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
                <RenderTotalCash />{" "}
                <span
                  className={`${styles.smallText} text-[12px] text-gray-500`}
                >
                  Compared to Last Week
                </span>
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
                <RenderDelivery />{" "}
                <span
                  className={`${styles.smallText} text-[12px] text-gray-500`}
                >
                  Compared to Last Week
                </span>
              </p>
            </div>
          </div>
          {/* <div className="w-2/3 mt-4 "> */}
          <RenderLineChart />
          {/* </div> */}
        </div>
      </div>
      <div className="flex flex-col  bg-white rounded-lg shadow-lg px-4">
        <div className="flex pt-4">
          <BlueDisk />
          <p className={`${styles.gridTitle} ml-2`}>Pending</p>
        </div>

        <p className="my-4 text-[18px]">2,755,890 LE</p>
        <div className="flex justify-start flex-wrap">
          <p className="text-[#17A21A] font-semibold text-[18px] mr-2">15%</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 34 28"
            fill="none"
          >
            <path
              d="M0 18.5L2.55574 7.57185C2.75423 6.72315 3.86785 6.51692 4.35708 7.23827L4.94551 8.10589C5.42263 8.80939 6.50428 8.63453 6.73543 7.81653L8.51152 1.5315C8.76159 0.646586 9.97288 0.539888 10.3738 1.36746L11.7276 4.16209C12.0163 4.75808 12.7942 4.91389 13.2902 4.47509L14.4529 3.4465C14.9293 3.02499 15.673 3.14963 15.986 3.70344L18.1667 7.5618C18.3441 7.87568 18.6767 8.06977 19.0373 8.06977H20.9459C21.3065 8.06977 21.6391 7.87568 21.8165 7.5618L23.7345 4.16826C24.1173 3.49097 25.0928 3.49097 25.4756 4.16826L26.6284 6.2079C27.0459 6.94654 28.1356 6.86242 28.4348 6.06846L29.6781 2.7685C30.019 1.8638 31.3177 1.92134 31.5772 2.85264L34.5476 13.5116"
              stroke="url(#paint0_linear_1_514)"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_514"
                x1="32.5"
                y1="-0.999997"
                x2="-3.5"
                y2="27"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#17A21A" />
                <stop offset="1" stop-color="#A9FFAB" />
              </linearGradient>
            </defs>
          </svg>{" "}
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
        <div className="flex">
          <BlueDisk />
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
          <BlueDisk />
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
              <div
                className={`bg-gradient-to-r ${attempt.color} to-white w-5 h-4 mr-4`}
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
          <p className={`${styles.gridTitle} ml-2`}>Daily Orders</p>
        </div>
        <div className="flex justify-center flex-wrap ml-2 mt-6">
          <CircleProgressBar progress={75} />
          <div className="block md:hidden text-black bg-gray-300 rounded-md text-center p-4">
            10
          </div>
          <div className="flex flex-col">
            <div className="flex flex-wrap">
              <p className="text-[16px] mr-1">63%</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 12"
                fill="none"
              >
                <path
                  d="M1.97596e-06 10.4418L2.42449e-06 5.31119C2.44265e-06 5.10337 0.0825582 4.90406 0.22951 4.75711C0.376462 4.61016 0.575772 4.5276 0.783591 4.5276C0.991412 4.5276 1.19072 4.61016 1.33767 4.75711C1.48462 4.90406 1.56718 5.10337 1.56718 5.31119L1.56718 8.5014L6.92764 3.14175C7.00001 3.06843 7.08622 3.0102 7.18127 2.97046C7.27632 2.93073 7.37831 2.91026 7.48134 2.91026C7.58436 2.91026 7.68635 2.93073 7.7814 2.97046C7.87645 3.0102 7.96266 3.06843 8.03503 3.14175L10.3947 5.50385L15.7042 0.19439C15.8541 0.0648307 16.0476 -0.00308522 16.2457 0.00431913C16.4437 0.0117235 16.6316 0.0938987 16.7715 0.234295C16.9114 0.374691 16.9929 0.562878 16.9996 0.760953C17.0062 0.959027 16.9376 1.15228 16.8075 1.30178L10.9484 7.16493C10.7983 7.30585 10.6002 7.38429 10.3943 7.38429C10.1884 7.38429 9.99028 7.30585 9.8402 7.16493L7.47972 4.80283L2.62276 9.65979L5.93197 9.65979C6.03693 9.65641 6.14151 9.67417 6.23948 9.71201C6.33745 9.74985 6.42681 9.807 6.50225 9.88006C6.5777 9.95312 6.63769 10.0406 6.67866 10.1373C6.71963 10.234 6.74074 10.338 6.74074 10.443C6.74074 10.548 6.71963 10.6519 6.67866 10.7486C6.63769 10.8453 6.5777 10.9328 6.50225 11.0059C6.42681 11.0789 6.33745 11.1361 6.23948 11.1739C6.14151 11.2118 6.03693 11.2295 5.93197 11.2262L0.78521 11.2262C0.682074 11.2265 0.579889 11.2064 0.484531 11.1671C0.389175 11.1278 0.302523 11.0701 0.229557 10.9972C0.15659 10.9243 0.0987473 10.8377 0.0593529 10.7424C0.0199585 10.6471 -0.000211656 10.5449 1.97596e-06 10.4418Z"
                  fill="#17A21A"
                />
              </svg>
            </div>
            <span className={`${styles.smallText} text-[16px] text-gray-500`}>
              Compared to yesterday
            </span>
          </div>
        </div>
      </div>
      <div className="bg-white w-full rounded-lg shadow-lg p-4">
        <div className="flex">
          <BlueDisk />
          <p className={`${styles.gridTitle} ml-2`}>Success Rate</p>
        </div>
        <div className="flex justify-center flex-wrap items-center mt-4">
          <div className="mx-1">
            <RenderPieChart />
          </div>
          <div className="block md:hidden text-black bg-gray-300 rounded-md text-center p-4">
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
        <div className="flex">
          <BlueDisk />
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 12"
                fill="none"
              >
                <path
                  d="M12 1.27633V4.89791C12 5.0446 11.9417 5.18529 11.838 5.28902C11.7343 5.39275 11.5936 5.45103 11.4469 5.45103C11.3002 5.45103 11.1595 5.39275 11.0558 5.28902C10.952 5.18529 10.8938 5.0446 10.8938 4.89791V2.64599L7.1099 6.42927C7.05882 6.48103 6.99796 6.52213 6.93087 6.55018C6.86378 6.57824 6.79178 6.59268 6.71906 6.59268C6.64634 6.59268 6.57434 6.57824 6.50724 6.55018C6.44015 6.52213 6.3793 6.48103 6.32822 6.42927L4.66257 4.76191L0.914709 8.50977C0.808844 8.60122 0.672257 8.64916 0.532457 8.64393C0.392658 8.63871 0.260031 8.5807 0.16129 8.4816C0.0625494 8.3825 0.00502916 8.24966 0.000314484 8.10984C-0.0044002 7.97002 0.044041 7.83361 0.135882 7.72808L4.27172 3.58938C4.37767 3.48991 4.51753 3.43454 4.66285 3.43454C4.80817 3.43454 4.94804 3.48991 5.05398 3.58938L6.7202 5.25675L10.1486 1.82831H7.81273C7.73864 1.83069 7.66482 1.81815 7.59566 1.79144C7.52651 1.76473 7.46343 1.72439 7.41017 1.67282C7.35692 1.62125 7.31457 1.5595 7.28565 1.49124C7.25673 1.42298 7.24183 1.34961 7.24183 1.27547C7.24183 1.20134 7.25673 1.12796 7.28565 1.0597C7.31457 0.991443 7.35692 0.929693 7.41017 0.878122C7.46343 0.826551 7.52651 0.786212 7.59566 0.759501C7.66482 0.732791 7.73864 0.720254 7.81273 0.722637H11.4457C11.5185 0.722411 11.5907 0.736574 11.658 0.764313C11.7253 0.792051 11.7865 0.832818 11.838 0.884271C11.8895 0.935724 11.9303 0.996848 11.9581 1.06413C11.9859 1.13141 12.0001 1.20353 12 1.27633Z"
                  fill="#17A21A"
                />
              </svg>
            </div>
            <span className={`${styles.smallText} text-[16px] text-gray-500`}>
              Compared to yesterday
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-white rounded-lg shadow-lg p-4">
        <div className="flex">
          <BlueDisk />
          <p className={`${styles.gridTitle} ml-2`}>Gifts</p>
        </div>
        <div className="flex my-auto justify-center items-center">
          <div className="flex items-center  bg-gray-100 p-2 rounded-md mr-2">
            <p className="border-b-green-400 border-b-2 font-bold text-[18px]">
              10
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="23"
              viewBox="0 0 28 23"
              fill="none"
              className="ml-2"
            >
              <path
                d="M5.81407 0.119392C5.679 0.273719 5.64439 0.641253 5.74874 0.8115C5.78247 0.866496 6.16897 1.04619 6.60768 1.21087C7.67532 1.61177 8.62359 2.16745 9.55013 2.9352C10.6575 3.85286 11.7434 5.14947 12.3659 6.29748C12.5097 6.56279 12.7072 6.81744 12.8048 6.86337C13.046 6.97709 13.3472 6.85849 13.4895 6.59364C13.5965 6.3946 13.5897 6.35948 13.357 5.90709C12.9035 5.02508 12.1351 3.99309 11.2455 3.0714C9.97661 1.75665 8.81639 0.941908 7.37912 0.35629C6.44109 -0.0258698 5.99965 -0.0926735 5.81407 0.119392ZM21.0773 0.173626C18.7068 1.03682 16.5779 2.81949 15.0634 5.20935C14.4703 6.14528 14.392 6.35042 14.5304 6.60544C14.6684 6.85979 14.9724 6.97527 15.2098 6.86337C15.3073 6.81744 15.5048 6.56279 15.6486 6.29748C16.2711 5.14947 17.357 3.85286 18.4644 2.9352C19.3909 2.16745 20.3392 1.61177 21.4068 1.21087C21.8456 1.04619 22.232 0.866496 22.2658 0.8115C22.374 0.634854 22.3343 0.244772 22.1946 0.114059C22.0135 -0.0555016 21.6539 -0.0363062 21.0773 0.173626ZM12.0188 1.28293C11.9378 1.36672 11.8715 1.49888 11.8715 1.57666C11.8715 1.65451 12.0712 2.16007 12.3152 2.70021C13.0519 4.33077 12.9766 4.21247 13.2964 4.23966C13.6441 4.26922 13.86 4.09349 13.86 3.78095C13.86 3.53925 13.1646 1.88866 12.8663 1.42256C12.7091 1.17682 12.6389 1.13059 12.4228 1.13059C12.2643 1.13059 12.1098 1.18886 12.0188 1.28293ZM15.2617 1.28034C14.9845 1.56706 14.1545 3.44708 14.1545 3.78826C14.1545 4.09394 14.3731 4.26899 14.7181 4.23966C15.0379 4.21247 14.9626 4.33077 15.6993 2.70021C15.9433 2.16007 16.143 1.65451 16.143 1.57666C16.143 1.19016 15.5438 0.988602 15.2617 1.28034ZM6.68272 4.22253C4.82309 4.80974 4.14186 5.05654 4.02543 5.1852C3.75971 5.47862 1.19388 8.29275 0.587705 8.95561C-0.381845 10.0156 -0.328673 10.0817 2.10577 10.8416C3.1142 11.1564 3.95097 11.4139 3.96533 11.4139C3.97969 11.4139 3.9914 13.2796 3.9914 15.56C3.9914 19.1271 4.00672 19.7217 4.10091 19.8192C4.23753 19.9605 4.01983 19.8888 9.45962 21.5833L14.0073 23L18.5549 21.5833C23.9947 19.8888 23.777 19.9605 23.9136 19.8192C24.0078 19.7217 24.0231 19.1271 24.0231 15.56C24.0231 13.2796 24.0359 11.4139 24.0516 11.4139C24.0673 11.4139 24.9041 11.1566 25.9112 10.8421C27.8166 10.2471 28 10.1527 28 9.76807C28 9.63797 27.6701 9.22496 26.8401 8.31568C26.2021 7.61679 25.2721 6.59707 24.7733 6.04961C24.2746 5.50216 23.8272 5.03323 23.7791 5.00764C23.731 4.98204 22.5548 4.6075 21.1652 4.17522C18.426 3.32323 18.3452 3.31157 18.146 3.74126C18.0668 3.91212 18.0668 3.98616 18.1458 4.15846C18.2474 4.37982 18.4324 4.45272 20.817 5.21095L21.6983 5.49119L17.8528 6.69061L14.0073 7.89003L10.1593 6.68984L6.31125 5.48959L7.15818 5.22039C7.62399 5.07231 8.39315 4.82772 8.86736 4.67697C9.74124 4.3991 9.95673 4.25101 9.95673 3.92857C9.95673 3.71019 9.62407 3.41456 9.38929 3.42431C9.27609 3.42903 8.05813 3.78819 6.68272 4.22253ZM11.4481 8.22618C12.2886 8.48623 12.9762 8.72176 12.9762 8.74964C12.9762 8.84204 9.95143 12.0995 9.86563 12.0995C9.7338 12.0995 1.67811 9.58015 1.61742 9.5199C1.58767 9.49035 2.25638 8.70911 3.10345 7.78376L4.64368 6.10141L7.28176 6.92735C8.73273 7.38165 10.6075 7.96612 11.4481 8.22618ZM24.9006 7.77417C25.7533 8.705 26.4266 9.49027 26.3969 9.51929C26.3363 9.57855 18.2784 12.0995 18.1496 12.0995C18.0664 12.0995 15.0383 8.84059 15.0383 8.75101C15.0383 8.7245 16.9025 8.11725 19.1809 7.40153C21.4594 6.68573 23.3295 6.096 23.3369 6.09097C23.3442 6.08595 24.0479 6.84341 24.9006 7.77417ZM13.4707 21.6683C13.4586 21.6808 11.5532 21.1012 9.23647 20.3802L5.02429 19.0693L5.02333 15.4321C5.02274 12.8803 5.04616 11.7948 5.10191 11.7948C5.14558 11.7948 6.27863 12.1383 7.61965 12.5581C9.36012 13.1029 10.1053 13.3046 10.2232 13.2627C10.3141 13.2304 11.0784 12.4517 11.9217 11.5322L13.4549 9.86047L13.4738 15.7531C13.4842 18.9939 13.4827 21.6558 13.4707 21.6683ZM16.4189 11.8854C17.0926 12.6265 17.7171 13.2518 17.8067 13.2751C17.9038 13.3003 18.9505 13.0102 20.4014 12.5561C21.7388 12.1374 22.8689 11.7948 22.9126 11.7948C22.9684 11.7948 22.9918 12.8804 22.9912 15.4321L22.9903 19.0693L18.8486 20.3565C16.5707 21.0644 14.6655 21.6594 14.6148 21.6786C14.5417 21.7064 14.5228 20.496 14.5228 15.7862V9.85879L14.8585 10.1984C15.043 10.3851 15.7452 11.1443 16.4189 11.8854Z"
                fill="#F25A29"
              />
            </svg>
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
        <div className="flex">
          <BlueDisk />
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
              <div
                className={` bg-gradient-to-r bg-black ${attempt.color} to-white w-5 h-3 mr-4`}
              />
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
