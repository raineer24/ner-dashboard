import { Map, Record, List, fromJS } from 'immutable';
import { User } from '../../core/models/user';

/**
 *
 *
 * @export
 * @interface UserState
 * @extends {Map<string, any>}
 */
export interface UserState extends Map<string, any> {
    user: User;
    lists: List<any[]>;
}

export const UserStateRecord = Record({
    user: Map({}),
    lists: List([])
});