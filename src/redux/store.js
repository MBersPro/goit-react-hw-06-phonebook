import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import contactsReducer from "./contacts/reducers";

const rootReducer = combineReducers({
  contacts: contactsReducer
});

const store = createStore(reducer, composeWithDevTools());

export default store;
