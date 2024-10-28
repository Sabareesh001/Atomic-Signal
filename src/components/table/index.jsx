import DepartmentTableComponent from "./DepartmentTableComponent";
import MembersTableComponent from "./MembersTable";

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
}) => {
  return (
    <MembersTableComponent
      headings={MembersTableHeadings}
      stickyheadings={stickyHeadings}
      rows={rowData}
      setRows={setRowData}
      stickyColumnData={stickyColumnData}
      searchQuery={searchQuery}
    />
  );
};

const DepartmentTable = ({ rowData, setRowData, searchQuery }) => (
  <DepartmentTableComponent
    rows={rowData}
    searchQuery={searchQuery}
    setRows={setRowData}
    headings={DepartmentTableHeadings}
  />
);

export { MembersTable, DepartmentTable };
