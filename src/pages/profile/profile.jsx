import { Box, Grid, Grid2, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Chart from "./chart";
import PipBar from "./pipBar";
import {
  FeedbackContainer,
  LabelContainer,
  LabelText,
  LabelValue,
  PerformanceContainer,
  ProfileBody,
  SpeedometerContainer,
} from "./profile.style";
import ProfileCard from "../../components/profileCard/profileCard";
import CollabrationIconMale from "../../assets/icons/collaborator_male.svg";
import CollabrationIcon from "../../assets/icons/collabrating_circle.svg";
import ManagerIcon from "../../assets/icons/manager.svg";
import FeedbackCard from "./feedbackProfile";

const performanceDescriptions = {
  1: "Completely away",
  2: "Need to improve a lot",
  3: "Need to improve",
  4: "Good",
  5: "Very good",
  6: "Spectacular",
  7: "Impactful",
};
const feedbackData = [
  {
    name: "steven",
    date: "2024-09-11T03:53:09.000Z",
    feedback:
      "Your way of presenting the topic was very good in the client meeting",
    rating: "Very good",
    performance: "Excellent",
    response_status: true,
    response_submitted_datetime: "2024-09-11T03:55:00.000Z",
    response_text: "Thanks! I'll try to improve further 👍",
    feedback_response: "Happy to hear it from you.",
  },
];

const ProfileData = {
  userData: {
    name: "Jennifer",
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
      image: "path/to/manager_image.jpg",
      name: "Samuel Guererro",
      icon: ManagerIcon,
    },
  ],
};

const Profile = () => {
  const [values, setValues] = useState(7);
  const performanceLevel = Math.min(Math.max(values, 1), 7);

  const data = [
    {
      name: "Communication",
      values: 1,
      lastUpdated: "2024-09-11T03:53:09.000Z",
    },
    { name: "Efficiency", values: 2, lastUpdated: "2024-09-11T03:53:09.000Z" },
    { name: "Efficiency", values: 3, lastUpdated: "2024-09-11T03:53:09.000Z" },
    { name: "Efficiency", values: 4, lastUpdated: "2024-09-11T03:53:09.000Z" },
    {
      name: "Time Management",
      values: 5,
      lastUpdated: "2024-09-11T03:53:09.000Z",
    },
    { name: "Delivery", values: 6, lastUpdated: "2024-09-11T03:53:09.000Z" },
    {
      name: "Unavailability",
      values: 7,
      lastUpdated: "2024-09-11T03:53:09.000Z",
    },
  ];
  const averageValue = Math.round(
    data?.reduce((sum, item) => sum + item?.values, 0) / data?.length
  );
  useEffect(() => {
    setValues(averageValue);
  }, [averageValue]);

  console.log(values);

  return (
    <ProfileBody>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Grid2 container spacing={3}>
            <Grid item xs={12}>
              <ProfileCard
                profilepage={true}
                isSetting={false}
                ProfileData={ProfileData}
              />
            </Grid>

            <Grid item xs={12}>
              <PerformanceContainer>
                <Typography textAlign={"left"} fontSize={20} fontWeight={500}>
                  Performance
                </Typography>
                <SpeedometerContainer>
                  <Chart Size="large" value={values} />

                  <LabelContainer>
                    <LabelText>Overall</LabelText>
                    <LabelValue>
                      {performanceDescriptions[performanceLevel] || "-"}
                    </LabelValue>
                  </LabelContainer>
                  <Box>
                    <PipBar
                      data={data}
                      performanceDescriptions={performanceDescriptions}
                    />
                  </Box>
                </SpeedometerContainer>
              </PerformanceContainer>
            </Grid>
          </Grid2>
        </Grid>

        <Grid item xs={12} md={6}>
          <FeedbackContainer>
            <Typography fontSize={23} marginBottom={2}>
              Feedbacks
            </Typography>
            <FeedbackCard feedbackData={feedbackData} teamMembers={false} />
          </FeedbackContainer>
        </Grid>
      </Grid>
    </ProfileBody>
  );
};

export default Profile;
