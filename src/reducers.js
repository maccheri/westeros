import { combineReducers } from 'redux';
import * as houses from './containers/Home/reducers';
import * as members from './containers/House/reducers';
import * as loading from './containers/Loader/reducers';

const westerosApp = combineReducers({
  ...houses,
  ...loading,
  ...members,
});

export default westerosApp;