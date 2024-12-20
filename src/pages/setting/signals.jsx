import { Box, InputBase, styled, TextField, Typography } from "@mui/material";
import { SignalTable } from "../../components/table";
import { useState, useRef, useEffect } from "react";
import StyledDrawer from "../../components/drawer/drawer";
import { StyledFormControl } from "../../components/table/departmentTable.styles";
import StyledInputLabel from "../../components/inputLabel/inputLabel";
import StyledTextField from "../../components/textField/textField";
import StyledTextArea from "../../components/textArea/styledTextArea";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { addSignalBody, addSignalHead } from "./slices/signalsslice";
import DialogBox from "../../components/dialogBox/dialogBox";
import { styledItem } from "./style";

function Signals() {
  const styles = styledItem();
  const BodyDatas = useSelector((state) => state.signalsBody);

  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState("");
  const [isAddSignalsOpen, setIsAddSignalsOpen] = useState(false);
  const [rows, setRows] = useState([]);

  function Clicked() {
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

    dispatch(
      addSignalBody({
        signal: inputRef.current.value,
        cday: day,
        ctime: time,
        mtime: time,
        mday: day,
        status: true,
      })
    );
    setIsAddSignalsOpen(false);
  }

  const inputRef = useRef();

  const AddSignalsDrawerForm = () => {
    return (
      <StyledFormControl component="form">
        <StyledInputLabel required>Name</StyledInputLabel>
        <StyledTextField
          placeholder="Type name"
          size="small"
          fullWidth
          inputRef={inputRef}
        ></StyledTextField>
      </StyledFormControl>
    );
  };

  const [indexes, setIndexes] = useState(0);
  function HandleDialogIndex(index) {
    setIndexes(index);
    // console.log(index)
  }

  return (
    <SignalsSectionContainer>
      <SignalsHeader>
        <SignalsTitle>Signals ({BodyDatas.length})</SignalsTitle>
        <Searchbox searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <AddButton
          onClick={() => {
            setIsAddSignalsOpen(true);
          }}
        />
      </SignalsHeader>

      <SignalTable
        searchQuery={searchQuery}
        rowData={BodyDatas}
        setRowData={setRows}
        Deactivate={HandleDialogIndex}
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
      <DialogBox open={indexes} />
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

export default Signals;
