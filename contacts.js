const fs = require("fs");
const path = require("path");

const contactsPath = path.join(__dirname, "db", "contacts.json");

function listContacts() {
  try {
    const contactsData = fs.readFileSync(contactsPath, "utf-8");
    const contacts = JSON.parse(contactsData);
    return contacts;
  } catch (error) {
    throw error;
  }
}

function getContactById(contactId) {
  try {
    const contactsData = fs.readFileSync(contactsPath, "utf-8");
    const contacts = JSON.parse(contactsData);
    const contact = contacts.find((contact) => contact.id === contactId);
    return contact;
  } catch (error) {
    throw error;
  }
}

function removeContact(contactId) {
  try {
    const contactsData = fs.readFileSync(contactsPath, "utf-8");
    const contacts = JSON.parse(contactsData);
    const updatedContacts = contacts.filter(
      (contact) => contact.id !== contactId
    );

    fs.writeFileSync(contactsPath, JSON.stringify(updatedContacts, null, 2));
  } catch (error) {
    throw error;
  }
}

function addContact(name, email, phone) {
  try {
    const contactsData = fs.readFileSync(contactsPath, "utf-8");
    const contacts = JSON.parse(contactsData);

    const newContact = {
      id: contacts.length + 1,
      name,
      email,
      phone,
    };

    contacts.push(newContact);

    fs.writeFileSync(contactsPath, JSON.stringify(contacts, null, 2));
    return newContact;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
