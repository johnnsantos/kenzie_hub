import { handleUsers } from "./actions";
import { getUsersList } from "../../../requests";
import { changeShowLoading } from "../Loading/actions";

export const handleUsersThunk = () => async (dispatch, _getState) => {
  const list = await getUsersList();
  dispatch(changeShowLoading(true));
  dispatch(handleUsers(list));
  setTimeout(() => {
    dispatch(changeShowLoading(false));
  }, 2000);
};
