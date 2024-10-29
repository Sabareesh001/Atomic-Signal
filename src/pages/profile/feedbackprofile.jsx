import React, { useState } from "react";
import {
  Avatar,
  Box,
  Typography,
  styled,
  Collapse,
  Button,
} from "@mui/material";
import {
  Card,
  CardContentWrapper,
  Header,
  AvatarContainer,
  HeaderInfo,
  HeaderDate,
  RatingContainer,
  RatingAvatar,
  FeedbackContent,
  FeedbackText,
  Status,
  ResponseStatusText,
  StatusDate,
  NotRespondedText,
  ViewLink,
  ResponseContainer,
  SubmitBox,
  InputRespondBox,
  ResponseInput,
  CollapseContent,
  ResponseText,
  FeedbackResponseText,
} from "./profile.style";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { format } from "date-fns";
import StyledButton from "../../components/button/Button";

const FeedbackCard = ({ teamMembers, feedbackData }) => {
  const [expanded, setExpanded] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [response, setResponse] = useState("");

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const handleResponseChange = (event) => {
    setResponse(event.target.value);
  };

  const handleShowInput = () => {
    setShowInput(true);
  };

  const handleSubmitResponse = () => {
    console.log("Response submitted:", response);
    setResponse("");
    setShowInput(false);
  };

  return (
    <Box>
      {feedbackData.map((feedback, index) => (
        <Card key={index}>
          <CardContentWrapper expanded={expanded}>
            <Header>
              <AvatarContainer alt={feedback.name} src="/users.jpg" />
              <HeaderInfo>
                <Typography fontWeight="bold" fontSize={16}>
                  {feedback.name}
                </Typography>
                <HeaderDate>
                  {format(new Date(feedback.date), "dd MMM yyyy, hh:mm a")}
                </HeaderDate>
              </HeaderInfo>
              <RatingContainer>
                <RatingAvatar>E</RatingAvatar>
                <Typography variant="body2" color="textSecondary">
                  {feedback.rating}
                </Typography>
              </RatingContainer>
            </Header>
            <FeedbackContent>
              Feedback reason will be displayed here
            </FeedbackContent>
            <FeedbackText>{feedback.feedback}</FeedbackText>
          </CardContentWrapper>

          {teamMembers ? (
            <Status
              isResponse={feedback.response_status}
              expanded={expanded}
              onClick={toggleExpand}
            >
              {feedback.response_status ? (
                <>
                  <Box display="flex">
                    <DoneAllIcon
                      sx={{
                        margin: "3px 8px",
                        fontSize: "20px",
                        color: expanded ? "#665CD7" : "#25C460",
                      }}
                    />
                    <ResponseStatusText>Response submitted</ResponseStatusText>
                    {expanded && (
                      <StatusDate>
                        {format(
                          new Date(feedback.response_submitted_datetime),
                          "dd MMM yyyy, hh:mm a"
                        )}
                      </StatusDate>
                    )}
                  </Box>
                  <ViewLink>{expanded ? "Collapse" : "View"}</ViewLink>
                </>
              ) : (
                <Box display="flex">
                  <ChatOutlinedIcon
                    sx={{
                      margin: "3px 10px 3px 0px",
                      fontSize: "20px",
                      color: "#515151",
                    }}
                  />
                  <NotRespondedText>Not responded yet</NotRespondedText>
                </Box>
              )}
            </Status>
          ) : (
            <ResponseContainer showInput={!showInput}>
              {!showInput ? (
                <SubmitBox color="success" onClick={handleShowInput}>
                  Submit your response
                </SubmitBox>
              ) : (
                <>
                  <InputRespondBox>
                    <ResponseInput
                      component="input"
                      value={response}
                      onChange={handleResponseChange}
                      placeholder="Type your response here..."
                    />
                    <StyledButton
                      variant="contained"
                      onClick={handleSubmitResponse}
                      sx={{ marginTop: "8px" }}
                    >
                      Submit
                    </StyledButton>
                  </InputRespondBox>
                </>
              )}
            </ResponseContainer>
          )}

          <Collapse in={expanded}>
            <CollapseContent>
              <ResponseText>{feedback.response_text}</ResponseText>
              <FeedbackResponseText>
                {feedback.feedback_response}
              </FeedbackResponseText>
            </CollapseContent>
          </Collapse>
        </Card>
      ))}
    </Box>
  );
};

export default FeedbackCard;
