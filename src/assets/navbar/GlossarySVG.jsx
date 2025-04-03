import * as React from "react";
import Svg, { Path } from "react-native-svg";

const GlossarySVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={25}
        fill="none"
        {...props}
    >
        <Path
            fill={props.fill}
            d="M18 22.332a2 2 0 0 0 2-2v-16a2 2 0 0 0-2-2h-6v7l-2.5-1.5-2.5 1.5v-7H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12Z"
        />
    </Svg>
);

export default GlossarySVG;
