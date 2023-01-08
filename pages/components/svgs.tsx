const Disk = (fill: string | undefined) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 20 18"
        fill="none"
      >
        <path
          d="M16.1405 8.07994V1.72638C16.14 1.33628 15.9882 0.962314 15.7184 0.686471C15.4486 0.410628 15.0828 0.255422 14.7012 0.254883H1.68853C1.30698 0.255422 0.9412 0.410628 0.671401 0.686471C0.401601 0.962314 0.249795 1.33628 0.249268 1.72638L0.249268 15.0306C0.249795 15.4207 0.401601 15.7946 0.671401 16.0705C0.9412 16.3463 1.30698 16.5015 1.68853 16.5021H10.0668C10.5641 17.195 11.2138 17.7586 11.9635 18.1474C12.7132 18.5362 13.5419 18.7393 14.3825 18.7403C15.2231 18.7413 16.0522 18.5401 16.8028 18.153C17.5533 17.766 18.2043 17.2039 18.7032 16.5121C19.2021 15.8204 19.5348 15.0183 19.6746 14.1708C19.8143 13.3234 19.7572 12.4541 19.5077 11.6334C19.2583 10.8126 18.8236 10.0634 18.2386 9.44608C17.6537 8.8288 16.935 8.36082 16.1405 8.07994ZM6.7823 1.45309H9.60946V4.75963L8.41257 4.27117C8.27296 4.21425 8.11731 4.21425 7.9777 4.27117L6.78081 4.75963L6.7823 1.45309ZM1.68853 15.3044C1.6175 15.3044 1.54939 15.2755 1.49916 15.2242C1.44894 15.1728 1.42073 15.1032 1.42073 15.0306V1.72638C1.42073 1.65377 1.44894 1.58412 1.49916 1.53278C1.54939 1.48143 1.6175 1.45258 1.68853 1.45258H5.60935V5.64376C5.60936 5.74164 5.63282 5.83803 5.6777 5.92449C5.72257 6.01096 5.78748 6.08487 5.86675 6.13975C5.94602 6.19464 6.03724 6.22883 6.13242 6.23934C6.22761 6.24985 6.32386 6.23635 6.41276 6.20003L8.19463 5.47193L9.97651 6.20003C10.0654 6.23635 10.1617 6.24985 10.2568 6.23934C10.352 6.22883 10.4433 6.19464 10.5225 6.13975C10.6018 6.08487 10.6667 6.01096 10.7116 5.92449C10.7564 5.83803 10.7799 5.74164 10.7799 5.64376V1.45309H14.7007C14.7718 1.45309 14.8399 1.48194 14.8901 1.53329C14.9403 1.58463 14.9685 1.65428 14.9685 1.72689V7.81175C14.0481 7.70965 13.1174 7.853 12.2672 8.22783C11.4171 8.60266 10.6763 9.1962 10.1171 9.95065C9.5579 10.7051 9.19931 11.5947 9.07627 12.5329C8.95323 13.4712 9.06991 14.426 9.41497 15.3044H1.68853ZM14.39 17.5478C13.5615 17.5478 12.7516 17.2966 12.0627 16.826C11.3738 16.3554 10.8369 15.6865 10.5198 14.9039C10.2027 14.1213 10.1198 13.2601 10.2814 12.4293C10.4431 11.5985 10.842 10.8353 11.4279 10.2364C12.0137 9.63738 12.7602 9.22947 13.5728 9.06421C14.3854 8.89895 15.2277 8.98376 15.9932 9.30793C16.7586 9.6321 17.4129 10.1811 17.8732 10.8854C18.3335 11.5897 18.5792 12.4178 18.5792 13.2649C18.5771 14.3998 18.135 15.4876 17.3499 16.2899C16.5648 17.0922 15.5006 17.5437 14.3905 17.5453L14.39 17.5478Z"
          fill={fill}
        />
        <path
          d="M14.3906 18.9985C13.4951 18.9981 12.6126 18.7787 11.8168 18.3586C11.0864 17.9699 10.4474 17.4235 9.94418 16.7571H1.68861C1.24093 16.7565 0.811729 16.5745 0.495167 16.2508C0.178605 15.9271 0.000527933 15.4883 0 15.0306V1.72644C0.000527933 1.26872 0.178605 0.829911 0.495167 0.506258C0.811729 0.182605 1.24093 0.000539758 1.68861 0L14.7013 0C15.149 0.000539758 15.5782 0.182605 15.8948 0.506258C16.2113 0.829911 16.3894 1.26872 16.3899 1.72644V7.90307C17.6153 8.38134 18.638 9.28335 19.2806 10.4524C19.9231 11.6214 20.1448 12.9837 19.9071 14.3024C19.6694 15.6212 18.9875 16.8132 17.9796 17.6714C16.9718 18.5295 15.7017 18.9996 14.3901 19L14.3906 18.9985ZM1.68861 0.509875C1.37315 0.51028 1.07072 0.638583 0.847659 0.866646C0.624593 1.09471 0.499101 1.40391 0.498705 1.72644V15.0306C0.499101 15.3531 0.624593 15.6623 0.847659 15.8904C1.07072 16.1185 1.37315 16.2468 1.68861 16.2472H10.195L10.2698 16.3492C10.7383 16.9992 11.3461 17.531 12.0467 17.9038C12.7704 18.289 13.5747 18.489 14.3906 18.4866C15.5987 18.4847 16.7671 18.0456 17.6887 17.247C18.6102 16.4485 19.2255 15.3421 19.4253 14.124C19.6251 12.9059 19.3966 11.6548 18.7803 10.5925C18.164 9.53021 17.1997 8.72537 16.0583 8.32066L15.8907 8.26151V1.72644C15.8903 1.404 15.7649 1.09487 15.542 0.866825C15.319 0.638778 15.0167 0.510415 14.7013 0.509875H1.68861ZM14.3906 17.8003C13.5128 17.8003 12.6546 17.5341 11.9247 17.0355C11.1948 16.5369 10.626 15.8281 10.29 14.9989C9.95408 14.1698 9.86618 13.2573 10.0374 12.3771C10.2087 11.4968 10.6314 10.6882 11.2522 10.0536C11.8729 9.41896 12.6637 8.98677 13.5247 8.81167C14.3857 8.63658 15.2781 8.72644 16.0892 9.06991C16.9002 9.41337 17.5934 9.995 18.0811 10.7413C18.5688 11.4875 18.8291 12.3649 18.8291 13.2624C18.8275 14.4654 18.3594 15.6187 17.5274 16.4694C16.6953 17.32 15.5673 17.7986 14.3906 17.8003ZM14.3906 9.23435C13.6114 9.23435 12.8497 9.47059 12.2018 9.9132C11.5539 10.3558 11.049 10.9849 10.7508 11.7209C10.4526 12.4569 10.3745 13.2668 10.5266 14.0482C10.6786 14.8296 11.0538 15.5473 11.6048 16.1106C12.1558 16.6739 12.8578 17.0576 13.622 17.213C14.3863 17.3684 15.1784 17.2886 15.8983 16.9838C16.6182 16.6789 17.2335 16.1626 17.6664 15.5002C18.0993 14.8378 18.3304 14.059 18.3304 13.2624C18.3293 12.1943 17.914 11.1702 17.1754 10.4148C16.4368 9.65938 15.4353 9.23431 14.3906 9.23283V9.23435ZM9.78409 15.5594H1.68861C1.55158 15.5591 1.42025 15.5033 1.3234 15.4042C1.22655 15.3051 1.17209 15.1707 1.17196 15.0306V1.72644C1.17222 1.58643 1.22674 1.45222 1.32357 1.35322C1.42041 1.25422 1.55167 1.19848 1.68861 1.19821H5.85879V5.64432C5.85879 5.70053 5.87225 5.75589 5.89801 5.80555C5.92376 5.85521 5.96103 5.89767 6.00654 5.92921C6.05205 5.96075 6.10442 5.98041 6.15908 5.98648C6.21374 5.99255 6.26902 5.98483 6.32009 5.96401L8.19472 5.1992L10.0694 5.96401C10.1205 5.98457 10.1757 5.99215 10.2304 5.98612C10.285 5.98008 10.3374 5.9606 10.383 5.92934C10.4289 5.89809 10.4665 5.85579 10.4926 5.80618C10.5187 5.75657 10.5324 5.70116 10.5326 5.64483V1.19821H14.7028C14.8399 1.19834 14.9714 1.25409 15.0684 1.35322C15.1653 1.45235 15.2198 1.58676 15.22 1.72695V8.0958L14.9437 8.06521C14.2297 7.98549 13.5073 8.06046 12.8236 8.28524C12.1398 8.51003 11.5101 8.87957 10.9753 9.3698C10.4406 9.86003 10.0129 10.4599 9.7201 11.1305C9.42729 11.801 9.27594 12.527 9.27591 13.2614C9.27494 13.9286 9.39991 14.5897 9.64396 15.2086L9.78409 15.5594ZM1.68861 1.70808C1.68372 1.70808 1.67903 1.71007 1.67557 1.71361C1.67211 1.71715 1.67016 1.72194 1.67016 1.72695V15.0306C1.67016 15.0356 1.67211 15.0404 1.67557 15.044C1.67903 15.0475 1.68372 15.0495 1.68861 15.0495H9.05848C8.78226 14.1879 8.70969 13.2717 8.84669 12.3759C8.9837 11.4802 9.32638 10.6303 9.84666 9.89613C10.3669 9.16191 11.05 8.5642 11.8398 8.152C12.6297 7.7398 13.5038 7.52484 14.3906 7.52474C14.4998 7.52474 14.6101 7.52831 14.7198 7.53443V1.72644C14.7198 1.72143 14.7178 1.71664 14.7144 1.7131C14.7109 1.70956 14.7062 1.70757 14.7013 1.70757H11.0299V5.64381C11.0299 5.78356 10.9965 5.92119 10.9324 6.04463C10.8683 6.16807 10.7756 6.27355 10.6624 6.35182C10.5492 6.43009 10.4189 6.47876 10.283 6.49355C10.147 6.50834 10.0096 6.48881 9.88284 6.43667L8.19322 5.7463L6.50361 6.43667C6.3768 6.48881 6.23941 6.50834 6.10349 6.49355C5.96758 6.47876 5.83729 6.43009 5.72406 6.35182C5.61083 6.27355 5.51811 6.16807 5.45404 6.04463C5.38997 5.92119 5.35651 5.78356 5.35659 5.64381V1.70808H1.68861ZM9.8579 5.13649L8.31989 4.50781C8.23979 4.47543 8.15064 4.47543 8.07054 4.50781L6.53303 5.13598V1.19821H9.8589L9.8579 5.13649ZM8.19522 3.97397C8.30129 3.97385 8.4064 3.99444 8.50491 4.03464L9.3592 4.38391V1.70808H7.03174V4.38493L7.88602 4.03617C7.98424 3.99534 8.08919 3.97405 8.19522 3.97346V3.97397Z"
          fill={fill}
        />
        <path
          d="M16.5235 12.7026H14.9371V11.0807C14.9371 10.9218 14.8754 10.7694 14.7655 10.657C14.6556 10.5447 14.5065 10.4816 14.3511 10.4816C14.1957 10.4816 14.0467 10.5447 13.9368 10.657C13.8269 10.7694 13.7651 10.9218 13.7651 11.0807V13.3017C13.7651 13.4606 13.8269 13.613 13.9368 13.7253C14.0467 13.8377 14.1957 13.9008 14.3511 13.9008H16.5235C16.6789 13.9008 16.8279 13.8377 16.9378 13.7253C17.0477 13.613 17.1094 13.4606 17.1094 13.3017C17.1094 13.1428 17.0477 12.9904 16.9378 12.8781C16.8279 12.7657 16.6789 12.7026 16.5235 12.7026Z"
          fill={fill}
        />
        <path
          d="M16.5236 14.1577H14.3512C14.1297 14.1575 13.9174 14.0674 13.7608 13.9073C13.6042 13.7472 13.5161 13.5301 13.5159 13.3037V11.0827C13.5159 10.8562 13.6039 10.6389 13.7605 10.4788C13.9172 10.3186 14.1297 10.2286 14.3512 10.2286C14.5727 10.2286 14.7852 10.3186 14.9419 10.4788C15.0985 10.6389 15.1865 10.8562 15.1865 11.0827V12.4497H16.5236C16.7451 12.4497 16.9576 12.5396 17.1142 12.6998C17.2709 12.86 17.3589 13.0772 17.3589 13.3037C17.3589 13.5302 17.2709 13.7474 17.1142 13.9076C16.9576 14.0678 16.7451 14.1577 16.5236 14.1577ZM14.3512 10.7385C14.262 10.7386 14.1764 10.775 14.1133 10.8395C14.0502 10.904 14.0147 10.9915 14.0146 11.0827V13.3037C14.0146 13.395 14.05 13.4825 14.1132 13.5471C14.1763 13.6116 14.2619 13.6479 14.3512 13.6479H16.5236C16.6128 13.6479 16.6985 13.6116 16.7616 13.5471C16.8247 13.4825 16.8602 13.395 16.8602 13.3037C16.8602 13.2124 16.8247 13.1249 16.7616 13.0603C16.6985 12.9958 16.6128 12.9595 16.5236 12.9595H14.6878V11.0827C14.688 11.0373 14.6795 10.9924 14.6626 10.9504C14.6458 10.9085 14.6211 10.8703 14.5898 10.8381C14.5585 10.806 14.5213 10.7805 14.4804 10.763C14.4395 10.7456 14.3955 10.7365 14.3512 10.7365V10.7385Z"
          fill={fill}
        />
      </svg>
    </>
  );
};

