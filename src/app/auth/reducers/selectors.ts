import { AppState } from './../../interfaces';
import { createSelector } from 'reselect';
import { AuthState } from './auth.state';
import { UserState } from './user.state';
import { List } from 'immutable';

// Base product state function
function getAuthState(state: AppState): AuthState {
    return state.auth;
}
// function getUserState(state: AppState): UserState {
//     return state.users;
// }

// ******************** Individual selectors ***************************
const fetchAuthStatus = function(state: AuthState): boolean {
    return state.isAuthenticated;
};

const fetchUserLists = function (state: UserState): any {
    return state.lists.toJS();
};

// *************************** PUBLIC API's ****************************
export const getAuthStatus = createSelector(getAuthState, fetchAuthStatus);
//export const getUserLists = createSelector(getUserState, fetchUserLists);
