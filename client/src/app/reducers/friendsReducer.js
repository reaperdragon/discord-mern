import { friendsActions } from "../actions/friendsActions";

const initialState = {
  friends: [],
  pendingFriendInvitations: [],
  onlineUsers: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case friendsActions.SET_PENDING_FRIENDS_INVITATIONS:
      return {
        ...state,
        pendingFriendInvitations: action.pendingFriendInvitations,
      };
    case friendsActions.SET_FRIENDS:
      return {
        ...state,
        friends: action.friends,
      };
    case friendsActions.SET_ONLINE_USERS:
      return {
        ...state,
        onlineUsers: action.onlineUsers,
      };
    default:
      return state;
  }
};

export default reducer;
