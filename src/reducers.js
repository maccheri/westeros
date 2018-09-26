import { combineReducers } from 'redux';
import * as houses from './containers/Home/reducers';
import * as loading from './containers/Loader/reducers';

const westerosApp = combineReducers({
  ...houses,
  ...loading,
});

export default westerosApp;