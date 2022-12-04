import { API } from "../utility/API"
// import { _setAPIToken } from "../utility/Utils"
import { useRouter } from "next/router"
import { store } from "../storeConfig/store"

export const _register = async (
  { email, password, mobile_phone, signup_country_id, roles, username, user_store },
  callback,
  callbackErr
) => {
  await API.post(`${process.env.NEXT_PUBLIC_USERS_SERVICE}/api/v1/auth/email/signup`, {
    email,
    password,
    mobile_phone,
    signup_country_id,
    roles,
    username,
    user_store
  })
    .then(function (res) {
      callback(res)
      console.log("🚀 ~ file: index.js ~ line 33 ~ res", res)
      store.dispatch({
        type: "USER_NAME",
        action: res
      })
      if (typeof window !== undefined) {
        localStorage.setItem("USER_DATA_STORAGE", JSON.stringify({ userData: res }))
      }
    })
    .catch(function (res) {
      callbackErr(res)
    })
}

export const SendPhoneNumber = async (mobile, callback, callbackErr) => {
  await API.post(
    `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/${process.env.NEXT_PUBLIC_SMS_SERVICE}/public/api/v1/otp/verification_code`,
    {
      phoneNumber: `${mobile}`,
      sid: process.env.NEXT_PUBLIC_SID,
      channel: "whatsapp"
    }
  )
    .then(function (data) {
      callback(data)
      //  localStorage.setItem("GET_SEESION", JSON.stringify({ sessionInfo: data }))
      store.dispatch({
        type: "SESSION_INFO",
        action: data
      })
    })
    .catch(function (res) {
      callbackErr(res)
    })
}

//
export const getCities = async ({ country }, callback, callbackErr) => {
  await API.post("https://countriesnow.space/api/v0.1/countries/cities", {
    country
  })
    .then(function ({ data }) {
      callback(data)
    })
    .catch(function (res) {
      callbackErr(res)
    })
}
export const _getCities = async (callback, callbackErr) => {
  await API.get(`${process.env.NEXT_PUBLIC_USERS_SERVICE}/public/api/v1/cities`)
    .then(function ({ data }) {
      callback(data)
    })
    .catch(function (res) {
      callbackErr(res)
    })
}
//
export const getCountries = async (callback, callbackErr) => {
  await API.get("https://countriesnow.space/api/v0.1/countries")
    .then(function ({ data }) {
      callback(data)
      //  // console.log(data, 'cities')
    })
    .catch(function (res) {
      callbackErr(res)
    })
}
export const _getCountries = async (callback, callbackErr) => {
  await API.get(
    `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL_81}/${process.env.NEXT_PUBLIC_USERS_SERVICE}/public/api/v1/countries`
  )
    .then(function ({ data }) {
      callback(data)
      //  // console.log(data, 'cities')
    })
    .catch(function (res) {
      callbackErr(res)
    })
}

export const _Login = ({ mobile, password }, callback, callbackErr) => {
  API.post(`${process.env.NEXT_PUBLIC_USERS_SERVICE}/public/api/v1/auth/login`, {
    mobile_phone: mobile,
    password: password
  })
    .then(function (data) {
      callback(data)
      // console.log(data, "data login")
      store.dispatch({
        type: "NAME",
        action: data?.data?.username
      })
      store.dispatch({
        type: "USER_NAME",
        action: data
      })
      if (typeof window !== undefined) {
        localStorage.setItem("USER_DATA_STORAGE", JSON.stringify({ userData: data }))
      }
    })
    .catch(function (res) {
      callbackErr(res)
    })
}
export const _LoginEmail = ({ mobile, password }, callback, callbackErr) => {
  API.post(`${process.env.NEXT_PUBLIC_USERS_SERVICE}/public/api/v1/auth/email/login`, {
    email: mobile,
    password: password
  })
    .then(function (data) {
      callback(data)
      store.dispatch({
        type: "NAME",
        action: data?.data?.username
      })
      store.dispatch({
        type: "USER_NAME",
        action: data
      })
      if (typeof window !== undefined) {
        localStorage.setItem("USER_DATA_STORAGE", JSON.stringify({ userData: data }))
      }
    })
    .catch(function (res) {
      callbackErr(res)
    })
}
export const _ResetEmail = ({ mobile }, callback) => {
  API.get(
    `${process.env.NEXT_PUBLIC_USERS_SERVICE}/public/api/v1/auth/email/sendResetPasswordToken/${mobile}`
  ).then(function (data) {
    callback(data)
    // console.log(data, "data")
  })
}
export const _ResetPhone = ({ mobile }, callback) => {
  API.get(
    `${process.env.NEXT_PUBLIC_USERS_SERVICE}/public/api/v1/auth/email/sendResetPasswordToken/${mobile}`
  ).then(function (data) {
    callback(data)
    // console.log(data, "data")
  })
}
export const _confirmResetEmail = ({ password, confirmPassword, pid }, callback) => {
  API.post(`${process.env.NEXT_PUBLIC_USERS_SERVICE}/public/api/v1/auth/email/resetPassword`, {
    confirm_password: confirmPassword,
    password: password,
    reset_password_token: pid
  }).then(function (data) {
    callback(data)
    // console.log(data, "data")
  })
}
export const _confirmResetPhone = ({ password, confirmPassword, id_token }, callback) => {
  API.post(`${process.env.NEXT_PUBLIC_USERS_SERVICE}/public/api/v1/auth/resetPasswordUsingOTP `, {
    confirm_password: confirmPassword,
    password: password,
    id_token: id_token
  }).then(function (data) {
    callback(data)
    // console.log(data, "data")
  })
}
export const _logout = () => {
  // ** Remove user, accessToken & refreshToken from localStorage
  if (typeof window !== undefined) {
    localStorage.setItem("USER_DATA_STORAGE", JSON.stringify({ userData: null }))
  }
}
export const _verifyPhoneNumber = ({ idToken }, callback) => {
  API.post(`${process.env.NEXT_PUBLIC_USERS_SERVICE}/public/api/v1/auth/mobile_phone/verify`, {
    id_token: idToken
  }).then(function (data) {
    callback(data)
  })
}
export const _autoLogin = (callback, callbackError) => {
  return (dispatch) => {
    let token
    if (typeof window !== undefined) {
      token = JSON.parse(localStorage.getItem("USER_TOKEN"))?.token
    }
    //     if (token) {
    //  _setAPIToken(token)
    API.get(`${process.env.NEXT_PUBLIC_USERS_SERVICE}/public/api/v1/users/profile`)
      .then(function (res) {
        if (res.isSuccessful) {
          const { data } = res
          if (typeof window !== undefined) {
            localStorage.setItem("USER_TOKEN", JSON.stringify({ token, userData: data }))
          }
        }
        callback()
      })
      .catch(function (res) {
        callbackError()
      })
    //     }
  }
}
export const _checkValidNumber = async (id_token, callback, failcallback) => {
  await API.post(`${process.env.NEXT_PUBLIC_USERS_SERVICE}/public/api/v1/users/check_existing_phone`, {
    id_token
  })
    .then(function (res) {
      if (!res.data) {
        callback(id_token)
      } else {
        failcallback()
      }
    })
    .catch(function (res) {
      failcallback()
    })
}
export const getToken = ({ pin, sessionInfo }, callback, callbackErr) => {
  API.post(
    `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/${process.env.NEXT_PUBLIC_SMS_SERVICE}/public/api/v1/otp/verifyPhoneNumber`,
    {
      code: pin,
      sessionInfo: sessionInfo
    }
  )
    .then(function (data) {
      callback(data)
      store.dispatch({
        type: "ID_TOKEN",
        action: data?.data
      })
    })
    .catch(function (res) {
      callbackErr(res)
    })
}

