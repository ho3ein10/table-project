import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { getTableReducer, activePageReducer, descriptionReducer } from './reducer'
import thunk from 'redux-thunk'

const reducers = combineReducers({
  getTable: getTableReducer, activePage: activePageReducer, description: descriptionReducer
})

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
)
