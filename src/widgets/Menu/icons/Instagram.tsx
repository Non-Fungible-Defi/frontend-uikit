import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg
      height="30"
      width="30"
      viewBox="0 0 225.000000 225.000000"
      enable-background="new 0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
        <g transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)" stroke="none">
            <path d="M972 2230 c-235 -33 -462 -148 -633 -319 -437 -437 -437 -1135 0
            -1572 329 -330 821 -420 1247 -229 231 104 450 323 554 554 285 636 -71 1369
            -748 1542 -109 28 -311 39 -420 24z m556 -468 c122 -39 196 -114 235 -236 21
            -67 22 -88 22 -401 0 -313 -1 -334 -22 -401 -27 -84 -74 -150 -140 -193 -87
            -58 -120 -63 -428 -68 -423 -7 -518 10 -620 112 -95 94 -115 190 -115 545 0
            367 19 459 115 555 101 101 179 115 605 110 254 -2 292 -5 348 -23z"/>
            <path d="M833 1660 c-91 -10 -157 -41 -193 -92 -49 -68 -55 -114 -55 -448 0
            -353 6 -391 75 -460 69 -69 106 -75 465 -75 359 0 396 6 465 75 69 69 75 106
            75 465 0 359 -6 396 -75 465 -65 65 -103 72 -415 75 -148 2 -302 0 -342 -5z
            m698 -129 c36 -36 37 -73 4 -106 -50 -51 -135 -18 -135 52 0 42 38 83 75 83
            16 0 38 -12 56 -29z m-301 -83 c81 -23 171 -107 209 -193 85 -196 -42 -424
            -259 -465 -232 -44 -444 182 -386 411 51 199 237 304 436 247z"/>
            <path d="M1034 1326 c-43 -19 -101 -82 -115 -123 -6 -19 -9 -63 -7 -98 4 -73
            34 -124 95 -165 31 -22 48 -25 117 -25 72 0 86 3 121 27 64 44 89 89 93 169 4
            59 1 74 -23 118 -41 75 -91 105 -179 109 -45 1 -82 -3 -102 -12z"/>
        </g>
    </Svg>
  );
};

export default Icon;
