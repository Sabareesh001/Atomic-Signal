import React, { useState } from "react";
import photo from "../../assets/image1.jpg";
import { DoneIcon, Signalcolour, stylesnew } from "./Style";
import { Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Buttonsty from "../../components/button/Buttonfeed";
import Tablesty from "../../components/Table/Table";
import View from "../../components/Popup/View";

function Fromme(searchQuery) {
  const [view, setView] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);

  const Rowdata = [
    {
      id: "1",
      date: "31 Jan 2023, 01:30 PM",
      nameprofile: photo,
      name: "Samuel Guerrero",
      signal: "Communication",
      performance: "Excellent",
      response: "yes",
      view: "View",
      reminder: "yes",
    },
    {
      id: "2",
      date: "31 Jan 2023, 02:00 PM",
      nameprofile: photo,
      name: "Maria Lopez",
      signal: "Teamwork",
      performance: "Very Good",
      response: "yes",
      view: "View",
      reminder: "no",
    },
    {
      id: "3",
      date: "31 Jan 2023, 03:30 PM",
      nameprofile: photo,
      name: "John Doe",
      signal: "Leadership",
      performance: "Need Improvement",
      response: "no",
      view: "View",
      reminder: "yes",
    },
    {
      id: "4",
      date: "31 Jan 2023, 01:30 PM",
      nameprofile: photo,
      name: "George Fernandes",
      signal: "Communication",
      performance: "Average",
      response: "yes",
      view: "View",
      reminder: "yes",
    },
    {
      id: "5",
      date: "31 Jan 2023, 02:00 PM",
      nameprofile: photo,
      name: "Maria Lopez",
      signal: "Teamwork",
      performance: "Very Good",
      response: "yes",
      view: "View",
      reminder: "no",
    },
    {
      id: "6",
      date: "31 Jan 2023, 03:30 PM",
      nameprofile: photo,
      name: "John Doe",
      signal: "Leadership",
      performance: "Need Improvement",
      response: "no",
      view: "View",
      reminder: "yes",
    },
    {
      id: "7",
      date: "31 Jan 2023, 01:30 PM",
      nameprofile: photo,
      name: "George Fernandes",
      signal: "Communication",
      performance: "Excellent",
      response: "yes",
      view: "View",
      reminder: "no",
    },
    {
      id: "8",
      date: "31 Jan 2023, 02:00 PM",
      nameprofile: photo,
      name: "Maria Lopez",
      signal: "Teamwork",
      performance: "Very Good",
      response: "yes",
      view: "View",
      reminder: "no",
    },
    {
      id: "9",
      date: "31 Jan 2023, 03:30 PM",
      nameprofile: photo,
      name: "John Doe",
      signal: "Leadership",
      performance: "Need Improvement",
      response: "no",
      view: "View",
      reminder: "yes",
    },
    {
      id: "10",
      date: "31 Jan 2023, 01:30 PM",
      nameprofile: photo,
      name: "George Fernandes",
      signal: "Communication",
      performance: "Excellent",
      response: "yes",
      view: "View",
      reminder: "yes",
    },
    {
      id: "11",
      date: "31 Jan 2023, 01:30 PM",
      nameprofile: photo,
      name: "George Fernandes",
      signal: "Communication",
      performance: "Excellent",
      response: "yes",
      view: "View",
      reminder: "yes",
    },
    {
      id: "12",
      date: "31 Jan 2023, 01:30 PM",
      nameprofile: photo,
      name: "George Fernandes",
      signal: "Communication",
      performance: "Excellent",
      response: "yes",
      view: "View",
      reminder: "yes",
    },
  ];

  const Column = [
    {
      id: "1",
      Header: "Date",
      accession: "date",
      container: (row) => row.date,
    },
    {
      id: "2",
      Header: "To",
      accession: "name",
      container: (row) => (
        <Box sx={stylesnew.flex}>
          <Avatar src={row.nameprofile} sx={stylesnew.photo} />
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
        <Box sx={stylesnew.flex}>
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
        <Box sx={stylesnew.center}>
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
          sx={stylesnew.view}
        >
          {row.view}
        </Box>
      ),
    },
    {
      id: "7",
      Header: "Reminder",
      accession: "reminder",
      container: (row) => (
        <Box sx={stylesnew.center}>
          <Buttonsty
            reminder={row.reminder}
            text={row.reminder === "yes" ? "Add" : "Added"}
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
          setPrincing={() => setView(false)}
          name={selectedPerson.name}
          signal={selectedPerson.signal}
          performance={selectedPerson.performance}
          photo={selectedPerson.nameprofile}
          response={selectedPerson.response}
          c={0}
        />
      )}
    </>
  );
}

export default Fromme;
