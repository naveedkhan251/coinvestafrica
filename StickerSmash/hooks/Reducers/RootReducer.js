import { combineReducers }   from 'redux';
import EducationReducers from './EducationReducers';
const rootReducer = combineReducers({
    appState: EducationReducers
});
export default rootReducer;