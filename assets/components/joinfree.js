import React, { useEffect } from "react"
import { useRouter } from "next/router"
import Link from "../../components/Link"
import * as gtag from "../../lib/gtag"
export default function JoinFree() {
  const router = useRouter()
  useEffect(() => {}, [])
  return (
    <a
      className="text-dark icon-text icon-red"
      onClick={() => {
        router.push(`/auth`)
        //    gtag.event({
        //      action: "click_event",
        //      category_event: "join free",
        //      label: ""
        //    })
      }}
    >
      Join Free
    </a>
  )
}
