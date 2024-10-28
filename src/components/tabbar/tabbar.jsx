import { Box, createTheme, Tab, Tabs, ThemeProvider } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import { Signals } from "../../pages/setting/signals";
import { Grading } from "../../pages/setting/grading";
import Feedback from "../../pages/setting/feedback";
import ProfileCard from "../profilecard/ProfileCard";
import { DepartmentTable } from "../table";
import Department from "../../pages/setting/Department";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const theme = createTheme({
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          fontSize: "16px",
          fontFamily: "Poppins",
          textTransform: "capitalize",
          "&.Mui-selected": {
            color: "#353448",
          },
        },
      },
    },
  },
});

export default function BasicTabs(props) {
  const HeadDatas = props.HeadDatas;
  const BodyDatas = props.BodyDatas;
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <ThemeProvider theme={theme}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Signals" {...a11yProps(0)} />
            <Tab label="Grading" {...a11yProps(1)} />
            <Tab label="Feedback type" {...a11yProps(2)} />
            <Tab label="Department" {...a11yProps(3)} />
            <Tab label="Password" {...a11yProps(4)} />
          </Tabs>
        </ThemeProvider>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Signals HeadDatas={HeadDatas} BodyDatas={BodyDatas} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Grading />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Feedback />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Department />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <ProfileCard isSetting />
      </CustomTabPanel>
    </Box>
  );
}
