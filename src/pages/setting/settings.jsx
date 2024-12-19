import { Grid2 } from "@mui/material";
import BasicTabs from "../../components/tabBar/tabbar";
import { styledItem } from "./style";
import { Provider } from "react-redux";
import Store from "./store";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";

export default function Settings() {
  const styles = styledItem();
  return (
    <Provider store={Store}>
      <Grid2 sx={styles.tabsStyle}>
        <BasicTabs />
      </Grid2>
    </Provider>
  );
}
