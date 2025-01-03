import DepartmentTableComponent from "./departmentTablecomponent";
import MembersTableComponent from "./membersTable";
import SignalTableComponent from "./signalsTable";

const MembersTableHeadings = [
  "Name",
  "Designation",
  "Department",
  "Signals",
  "Overall Performance",
  "Reporting to",
  "Role",
  "Email",
  "Experience",
  "Status",
];

const DepartmentTableHeadings = [
  "S.No",
  "Department name",
  "Created on",
  "Modified on",
  "Status",
  "Action",
];

const MembersTable = ({
  rowData,
  stickyColumnData,
  searchQuery = "",
  setRowData,
  stickyHeadings,
  Deactivate,
}) => {
  return (
    <MembersTableComponent
      headings={MembersTableHeadings}
      stickyheadings={stickyHeadings}
      rows={rowData}
      setRows={setRowData}
      stickyColumnData={stickyColumnData}
      searchQuery={searchQuery}
      Deactivate={Deactivate}
    />
  );
};

const DepartmentTable = ({ rowData, setRowData, searchQuery, Deactivate }) => (
  <DepartmentTableComponent
    rows={rowData}
    searchQuery={searchQuery}
    setRows={setRowData}
    headings={DepartmentTableHeadings}
    Deactivate={Deactivate}
  />
);
const SignalTable = ({
  rowData,
  setRowData,
  searchQuery,
  Deactivate,
  Heading,
}) => (
  <SignalTableComponent
    rows={rowData}
    searchQuery={searchQuery}
    setRows={setRowData}
    headings={Heading}
    Deactivate={Deactivate}
  />
);

export { MembersTable, DepartmentTable, SignalTable };
