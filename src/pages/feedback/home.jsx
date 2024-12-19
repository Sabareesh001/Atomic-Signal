import { Divider, Tab, Tabs, useTheme } from "@mui/material";
import React, { useState } from "react";
import { CiFilter } from "react-icons/ci";
import StyledButton from "../../components/button/button";
import StyledDrawer from "../../components/drawer/drawer";
import Filterdrawer from "../../components/drawer/filter";
import Searchstar from "../../components/search/search";
import { ImportIcon } from "../team/team.styles";
import Tome from "./toMe";
import Fromme from "./fromMe";
import Others from "./others";
import * as XLSX from "xlsx";
import {
  Base,
  Filter,
  Flex,
  Head,
  Heading,
  stylesnew,
  Table1,
  Titlehead,
} from "./style";

function Home() {
  const theme = useTheme();
  const styles = stylesnew(theme);

  const [active, setActive] = useState("1");
  const [searchQuery, setSearchQuery] = useState("");
  const [isEditMemberDrawerOpen, setIsEditMemberDrawerOpen] = useState(false);

  const Hndleclick = (event) => {
    console.log("hi");
    setIsEditMemberDrawerOpen(true);
  };
  const tabs = [
    {
      label: "From me (2)",
      value: "1",
      component: <Fromme searchQuery={searchQuery} />,
    },
    {
      label: "To me (5)",
      value: "2",
      component: <Tome searchQuery={searchQuery} />,
    },
    {
      label: "Other feedbacks",
      value: "3",
      component: <Others searchQuery={searchQuery} />,
    },
  ];

  const handleTabChange = (event, newValue) => {
    setActive(newValue);
  };

  const renderContent = () => {
    const currentTab = tabs.find((tab) => tab.value === active);
    return currentTab ? currentTab.component : null;
  };

  return (
    <Base>
      <Head>
        <Tabs value={active} onChange={handleTabChange} sx={styles.tabs}>
          {tabs.map((tab) => (
            <Tab
              key={tab.value}
              value={tab.value}
              label={tab.label}
              sx={styles.tab}
            />
          ))}
        </Tabs>
      </Head>

      <Heading>
        <Titlehead>Feedbacks</Titlehead>
        <Flex>
          <Searchstar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <Filter onClick={Hndleclick}>
            <CiFilter />
          </Filter>
          <Flex sx={active === "3" ? styles.hide : { display: "none" }}>
            <Divider orientation="horizontal" sx={styles.divider} />
            <StyledButton
              sx={{ height: "40px" }}
              startIcon={<ImportIcon />}
              variant="outlined"
            >
              Download
            </StyledButton>
          </Flex>
        </Flex>
      </Heading>

      <Table1>{renderContent()}</Table1>
      <StyledDrawer
        title={"Filters"}
        content={<Filterdrawer activeTab={active} />}
        anchor={"right"}
        bottomLeftButton={{ label: "Apply filter", onClick: () => {} }}
        bottomRightButton={{ label: "Reset", onClick: () => {} }}
        onClose={() => {
          setIsEditMemberDrawerOpen(false);
        }}
        open={isEditMemberDrawerOpen}
      />
    </Base>
  );
}

export default Home;
