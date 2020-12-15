import { show } from "./types";

export const changeShowLoading = (loading) => {
  return {
    type: show,
    loading: loading,
  };
};
