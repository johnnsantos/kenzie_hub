import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./modules/infoDevs/reducers";

const reducers = combineReducers({ reducer });

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
