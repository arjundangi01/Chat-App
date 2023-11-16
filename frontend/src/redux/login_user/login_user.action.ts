import axios from "axios";
import { Dispatch } from "redux";
import Cookies from "js-cookie";

export const GET_LOGIN_USER_DETAIL_SUCCESS = "GET_LOGIN_USER_DETAIL";

export const getLoginUserDetail = (id:string) => async (dispatch: Dispatch) => {
  const userToken = Cookies.get("chat_token");
  //   console.log(userToken);
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/users/single/${id}`,
      
    );
    if (response.data?.message) {
      return;
    }
    dispatch({
      type: GET_LOGIN_USER_DETAIL_SUCCESS,
      payload: response.data.user,
    });
    // console.log(response);
  } catch (error) {}
};


