import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import Modal from './modal';

export default combineReducers({
  router: routerReducer,
  form: formReducer,
  modal: Modal
});
