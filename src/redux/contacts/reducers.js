import { createReducer } from "@reduxjs/toolkit";
import { addNewContact, deleteContact, filterName } from "./actions";

const initialState = {
  contacts: [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
  filterName: "",
};

const contactsReducer = createReducer(initialState, {
  [addNewContact]: (state, action) => ({
    ...state,
    contacts: [...state.contacts, action.payload],
  }),
  [deleteContact]: (state, action) => ({
    ...state,
    contacts: state.contacts.filter((contact) => contact.id !== action.payload),
  }),
  [filterName]: (state, action) => ({ ...state, filterName: action.payload }),
});

export default contactsReducer;

// const filterReducer = createReducer("", {
//   [filterName]: (state, action) => ({...state, filterName: action.payload})
// })

// import { ADDNEWCONTACT, DELETECONTACT, FILTERNAME } from "./phoneBookTypes";

// const contactsReducer = (state = { contacts: [], filteName: "" }, action) => {
//   switch (action.type) {
//     case ADDNEWCONTACT:
//       return { ...state, contacts: [...state.contacts, action.payload] };
//     case DELETECONTACT:
//       return {
//         ...state,
//         contacts: [
//           ...state.contacts.filter((contact) => contact.id !== action.payload),
//         ],
//       };
//     case FILTERNAME:
//       return { ...state, filterName: action.payload };
//     default:
//       return state;
//   }
// };

// export default contactsReducer;
