import { combineReducers } from "redux";
import selectedTeamReducer from "./selectedTeamSlice";

// default reducer
export default combineReducers({
  selectedTeam: selectedTeamReducer,
});

// another way to implement 👇
// export default function rootReducer(state = {}, action) {
//     // always return a new object for the root state
//     return {
//       // the value of `state.todos` is whatever the todos reducer returns
//       selectedTeam: selectedTeamReducer(state.todos, action),
//     }
//   }
