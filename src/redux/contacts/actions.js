import { ADDNEWCONTACT, DELETECONTACT, FILTERNAME } from "./phoneBookTypes";


const addNewContact = (contact) => {
    return {
        type: ADDNEWCONTACT,
        payload: contact
    };
};

export const deleteContact = (id) => {
    return {
        type: DELETECONTACT,
        payload: id
    }
}

export const filterName = (name) => {
    return {
        type: FILTERNAME,
        payload: name
    } 
}