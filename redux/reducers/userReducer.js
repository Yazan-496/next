// **  Initial State
const initialState = {
  userData: {},
  token: false,
  idToken: null,
  loading: false,
  username: null,
  sessionInfo: "",
  ref: false,
  message: null
}
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SESSION_INFO":
      return {
        ...state,
        sessionInfo: action?.action?.data?.sessionInfo
      }
    case "userDATA":
      return {
        ...state,
        userData: action?.action
      }
    case "MESSAGE":
      return {
        ...state,
        message: action
      }
    case "USER_NAME":
      return {
        ...state,
        userData: action?.action?.data,
        username: action?.action?.data?.username
      }
    case "NAME":
      return {
        ...state,
        username: action?.action,
        ref: !state.ref
      }
    case "ID_TOKEN":
      return {
        ...state,
        idToken: action
      }
    case "ID_TOKEN1":
      return {
        ...state,
        idToken: action
      }
    default: // need this for default case
      return state
  }
}
export default Reducer
