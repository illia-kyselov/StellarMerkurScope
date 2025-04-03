import * as React from "react"
import Svg, { Path } from "react-native-svg"
const HomeSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={25}
        height={25}
        fill="none"
        {...props}
    >
        <Path
            fill={props.fill}
            fillRule="evenodd"
            d="M13.667 2.325a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 1 0 1.414 1.414l.293-.293v6.586a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-6.586l.293.293a1 1 0 0 0 1.414-1.414l-9-9Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default HomeSVG
