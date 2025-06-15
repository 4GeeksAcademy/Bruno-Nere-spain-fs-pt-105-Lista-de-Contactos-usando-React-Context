export function initialStore() {
  return {
    contacts: []
  };
}

export function storeReducer(store, action) {
  switch (action.type) {
    case 'load_contacts':
      return {
        ...store,
        contacts: action.payload,
      };

    case 'add_contact':
      return {
        ...store,
        contacts: [...store.contacts, action.payload],
      };

    case 'update_contact':
      return {
        ...store,
        contacts: store.contacts.map(contact =>
          contact.id === action.payload.id ? action.payload : contact
        )
      };

    case 'delete_contact':
      return {
        ...store,
        contacts: store.contacts.filter(contact => contact.id !== action.payload)
      };

    default:
      return store;
  }
}
