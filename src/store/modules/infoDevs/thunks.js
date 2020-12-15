import { handleUsers } from "./actions";
import { getUsersList } from "../../../requests";

export const handleUsersThunk = () => async (dispatch, _getState) => {
  const list = await getUsersList();

  dispatch(handleUsers(list));
};
