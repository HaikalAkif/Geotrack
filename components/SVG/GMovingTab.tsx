import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { GeotrackerTheme } from "../../theme/GeotrackerTheme";

const GMovingTab = (props: SvgProps) => (
    <Svg width={264} height={105} fill="none" {...props}>
        <Path
            d="M28.922 22C39.032 69.428 81.555 105 132 105s92.967-35.572 103.078-83C238.579 9.315 250.202 0 264 0H0c13.798 0 25.42 9.315 28.922 22Z"
            fill='#00c2cb'
        />
    </Svg>
);

export default GMovingTab;