export const getProfile = (token, callback, callbackErr) => {
  API.get(`${process.env.NEXT_PUBLIC_USERS_SERVICE}/public/api/v1/users/profile`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(function (data) {
      callback(data)
    })
    .catch(function (res) {
      callbackErr(res)
    })
}
export const _updateProfile = ({ token, userData }, callback, callbackErr) => {
  API.post(`${process.env.NEXT_PUBLIC_USERS_SERVICE}/public/api/v1/users/update`, userData, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(function (data) {
    callback(data)
  })
}

export const check_existing_email = (email, callback, callbackErr) => {
  API.get(`${process.env.NEXT_PUBLIC_USERS_SERVICE}/public/api/v1/users/check_existing_email/${email}`)
    .then(function (data) {
      callback(data)
    })
    .catch(function (res) {
      callbackErr(res)
    })
}
export const uploadFile = ({ file_name, file_path }, callback, callbackErr) => {
  API.post(`https://stagingacp.abraa.com/api/upload-file`, {
    file_name: file_name,
    file_path: file_path
  })
    .then(function (data) {
      callback(data)
    })
    .catch(function (res) {
      callbackErr(res)
    })
}
export const _getKycList = ({ limit, page, sort, filter }, callback) => {
  const role = store.getState().user?.role_id
  let token
  if (typeof window !== undefined) {
    token = JSON.parse(localStorage.getItem("USER_DATA_STORAGE"))?.userData?.data?.access_token
  }
  API.get(
    `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL_81}/${process.env.NEXT_PUBLIC_USERS_SERVICE}/public/api/v1/users/my_kyc_levels`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        limit,
        page,
        sort,
        filter,
        datatables: true
      }
    }
  )
    .then(function ({ data }) {
      callback(data)
    })
    .catch(function (res) {})
}

export const _deleteKyc = (id, callback) => {
  API.get(`${process.env.REACT_APP_USER_BASE_URL}/public/api/v1/kyc_levels/destroy/${id}`)
    .then(function ({ data }) {
      callback(data)
    })
    .catch(function (res) {})
}
export const getKycAtrributes = (id, callback) => {
  let token
  if (typeof window !== undefined) {
    token = JSON.parse(localStorage.getItem("USER_DATA_STORAGE"))?.userData?.data?.access_token
  }
  API.get(
    `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL_81}/${process.env.NEXT_PUBLIC_USERS_SERVICE}/public/api/v1/attributes/kyc_extra_fields_of_kyc/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )
    .then(function ({ data }) {
      callback(data)
    })
    .catch(function (res) {})
}
export const _editKyc = (data, callback, callbackErr) => {
  API.post(`${process.env.REACT_APP_USER_BASE_URL}/public/api/v1/kyc_levels/update`, data)
    .then(function ({ data }) {
      callback(data)
    })
    .catch(function (res) {})
}
export const _saveKYC = (data, callback, callbackErr) => {
  console.log("🚀 ~ file: index.js:381 ~ data", data)
  let token
  if (typeof window !== undefined) {
    token = JSON.parse(localStorage.getItem("USER_DATA_STORAGE"))?.userData?.data?.access_token
  }
  API.post(
    `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL_81}/${process.env.NEXT_PUBLIC_USERS_SERVICE}/public/api/v1/attribute_values/save`,
    {
      attribute_values: [data]
    },
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )
    .then(function ({ data }) {
      callback(data)
    })
    .catch(function (res) {})
}
