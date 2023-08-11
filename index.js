const yargs = require("yargs");
const contacts = require("./contacts");

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      console.log(contacts.listContacts());
      break;

    case "get":
      console.log(contacts.getContactById(id));
      break;

    case "add":
      console.log(contacts.addContact(name, email, phone));
      break;

    case "remove":
      contacts.removeContact(id);
      console.log(`Contact with ID ${id} removed.`);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(yargs.argv);
