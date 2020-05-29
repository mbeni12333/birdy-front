export const GET_INITIAL_MESSAGES = "GET_INITIAL_MESSAGES";
export const SEND_MESSAGE = "SEND_MESSAGE";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const REMOVE_MESSAGE = "REMOVE_MESSAGE";




export function sendMessage(message){
  return{
    type: SEND_MESSAGE,
    message
  }
}

export function receiveMessage(message){
  return{
    type: RECEIVE_MESSAGE,
    message
  }
}
