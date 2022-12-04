import { legacy_createStore  as  createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import createDebounce from "redux-debounced"
import { composeWithDevTools } from "redux-devtools-extension"
import { createWrapper } from "next-redux-wrapper"
import rootReducer from "../reducers"

// initial states here

// middleware
const middleware = [thunk, createDebounce()]

// creating store
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

// assigning store to next wrapper
// const makeStore = () => store

// export const wrapper = createWrapper(makeStore)

export { store }
