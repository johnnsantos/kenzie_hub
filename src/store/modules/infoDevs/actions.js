import { users } from "./types";

export const handleUsers = (devsList) => {
  return {
    type: users,
    list: devsList,
  };
};
