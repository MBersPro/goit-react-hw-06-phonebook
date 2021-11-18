import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import contactsReducer from "./contacts/reducers";

// const rootReducer = combineReducers({
//   contacts: contactsReducer
// });

const store = createStore(contactsReducer, composeWithDevTools());

export default store;
