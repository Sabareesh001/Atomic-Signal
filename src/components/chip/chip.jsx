import { Avatar, Chip, colors, hexToRgb, styled } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
const StyledChip = styled(({ hasAvatar, avatarImg, ...props }) => (
  <Chip
    avatar={
      hasAvatar && (
        <Avatar
          sx={{ height: "24px !important", width: "24px !important" }}
          src={avatarImg}
        />
      )
    }
    deleteIcon={<CloseIcon />}
    {...props}
  />
))(({ theme }) => ({
  "&.MuiChip-root": {
    maxWidth: "min-content",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.fontSize.small,
  },
  "&.MuiChip-outlined": {
    border: "solid #CACACA 1px",
    backgroundColor: "#F5F5F5",
    "& .MuiChip-deleteIcon": {
      color: theme.palette.text.default,
      fontSize: "16px",
    },
  },
  "&.MuiChip-filled": {
    backgroundColor: "#F8F8F8",
  },
}));

export default StyledChip;
