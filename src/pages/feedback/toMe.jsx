import { Box, useTheme } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import React, { useState } from "react";
import photo from "../../assets/image1.jpg";
import Buttonsty from "../../components/button/buttonFeed";
import View from "../../components/popUp/view";
import Tablesty from "../../components/table/table";
import Popupcontainer from "./popupcontiner";
import { DoneIcon, Signalcolour, stylesnew } from "./style";
import { datastore } from "../../zustand/feedBack/store";
function Tome(searchQuery) {
  const theme = useTheme();
  const styles = stylesnew(theme);
  const [view, setView] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const Rowdata = datastore((state) => state.tome);

  const Column = [
    {
      id: "1",
      Header: "Date",
      accession: "date",
      container: (row) => row.date,
    },
    {
      id: "2",
      Header: "From",
      accession: "name",
      container: (row) => (
        <Box sx={styles.flex}>
          <Avatar src={row.nameprofile} sx={styles.photo} />
          {row.name}
        </Box>
      ),
    },
    {
      id: "3",
      Header: "Signal",
      accession: "signal",
      container: (row) => row.signal,
    },
    {
      id: "4",
      Header: "Performance",
      accession: "performance",
      container: (row) => (
        <Box sx={styles.flex}>
          <Signalcolour performance={row.performance} />
          {row.performance}
        </Box>
      ),
    },
    {
      id: "5",
      Header: "Response",
      accession: "response",
      container: (row) => (
        <Box sx={styles.center}>
          <DoneIcon response={row.response} />
        </Box>
      ),
    },
    {
      id: "6",
      Header: "Feedback",
      accession: "view",
      container: (row) => (
        <Box
          onClick={() => {
            setView(true);
            setSelectedPerson(row);
          }}
          sx={styles.view}
        >
          {row.view}
        </Box>
      ),
    },
    {
      id: "7",
      Header: "Action",
      accession: "Action",
      container: (row) => (
        <Box sx={styles.center}>
          <Buttonsty
            reminder={row.Action}
            text={row.Action === "yes" ? "Respond" : "Respond"}
          />
        </Box>
      ),
    },
  ];
  return (
    <>
      <Tablesty Rowdata={Rowdata} Column={Column} searchQuery={searchQuery} />
      {view && (
        <View
          title={"View Feedback"}
          setPrincing={() => setView(false)}
          height={"400px"}
          width={"500px"}
          children={
            <Popupcontainer
              setPrincing={() => setView(false)}
              name={selectedPerson.name}
              signal={selectedPerson.signal}
              performance={selectedPerson.performance}
              photo={selectedPerson.nameprofile}
              response={selectedPerson.response}
              nameprofile={selectedPerson.nameprofile}
              c={0}
            />
          }
        />
      )}
    </>
  );
}

export default Tome;
