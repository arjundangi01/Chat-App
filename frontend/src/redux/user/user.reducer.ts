"use client";

import { loginAction } from "./type";
import {
  USER_LOGIN_REQUEST_SUCCESS,
  USER_SIGNUP_REQUEST_ERROR,
  USER_SIGNUP_REQUEST_SUCCESS,
} from "./user.action";

const initialState = {
  error: "",
  loginUserDetail: {
    profileImage: "",
    userName: "",
    _id: "",
  },
};
type Action = loginAction;
export const userReducer = (
  state = initialState,
  { type, payload }: Action
) => {
  switch (type) {
    case USER_LOGIN_REQUEST_SUCCESS:
      return { ...state,error:'' };
    case USER_SIGNUP_REQUEST_SUCCESS:
      return { ...state,error:'' };
    case USER_LOGIN_REQUEST_SUCCESS:
      return { ...state,error:'' };
    case USER_SIGNUP_REQUEST_ERROR:
      return { ...state,error:payload };
    default:
      return state;
  }
};
