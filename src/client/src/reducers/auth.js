import { SET_CURRENT_USER } from '../constants';
import _ from 'lodash';

const initialState = {
  isAuthenticated: false,
  user: {}
}

export default (state=initialState, action={}) => {
  switch(action.type) {

    case SET_CURRENT_USER:
      return {
        isAuthenticated: !_.isEmpty(action.user),
        isAdmin: action.user.privilege === 100 ? true : false,
        user: action.user
      }

    default: return state;
  }
}
