import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Box } from "@mui/material";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import packageJson from "../../../package.json";
import ButtonNav from "../button/buttonNav";
import {
  LogoImage,
  MenuIcon,
  MobileMenu,
  NavBox,
  NotificationIcon,
  Sidebar,
  SidebarHeader,
  SidebarIcon,
  SidebarMenu,
  Version,
  WebName,
} from "./navBar.style";

const VNavbar = () => {
  const location = useLocation();
  const WEBVersion = packageJson.version;
  const [Hamburger, setHamburger] = useState(false);

  const toggleHamburger = () => setHamburger((prev) => !prev);

  return (
    <Sidebar>
      <Box sx={{ display: "flex" }}>
        {Hamburger ? (
          <MenuIcon onClick={toggleHamburger}>
            <CloseOutlinedIcon
              sx={{
                padding: "12px 20px 5px",
                color: "#f5f5f5",
                fontSize: "30px",
              }}
            />
          </MenuIcon>
        ) : (
          <MenuIcon onClick={toggleHamburger}>
            <MenuOutlinedIcon
              sx={{
                padding: "12px 20px 5px",
                color: "#f5f5f5",
                fontSize: "30px",
              }}
            />
          </MenuIcon>
        )}
        <SidebarHeader>
          <SidebarIcon>
            <LogoImage src="/AtomicSignal.png" alt="User Avatar" />
          </SidebarIcon>
          <Version>V {WEBVersion}</Version>
        </SidebarHeader>
        <WebName>Atomic Signals</WebName>
      </Box>

      {/* Normal Menu */}
      <SidebarMenu>
        <NavBox>
          <ButtonNav
            to="/profile"
            svgSrc="/profile.svg"
            label="Profile"
            active={location.pathname === "/profile"}
          />
          <ButtonNav
            to="/team"
            svgSrc="/team.svg"
            label="Team"
            active={location.pathname === "/team"}
          />
          <ButtonNav
            to="/feedback"
            svgSrc="/feedback.svg"
            label="Feedback"
            active={location.pathname === "/feedback"}
          />
        </NavBox>
        <NavBox>
          <ButtonNav
            to="/setting"
            svgSrc="/setting.svg"
            active={location.pathname === "/setting"}
          />
          <ButtonNav svgSrc="/notification.svg" />
          <ButtonNav to="/login" svgSrc="/logout.svg" />
        </NavBox>
      </SidebarMenu>

      {/* Mobile Menu */}
      {Hamburger && (
        <MobileMenu onClick={toggleHamburger}>
          <ButtonNav
            to="/profile"
            svgSrc="/profile.svg"
            label="Profile"
            active={location.pathname === "/profile"}
          />
          <ButtonNav
            to="/feedback"
            svgSrc="/feedback.svg"
            label="Feedback"
            active={location.pathname === "/feedback"}
          />
          <ButtonNav
            to="/team"
            svgSrc="/team.svg"
            label="Team"
            active={location.pathname === "/team"}
          />
          <ButtonNav
            to="/setting"
            svgSrc="/setting.svg"
            active={location.pathname === "/setting"}
            label="Setting"
          />
          <ButtonNav to="/login" svgSrc="/logout.svg" label="Logout" />
        </MobileMenu>
      )}
      <NotificationIcon>
        <ButtonNav svgSrc="/notification.svg" />
      </NotificationIcon>
    </Sidebar>
  );
};

export default VNavbar;
