import {SEND_MESSAGE, RECEIVE_MESSAGE} from '../actions/messages';


export function messages(state = [], action){

  switch(action.type){

    case SEND_MESSAGE:
      return [
        ...state,
        action.message
      ]
    case RECEIVE_MESSAGE:
      return [
        ...state,
        action.message
      ]
    default:
      return state;
  }
}
