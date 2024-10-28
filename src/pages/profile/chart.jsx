import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React from "react";
import ReactSpeedometer from "react-d3-speedometer";

export const Icon = styled(Box)(({ width, height, Spadding }) => ({
  position: "relative",
  width: width,
  height: height,
  paddingTop: Spadding,
}));

export const Spedometer = styled(Box)(({ width, height }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: width || "100%",
  height: height || "100%",
  backgroundImage: "url(/speedometer.svg)",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
}));

const Chart = ({ Size, Swidth, Sheight, value }) => {
  const dimensions = {
    width: Swidth || (Size === "small" ? 50.42 : 249.03),
    height: Sheight || (Size === "small" ? 30.37 : 155.84),
    padding: Size === "small" ? "10px" : "30px",
    needleHeightRatio: Size === "small" ? 0.65 : 0.6,
  };

  return (
    <Icon
      width={dimensions.width}
      height={dimensions.height}
      Spadding={dimensions.padding}
    >
      <Spedometer width="100%" height="100%" />
      <ReactSpeedometer
        width={dimensions.width}
        height={dimensions.height}
        value={value + 0.5}
        minValue={1}
        maxValue={8}
        maxSegmentLabels={0}
        segments={7}
        needleColor="#000"
        needleHeightRatio={dimensions.needleHeightRatio}
        needleWidthRatio={0}
        textColor="transparent"
        currentValueText=""
        ringWidth={0}
      />
    </Icon>
  );
};

export default Chart;
