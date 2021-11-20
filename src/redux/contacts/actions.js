export const addNewContact = (contact) => {
    return {
        type: "contacts/addNewContact",
        payload: contact
    };
};

export const deleteContact = (id) => {
    return {
        type: "contacts/deleteContact",
        payload: id
    }
}

export const filterName = (name) => {
    return {
        type: "name/filterName",
        payload: name
    } 
}