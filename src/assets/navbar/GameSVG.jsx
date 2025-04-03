import * as React from "react";
import Svg, { Path } from "react-native-svg";

const GameSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={25}
        height={25}
        fill="none"
        {...props}
    >
        <Path
            fill={props.fill}
            d="M12.04 2.032a9.98 9.98 0 0 1 7.743 3.671l-6.329 6.33 6.329 6.328a9.98 9.98 0 0 1-7.743 3.671c-5.523 0-10-4.477-10-10s4.477-10 10-10Zm0 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"
        />
    </Svg>
);

export default GameSVG;
