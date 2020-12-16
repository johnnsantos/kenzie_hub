import { users } from "./types";

const defaultState = { devs: [] };

const Users = (state = defaultState, action) => {
  const { list, type } = action;
  switch (type) {
    case users:
      return { devs: [...list] };

    default:
      return state;
  }
};

export default Users;
