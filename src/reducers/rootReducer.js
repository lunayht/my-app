import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import activityReducer from './activityReducer';

export default (history) => combineReducers({
    router: connectRouter(history),
    activity: activityReducer
});