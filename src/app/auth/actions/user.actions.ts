import { Action } from '@ngrx/store';

export class UserActions {
    static GET_USER_LISTS = 'GET_USER_LISTS';
    static GET_USER_LISTS_SUCCESS = 'GET_USER_LISTS_SUCCESS';
    static CREATE_USER_LIST = 'CREATE_USER_LIST';
    static CREATE_USER_LIST_SUCCESS = 'CREATE_USER_LIST_SUCCESS';
    static UPDATE_USER_LIST = 'UPDATE_USER_LIST';
    static UPDATE_USER_LIST_SUCCESS = 'UPDATE_USER_LIST_SUCCESS';
    static DELETE_USER_LIST = 'DELETE_USER_LIST';
    static DELETE_USER_LIST_SUCCESS = 'DELETE_USER_LIST_SUCCESS';

    getUserLists(): Action {
        return { type: UserActions.GET_USER_LISTS };
    }

    getUserListsSuccess(lists: any) {
        return {
            type: UserActions.GET_USER_LISTS_SUCCESS,
            payload: lists
        };
    }

    // createUserList(list: any): Action {
    //     return {
    //         type: UserActions.CREATE_USER_LIST,
    //         payload: list
    //     }
    // }

    createUserListSuccess(list: any) {
        return {
            type: UserActions.CREATE_USER_LIST_SUCCESS,
            payload: list
        };
    }

    // updateUserList(list: any): Action {
    //     return {
    //         type: UserActions.UPDATE_USER_LIST,
    //         payload: list
    //     };
    // }
}