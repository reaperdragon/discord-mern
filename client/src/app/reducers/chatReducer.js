import { chatActions } from "../actions/chatActions";

const initialState = {
  chosenChatDetails: null,
  chatTypes: null,
  messages: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case chatActions.SET_CHOSEN_CHAT_DETAILS:
      return {
        ...state,
        chosenChatDetails: action.chatDetails,
        chatTypes: action.chatTypes,
        messages: [],
      };

    case chatActions.SET_MESSAGES:
      return {
        ...state,
        messages: action.messages,
      };
    default:
      return state;
  }
};

export default reducer;
