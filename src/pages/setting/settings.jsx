import { Grid2 } from "@mui/material";
import BasicTabs from "../../components/tabbar/tabbar";
import { styledItem } from "./style";

export const HeadDatas = [
  { HeadLabel: "S.No", LabelAlign: "left" },
  { HeadLabel: "Signal name", LabelAlign: "left" },
  { HeadLabel: "Created on", LabelAlign: "left" },
  { HeadLabel: "Modified on", LabelAlign: "left" },
  { HeadLabel: "Status", LabelAlign: "left" },
  { HeadLabel: "Action", LabelAlign: "center" },
];

export const BodyDatas = [
  {
    SnoData: "1",
    SignalData: "Communication",
    CreatedDate: "08 Feb 2023, 04:40 PM",
    ModifiedDate: "08 Feb 2023, 04:40 PM",
    StatusData: "Active",
    Actionimage: "/edit.png",
  },
  {
    SnoData: "2",
    SignalData: "Efficiency",
    CreatedDate: "08 Feb 2023, 04:40 PM",
    ModifiedDate: "08 Feb 2023, 04:40 PM",
    StatusData: "Active",
    Actionimage: "/edit.png",
  },
  {
    SnoData: "3",
    SignalData: "Time Management",
    CreatedDate: "08 Feb 2023, 04:40 PM",
    ModifiedDate: "08 Feb 2023, 04:40 PM",
    StatusData: "Active",
    Actionimage: "/edit.png",
  },
  {
    SnoData: "4",
    SignalData: "Attitude",
    CreatedDate: "08 Feb 2023, 04:40 PM",
    ModifiedDate: "08 Feb 2023, 04:40 PM",
    StatusData: "Active",
    Actionimage: "/edit.png",
  },
  {
    SnoData: "5",
    SignalData: "Unavailable",
    CreatedDate: "08 Feb 2023, 04:40 PM",
    ModifiedDate: "08 Feb 2023, 04:40 PM",
    StatusData: "Active",
    Actionimage: "/edit.png",
  },
];
export default function Settings() {
  return (
    <Grid2 sx={styledItem.tabsStyle}>
      <BasicTabs HeadDatas={HeadDatas} BodyDatas={BodyDatas} />
    </Grid2>
  );
}
