import { Button, Divider, Drawer } from "@mui/material";
import { Box, height, minWidth, styled } from "@mui/system";
import {
  DrawerBox,
  DrawerButtonsContainer,
  DrawerCloseButton,
  DrawerContentBox,
  DrawerContentLayout,
  DrawerTitle,
} from "./Drawer.styles";
import StyledButton from "../button/Button";
const StyledDrawer = styled(
  ({
    minWidth = "450px",
    content,
    maxWidth,
    title = "Drawer",
    drawerContent,
    bottomLeftButton = { label: "Save", onClick: () => {} },
    bottomRightButton = {
      label: "Cancel",
      onClick: () => {
        props?.onClose();
      },
    },
    ...props
  }) => (
    <Drawer
      PaperProps={{
        sx: {
          minWidth: minWidth,
          maxWidth,
          backgroundColor: "transparent",
          boxShadow: "none",
        },
      }}
      {...props}
    >
      <DrawerBox minWidth={minWidth}>
        {props.anchor === "right" && (
          <DrawerCloseButton onClick={props.onClose} />
        )}
        <DrawerContentBox>
          <DrawerContentLayout>
            <DrawerTitle>{title}</DrawerTitle>
            <Divider></Divider>

            {content}
            <DrawerButtonsContainer>
              <StyledButton
                onClick={bottomLeftButton?.onClick}
                fullWidth
                variant="contained"
              >
                {bottomLeftButton?.label}
              </StyledButton>
              <StyledButton
                onClick={bottomRightButton?.onClick}
                fullWidth
                variant="outlined"
              >
                {bottomRightButton?.label}
              </StyledButton>
            </DrawerButtonsContainer>
          </DrawerContentLayout>
        </DrawerContentBox>
        {props.anchor === "left" && (
          <DrawerCloseButton onClick={props.onClose} />
        )}
      </DrawerBox>
    </Drawer>
  )
)({});

export default StyledDrawer;
