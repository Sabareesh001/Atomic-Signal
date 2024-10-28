import { Box, Grid, Grid2, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Chart from "./chart";
import PipBar from "./pipbar";
import {
  FeedbackContainer,
  LabelContainer,
  LabelText,
  LabelValue,
  PerformanceContainer,
  ProfileBody,
  ProfileGrid,
  SpeedometerContainer,
} from "./profile.style";

const performanceDescriptions = {
  1: "Completely away",
  2: "Need to improve a lot",
  3: "Need to improve",
  4: "Good",
  5: "Very good",
  6: "Spectacular",
  7: "Impactful",
};

const Profile = () => {
  const [values, setValues] = useState(7);
  const performanceLevel = Math.min(Math.max(values, 1), 7);

  const data = [
    {
      name: "Communication",
      values: 5,
      lastUpdated: "2024-09-11T03:53:09.000Z",
    },
    { name: "Efficiency", values: 7, lastUpdated: "2024-09-11T03:53:09.000Z" },
    {
      name: "Time Management",
      values: 1,
      lastUpdated: "2024-09-11T03:53:09.000Z",
    },
    { name: "Delivery", values: 3, lastUpdated: "2024-09-11T03:53:09.000Z" },
    {
      name: "Unavailability",
      values: 1,
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
              <ProfileGrid></ProfileGrid>
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
          <FeedbackContainer></FeedbackContainer>
        </Grid>
      </Grid>
    </ProfileBody>
  );
};

export default Profile;
