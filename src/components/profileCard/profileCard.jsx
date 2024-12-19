import { Avatar, Divider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import StyledChip from "../chip/chip";
import StyledSvgIcon from "../svgIcon/svgIcon";

import { LightTooltip, ToolTipContent } from "../table/membersTable.styles";
import {
  AddButton,
  AddDeleteButtonContainer,
  DeleteButton,
  LabelWithAvatarContainer,
  ManagerAvatar,
  OthersContainer,
  ProfileAvatar,
  ProfileBox,
  ProfileCardContainer,
  ProfileIconsAndLabelsContainer,
  ProfileIconsLabel,
  ProfileInfoAndOthersContainer,
  ProfileInfoBox,
  ProfileName,
  ResetPasswordContainer,
  SettingContainer,
  UserNameAndPeriodOfServiceContainer,
} from "./profileCard.styles";

const ProfileCard = ({ isSetting = false, profilepage, ProfileData }) => {
  const [profileImage, setProfileImage] = useState("");

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
        <ProfileBox>
          <ProfileAvatar
            alt={ProfileData.userData.name}
            src={profileImage || ""}
            variant="rounded"
          >
            <Typography sx={{ fontSize: "50px", color: "#484759" }}>
              {!profileImage && ProfileData.userData.name[0]}
            </Typography>
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
                    <Avatar
                      src="/camera.svg"
                      variant="square"
                      sx={{ width: 15, height: 15, bgcolor: "transparent" }}
                    />
                  </AddButton>
                </>
              )}
              {profileImage && (
                <DeleteButton onClick={handleDeleteImage}>
                  <Avatar
                    src="/delete.svg"
                    variant="square"
                    sx={{ width: 16, height: 18, bgcolor: "transparent" }}
                  />
                </DeleteButton>
              )}
            </AddDeleteButtonContainer>
          )}
        </ProfileBox>

        <ProfileInfoAndOthersContainer>
          <UserNameAndPeriodOfServiceContainer>
            <ProfileName>{ProfileData.userData.name}</ProfileName>
            <StyledChip
              variant="filled"
              label={ProfileData.userData.period_of_service}
            />
          </UserNameAndPeriodOfServiceContainer>

          <OthersContainer>
            {ProfileData.others.map((data, index) => (
              <ProfileIconsAndLabelsContainer key={index}>
                <LightTooltip
                  fontSize={"0.8em"}
                  title={
                    <ToolTipContent>
                      <div>H</div>
                    </ToolTipContent>
                  }
                  arrow
                  placement="bottom"
                >
                  <StyledSvgIcon
                    height={"16px"}
                    width={"16px"}
                    src={data.icon}
                  />
                </LightTooltip>
                <LabelWithAvatarContainer>
                  {data.image && <ManagerAvatar src={data.image} />}
                  <ProfileIconsLabel>{data.name}</ProfileIconsLabel>
                </LabelWithAvatarContainer>
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
