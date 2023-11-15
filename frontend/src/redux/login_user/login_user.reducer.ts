"use client";

import { loginAction } from "../user/type";
import { GET_LOGIN_USER_DETAIL_SUCCESS } from "./login_user.action";

const initialState = {
  error: "",
  loginUserDetail: {
    createdAt: "",
    updatedAt: "",
    profileImage: "",
    userName: "",
    _id: "",
  },
};
type Action = loginAction;
export const loginUserReducer = (
  state = initialState,
  { type, payload }: Action
) => {
  switch (type) {
    case GET_LOGIN_USER_DETAIL_SUCCESS:
      return { ...state, loginUserDetail: payload };

    default:
      return state;
  }
};