const Single = (
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
);

const Bulk = (
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
);

const Plane = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="-3 0 18 14"
    fill="none"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.3498 0.0458869C12.1035 0.107676 11.913 0.19201 11.709 0.329476C11.6144 0.393249 10.9751 1.03463 10.2884 1.75482C9.60177 2.47497 9.02203 3.05748 9.00014 3.04922C8.95359 3.03169 2.38745 1.07387 2.08525 0.987408C1.90504 0.935863 1.86663 0.93507 1.76073 0.980843C1.69323 1.00999 1.28131 1.39468 0.820312 1.85906C0.0240865 2.66113 0 2.68963 0 2.83016C0 2.94148 0.0228966 2.99637 0.0991587 3.0679C0.153714 3.11905 1.43149 3.91048 2.9387 4.82661C4.44591 5.74274 5.69301 6.50593 5.71006 6.52255C5.72708 6.53922 4.96994 7.44366 4.02754 8.53246L2.31407 10.5121L1.3103 10.9417C0.233834 11.4023 0.108173 11.4802 0.108173 11.6869C0.108173 11.7957 0.239748 11.9377 1.63215 13.3317C2.95698 14.6581 3.17308 14.8603 3.28587 14.8785C3.51429 14.9156 3.58233 14.8112 4.06013 13.6902L4.48778 12.6869L6.48645 10.9576C7.58574 10.0064 8.48834 9.23238 8.49227 9.23746C8.4962 9.24255 9.25013 10.4966 10.1677 12.0242C11.0853 13.5518 11.8829 14.8462 11.9402 14.9008C12.0155 14.9725 12.0815 15 12.1782 15C12.3049 15 12.3588 14.9533 13.1873 14.1245C13.8715 13.44 14.0625 13.2289 14.0625 13.1571C14.0625 13.1067 13.5918 11.4599 13.0164 9.49768L11.9703 5.93002L12.124 5.78155C12.2085 5.69992 12.7848 5.14959 13.4046 4.55864C14.12 3.8764 14.5839 3.4056 14.6751 3.269C14.8857 2.95349 15 2.55855 15 2.14644C15 1.52533 14.8159 1.07333 14.3873 0.641849C14.0815 0.334129 13.7448 0.137507 13.3737 0.0499629C13.0984 -0.0149286 12.6001 -0.0169486 12.3498 0.0458869ZM13.5068 0.823719C14.0683 1.09847 14.4056 1.74197 14.3091 2.35392C14.239 2.79813 14.1828 2.8676 12.9087 4.08474C11.15 5.76478 11.2497 5.66122 11.2516 5.80474C11.2524 5.87263 11.7213 7.5189 12.2934 9.46312L13.3337 12.9981L12.7885 13.5477C12.3641 13.9756 12.2341 14.0875 12.2015 14.0527C12.1786 14.0281 11.4178 12.7744 10.511 11.2667C9.60418 9.7589 8.83745 8.49718 8.80716 8.46288C8.72585 8.37068 8.53756 8.3463 8.41482 8.41209C8.35788 8.44261 7.32303 9.32461 6.11517 10.3721L3.91907 12.2766L3.5656 13.1018C3.37118 13.5556 3.20665 13.9324 3.20001 13.939C3.19334 13.9457 2.7044 13.4673 2.11345 12.8759L1.03904 11.8007L1.8807 11.44L2.72236 11.0794L4.64142 8.86449C5.6969 7.64631 6.57505 6.60851 6.5929 6.55834C6.61359 6.50012 6.61067 6.42213 6.58489 6.3431C6.54732 6.22793 6.34677 6.09861 3.75 4.51525C2.21304 3.57813 0.939303 2.80426 0.919471 2.79557C0.899639 2.78691 1.13492 2.52886 1.44231 2.22219L2.0012 1.66457L5.53486 2.72252C7.47837 3.30442 9.10608 3.78081 9.15202 3.78124C9.19792 3.78164 9.26448 3.76645 9.29986 3.74751C9.33526 3.72854 9.95867 3.08976 10.6852 2.32802C11.7873 1.17245 12.0418 0.92396 12.2211 0.828408C12.6039 0.624283 13.0956 0.622479 13.5068 0.823719Z"
      fill="#4278B8"
    />
  </svg>
);

