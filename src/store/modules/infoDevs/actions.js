import { Users } from "./types";

export const handleUsers = (devsList) => {
  return {
    type: Users,
    list: devsList,
  };
};
