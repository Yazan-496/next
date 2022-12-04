import React, { useState } from "react"
import { useRouter } from "next/router"
import logo from "../header-icons/abraa-logos.png"
import LazyLoad from "react-lazy-load"
import ImageLoader from "react-loading-image"
// import Image from "components/Image"
import Image from "next/image"

export default function Logo() {
  const [loaded, setLoaded] = useState(true)
  const router = useRouter()

  return (
    <a
      onClick={() => router.push("/")}
      className="d-inline-block"
      title="Abraa.com"
    >
      {/* <LazyLoad> */}
      <div
        style={{
          width: "150px",
          height: "50px",
          marginTop: "7px",
          display: "contents"
        }}
      >
        <Image
          unoptimized={true}
          loading="lazy"
          src="https://s101.abraacdn.com/files/abraa-logos.png"
          alt="I'm an image!"
          width="160px"
          height="55px"
        />
      </div>
      {/* </LazyLoad> */}
    </a>
  )
}
