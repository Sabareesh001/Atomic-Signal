import { Box, useTheme } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import React, { useState } from "react";
import photo from "../../assets/image1.jpg";
import View from "../../components/popUp/view";
import Tablesty from "../../components/table/table";
import Popupcontainer from "./popupcontiner";
import { DoneIcon, Signalcolour, stylesnew } from "./style";
import { datastore } from "../../zustand/feedBack/store";

function Others(searchQuery) {
  const theme = useTheme();
  const styles = stylesnew(theme);

  const [view, setView] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const Rowdata = datastore((state) => state.others);

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
      Header: "To",
      accession: "name",
      container: (row) => (
        <Box sx={styles.flex}>
          <Avatar src={row.nameprofile} sx={styles.photo} />
          {row.to}
        </Box>
      ),
    },
    {
      id: "4",
      Header: "Signal",
      accession: "signal",
      container: (row) => row.signal,
    },
    {
      id: "5",
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
      id: "6",
      Header: "Response",
      accession: "response",
      container: (row) => (
        <Box sx={styles.center}>
          <DoneIcon response={row.response} />
        </Box>
      ),
    },
    {
      id: "7",
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
              to={selectedPerson.to}
              signal={selectedPerson.signal}
              performance={selectedPerson.performance}
              photo={selectedPerson.nameprofile}
              response={selectedPerson.response}
              nameprofile={selectedPerson.nameprofile}
              c={1}
            />
          }
        />
      )}
    </>
  );
}

export default Others;
