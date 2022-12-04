import axios from "axios"
import qs from "qs"
import { store } from "../storeConfig/store"
// import { _toast } from "../../pages/api/utils"
// import { _logout } from "@devModules/user"
// import {
//   _setGlobal,
//   _getGlobal,
//   _loading,
//   _historyPush,
//   _isOnline,
//   //   _toast,
// } from "@utils"
import { toast, Slide } from "react-toastify"
function _handleError(code, config) {
  if (code === "USR_UNAUTHENTICATED") {
    store.dispatch(_logout())
    _historyPush("/")
    window.location.reload()
  }
}

//************************************//
function _inProgressApiCount(action) {
  const k = "inProgressApiCount"
  const c = 0
  let n = 0
  if (action === "+") {
    n = c + 1
  } else if (action === "-") {
    n = c - 1
    n = n > 0 ? n : 0
  }
  //   _setGlobal(k, n)
  return { c, n }
}

export const API = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL_81}`,
  headers: { dev: true }
})

API.interceptors.request.use(
  function (config) {
    //     if (!_isOnline()) {
    //       if (config.sync) {
    //         config.silent = true
    //         throw { sync: config.sync, config }
    //       } else {
    //         throw { offline: true }
    //       }
    //     }
    if (config.silent !== true) {
      if (_inProgressApiCount("+").c === 0) {
        //    _loading(true)
      }
      //_toast(false)
    }

    if (config.params) {
      config.paramsSerializer = (p) => {
        return qs.stringify(p)
      }
    }

    if (config.data && !config.noStringify) {
      //config.data = qs.stringify(config.data)
    }
    //// console.log(config)
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)
API.interceptors.response.use(
  function (response) {
    if (response.config.silent !== true) {
      if (_inProgressApiCount("-").n === 0) {
        //    _loading(false)
      }
      if (response.data.message) {
        if (response.data.message !== "") {
          // _toast(response.data.message, "success")
        }
      }
    }
    return response.data
  },
  function (error) {
    if (error.config.silent !== true) {
      if (_inProgressApiCount("-").n === 0) {
        //    _loading(false)
      }
    }
    if (error.response) {
      //  if (_.get(error, 'response.message') !== '') {

      //  _toast(error, "error")
      //  }
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      //  // console.log(error.response.data, error.response.status, error.response)
      if (error.config.silent !== true) {
        // console.log(error.response.data.message, "errrrrrrrooooooooor")
        if (error.response.data.error !== "") {
          _handleError(error.response.data.error_code, error.config)
          !error.response.data.message.includes("No query") &&
            error.response.data.message &&
            toast(error.response.data.message)
        }
      } else {
        // console.log(error)
      }
    } else if (error.request) {
      // console.log(error.request)
      if (error.request._response) {
        //    _toast(error.request._response, "error")
      }
    } else if (error.sync) {
      //_storeSyncRequest(error.config,error.sync)
    } else if (error.offline) {
      //  _toast(t("desktop.NO_INTERNET"), "error")
    } else {
      // console.log("Error", error.message)
    }
    return Promise.reject(error.response)
  }
)
export const Axios = { API }
