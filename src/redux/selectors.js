export const selectFilter = state => state.filter.value;
export const selectItems = state => state.contacts.items;
export const selectContacts = state => state.contacts;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUserName = state => state.auth.user.email;