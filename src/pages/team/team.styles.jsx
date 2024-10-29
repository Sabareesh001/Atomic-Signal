import { Badge, Box, colors, Divider, styled } from "@mui/material";

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
  flexWrap: "wrap",
  rowGap: "10px",
});

const TeamMembersPageTools = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  flexWrap: "wrap",
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

const FilterFormContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  padding: "0px 24px",
});

const FilterFormField = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

export {
  TeamMembersContainer,
  TeamMembersHeader,
  TeamMembersPageTools,
  ImportIcon,
  VerticalDivider,
  CheckBoxWithLabel,
  StyledBadge,
  FilterFormContainer,
  FilterFormField,
};
