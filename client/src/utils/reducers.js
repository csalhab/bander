import { useReducer } from "react";
import { UPDATE_PROFILE } from "./actions";

// The reducer is a function that accepts the current state and an action. It returns a new state based on that action.
export const reducer = (state, action) => {
  console.log("action", action);
  switch (action.type) {
    // Returns a copy of state with an update products array. We use the action.products property and spread it's contents into the new array.
    case UPDATE_PROFILE:
      console.log("Updating profile", action.payload);
      console.log("Updated state", {
        ...state,
        me: {
          ...action.payload,
        },
      });
      return {
        ...state,
        me: {
          ...action.payload,
        },
      };

    // Return the state as is in the event that the `action.type` passed to our reducer was not accounted for by the developers
    // This saves us from a crash.
    default:
      return state;
  }
};

export function useProfileReducer(initialState) {
  return useReducer(reducer, initialState);
}
