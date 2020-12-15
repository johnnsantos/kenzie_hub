import { show } from "./types";

export const changeShow = (display) => {
  return {
    type: show,
    display: display,
  };
};
