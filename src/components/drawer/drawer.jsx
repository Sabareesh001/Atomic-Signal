import { Button, Divider, Drawer } from "@mui/material";
import { Box, height, minWidth, styled } from "@mui/system";
import {
  DrawerBox,
  DrawerButtonsContainer,
  DrawerCloseButton,
  DrawerContentBox,
  DrawerContentLayout,
  DrawerTitle,
} from "./drawer.styles";
import StyledButton from "../button/button";
import { MSizeMWeight } from "../typography/typography";
import { useTheme } from "@emotion/react";
const StyledDrawer = styled(
  ({
    minWidth,
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
  }) => {
    const theme = useTheme();
    return (
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
              <DrawerTitle>
                <MSizeMWeight content={title} />
              </DrawerTitle>
              <Divider></Divider>

              {content}
              <DrawerButtonsContainer>
                <StyledButton
                  onClick={bottomLeftButton?.onClick}
                  fullWidth
                  size="large"
                  variant="contained"
                >
                  {bottomLeftButton?.label}
                </StyledButton>
                <StyledButton
                  onClick={bottomRightButton?.onClick}
                  fullWidth
                  size="large"
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
    );
  }
)({});

export default StyledDrawer;
