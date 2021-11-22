// export const getContacts = state => state.contacts.contact;
export const getFilter = state => state.getFilter.filter;

// export const getVisibleContacts = state => {
//   const contacts = getContacts(state);
//   const filter = getFilter(state);
//   const optimizedFilter = filter.toLowerCase();
//   return contacts.filter(({ name }) =>
//     name.toLowerCase().includes(optimizedFilter),
//   );
// };
