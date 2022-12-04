import axios from "axios"
import qs from "qs"
import { createBrowserHistory } from "history"

// import { store } from '@fwsrc/redux/storeConfig/store'
// import { _logout } from "@devModules/user"
// import { _setGlobal, _getGlobal, _loading, _historyPush, _isOnline } from "@utils"
// import _ from "lodash"
// import PluggedInModules from "@fwsrc/configs/PluggedInModules"

// function _handleError(code, config) {
//   if (code === "USR_UNAUTHENTICATED") {
//     store.dispatch(_logout())
//     _historyPush("/")
//     window.location.reload()
//   }
// }

//************************************//
// function _inProgressApiCount(action) {
//   const k = "inProgressApiCount"
//   const c = _getGlobal(k) || 0
//   let n = 0
//   if (action === "+") {
//     n = c + 1
//   } else if (action === "-") {
//     n = c - 1
//     n = n > 0 ? n : 0
//   }
//   _setGlobal(k, n)
//   return { c, n }
// }

//************************************//
// export function _setAPIToken(token) {
// 	_.forEach(PluggedInModules, (module, _i) => {
// 		if (module.path.Axios) {
// 			_.forEach(module.path.Axios, (API, _i) => {
// 				module.path.Axios[_i].defaults.headers['Authorization'] = `Bearer ${token}`
// 			})
// 		}
// 	})
// }

//************************************//
// export function _setAPILang(lang) {
// 	API.defaults.headers['language_code'] = lang
// 	_.forEach(PluggedInModules, (module, _i) => {
// 		if (module.path.API) {
// 			module.path.API.defaults.headers['language_code'] = lang
// 		}
// 	})
// }

export const isUserLoggedIn = () => store.getState().user.token
export const storedUser = () => JSON.parse(localStorage.getItem("USER_TOKEN1"))
export const getUserData = () => store.getState().user.userData

/**
 ** This function is used for demo purpose route navigation
 ** In real app you won't need this function because your app will navigate to same route for each users regardless of ability
 ** Please note role field is just for showing purpose it's not used by anything in frontend
 ** We are checking role just for ease
 * ? NOTE: If you have different pages to navigate based on user ability then this function can be useful. However, you need to update it.
 * @param {String} userRole Role of user
 */
// export const getHomeRouteForLoggedInUser = userRole => {
// 	if (userRole === 'admin') return '/'
// 	if (userRole === 'client') return '/access-control'
// 	return '/login'
// }

export const _url = (uri) => {
  return uri.indexOf("http") > -1
    ? uri
    : `${API.defaults.baseURL}/storage/${uri}`
}
