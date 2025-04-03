import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const BackButtonSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={44}
        height={44}
        fill="none"
        {...props}
    >
        <Rect width={44} height={44} fill="#fff" rx={22} />
        <Path
            fill="#01366D"
            fillRule="evenodd"
            d="M16.517 21.222 26.504 11 29 13.555 20.261 22.5 29 31.445 26.504 34l-9.987-10.222A1.829 1.829 0 0 1 16 22.5c0-.48.186-.939.517-1.278Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default BackButtonSVG
