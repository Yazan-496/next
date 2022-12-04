import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { _logout } from "../../redux/actions"
import { store } from "../../redux/storeConfig/store"

export default function Dashboard(props) {
  const router = useRouter()
  const [token, setToken] = useState(true)
  const yes = true
  useEffect(() => {
    !token && router.push("/auth/login")
  }, [token])
  return (
    <li className=" d-flex align-items-center position-relative justify-content-center sign_and_login pt-2 pb-2">
      <span>
        {/* <img src="./assets/header-icons/user1.png" alt=""className="header-icon icon1 mr-1" /> */}
      </span>
      <span className="icon-text link">
        {/* <i className="fa fa-angle-down ml-1 " aria-hidden="true" /> */}
        {props?.user}
      </span>
      <div className="user-header-dropdown">
        <div className="user-header-dropdown-header">
          {/* <span className="user-email">
           yazan.cr96@gmail.com{" "}
         </span> */}
          {/* <span className="user-name">raaaaaaa </span> */}
        </div>
        <div className="user-header-dropdown-links">
          <div onClick={() => router.push("/new-dashboard")} className="user-header-link">
            <a>DASHBOARD </a>
          </div>
          <div
            onClick={() => {
              _logout(), setToken(false)
            }}
            className="user-header-link logout"
          >
            <a>LOGOUT </a>
          </div>
          {/* <div className="user-header-link">
           <a href="https://staging.abraa.com/plans">
             UPGRADE PLAN{" "}
           </a>
         </div> */}
          {/* <div className="user-header-link">
           <a href="https://staging.abraa.com/store/55492">
             View Store{" "}
           </a>
         </div> */}
          {/* <div className="user-header-link mobile-notifications">
           <a href="https://staging.abraa.com/dashboard/notifications">
             <i className="fa fa-logout" />
             Notifications{" "}
             <span
               className="orange not_number"
               id="cartCount-mobile"
               style={{
                 marginLeft: "35%",
                 position: "relative",
                 top: 0,
                 right: 0,
                 display: "inline-block",
                 textAlign: "center"
               }}
             />
           </a>
         </div> */}
          {/* <div className="user-header-link logout">
           <a href="https://staging.abraa.com/logout">
             <i className="fa fa-logout" />
             Sign Out{" "}
           </a>
         </div> */}
        </div>
      </div>
    </li>
  )
}
