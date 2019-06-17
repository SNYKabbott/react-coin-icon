import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const SvgOmg = props => (
  <Svg width={32} height={32} viewBox="0 0 32 32" {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle fill="#1A56F0" cx={16} cy={16} r={16} />
      <Path
        d="M12.065 16.702a4.061 4.061 0 1 0 0 8.123 4.061 4.061 0 0 0 0-8.123zm0 6.894a2.833 2.833 0 1 1 0-5.668 2.833 2.833 0 0 1 0 5.669v-.001zM20.739 8.04a4.061 4.061 0 1 0 0 8.122 4.061 4.061 0 0 0 0-8.122zm0 6.893a2.832 2.832 0 1 1 0-5.664 2.832 2.832 0 0 1 0 5.664zM12.065 8.04h4.06v1.228h-1.151a4.063 4.063 0 1 1-2.91-1.228zm2.833 4.06a2.832 2.832 0 1 0-5.664-.002 2.832 2.832 0 0 0 5.664.003z"
        fill="#FFF"
        fillRule="nonzero"
      />
    </G>
  </Svg>
);

export default SvgOmg;
