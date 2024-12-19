import React, { useState } from "react";
import GoogleIcon from "../../assets/icons/google";
import OutlookIcon from "../../assets/icons/outlook";
import {
  LSizeSBWeight,
  SSizeMWeight,
  SSizeRWeight,
  VSSizeMWeight,
  VSSizeRWeight,
} from "../../components/typography/typography";
import OnBoard from "./onBoard";
import {
  LoginLink,
  OrBox,
  OrContainer,
  QueryContainer,
  SignUpBox,
  SignUpContainer,
  SignUpInputContainer,
  SignUpTitle,
  SSOButton,
  SSOContainer,
} from "./signUp.styles";
import StyledInputLabel from "../../components/inputLabel/inputLabel";
import StyledTextField from "../../components/textField/textField";
import StyledButton from "../../components/button/button";

const SignUp = () => {
  const [email, setEmail] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSignUp = () => {
    console.log("Signing up with email:", email);
  };

  return (
    <OnBoard
      children={
        <SignUpContainer>
          <SignUpTitle>
            <LSizeSBWeight content={"Sign up"} />
            <VSSizeMWeight
              content={`You're just a few details away to set
           up a culture of feedback and thriving environment`}
              color={"secondary"}
            />
          </SignUpTitle>
          <SSOContainer>
            <SSOButton
              icon={<GoogleIcon />}
              fullWidth
              content={"Sign up with google"}
            />
            <SSOButton
              icon={<OutlookIcon />}
              fullWidth
              content={"Sign up with google"}
            />
          </SSOContainer>
          <OrContainer>
            <OrBox>
              <VSSizeRWeight content={"or"} color={"secondary"} />
            </OrBox>
          </OrContainer>
          <SignUpInputContainer>
            <SignUpBox>
              <StyledInputLabel required>Work Email</StyledInputLabel>
              <StyledTextField
                size="small"
                placeholder="Email"
                fullWidth
                value={email}
                onChange={handleInputChange}
              ></StyledTextField>
            </SignUpBox>

            <StyledButton
              size="large"
              variant="contained"
              fullWidth
              onClick={handleSignUp}
            >
              <SSizeMWeight content={"Sign up"} />
            </StyledButton>
          </SignUpInputContainer>
          <QueryContainer>
            <SSizeRWeight
              content={`Already have an account?`}
              color="secondary"
            />
            <LoginLink to="/login">Log in</LoginLink>
          </QueryContainer>
        </SignUpContainer>
      }
    />
  );
};

export default SignUp;
