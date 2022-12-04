import { toast, Slide, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Fragment, useContext } from "react"
import { Bell, Check, X, AlertTriangle, Info } from "react-feather"
import Avatar from "./avatar"

export const ToastContents = ({ type, text }) => {
  let color = type,
    title,
    Icon
  if (type === "error") {
    color = "danger"
    title = "Error"
    Icon = X
  } else if (type === "success") {
    title = "Done"
    Icon = Check
  } else if (type === "warning") {
    title = "Done"
    Icon = AlertTriangle
  }
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}

//************************************//
export function _toast(text, type, autoClose = 5000) {
  // console.log(text, "text")
  // console.log(type, "type")
  if (text === false) {
    toast.dismiss()
    return
  }
  const options = { transition: Slide, hideProgressBar: false, autoClose, type }
  toast(<ToastContents text={text} type={type} />, options)
}
