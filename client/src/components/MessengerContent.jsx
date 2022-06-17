import React, { useEffect } from "react";
import { styled } from "@mui/system";
import Messages from "./Messages";
import NewMessagesInput from "./NewMessagesInput";
import { getDirectChatHistory } from "../socket/socketConnection";


const Wrapper = styled("div")({
  flexGrow: 1,
});

const MessengerContent = ({ chosenChatDetails }) => {
  useEffect(() => {
    getDirectChatHistory({
      receiverUserId: chosenChatDetails.id,
    });
  }, [chosenChatDetails]);
  return (
    <Wrapper>
      <Messages />
      <NewMessagesInput />
    </Wrapper>
  );
};

export default MessengerContent;
