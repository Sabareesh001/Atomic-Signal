import { Badge, colors, Divider, styled } from "@mui/material";

import ImportIconSvg from "../../assets/icons/import.svg";

const TeamMembersContainer = styled("div")({
  padding: "30px",
  color: "#353448",
});

const TeamMembersHeader = styled("div")({
  padding: "20px 0px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const TeamMembersPageTools = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "10px",
});

const ImportIcon = styled((props) => <img src={ImportIconSvg} {...props} />)(
  {}
);

const VerticalDivider = styled(Divider)({
  "&.MuiDivider-vertical": {
    height: "1.7em",
    borderRightWidth: "1px",
    borderRadius: "1px",
    backgroundColor: "#CACACA",
  },
});

const CheckBoxWithLabel = styled("div")({
  display: "flex",
  alignItems: "center",
});

const StyledBadge = styled(Badge)({
  "& .MuiBadge-dot": {
    border: "solid white 1px",
    backgroundColor: "red",
  },
});

export {
  TeamMembersContainer,
  TeamMembersHeader,
  TeamMembersPageTools,
  ImportIcon,
  VerticalDivider,
  CheckBoxWithLabel,
  StyledBadge,
};