const Plus = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 12"
    fill="none"
    className="mt-1"
  >
    <path
      d="M8 16C7.75238 16 7.54762 15.919 7.38571 15.7571C7.22381 15.5952 7.14286 15.3905 7.14286 15.1429V8.85714H0.857143C0.609524 8.85714 0.404762 8.77619 0.242857 8.61429C0.0809525 8.45238 0 8.24762 0 8C0 7.75238 0.0809525 7.54762 0.242857 7.38571C0.404762 7.22381 0.609524 7.14286 0.857143 7.14286H7.14286V0.857143C7.14286 0.609524 7.22381 0.404762 7.38571 0.242857C7.54762 0.0809525 7.75238 0 8 0C8.24762 0 8.45238 0.0809525 8.61429 0.242857C8.77619 0.404762 8.85714 0.609524 8.85714 0.857143V7.14286H15.1429C15.3905 7.14286 15.5952 7.22381 15.7571 7.38571C15.919 7.54762 16 7.75238 16 8C16 8.24762 15.919 8.45238 15.7571 8.61429C15.5952 8.77619 15.3905 8.85714 15.1429 8.85714H8.85714V15.1429C8.85714 15.3905 8.77619 15.5952 8.61429 15.7571C8.45238 15.919 8.24762 16 8 16Z"
      fill="white"
    />
  </svg>
);

const arrowDown = (
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
);

const arrowUp = (
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
);

const Gift = (
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
);

const Line = (
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
  </svg>
);

export const SVG = {
  Disk,
  Plus,
  Single,
  Bulk,
  Plane,
  Line,
  arrowDown,
  arrowUp,
  Gift,
};