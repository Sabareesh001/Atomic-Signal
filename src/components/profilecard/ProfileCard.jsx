import React, { useState, useEffect } from "react";
import { Divider, Typography } from "@mui/material";
import StyledChip from "../chip/Chip";
import StyledSvgIcon from "../svgicon/SvgIcon";
import LinkedCameraOutlinedIcon from "@mui/icons-material/LinkedCameraOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

import {
  ManagerAvatar,
  OthersContainer,
  ProfileAvatar,
  ProfileCardContainer,
  ProfileIconsAndLabelsContainer,
  ProfileIconsLabel,
  ProfileInfoAndOthersContainer,
  ProfileInfoBox,
  ProfileName,
  ResetPasswordContainer,
  UserNameAndPeriodOfServiceContainer,
  AddDeleteButtonContainer,
  AddButton,
  DeleteButton,
  SettingContainer,
} from "./ProfileCard.styles";

const ProfileCard = ({ isSetting = false, profilepage, ProfileData }) => {
  const [profileImage, setProfileImage] = useState(
    "https://img.freepik.com/free-photo/portrait-young-businesswoman-holding-eyeglasses-hand-against-gray-backdrop_23-2148029483.jpg"
  );

  useEffect(() => {
    const storedImage = localStorage.getItem("profileImage");
    if (storedImage) {
      setProfileImage(storedImage);
    }
  }, []);

  const fileInputRef = React.useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result;
        setProfileImage(base64Image);
        localStorage.setItem("profileImage", base64Image);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteImage = () => {
    setProfileImage("");
    localStorage.removeItem("profileImage");
  };

  return (
    <ProfileCardContainer profilepage={profilepage}>
      <ProfileInfoBox>
        <ProfileAvatar
          alt={ProfileData?.userData?.r || "--"}
          src={profileImage || ""}
          variant="rounded"
        >
          {!isSetting && (
            <Typography sx={{ fontSize: "50px" }}>
              {" "}
              {!profileImage && ProfileData?.userData?.name[0]}
            </Typography>
          )}
        </ProfileAvatar>

        {!isSetting && (
          <AddDeleteButtonContainer>
            {!profileImage && (
              <>
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                />
                <AddButton onClick={() => fileInputRef.current.click()}>
                  <LinkedCameraOutlinedIcon
                    style={{ color: "#49C792", fontSize: "20px" }}
                  />
                </AddButton>
              </>
            )}
            {profileImage && (
              <DeleteButton onClick={handleDeleteImage}>
                <DeleteOutlinedIcon
                  style={{ color: "#F44F5A", fontSize: "20px" }}
                />
              </DeleteButton>
            )}
          </AddDeleteButtonContainer>
        )}

        <ProfileInfoAndOthersContainer>
          <UserNameAndPeriodOfServiceContainer>
            <ProfileName>{ProfileData?.userData?.name}</ProfileName>
            <StyledChip
              variant="filled"
              label={ProfileData?.userData?.period_of_service}
            />
          </UserNameAndPeriodOfServiceContainer>

          <OthersContainer>
            {ProfileData?.others.map((data, index) => (
              <ProfileIconsAndLabelsContainer key={index}>
                <StyledSvgIcon height={"16px"} width={"16px"} src={data.icon} />
                {data.image && <ManagerAvatar src={data.image} />}
                <ProfileIconsLabel>{data.name}</ProfileIconsLabel>
              </ProfileIconsAndLabelsContainer>
            ))}
          </OthersContainer>
        </ProfileInfoAndOthersContainer>
      </ProfileInfoBox>

      {isSetting && (
        <SettingContainer>
          <Divider />
          <ResetPasswordContainer>Reset password</ResetPasswordContainer>
        </SettingContainer>
      )}
    </ProfileCardContainer>
  );
};

export default ProfileCard;
