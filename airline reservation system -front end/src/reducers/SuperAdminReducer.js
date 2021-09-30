import {
  ADDADMIN_FAIL,
  ADDADMIN_REQUEST,
  ADDADMIN_RESET,
  ADDADMIN_SUCCESS,
} from "../constants/SuperAdminConstants";

export const addAdminReducer = (state = {}, action) => {
  switch (action.type) {
    case ADDADMIN_REQUEST:
      return { loading: true };
    case ADDADMIN_SUCCESS:
      return { loading: false, response: action.payload };
    case ADDADMIN_FAIL:
      return { loading: false, error: action.payload };
    case ADDADMIN_RESET:
      return {};
    default:
      return state;
  }
};
