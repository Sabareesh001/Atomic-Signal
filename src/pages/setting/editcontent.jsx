import { Box, Grid2, TextField, Typography } from "@mui/material";
import { styledItem } from "./style";
export function EditContent() {
  return (
    <Grid2 sx={styledItem.editContentGrid}>
      <Box sx={styledItem.editContentBox}>
        <Typography sx={styledItem.editContentHeading}>
          Name <Typography sx={styledItem.editContentHeadingMust}>*</Typography>
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          InputProps={{
            sx: { ...styledItem.editContentTextBox, height: "40px" },
          }}
        ></TextField>
      </Box>
      <Box sx={styledItem.editContentBox}>
        <Typography sx={styledItem.editContentHeading}>Description </Typography>
        <TextField
          fullWidth
          variant="outlined"
          InputProps={{ sx: styledItem.editContentTextBox }}
        ></TextField>
      </Box>
    </Grid2>
  );
}
