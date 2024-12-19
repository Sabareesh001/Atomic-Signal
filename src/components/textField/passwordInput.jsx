import React, { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import StyledTextField, { textFieldStyles } from "./textField";
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";

const PasswordField = ({
  placeholder,
  fullWidth = true,
  size = "small",
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <TextField
      sx={textFieldStyles.inputStyles}
      {...props}
      placeholder={placeholder}
      type={showPassword ? "text" : "password"}
      size={size}
      fullWidth={fullWidth}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={handleTogglePasswordVisibility}
              edge="end"
              sx={{ mr: "-8px" }}
            >
              {showPassword ? (
                <VscEyeClosed style={{ fontSize: "18px", color: "#000000" }} />
              ) : (
                <VscEye style={{ fontSize: "18px", color: "#000000" }} />
              )}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default PasswordField;
