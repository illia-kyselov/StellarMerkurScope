import * as React from "react"
import Svg, { Path } from "react-native-svg"
const PlusSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={52}
        height={51}
        fill="none"
        {...props}
    >
        <Path
            fill="#000"
            d="M47.5 29.476H29.583v17.916a3.583 3.583 0 1 1-7.166 0V29.476H4.5a3.583 3.583 0 1 1 0-7.167h17.917V4.392a3.583 3.583 0 1 1 7.166 0V22.31H47.5a3.583 3.583 0 0 1 0 7.167Z"
        />
    </Svg>
)
export default PlusSVG
