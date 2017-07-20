
export const addContact = (contact) => {
  contact.id = getId();
  var contactList = getContactList();
  contactList.push(contact);
  setNextId(contact.id);
  saveContactList(contactList);
};

export const deleteContact = (contact) => {
    var contactList = getContactList();
    var updatedContactList = [];

    updatedContactList = contactList.filter(function (currentContact) {
        return currentContact.id !== contact.id;
    });

    saveContactList(updatedContactList);
};

export const editContact = (contact) => {
    var contactList = getContactList();
    var updatedContactList = [];

    for(var i =0; i < contactList.length; i++) {
        if (contactList[i].id !== contact.id) {
            updatedContactList.push(contactList[i]);
        } else {
             updatedContactList.push(contact);
        }
    }

    saveContactList(updatedContactList);
};

export const getContactList = () => {
    return JSON.parse(localStorage.getItem("allContact")) || [];
};

const saveContactList = (contactList) => {
    localStorage.setItem("allContact", JSON.stringify(contactList))
};

const getId = () => {
    return JSON.parse(localStorage.getItem("id")) || 0;
};

const setNextId = (id) => {
    var nextId = id + 1;
    localStorage.setItem("id", JSON.stringify(nextId))
};