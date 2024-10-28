import { Box, Grid2, styled } from "@mui/material";
import { Outlet } from "react-router-dom";
import VNavBar from "../../components/navbar/navbar";

const LayoutContainer = styled(Box)({
  height: "97vh",
  width: "100%",
  display: "flex",
  flexDirection: "column",
});

const ContentWrapper = styled(Box)({
  display: "flex",
  height: "100%",
});

const SidebarLayout = styled(Box)({
  // Style adjustments for the sidebar container
});

const MainContent = styled(Grid2)({
  width: "100%",
  height: "100vh",
  overflow: "scroll",
});

const Layout = () => {
  return (
    <LayoutContainer>
      <ContentWrapper>
        <SidebarLayout>
          <VNavBar />
        </SidebarLayout>
        <MainContent>
          <Outlet />
        </MainContent>
      </ContentWrapper>
    </LayoutContainer>
  );
};

export default Layout;
