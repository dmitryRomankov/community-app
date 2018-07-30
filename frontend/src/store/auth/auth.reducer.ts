import { AuthStatus } from 'models';
import { isEmpty } from 'utils';

import { AuthActions, AuthTypes } from './auth.action';
import { initialState } from './auth.initial';

import {history} from 'utils';

export const authReducer = (state = initialState, action: AuthActions) => {

    switch (action.type) {
        case AuthTypes.SetCurrentUser: {
            return {
                ...state,
                status: !isEmpty(action.payload) ? AuthStatus.AUTHORIZED : AuthStatus.NOT_AUTHORIZED,
                user: action.payload
            };
        }
        case AuthTypes.RedirectToLoginForm: {
            history.push(action.payload);
            return {
                ...state
            };
        }
        default:
            return state;
    }

};
