import React from "react"
import { toast, ToastContainer } from "react-toastify"

const Toast_Container = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={true}
      draggable
      pauseOnHover
    />
  )
}

export default Toast_Container
