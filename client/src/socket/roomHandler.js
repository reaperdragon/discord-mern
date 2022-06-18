import { setOpenRoom, setRoomDetails } from "../app/actions/roomActions";
import store from "../app/store";
import * as socketConnection from "./socketConnection";

export const createNewRoom = () => {
  store.dispatch(setOpenRoom(true, true));
  socketConnection.createNewRoom();
};

export const newRoomCreated = (data) => {
  const { roomDetails } = data;
  store.dispatch(setRoomDetails(roomDetails));
};
