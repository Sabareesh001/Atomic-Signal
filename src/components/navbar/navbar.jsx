import React from "react";
import { useLocation, Link } from "react-router-dom";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PowerSettingsNewOutlinedIcon from "@mui/icons-material/PowerSettingsNewOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ButtonNav from "../button/buttonNav";
import { Box } from "@mui/material";
import {
  Sidebar,
  SidebarHeader,
  SidebarIcon,
  LogoImage,
  Version,
  SidebarMenu,
} from "./navbar.style";
import packageJson from "../../../package.json";

const VNavbar = () => {
  const location = useLocation();
  const WEBVersion = packageJson.version;

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarIcon>
          <LogoImage src="/AtomicSignal.png" alt="User Avatar" />
        </SidebarIcon>
        <Version>V {WEBVersion}</Version>
      </SidebarHeader>

      <SidebarMenu my={1}>
        <Box>
          <ButtonNav
            to="/profile"
            icon={<PersonOutlineOutlinedIcon />}
            label="Profile"
            active={location.pathname === "/profile"}
          />
          <ButtonNav
            to="/team"
            icon={<GroupsOutlinedIcon />}
            label="Team"
            active={location.pathname === "/team"}
          />
          <ButtonNav
            to="/feedback"
            icon={<ChatOutlinedIcon />}
            label="Feedback"
            active={location.pathname === "/feedback"}
          />
        </Box>
        <Box>
          <ButtonNav
            to="/setting"
            icon={<SettingsOutlinedIcon />}
            active={location.pathname === "/setting"}
          />
          <ButtonNav icon={<NotificationsOutlinedIcon />} />
          <ButtonNav
            icon={
              <PowerSettingsNewOutlinedIcon
                style={{
                  transform: "rotate(90deg)",
                  color: "#F44F5A",
                }}
              />
            }
          />
        </Box>
      </SidebarMenu>
    </Sidebar>
  );
};

export default VNavbar;
