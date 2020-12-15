import { show } from "./types";

export const changeShow = (loading) => {
  return {
    type: show,
    loading: loading,
  };
};
