import React from "react"
import { useRouter } from "next/router"

export default function Secure() {
  const router = useRouter()
  return (
    <ul
      className="pl-0 mb-0 menu_list_hover d-flex"
      style={{ display: "contents" }}
    >
      <li className="d-inline-block mb-md-3 mb-lg-0 px-xl-4 py-xl-2 px-lg-3 py-lg-1">
        <a
          href="/services/secure-payment"
          className="d-inline-block open_sans bold_600 text-dark position-relative"
        >
          Secure Transactions
        </a>
      </li>
      <li className="d-inline-block mb-md-3 mb-lg-0 px-xl-4 py-xl-2 px-lg-3 py-lg-1">
        <a
          href="/services/rfqs"
          className="d-inline-block open_sans bold_600 text-dark position-relative"
        >
          Visit RFQ List
        </a>
      </li>
      <li className="d-inline-block mb-md-3 mb-lg-0 px-xl-4 py-xl-2 px-lg-3 py-lg-1 position-relative">
        <a
          href="/services/plans"
          className="d-inline-block open_sans bold_600 text-dark position-relative"
        >
          Premium Membership
        </a>
        <span className="hot_label text-white position-absolute">Hot</span>
      </li>
    </ul>
  )
}
