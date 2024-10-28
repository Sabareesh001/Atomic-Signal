import { Avatar, Divider, SvgIcon } from "@mui/material";
import CollabrationIcon from "../../assets/icons/collabrating_circle.svg";
import CollabrationIconMale from "../../assets/icons/collaborator_male.svg";
import ManagerIcon from "../../assets/icons/manager.svg";
import {
  ProfileInfoAndOthersContainer,
  ProfileAvatar,
  ProfileCardContainer,
  ProfileIconsAndLabelsContainer,
  ProfileIconsLabel,
  ProfileInfoBox,
  ProfileName,
  UserNameAndPeriodOfServiceContainer,
  OthersContainer,
  ResetPasswordContainer,
  ManagerAvatar,
} from "./ProfileCard.styles";
import StyledSvgIcon from "../svgicon/SvgIcon";
import StyledChip from "../chip/Chip";

const ProfileData = {
  userData: {
    name: "Jennifer",
    image: "",
    period_of_service: "3 yrs 6 Mon",
  },
  others: [
    {
      name: "Human Resources",
      icon: CollabrationIcon,
    },
    {
      name: "Talent Manager",
      icon: CollabrationIconMale,
    },
    {
      image: "eded",
      name: "Samuel Guererro",
      icon: ManagerIcon,
    },
  ],
};

const ProfileCard = ({ isSetting = false }) => {
  return (
    <ProfileCardContainer>
      <ProfileInfoBox>
        <ProfileAvatar
          src="https://img.freepik.com/free-photo/portrait-young-businesswoman-holding-eyeglasses-hand-against-gray-backdrop_23-2148029483.jpg"
          variant="rounded"
        />
        <ProfileInfoAndOthersContainer>
          <UserNameAndPeriodOfServiceContainer>
            <ProfileName>Jennifer</ProfileName>
            <StyledChip
              variant="filled"
              label={ProfileData?.userData.period_of_service}
            ></StyledChip>
          </UserNameAndPeriodOfServiceContainer>
          <OthersContainer>
            {ProfileData?.others.map((data) => {
              return (
                <ProfileIconsAndLabelsContainer>
                  <StyledSvgIcon
                    height={"16px"}
                    width={"16px"}
                    src={data.icon}
                  />
                  {data?.image && (
                    <ManagerAvatar src="https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg" />
                  )}
                  <ProfileIconsLabel>{data.name}</ProfileIconsLabel>
                </ProfileIconsAndLabelsContainer>
              );
            })}
          </OthersContainer>
        </ProfileInfoAndOthersContainer>
      </ProfileInfoBox>

      {isSetting && (
        <>
          {" "}
          <Divider></Divider>
          <ResetPasswordContainer>Reset password</ResetPasswordContainer>
        </>
      )}
    </ProfileCardContainer>
  );
};

export default ProfileCard;
