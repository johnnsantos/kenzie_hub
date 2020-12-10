import { user } from "./types";

const defaultState = { userLoged: [] };

const User = (state = defaultState, action) => {
  const { userList, type } = action;
  switch (type) {
    case user:
      return { userLoged: { ...userList } };

    default:
      return state;
  }
};

export default User;
