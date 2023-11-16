"use client";
export interface loginAction {
  type: string;
  payload?: [];
}
export interface typeLoginUserReducer {
  error: string;
  loginUserDetail: {
    createdAt: string;
    updatedAt: string;
    profileImage: string;
    userName: string;
    _id: string;
  };
}

export interface typeUserObj {
  _id?: string;
  userName?: string;
  profileImage: string;
}
export interface typeUserReducer {
  error: string;
  allUsers: typeUserObj[];
}
export interface typeConversation  {
    _id:string,
  members:[]
}
export interface typeConversationArray extends Array<typeConversation> { }
    

