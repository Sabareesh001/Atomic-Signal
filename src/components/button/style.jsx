export const stylesnew = (theme) => ({
  button: (reminder) => ({
    backgroundColor: reminder === "no" ? "#B9B9B9" : "#49C792",
    borderRadius: "4px",
    padding: "0 15px",
    height: "28px",
    fontSize: "13px",
    color: "#FFFFFF",
    textTransform: "none",
    minWidth: "68px",
  }),
});
