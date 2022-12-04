import React, { useEffect } from "react"
import { useRouter } from "next/router"
import * as gtag from "../../lib/gtag"

export default function GoToSignIn() {
  useEffect(() => {})
  const router = useRouter()
  return (
    <a
      className="text-dark d-inline-block icon-text pb-1"
      onClick={() => {
        router.push("/auth/login")
        //    gtag.event({
        //      action: "click_event",
        //      category: "sign in",
        //      label: ""
        //    })
      }}
    >
      Sign In
    </a>
  )
}
