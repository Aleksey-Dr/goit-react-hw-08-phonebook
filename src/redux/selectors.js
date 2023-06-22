export const selectFilter = state => state.filter.value;
export const selectItems = state => state.contacts.items;
export const selectContacts = state => state.contacts;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUserEmail = state => state.auth.user.email;
export const selectUserName = state => state.auth.user.name;
export const selectIsRefreshing = state => state.auth.isRefreshing;