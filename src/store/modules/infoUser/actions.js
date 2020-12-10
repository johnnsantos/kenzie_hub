import { user } from "./types";

export const handleUser = (userInfo) => {
  return {
    type: user,
    userList: userInfo,
  };
};
