export const addNewContact = (contact) => {
    return {
        type: "contacts/addNewContact",
        payload: contact
    };
};

export const getAllContacts = (contacts) => {
    return {
        type: "contacts/getAllContacts",
        payload: contacts
    };
};