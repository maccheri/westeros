import { combineReducers } from 'redux';
import * as houses from './containers/Home/reducers';

const westerosApp = combineReducers({
  ...houses,
});

export default westerosApp;