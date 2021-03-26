// const filterReducer = (state = "", action) => {
//   switch (action.type) {
//     case "FILTER_CONTACT":
//       return action.payload;
//     default:
//       return state;
//   }
// };

import { createReducer } from "@reduxjs/toolkit";
import filterAction from "./filterAction";

const filterReducer = createReducer("", {
  [filterAction.filterContacts]: (_, action) => action.payload,
});
export default filterReducer;


