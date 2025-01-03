import { Box, InputBase, styled, TextField, Typography } from "@mui/material";
import { SignalTable } from "../../components/table";
import { useState, useRef, useEffect } from "react";
import StyledDrawer from "../../components/drawer/drawer";
import { StyledFormControl } from "../../components/table/departmentTable.styles";
import StyledInputLabel from "../../components/inputLabel/inputLabel";
import StyledTextField from "../../components/textField/textField";
import StyledTextArea from "../../components/textArea/styledTextArea";
import SearchIcon from "@mui/icons-material/Search";
import DialogBox from "../../components/dialogBox/dialogBox";
import { styledItem } from "./style";
import settingStore from "../../zustand/settings/store";

function Signals() {
  const {
    SignalHeadDatas,
    SignalBodyDatas,
    addSignalBody,
    handleChange,
    SignalRowData,
  } = settingStore();
  const length1 = SignalBodyDatas.length;
  // console.log(SignalRowData)
  // console.log(Datas)
  const styles = styledItem();

  const [searchQuery, setSearchQuery] = useState("");
  const [isAddSignalsOpen, setIsAddSignalsOpen] = useState(false);
  const [rows, setRows] = useState([]);

  function Clicked() {
    addSignalBody();
    setIsAddSignalsOpen(false);
  }

  const inputRef = useRef();

  const [indexes, setIndexes] = useState(0);
  function HandleDialogIndex(index) {
    setIndexes(index);
    // console.log(index)
  }

  return (
    <SignalsSectionContainer>
      <SignalsHeader>
        <SignalsTitle>Signals ({SignalBodyDatas.length})</SignalsTitle>
        <Searchbox searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <AddButton
          onClick={() => {
            setIsAddSignalsOpen(true);
          }}
        />
      </SignalsHeader>

      <SignalTable
        searchQuery={searchQuery}
        rowData={SignalBodyDatas}
        setRowData={setRows}
        Deactivate={HandleDialogIndex}
        Heading={SignalHeadDatas}
      ></SignalTable>

      <StyledDrawer
        anchor={"right"}
        bottomLeftButton={{ label: "Add", onClick: Clicked }}
        title={"Add Signal"}
        content={<AddSignalsDrawerForm />}
        onClose={() => {
          setIsAddSignalsOpen(false);
        }}
        open={isAddSignalsOpen}
      />
      <DialogBox
        open={indexes}
        message="Are you sure, would you like to deactivate?"
        Datas={SignalBodyDatas}
        Page="SignalBodyDatas"
      />
    </SignalsSectionContainer>
  );
}

const SignalsSectionContainer = styled(Box)({
  marginTop: "20px",
  padding: "16px",
  backgroundColor: "white",
  borderRadius: "4px",
  display: "flex",
  flexDirection: "column",
  gap: "24px",
});

const SignalsTitle = styled(Typography)({
  fontSize: "16px",
  fontFamily: "Poppins",
  fontWeight: "500",
  whiteSpace: "nowrap",
  gridArea: "heading",
});

const SignalsHeader = styled(Box)({
  display: "grid",
  justifyContent: "space-between",
  alignItems: "center",
  rowGap: "10px",
  overflowX: "auto",
  gridTemplateColumns: "1fr 1fr",
  gridTemplateAreas: `"heading addbutton" "inputbox inputbox"`,
  gridTemplateRows: "auto",
  "@media(min-width:  576px)": {
    gridTemplateAreas: `"heading heading inputbox addbutton"`,
  },
  columnGap: "16px",
});
const AddButton = ({ onClick }) => {
  return (
    <Box
      component="div"
      sx={{
        background: "#49C792 0% 0% no-repeat padding-box",
        borderRadius: "4px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Poppins",
        color: "#ffffff",
        fontSize: "16px",
        padding: "8px 40px",
        cursor: "pointer",
        whiteSpace: "nowrap",
        overflowX: "auto",
        gridArea: "addbutton",
      }}
      onClick={onClick}
    >
      <Typography>Add signal</Typography>
    </Box>
  );
};

const Searchbox = ({ searchQuery, setSearchQuery }) => {
  return (
    <Box
      sx={{
        border: "1px solid #CACACA",
        borderRadius: "4px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        whiteSpace: "nowrap",
        padding: "9px ",
        overflowX: "auto",
        gridArea: "inputbox",
      }}
    >
      <SearchIcon
        sx={{
          marginRight: "12px",
          height: "20px",
          width: "20px",
          color: "#888888",
        }}
      />
      <Box
        component="input"
        placeholder="Search by signal name"
        sx={{
          width: "100%",
          height: "50%",
          border: "transparent",
          outline: "none",
          color: "#353448",
          fontSize: "14px",
          paddingRight: "5.92vw",
        }}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
      />
    </Box>
  );
};
const AddSignalsDrawerForm = () => {
  const { handleChange, SignalRowData, SignalBodyDatas } = settingStore();
  function handleSignalChange(value) {
    const length1 = SignalBodyDatas.length;
    const currentDate = new Date();
    const time = currentDate.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: "true",
    });
    const day = currentDate.toLocaleString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    handleChange("id", length1 + 1);
    handleChange("signal", value);
    handleChange("cday", day);
    handleChange("ctime", time);
    handleChange("mtime", time);
    handleChange("mday", day);
    handleChange("status", true);
    handleChange("active", false);
    handleChange("dialog", false);
  }
  return (
    <StyledFormControl>
      <StyledInputLabel required>Name</StyledInputLabel>
      <StyledTextField
        placeholder="Type name"
        size="small"
        fullWidth
        onChange={(e) => handleSignalChange(e.target.value)}
      ></StyledTextField>
    </StyledFormControl>
  );
};
export default Signals;
