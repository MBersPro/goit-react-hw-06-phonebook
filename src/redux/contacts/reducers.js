const contactsReducer = (state = [], action) => {
    switch (action.type) {
      case "contacts/addNewContact":
        return [...state, action.payload];
      case "contacts/getAllContacts":
        return action.payload;
      default:
        return state;
    }
};

export default contactsReducer;