import React, { useState } from "react";
import OnBoard from "./onBoard";
import { Box, IconButton, InputAdornment, Typography } from "@mui/material";
import {
  LSizeSBWeight,
  SSizeMWeight,
  VSSizeMWeight,
} from "../../components/typography/typography";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  ForgotLink,
  LoginBox,
  LoginContainer,
  LogInTitle,
  QueryContainer,
} from "./logIn.style";
import StyledInputLabel from "../../components/inputLabel/inputLabel";
import StyledTextField from "../../components/textField/textField";
import StyledButton from "../../components/button/button";
import PasswordField from "../../components/textField/passwordInput";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogIn = () => {
    console.log("Logging in with email:", email, "password:", password);
  };

  return (
    <OnBoard
      children={
        <LoginContainer>
          <LogInTitle>
            <LSizeSBWeight content={"Welcome!"} />
            <VSSizeMWeight
              content={`One positive feedback per day or week can make us grow exponentially`}
              color={"secondary"}
            />
          </LogInTitle>
          <LoginBox>
            <StyledInputLabel>Email</StyledInputLabel>
            <StyledTextField
              size="small"
              placeholder="Email"
              fullWidth
              value={email}
              onChange={handleEmailChange}
            ></StyledTextField>
            <StyledInputLabel>Password</StyledInputLabel>
            <PasswordField
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <QueryContainer>
              <ForgotLink to="/forgotpassword">Forgot Password?</ForgotLink>
            </QueryContainer>
          </LoginBox>
          <StyledButton
            size="large"
            variant="contained"
            fullWidth
            onClick={handleLogIn}
          >
            <SSizeMWeight content={"Log in"} />
          </StyledButton>
        </LoginContainer>
      }
    />
  );
};

export default LogIn;
