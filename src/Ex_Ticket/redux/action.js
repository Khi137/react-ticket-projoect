import { ADD_TICKET, CONFIRM } from "./constant";

// rxaction
export const addTicketAction = (payload) => ({
  type: ADD_TICKET,
  payload,
});

export const confirmTicketAction = (payload) => ({
  type: CONFIRM,
  payload,
});
