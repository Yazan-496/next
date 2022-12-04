import React from "react"
import Image from "next/image"

const Loading = () => {
  return (
    <div
      style={{
        height: "40px",
        marginTop: "20px",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <Image
        width="50"
        height="50"
        className=""
        style={{
          display: "flex"
        }}
        src="https://assets.abraacdn.com/assets/images/ajax-loader.gif"
        alt="loader"
      />
      <div
        style={{
          fontSize: "20px",
          marginLeft: "5px",
          marginTop: "5px"
        }}
      >
        Loading.....
      </div>
    </div>
  )
}

export default Loading
