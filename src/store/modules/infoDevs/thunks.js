import { handleUsers } from "./actions";
import { getUsersList } from "../../../requests";

const fullList = [];
export const handleUsersThunk = (nextURL, setNextURL) => async (
  dispatch,
  _getState
) => {
  const list = await getUsersList(nextURL);

  if (list.data.length !== 0) {
    setNextURL(list.headers.nexturl);
    fullList.push(...list.data);
    console.log(fullList);
  } else {
    dispatch(handleUsers(fullList));
  }
};
