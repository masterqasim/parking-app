import { combineReducers } from 'redux'
import globalReducer from './globalReducer'
import searchSlot from './userReducer'
import adminReducer from './adminReducer'
import searchthis from './searchReducer'
import userPost from './userPostReducer'
import adminFeedbacks from './adminFeedback'
import profileReducer from './adminProfile'
const rootReducer = combineReducers({
  globalReducer,
  searchSlot,
  adminReducer,
  searchthis,
  userPost,
  adminFeedbacks,
  profileReducer
  });
export default rootReducer