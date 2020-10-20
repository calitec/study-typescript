import { createReducer } from 'typesafe-actions';
import { GithubAction, GithubState } from './types';
import { getUserProfileAsync } from './actions';
import { asyncState, createAsyncReducer, transformToArray } from '../../lib/reducerUtils';

const initialState: GithubState = {
  userProfile: asyncState.initial()
  // userProfile: {
  //   loading: false,
  //   error: null,
  //   data: null
  // }
};

const github = createReducer<GithubState, GithubAction>(
  initialState
  ).handleAction(
    transformToArray(getUserProfileAsync), 
    createAsyncReducer(getUserProfileAsync, 'userProfile')
      // [GET_USER_PROFILE]: (state) => ({
      //   ...state,
      //   userProfile: asyncState.load(),
      //   // userProfile: {
      //   //   loading: true,
      //   //   error: null,
      //   //   data: null
      //   // }
      // }),
      // [GET_USER_PROFILE_SUCCESS]: (state, action) => ({
      //   ...state,
      //   userProfile: asyncState.success(action.payload)
      //   // userProfile: {
      //   //   loading: false,
      //   //   error: null,
      //   //   data: action.payload
      //   // }
      // }),
      // [GET_USER_PROFILE_ERROR]: (state, action) => ({
      //   ...state,
      //   userProfile: asyncState.error(action.payload)
      //   // userProfile: {
      //   //   loading: false,
      //   //   error: action.payload,
      //   //   data: null
      //   // }
      // })
  );


export default github;