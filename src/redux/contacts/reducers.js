const contactsReducer = (state = { contacts: [], filteName: "" }, action) => {
  switch (action.type) {
    case "contacts/addNewContact":
      return {...state, contacts: [...state.contacts, action.payload]};
    case "contacts/deleteContact":
      return { ...state, contacts: [...state.contacts.filter(contact => contact.id !== action.payload)] };
    case "name/filterName":
      return {...state, filterName: action.payload};
    default:
      return state;
  }
};

export default contactsReducer;
