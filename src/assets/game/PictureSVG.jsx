import * as React from "react"
import Svg, { Path } from "react-native-svg"
const PictureSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={38}
        height={37}
        fill="none"
        {...props}
    >
        <Path
            fill="#fff"
            fillOpacity={0.6}
            d="M35 37a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3a3 3 0 0 0-3 3v31a3 3 0 0 0 3 3h32ZM9.343 24.423a3 3 0 0 1 4.627-.075l.558.655a3 3 0 0 0 4.628-.077l2.736-3.432a3 3 0 0 1 4.722.04l3.443 4.469c1.52 1.972.113 4.83-2.377 4.83H10.458c-2.514 0-3.913-2.907-2.344-4.872l1.23-1.538Z"
        />
    </Svg>
)
export default PictureSVG
