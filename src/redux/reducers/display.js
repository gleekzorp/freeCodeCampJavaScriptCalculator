import { CLEAR_DISPLAY } from "../actionTypes";

const initialState = {
  displayValue: "0"
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CLEAR_DISPLAY: {
      return {
        ...state,
        displayValue: "0"
      };
    }
    default:
      return state;
  }
}
