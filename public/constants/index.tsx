import React from "react";

import icon1 from "../assets/icon1.jpg";
import icon2 from "../assets/icon2.jpg";
import icon3 from "../assets/icon3.jpg";
import icon4 from "../assets/icon4.jpg";
import icon5 from "../assets/icon5.jpg";
import icon6 from "../assets/icon6.jpg";
import icon7 from "../assets/icon7.jpg";
import icon8 from "../assets/icon8.jpg";
import icon9 from "../assets/icon9.jpg";

export const profileIcons = [
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  icon6,
  icon7,
  icon8,
  icon9,
];

export const sidebarItems = [
  "Dashboard",
  "My Shipments",
  "My Customers",
  "Reports",
  "Cash Transfers",
  "Invoices",
  "Integrations",
  "Marketing Tools",
  "International Princess",
  "Support",
  "Sign Out",
];

// export const Disk = (fill: string | undefined) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="20"
//     height="19"
//     viewBox="0 0 20 19"
//     fill="none"
//   >
//     <path
//       d="M16.1405 8.07994V1.72638C16.14 1.33628 15.9882 0.962314 15.7184 0.686471C15.4486 0.410628 15.0828 0.255422 14.7012 0.254883H1.68853C1.30698 0.255422 0.9412 0.410628 0.671401 0.686471C0.401601 0.962314 0.249795 1.33628 0.249268 1.72638L0.249268 15.0306C0.249795 15.4207 0.401601 15.7946 0.671401 16.0705C0.9412 16.3463 1.30698 16.5015 1.68853 16.5021H10.0668C10.5641 17.195 11.2138 17.7586 11.9635 18.1474C12.7132 18.5362 13.5419 18.7393 14.3825 18.7403C15.2231 18.7413 16.0522 18.5401 16.8028 18.153C17.5533 17.766 18.2043 17.2039 18.7032 16.5121C19.2021 15.8204 19.5348 15.0183 19.6746 14.1708C19.8143 13.3234 19.7572 12.4541 19.5077 11.6334C19.2583 10.8126 18.8236 10.0634 18.2386 9.44608C17.6537 8.8288 16.935 8.36082 16.1405 8.07994ZM6.7823 1.45309H9.60946V4.75963L8.41257 4.27117C8.27296 4.21425 8.11731 4.21425 7.9777 4.27117L6.78081 4.75963L6.7823 1.45309ZM1.68853 15.3044C1.6175 15.3044 1.54939 15.2755 1.49916 15.2242C1.44894 15.1728 1.42073 15.1032 1.42073 15.0306V1.72638C1.42073 1.65377 1.44894 1.58412 1.49916 1.53278C1.54939 1.48143 1.6175 1.45258 1.68853 1.45258H5.60935V5.64376C5.60936 5.74164 5.63282 5.83803 5.6777 5.92449C5.72257 6.01096 5.78748 6.08487 5.86675 6.13975C5.94602 6.19464 6.03724 6.22883 6.13242 6.23934C6.22761 6.24985 6.32386 6.23635 6.41276 6.20003L8.19463 5.47193L9.97651 6.20003C10.0654 6.23635 10.1617 6.24985 10.2568 6.23934C10.352 6.22883 10.4433 6.19464 10.5225 6.13975C10.6018 6.08487 10.6667 6.01096 10.7116 5.92449C10.7564 5.83803 10.7799 5.74164 10.7799 5.64376V1.45309H14.7007C14.7718 1.45309 14.8399 1.48194 14.8901 1.53329C14.9403 1.58463 14.9685 1.65428 14.9685 1.72689V7.81175C14.0481 7.70965 13.1174 7.853 12.2672 8.22783C11.4171 8.60266 10.6763 9.1962 10.1171 9.95065C9.5579 10.7051 9.19931 11.5947 9.07627 12.5329C8.95323 13.4712 9.06991 14.426 9.41497 15.3044H1.68853ZM14.39 17.5478C13.5615 17.5478 12.7516 17.2966 12.0627 16.826C11.3738 16.3554 10.8369 15.6865 10.5198 14.9039C10.2027 14.1213 10.1198 13.2601 10.2814 12.4293C10.4431 11.5985 10.842 10.8353 11.4279 10.2364C12.0137 9.63738 12.7602 9.22947 13.5728 9.06421C14.3854 8.89895 15.2277 8.98376 15.9932 9.30793C16.7586 9.6321 17.4129 10.1811 17.8732 10.8854C18.3335 11.5897 18.5792 12.4178 18.5792 13.2649C18.5771 14.3998 18.135 15.4876 17.3499 16.2899C16.5648 17.0922 15.5006 17.5437 14.3905 17.5453L14.39 17.5478Z"
//       fill={fill}
//     />
//     <path
//       d="M14.3906 18.9985C13.4951 18.9981 12.6126 18.7787 11.8168 18.3586C11.0864 17.9699 10.4474 17.4235 9.94418 16.7571H1.68861C1.24093 16.7565 0.811729 16.5745 0.495167 16.2508C0.178605 15.9271 0.000527933 15.4883 0 15.0306V1.72644C0.000527933 1.26872 0.178605 0.829911 0.495167 0.506258C0.811729 0.182605 1.24093 0.000539758 1.68861 0L14.7013 0C15.149 0.000539758 15.5782 0.182605 15.8948 0.506258C16.2113 0.829911 16.3894 1.26872 16.3899 1.72644V7.90307C17.6153 8.38134 18.638 9.28335 19.2806 10.4524C19.9231 11.6214 20.1448 12.9837 19.9071 14.3024C19.6694 15.6212 18.9875 16.8132 17.9796 17.6714C16.9718 18.5295 15.7017 18.9996 14.3901 19L14.3906 18.9985ZM1.68861 0.509875C1.37315 0.51028 1.07072 0.638583 0.847659 0.866646C0.624593 1.09471 0.499101 1.40391 0.498705 1.72644V15.0306C0.499101 15.3531 0.624593 15.6623 0.847659 15.8904C1.07072 16.1185 1.37315 16.2468 1.68861 16.2472H10.195L10.2698 16.3492C10.7383 16.9992 11.3461 17.531 12.0467 17.9038C12.7704 18.289 13.5747 18.489 14.3906 18.4866C15.5987 18.4847 16.7671 18.0456 17.6887 17.247C18.6102 16.4485 19.2255 15.3421 19.4253 14.124C19.6251 12.9059 19.3966 11.6548 18.7803 10.5925C18.164 9.53021 17.1997 8.72537 16.0583 8.32066L15.8907 8.26151V1.72644C15.8903 1.404 15.7649 1.09487 15.542 0.866825C15.319 0.638778 15.0167 0.510415 14.7013 0.509875H1.68861ZM14.3906 17.8003C13.5128 17.8003 12.6546 17.5341 11.9247 17.0355C11.1948 16.5369 10.626 15.8281 10.29 14.9989C9.95408 14.1698 9.86618 13.2573 10.0374 12.3771C10.2087 11.4968 10.6314 10.6882 11.2522 10.0536C11.8729 9.41896 12.6637 8.98677 13.5247 8.81167C14.3857 8.63658 15.2781 8.72644 16.0892 9.06991C16.9002 9.41337 17.5934 9.995 18.0811 10.7413C18.5688 11.4875 18.8291 12.3649 18.8291 13.2624C18.8275 14.4654 18.3594 15.6187 17.5274 16.4694C16.6953 17.32 15.5673 17.7986 14.3906 17.8003ZM14.3906 9.23435C13.6114 9.23435 12.8497 9.47059 12.2018 9.9132C11.5539 10.3558 11.049 10.9849 10.7508 11.7209C10.4526 12.4569 10.3745 13.2668 10.5266 14.0482C10.6786 14.8296 11.0538 15.5473 11.6048 16.1106C12.1558 16.6739 12.8578 17.0576 13.622 17.213C14.3863 17.3684 15.1784 17.2886 15.8983 16.9838C16.6182 16.6789 17.2335 16.1626 17.6664 15.5002C18.0993 14.8378 18.3304 14.059 18.3304 13.2624C18.3293 12.1943 17.914 11.1702 17.1754 10.4148C16.4368 9.65938 15.4353 9.23431 14.3906 9.23283V9.23435ZM9.78409 15.5594H1.68861C1.55158 15.5591 1.42025 15.5033 1.3234 15.4042C1.22655 15.3051 1.17209 15.1707 1.17196 15.0306V1.72644C1.17222 1.58643 1.22674 1.45222 1.32357 1.35322C1.42041 1.25422 1.55167 1.19848 1.68861 1.19821H5.85879V5.64432C5.85879 5.70053 5.87225 5.75589 5.89801 5.80555C5.92376 5.85521 5.96103 5.89767 6.00654 5.92921C6.05205 5.96075 6.10442 5.98041 6.15908 5.98648C6.21374 5.99255 6.26902 5.98483 6.32009 5.96401L8.19472 5.1992L10.0694 5.96401C10.1205 5.98457 10.1757 5.99215 10.2304 5.98612C10.285 5.98008 10.3374 5.9606 10.383 5.92934C10.4289 5.89809 10.4665 5.85579 10.4926 5.80618C10.5187 5.75657 10.5324 5.70116 10.5326 5.64483V1.19821H14.7028C14.8399 1.19834 14.9714 1.25409 15.0684 1.35322C15.1653 1.45235 15.2198 1.58676 15.22 1.72695V8.0958L14.9437 8.06521C14.2297 7.98549 13.5073 8.06046 12.8236 8.28524C12.1398 8.51003 11.5101 8.87957 10.9753 9.3698C10.4406 9.86003 10.0129 10.4599 9.7201 11.1305C9.42729 11.801 9.27594 12.527 9.27591 13.2614C9.27494 13.9286 9.39991 14.5897 9.64396 15.2086L9.78409 15.5594ZM1.68861 1.70808C1.68372 1.70808 1.67903 1.71007 1.67557 1.71361C1.67211 1.71715 1.67016 1.72194 1.67016 1.72695V15.0306C1.67016 15.0356 1.67211 15.0404 1.67557 15.044C1.67903 15.0475 1.68372 15.0495 1.68861 15.0495H9.05848C8.78226 14.1879 8.70969 13.2717 8.84669 12.3759C8.9837 11.4802 9.32638 10.6303 9.84666 9.89613C10.3669 9.16191 11.05 8.5642 11.8398 8.152C12.6297 7.7398 13.5038 7.52484 14.3906 7.52474C14.4998 7.52474 14.6101 7.52831 14.7198 7.53443V1.72644C14.7198 1.72143 14.7178 1.71664 14.7144 1.7131C14.7109 1.70956 14.7062 1.70757 14.7013 1.70757H11.0299V5.64381C11.0299 5.78356 10.9965 5.92119 10.9324 6.04463C10.8683 6.16807 10.7756 6.27355 10.6624 6.35182C10.5492 6.43009 10.4189 6.47876 10.283 6.49355C10.147 6.50834 10.0096 6.48881 9.88284 6.43667L8.19322 5.7463L6.50361 6.43667C6.3768 6.48881 6.23941 6.50834 6.10349 6.49355C5.96758 6.47876 5.83729 6.43009 5.72406 6.35182C5.61083 6.27355 5.51811 6.16807 5.45404 6.04463C5.38997 5.92119 5.35651 5.78356 5.35659 5.64381V1.70808H1.68861ZM9.8579 5.13649L8.31989 4.50781C8.23979 4.47543 8.15064 4.47543 8.07054 4.50781L6.53303 5.13598V1.19821H9.8589L9.8579 5.13649ZM8.19522 3.97397C8.30129 3.97385 8.4064 3.99444 8.50491 4.03464L9.3592 4.38391V1.70808H7.03174V4.38493L7.88602 4.03617C7.98424 3.99534 8.08919 3.97405 8.19522 3.97346V3.97397Z"
//       fill={fill}
//     />
//     <path
//       d="M16.5235 12.7026H14.9371V11.0807C14.9371 10.9218 14.8754 10.7694 14.7655 10.657C14.6556 10.5447 14.5065 10.4816 14.3511 10.4816C14.1957 10.4816 14.0467 10.5447 13.9368 10.657C13.8269 10.7694 13.7651 10.9218 13.7651 11.0807V13.3017C13.7651 13.4606 13.8269 13.613 13.9368 13.7253C14.0467 13.8377 14.1957 13.9008 14.3511 13.9008H16.5235C16.6789 13.9008 16.8279 13.8377 16.9378 13.7253C17.0477 13.613 17.1094 13.4606 17.1094 13.3017C17.1094 13.1428 17.0477 12.9904 16.9378 12.8781C16.8279 12.7657 16.6789 12.7026 16.5235 12.7026Z"
//       fill={fill}
//     />
//     <path
//       d="M16.5236 14.1577H14.3512C14.1297 14.1575 13.9174 14.0674 13.7608 13.9073C13.6042 13.7472 13.5161 13.5301 13.5159 13.3037V11.0827C13.5159 10.8562 13.6039 10.6389 13.7605 10.4788C13.9172 10.3186 14.1297 10.2286 14.3512 10.2286C14.5727 10.2286 14.7852 10.3186 14.9419 10.4788C15.0985 10.6389 15.1865 10.8562 15.1865 11.0827V12.4497H16.5236C16.7451 12.4497 16.9576 12.5396 17.1142 12.6998C17.2709 12.86 17.3589 13.0772 17.3589 13.3037C17.3589 13.5302 17.2709 13.7474 17.1142 13.9076C16.9576 14.0678 16.7451 14.1577 16.5236 14.1577ZM14.3512 10.7385C14.262 10.7386 14.1764 10.775 14.1133 10.8395C14.0502 10.904 14.0147 10.9915 14.0146 11.0827V13.3037C14.0146 13.395 14.05 13.4825 14.1132 13.5471C14.1763 13.6116 14.2619 13.6479 14.3512 13.6479H16.5236C16.6128 13.6479 16.6985 13.6116 16.7616 13.5471C16.8247 13.4825 16.8602 13.395 16.8602 13.3037C16.8602 13.2124 16.8247 13.1249 16.7616 13.0603C16.6985 12.9958 16.6128 12.9595 16.5236 12.9595H14.6878V11.0827C14.688 11.0373 14.6795 10.9924 14.6626 10.9504C14.6458 10.9085 14.6211 10.8703 14.5898 10.8381C14.5585 10.806 14.5213 10.7805 14.4804 10.763C14.4395 10.7456 14.3955 10.7365 14.3512 10.7365V10.7385Z"
//       fill={fill}
//     />
//   </svg>
// );
