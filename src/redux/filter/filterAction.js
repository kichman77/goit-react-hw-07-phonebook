// const filterAction = (value) => {
//   return {
//     type: "FILTER_CONTACT",
//     payload: value,
//   };
// };

// export default { filterAction };

import { createAction } from "@reduxjs/toolkit";
import actionTypes from "../actionTypes";
const filterContacts = createAction(actionTypes.FILTER_CONTACTS);

export default { filterContacts };  
