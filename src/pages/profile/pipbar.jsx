import React from "react";
import {
  Circle,
  CircleBox,
  FirstLabel,
  HoverRowContainer,
  Label,
  PipBarStyle,
  Tooltip,
  TooltipBox,
} from "./profile.style";
import { Typography } from "@mui/material";
import { formatDate } from "../../utils/formateDate";

const PipBar = ({ data, performanceDescriptions }) => {
  const getColor = (value) => {
    switch (value) {
      case 1:
        return "#DE1010";
      case 2:
        return "#F27024";
      case 3:
        return "#F2B824";
      case 4:
        return "#F2EB24";
      case 5:
        return "#AEC934";
      case 6:
        return "#4C9E29";
      case 7:
        return "#007C32";
      default:
        return "#ccc";
    }
  };

  return (
    <PipBarStyle>
      {data?.map((item, index) => (
        <HoverRowContainer key={index}>
          <CircleBox>
            <FirstLabel>{item.name[0].toUpperCase()}</FirstLabel>
            <Label>{item.name}</Label>
          </CircleBox>
          <CircleBox>
            {Array.from({ length: 7 }).map((values, index) => (
              <Circle
                key={index}
                color={index < item.values ? getColor(item.values) : "#EBEBEB"}
              />
            ))}
          </CircleBox>
          <Tooltip className="tooltip">
            <TooltipBox>{performanceDescriptions[item.values]}</TooltipBox>
            Last updated{" "}
            <Typography
              fontSize={12}
              variant="span"
              color="#000"
              fontWeight={600}
            >
              {formatDate(item.lastUpdated)}
            </Typography>
          </Tooltip>
        </HoverRowContainer>
      ))}
    </PipBarStyle>
  );
};

export default PipBar;
