import Svg, { Ellipse, Path } from "react-native-svg";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export const HomeIcon = (props) => {
  return <FontAwesome5 name="home" size={24} color="black" {...props} />;
};

export const LogoIcon = ({ width, height, ...props }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={width || 120}
    height={height || 120}
    viewBox="0 0 120 120"
    {...props}
  >
    <Ellipse
      cx={61.196}
      cy={105.11}
      rx={33.998}
      ry={11.333}
      style={{
        opacity: 1,
        fill: "#5e5d5c",
        fillOpacity: 1,
      }}
    />
    <Path
      d="M61.479 5.666a33.998 32.015 0 0 0-33.997 32.016 33.998 32.015 0 0 0 6.051 18.132l-.101-.002s12.692 16.734 17.775 25.883c4.263 7.672 10.555 24.123 10.555 24.123s6.236-15.813 10.263-23.275c4.865-9.015 16.5-25.544 16.827-26.008a33.998 32.015 0 0 0 6.625-18.853A33.998 32.015 0 0 0 61.479 5.666Zm.283 17.566a13.316 13.316 0 0 1 13.316 13.315 13.316 13.316 0 0 1-13.316 13.316 13.316 13.316 0 0 1-13.315-13.316 13.316 13.316 0 0 1 13.315-13.315Z"
      style={{
        opacity: 1,
        fill: "#e95d0c",
        fillOpacity: 1,
        strokeWidth: 1.25572,
      }}
    />
  </Svg>
);
