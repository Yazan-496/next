import React, { useState, useEffect } from "react"
import { store } from "../../../redux/storeConfig/store"
import Navbar1 from "./navbar1"
import Footer from "./footer"
import SideBar1 from "./sidebar1"
import Main from "./main"
import { withRouter } from "next/router"
import { useRouter } from "next/router"
import { useDispatch, useSelector } from "react-redux"

import Head from "next/head"

const NewDashboard = (props) => {
  const router = useRouter()
  //   const [username, setUserName] = useState(props.router.query.username)
  //   const user =
  //     props.router?.query?.reducer === false
  //       ? JSON.parse(localStorage.getItem("USER_DATA_STORAGE"))?.userData?.data
  //           ?.username
  //       : useSelector((state) =>
  //           state?.Reducer?.username
  //             ? state?.Reducer?.username
  //             : state?.Reducer?.userData?.action?.data?.username
  //         )
  let userLocaleStorage
  const user = useSelector((store) => store?.Reducer?.username)
  const ref = useSelector((store) => store?.Reducer?.ref)

  //   const [email, setEmail] = useState(props.router.query.email)
  const [openSide, setOpenSide] = useState(true)
  useEffect(() => {
    if (typeof window !== undefined) {
      if (JSON.parse(localStorage.getItem("USER_DATA_STORAGE"))?.userData?.data?.username !== undefined) {
        userLocaleStorage = JSON.parse(localStorage.getItem("USER_DATA_STORAGE"))?.userData?.data?.username
        store.dispatch({
          type: "NAME",
          action: userLocaleStorage
        })
      } else {
        router.push("/auth/login")
      }
    }
    //     user === null ? router.push("/auth/login") : null
  }, [])

  useEffect(() => {}, [ref])
  return (
    <>
      <Head>
        <link href="https://assets.abraacdn.com/assets/react-assets/css/style.css?v=4.02" rel="stylesheet" />{" "}
        <link
          href="https://assets.abraacdn.com/assets/react-assets/sass/lbd/_tabs-navs-pagination.scss"
          rel="stylesheet"
        />
        <link href="https://assets.abraacdn.com/assets/react-assets/css/demo.css" rel="stylesheet" />
        <link href="https://assets.abraacdn.com/assets/css/font-awesome.css" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,700,300"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://assets.abraacdn.com/assets/react-assets/css/pe-icon-7-stroke.css"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://assets.abraacdn.com/assets/css/jquery.datetimepicker.css?b102" />
        <link rel="stylesheet" href="https://assets.abraacdn.com/assets/css/new-design/en/custom-css.css" />
        <link rel="stylesheet" href="https://assets.abraacdn.com/assets/plugins/froiden-helper/helper.css" />
        <link
          rel="stylesheet"
          href="https://assets.abraacdn.com/assets/plugins/toast-master/css/jquery.toast.css"
        />
        <link
          rel="stylesheet"
          href="https://assets.abraacdn.com/assets/react-assets/sass/lbd/_responsive.scss"
        />
      </Head>
      <div className={openSide === true ? "perfect-scrollbar-on nav-open " : "perfect-scrollbar-on"}>
        <div className={openSide === true ? "   " : "sidebar1-mini"}>
          <div
            className={
              openSide === true
                ? "sidebar-wrapper"
                : "sidebar-wrapper ps-container ps-theme-default ps-active-x ps-active-y"
            }
          >
            <SideBar1 user={user} />
            <div className={openSide === true ? "main-panel" : "main-panel"}>
              <Navbar1 username={user} openSide={openSide} setOpenSideProps={() => setOpenSide(!openSide)} />
              <Main />
              <div id="footer">
                <Footer />
                {/* {openSide === false ? (
                <div className="close-layer visible" style={{ height: 1115 }} />
              ) : (
                <></>
              )} */}
              </div>
            </div>
          </div>
          <div className="phpdebugbar phpdebugbar-minimized phpdebugbar-closed">
            <div className="phpdebugbar-drag-capture" />
            <div className="phpdebugbar-resize-handle" style={{ display: "none" }} />
            <div className="phpdebugbar-header" style={{ display: "none" }}>
              <div className="phpdebugbar-header-left">
                <a className="phpdebugbar-tab">
                  <i className="phpdebugbar-fa phpdebugbar-fa-list-alt" />
                  <span className="phpdebugbar-text">Messages</span>
                  <span className="phpdebugbar-badge" />
                </a>
                <a className="phpdebugbar-tab">
                  <i className="phpdebugbar-fa phpdebugbar-fa-tags" />
                  <span className="phpdebugbar-text">Request</span>
                  <span className="phpdebugbar-badge" />
                </a>
                <a className="phpdebugbar-tab">
                  <i className="phpdebugbar-fa phpdebugbar-fa-tasks" />
                  <span className="phpdebugbar-text">Timeline</span>
                  <span className="phpdebugbar-badge" />
                </a>
                <a className="phpdebugbar-tab">
                  <i className="phpdebugbar-fa phpdebugbar-fa-bug" />
                  <span className="phpdebugbar-text">Exceptions</span>
                  <span className="phpdebugbar-badge" />
                </a>
                <a className="phpdebugbar-tab">
                  <i className="phpdebugbar-fa phpdebugbar-fa-arrow-right" />
                  <span className="phpdebugbar-text">Database</span>
                  <span className="phpdebugbar-badge phpdebugbar-visible">27</span>
                </a>
              </div>
              <div className="phpdebugbar-header-right">
                <a className="phpdebugbar-close-btn" />
                <a className="phpdebugbar-minimize-btn" />
                <a className="phpdebugbar-maximize-btn" />
                <a className="phpdebugbar-open-btn" style={{ display: "none" }} />
                <select className="phpdebugbar-datasets-switcher">
                  <option value="Xa394b8b356e2ad34f75bd3c93cdd14b6">#1 add-product (17:10:26)</option>
                </select>
                <span className="phpdebugbar-indicator">
                  <i className="phpdebugbar-fa phpdebugbar-fa-code" />
                  <span className="phpdebugbar-text">7.4.30</span>
                  <span className="phpdebugbar-tooltip">Version</span>
                </span>
                <span className="phpdebugbar-indicator">
                  <i className="phpdebugbar-fa phpdebugbar-fa-clock-o" />
                  <span className="phpdebugbar-text">30.31ms</span>
                  <span className="phpdebugbar-tooltip">Request Duration</span>
                </span>
                <span className="phpdebugbar-indicator">
                  <i className="phpdebugbar-fa phpdebugbar-fa-cogs" />
                  <span className="phpdebugbar-text">6MB</span>
                  <span className="phpdebugbar-tooltip">Memory Usage</span>
                </span>
              </div>
            </div>
            <div className="phpdebugbar-body" style={{ height: "227.594px", display: "none" }}>
              <div className="phpdebugbar-panel">
                <div className="phpdebugbar-widgets-messages">
                  <ul className="phpdebugbar-widgets-list" />
                  <div className="phpdebugbar-widgets-toolbar">
                    <i className="phpdebugbar-fa phpdebugbar-fa-search" />
                    <input type="text" />
                  </div>
                </div>
              </div>
              <div className="phpdebugbar-panel">
                <dl className="phpdebugbar-widgets-kvlist phpdebugbar-widgets-varlist">
                  <dt className="phpdebugbar-widgets-key">
                    <span title="$_GET">$_GET</span>
                  </dt>
                  <dd className="phpdebugbar-widgets-value">[]</dd>
                  <dt className="phpdebugbar-widgets-key">
                    <span title="$_POST">$_POST</span>
                  </dt>
                  <dd className="phpdebugbar-widgets-value">[]</dd>
                  <dt className="phpdebugbar-widgets-key">
                    <span title="$_SESSION">$_SESSION</span>
                  </dt>
                  <dd className="phpdebugbar-widgets-value">
                    array:2 [ "redirect_query_string" =&gt;
                    "https://staging.abraa.com/new-dashboard/add-product" "PHPD...
                  </dd>
                  <dt className="phpdebugbar-widgets-key">
                    <span title="$_COOKIE">$_COOKIE</span>
                  </dt>
                  <dd className="phpdebugbar-widgets-value">
                    array:13 [ "_ga" =&gt; "GA1.2.527876692.1660585923" "_gcl_au" =&gt;
                    "1.1.455211387.1660585923" "__au...
                  </dd>
                  <dt className="phpdebugbar-widgets-key">
                    <span title="$_SERVER">$_SERVER</span>
                  </dt>
                  <dd className="phpdebugbar-widgets-value">
                    array:60 [ "PHP_FCGI_MAX_REQUESTS" =&gt; "99999" "PHPRC" =&gt;
                    "/home/staging/fcgi-bin/../etc/php7.4" ...
                  </dd>
                </dl>
              </div>
              <div className="phpdebugbar-panel">
                <ul className="phpdebugbar-widgets-timeline">
                  <li>
                    <table
                      style={{ display: "table", border: 0, width: "99%" }}
                      className="phpdebugbar-widgets-params"
                    />
                  </li>
                </ul>
              </div>
              <div className="phpdebugbar-panel">
                <div className="phpdebugbar-widgets-exceptions">
                  <ul className="phpdebugbar-widgets-list" />
                </div>
              </div>
              <div className="phpdebugbar-panel">
                <div className="phpdebugbar-widgets-sqlqueries">
                  <div className="phpdebugbar-widgets-status">
                    <span>27 statements were executed</span>
                    <span title="Accumulated duration" className="phpdebugbar-widgets-duration">
                      16.47ms
                    </span>
                  </div>
                  <div className="phpdebugbar-widgets-toolbar" />
                  <ul className="phpdebugbar-widgets-list">
                    <li className="phpdebugbar-widgets-list-item">
                      <code className="phpdebugbar-widgets-sql">
                        <span className="hljs-operator">
                          <span className="hljs-keyword">SET</span>{" "}
                          <span className="hljs-keyword">NAMES</span> utf8mb4
                        </span>
                      </code>
                      <span title="Duration" className="phpdebugbar-widgets-duration">
                        445μs
                      </span>
                      <span title="Row count" className="phpdebugbar-widgets-row-count">
                        0
                      </span>
                      <span
                        title="Copy to clipboard"
                        className="phpdebugbar-widgets-copy-clipboard"
                        style={{ cursor: "pointer" }}
                      />
                    </li>
                    <li className="phpdebugbar-widgets-list-item">
                      <code className="phpdebugbar-widgets-sql">
                        <span className="hljs-operator">
                          <span className="hljs-keyword">SELECT</span> *{" "}
                          <span className="hljs-keyword">FROM</span>{" "}
                          <span className="hljs-string">`configs`</span>
                        </span>
                      </code>
                      <span title="Duration" className="phpdebugbar-widgets-duration">
                        401μs
                      </span>
                      <span title="Row count" className="phpdebugbar-widgets-row-count">
                        40
                      </span>
                      <span
                        title="Copy to clipboard"
                        className="phpdebugbar-widgets-copy-clipboard"
                        style={{ cursor: "pointer" }}
                      />
                    </li>
                    <li className="phpdebugbar-widgets-list-item">
                      <code className="phpdebugbar-widgets-sql">
                        <span className="hljs-operator">
                          <span className="hljs-keyword">SELECT</span> *{" "}
                          <span className="hljs-keyword">FROM</span>{" "}
                          <span className="hljs-string">`countries`</span>
                        </span>
                      </code>
                      <span title="Duration" className="phpdebugbar-widgets-duration">
                        509μs
                      </span>
                      <span title="Row count" className="phpdebugbar-widgets-row-count">
                        238
                      </span>
                      <span
                        title="Copy to clipboard"
                        className="phpdebugbar-widgets-copy-clipboard"
                        style={{ cursor: "pointer" }}
                      />
                    </li>
                    <li className="phpdebugbar-widgets-list-item">
                      <code className="phpdebugbar-widgets-sql">
                        <span className="hljs-operator">
                          <span className="hljs-keyword">SELECT</span> *{" "}
                          <span className="hljs-keyword">FROM</span>{" "}
                          <span className="hljs-string">`units`</span>{" "}
                          <span className="hljs-keyword">WHERE</span>{" "}
                          <span className="hljs-string">`active`</span>=<span className="hljs-number">1</span>
                        </span>
                      </code>
                      <span title="Duration" className="phpdebugbar-widgets-duration">
                        424μs
                      </span>
                      <span title="Row count" className="phpdebugbar-widgets-row-count">
                        95
                      </span>
                      <span
                        title="Copy to clipboard"
                        className="phpdebugbar-widgets-copy-clipboard"
                        style={{ cursor: "pointer" }}
                      />
                    </li>
                    <li className="phpdebugbar-widgets-list-item">
                      <code className="phpdebugbar-widgets-sql">
                        <span className="hljs-operator">
                          <span className="hljs-keyword">SELECT</span> *{" "}
                          <span className="hljs-keyword">FROM</span>{" "}
                          <span className="hljs-string">`users`</span>{" "}
                          <span className="hljs-keyword">WHERE</span>{" "}
                          <span className="hljs-string">`session`</span>=
                          <span className="hljs-string">'a024476aed0cce415976f6a7281c42a6'</span> Limit{" "}
                          <span className="hljs-number">1</span>
                        </span>
                      </code>
                      <span title="Duration" className="phpdebugbar-widgets-duration">
                        754μs
                      </span>
                      <span title="Row count" className="phpdebugbar-widgets-row-count">
                        1
                      </span>
                      <span
                        title="Copy to clipboard"
                        className="phpdebugbar-widgets-copy-clipboard"
                        style={{ cursor: "pointer" }}
                      />
                    </li>
                    <li className="phpdebugbar-widgets-list-item">
                      <code className="phpdebugbar-widgets-sql">
                        <span className="hljs-operator">
                          <span className="hljs-keyword">UPDATE</span>{" "}
                          <span className="hljs-string">`users`</span>{" "}
                          <span className="hljs-keyword">SET</span>{" "}
                          <span className="hljs-string">`last_hit`</span>= NOW(){" "}
                          <span className="hljs-keyword">WHERE</span>{" "}
                          <span className="hljs-string">`id`</span>=<span className="hljs-number">53071</span>{" "}
                        </span>
                      </code>
                      <span title="Duration" className="phpdebugbar-widgets-duration">
                        502μs
                      </span>
                      <span title="Row count" className="phpdebugbar-widgets-row-count">
                        0
                      </span>
                      <span
                        title="Copy to clipboard"
                        className="phpdebugbar-widgets-copy-clipboard"
                        style={{ cursor: "pointer" }}
                      />
                    </li>
                    <li className="phpdebugbar-widgets-list-item">
                      <code className="phpdebugbar-widgets-sql">
                        <span className="hljs-operator">
                          <span className="hljs-keyword">SELECT</span> *{" "}
                          <span className="hljs-keyword">FROM</span> users_emails{" "}
                          <span className="hljs-keyword">WHERE</span> user_id=
                          <span className="hljs-string">'53071'</span>
                        </span>
                      </code>
                      <span title="Duration" className="phpdebugbar-widgets-duration">
                        418μs
                      </span>
                      <span title="Row count" className="phpdebugbar-widgets-row-count">
                        0
                      </span>
                      <span
                        title="Copy to clipboard"
                        className="phpdebugbar-widgets-copy-clipboard"
                        style={{ cursor: "pointer" }}
                      />
                    </li>
                    <li className="phpdebugbar-widgets-list-item">
                      <code className="phpdebugbar-widgets-sql">
                        <span className="hljs-operator">
                          <span className="hljs-keyword">SELECT</span> *{" "}
                          <span className="hljs-keyword">FROM</span> items_cat c{" "}
                          <span className="hljs-keyword">WHERE</span> c.sub_of ={" "}
                          <span className="hljs-string">'0'</span> <span className="hljs-keyword">and</span>{" "}
                          c.status = <span className="hljs-string">'1'</span>{" "}
                          <span className="hljs-keyword">ORDER</span> <span className="hljs-keyword">BY</span>{" "}
                          c.top_desc_id,id
                        </span>
                      </code>
                      <span title="Duration" className="phpdebugbar-widgets-duration">
                        456μs
                      </span>
                      <span title="Row count" className="phpdebugbar-widgets-row-count">
                        17
                      </span>
                      <span
                        title="Copy to clipboard"
                        className="phpdebugbar-widgets-copy-clipboard"
                        style={{ cursor: "pointer" }}
                      />
                    </li>
                    <li className="phpdebugbar-widgets-list-item">
                      <code className="phpdebugbar-widgets-sql">
                        <span className="hljs-operator">
                          <span className="hljs-keyword">SELECT</span>{" "}
                          <span className="hljs-string">`conversion_rate`</span>{" "}
                          <span className="hljs-keyword">FROM</span>{" "}
                          <span className="hljs-string">`currencies`</span>{" "}
                          <span className="hljs-keyword">WHERE</span>{" "}
                          <span className="hljs-string">`code`</span>=
                          <span className="hljs-string">'AED'</span> Limit{" "}
                          <span className="hljs-number">1</span>
                        </span>
                      </code>
                      <span title="Duration" className="phpdebugbar-widgets-duration">
                        396μs
                      </span>
                      <span title="Row count" className="phpdebugbar-widgets-row-count">
                        1
                      </span>
                      <span
                        title="Copy to clipboard"
                        className="phpdebugbar-widgets-copy-clipboard"
                        style={{ cursor: "pointer" }}
                      />
                    </li>
                    <li className="phpdebugbar-widgets-list-item">
                      <code className="phpdebugbar-widgets-sql">
                        <span className="hljs-operator">
                          <span className="hljs-keyword">SELECT</span> DATEDIFF(premium, NOW()){" "}
                          <span className="hljs-keyword">AS</span> expiryin,DATEDIFF(plan_start_date, NOW()){" "}
                          <span className="hljs-keyword">AS</span> start_in,subscription_id{" "}
                          <span className="hljs-keyword">FROM</span> users{" "}
                          <span className="hljs-keyword">WHERE</span> id=
                          <span className="hljs-number">53071</span> Limit{" "}
                          <span className="hljs-number">1</span>
                        </span>
                      </code>
                      <span title="Duration" className="phpdebugbar-widgets-duration">
                        507μs
                      </span>
                      <span title="Row count" className="phpdebugbar-widgets-row-count">
                        1
                      </span>
                      <span
                        title="Copy to clipboard"
                        className="phpdebugbar-widgets-copy-clipboard"
                        style={{ cursor: "pointer" }}
                      />
                    </li>
                    <li className="phpdebugbar-widgets-list-item">
                      <code className="phpdebugbar-widgets-sql">
                        <span className="hljs-operator">
                          <span className="hljs-keyword">SELECT</span> store_verified{" "}
                          <span className="hljs-keyword">FROM</span> users_store{" "}
                          <span className="hljs-keyword">WHERE</span> sub_of=
                          <span className="hljs-number">53071</span> Limit{" "}
                          <span className="hljs-number">1</span>
                        </span>
                      </code>
                      <span title="Duration" className="phpdebugbar-widgets-duration">
                        1.31ms
                      </span>
                      <span title="Row count" className="phpdebugbar-widgets-row-count">
                        1
                      </span>
                      <span
                        title="Copy to clipboard"
                        className="phpdebugbar-widgets-copy-clipboard"
                        style={{ cursor: "pointer" }}
                      />
                    </li>
                    <li className="phpdebugbar-widgets-list-item">
                      <code className="phpdebugbar-widgets-sql">
                        <span className="hljs-operator">
                          <span className="hljs-keyword">SELECT</span>{" "}
                          <span className="hljs-aggregate">count</span>(*) cnt{" "}
                          <span className="hljs-keyword">FROM</span> items{" "}
                          <span className="hljs-keyword">WHERE</span> user_id ={" "}
                          <span className="hljs-string">'53071'</span> Limit{" "}
                          <span className="hljs-number">1</span>
                        </span>
                      </code>
                      <span title="Duration" className="phpdebugbar-widgets-duration">
                        672μs
                      </span>
                      <span title="Row count" className="phpdebugbar-widgets-row-count">
                        1
                      </span>
                      <span
                        title="Copy to clipboard"
                        className="phpdebugbar-widgets-copy-clipboard"
                        style={{ cursor: "pointer" }}
                      />
                    </li>
                    <li className="phpdebugbar-widgets-list-item">
                      <code className="phpdebugbar-widgets-sql">
                        <span className="hljs-operator">
                          <span className="hljs-keyword">SELECT</span>
                          (ISnull(logo_url) <span className="hljs-keyword">OR</span> logo_url=
                          <span className="hljs-string">''</span>)+ (ISnull(name){" "}
                          <span className="hljs-keyword">OR</span> name=
                          <span className="hljs-string">''</span>)+ (ISnull(contact_address){" "}
                          <span className="hljs-keyword">OR</span> contact_address=
                          <span className="hljs-string">''</span>)+ (ISnull(aboutpage){" "}
                          <span className="hljs-keyword">OR</span> aboutpage=
                          <span className="hljs-string">''</span>)+ ISnull(secondarynumber)+ ISnull(weburl)+
                          ISnull(vat_number)+ ISnull(facebook_url)+ ISnull(twitter_url)+
                          ISnull(company_email)+ ISnull(users.country)+ ISnull(users.city)+
                          ISnull(company_whatsapp)+ ISnull(company_mobile)+ (ISNull(users.interested_keywords){" "}
                          <span className="hljs-keyword">OR</span> users.interested_keywords=
                          <span className="hljs-string">''</span>)<span className="hljs-keyword">AS</span>{" "}
                          valued <span className="hljs-keyword">FROM</span> users_store,users{" "}
                          <span className="hljs-keyword">WHERE</span> sub_of=
                          <span className="hljs-number">53071</span> <span className="hljs-keyword">and</span>{" "}
                          users.id=users_store.sub_of Limit <span className="hljs-number">1</span>
                        </span>
                      </code>
                      <span title="Duration" className="phpdebugbar-widgets-duration">
                        1.69ms
                      </span>
                      <span title="Row count" className="phpdebugbar-widgets-row-count">
                        1
                      </span>
                      <span
                        title="Copy to clipboard"
                        className="phpdebugbar-widgets-copy-clipboard"
                        style={{ cursor: "pointer" }}
                      />
                    </li>
                    <li className="phpdebugbar-widgets-list-item">
                      <code className="phpdebugbar-widgets-sql">
                        <span className="hljs-operator">
                          <span className="hljs-keyword">SELECT</span> *{" "}
                          <span className="hljs-keyword">FROM</span> pages{" "}
                          <span className="hljs-keyword">ORDER</span> <span className="hljs-keyword">BY</span>{" "}
                          <span className="hljs-string">`sort_id`</span>{" "}
                          <span className="hljs-keyword">ASC</span> LIMIT{" "}
                          <span className="hljs-number">0</span>,<span className="hljs-number">13</span>
                        </span>
                      </code>
                      <span title="Duration" className="phpdebugbar-widgets-duration">
                        3.53ms
                      </span>
                      <span title="Row count" className="phpdebugbar-widgets-row-count">
                        13
                      </span>
                      <span
                        title="Copy to clipboard"
                        className="phpdebugbar-widgets-copy-clipboard"
                        style={{ cursor: "pointer" }}
                      />
                    </li>
                    <li className="phpdebugbar-widgets-list-item">
                      <code className="phpdebugbar-widgets-sql">
                        <span className="hljs-operator">
                          <span className="hljs-keyword">SELECT</span> *{" "}
                          <span className="hljs-keyword">FROM</span> dlist_services
                        </span>
                      </code>
                      <span title="Duration" className="phpdebugbar-widgets-duration">
                        406μs
                      </span>
                      <span title="Row count" className="phpdebugbar-widgets-row-count">
                        6
                      </span>
                      <span
                        title="Copy to clipboard"
                        className="phpdebugbar-widgets-copy-clipboard"
                        style={{ cursor: "pointer" }}
                      />
                    </li>
                    <li className="phpdebugbar-widgets-list-item">
                      <code className="phpdebugbar-widgets-sql">
                        <span className="hljs-operator">
                          <span className="hljs-keyword">SELECT</span>{" "}
                          <span className="hljs-string">`translation`</span>{" "}
                          <span className="hljs-keyword">FROM</span>{" "}
                          <span className="hljs-string">`i18n`</span>
                          <span className="hljs-keyword">WHERE</span>{" "}
                          <span className="hljs-string">`lang`</span>=
                          <span className="hljs-string">'en'</span>
                          <span className="hljs-keyword">AND</span>{" "}
                          <span className="hljs-string">`origin_table`</span>=
                          <span className="hljs-string">'dlist_services'</span>
                          <span className="hljs-keyword">AND</span>{" "}
                          <span className="hljs-string">`origin_column`</span>=
                          <span className="hljs-string">'name'</span>
                          <span className="hljs-keyword">AND</span>{" "}
                          <span className="hljs-string">`origin_id`</span>=
                          <span className="hljs-string">'1'</span> Limit{" "}
                          <span className="hljs-number">1</span>
                        </span>
                      </code>
                      <span title="Duration" className="phpdebugbar-widgets-duration">
                        338μs
                      </span>
                      <span title="Row count" className="phpdebugbar-widgets-row-count">
                        0
                      </span>
                      <span
                        title="Copy to clipboard"
                        className="phpdebugbar-widgets-copy-clipboard"
                        style={{ cursor: "pointer" }}
                      />
                    </li>
                    <li className="phpdebugbar-widgets-list-item">
                      <code className="phpdebugbar-widgets-sql">
                        <span className="hljs-operator">
                          <span className="hljs-keyword">SELECT</span>{" "}
                          <span className="hljs-string">`translation`</span>{" "}
                          <span className="hljs-keyword">FROM</span>{" "}
                          <span className="hljs-string">`i18n`</span>
                          <span className="hljs-keyword">WHERE</span>{" "}
                          <span className="hljs-string">`lang`</span>=
                          <span className="hljs-string">'en'</span>
                          <span className="hljs-keyword">AND</span>{" "}
                          <span className="hljs-string">`origin_table`</span>=
                          <span className="hljs-string">'dlist_services'</span>
                          <span className="hljs-keyword">AND</span>{" "}
                          <span className="hljs-string">`origin_column`</span>=
                          <span className="hljs-string">'pagecontent'</span>
                          <span className="hljs-keyword">AND</span>{" "}
                          <span className="hljs-string">`origin_id`</span>=
                          <span className="hljs-string">'1'</span> Limit{" "}
                          <span className="hljs-number">1</span>
                        </span>
                      </code>
                      <span title="Duration" className="phpdebugbar-widgets-duration">
                        336μs
                      </span>
                      <span title="Row count" className="phpdebugbar-widgets-row-count">
                        0
                      </span>
                      <span
                        title="Copy to clipboard"
                        className="phpdebugbar-widgets-copy-clipboard"
                        style={{ cursor: "pointer" }}
                      />
                    </li>
                    <li className="phpdebugbar-widgets-list-item">
                      <code className="phpdebugbar-widgets-sql">
                        <span className="hljs-operator">
                          <span className="hljs-keyword">SELECT</span>{" "}
                          <span className="hljs-string">`translation`</span>{" "}
                          <span className="hljs-keyword">FROM</span>{" "}
                          <span className="hljs-string">`i18n`</span>
                          <span className="hljs-keyword">WHERE</span>{" "}
                          <span className="hljs-string">`lang`</span>=
                          <span className="hljs-string">'en'</span>
                          <span className="hljs-keyword">AND</span>{" "}
                          <span className="hljs-string">`origin_table`</span>=
                          <span className="hljs-string">'dlist_services'</span>
                          <span className="hljs-keyword">AND</span>{" "}
                          <span className="hljs-string">`origin_column`</span>=
                          <span className="hljs-string">'name'</span>
                          <span className="hljs-keyword">AND</span>{" "}
                          <span className="hljs-string">`origin_id`</span>=
                          <span className="hljs-string">'2'</span> Limit{" "}
                          <span className="hljs-number">1</span>
                        </span>
                      </code>
                      <span title="Duration" className="phpdebugbar-widgets-duration">
                        342μs
                      </span>
                      <span title="Row count" className="phpdebugbar-widgets-row-count">
                        0
                      </span>
                      <span
                        title="Copy to clipboard"
                        className="phpdebugbar-widgets-copy-clipboard"
                        style={{ cursor: "pointer" }}
                      />
                    </li>
                    <li className="phpdebugbar-widgets-list-item">
                      <code className="phpdebugbar-widgets-sql">
                        <span className="hljs-operator">
                          <span className="hljs-keyword">SELECT</span>{" "}
                          <span className="hljs-string">`translation`</span>{" "}
                          <span className="hljs-keyword">FROM</span>{" "}
                          <span className="hljs-string">`i18n`</span>
                          <span className="hljs-keyword">WHERE</span>{" "}
                          <span className="hljs-string">`lang`</span>=
                          <span className="hljs-string">'en'</span>
                          <span className="hljs-keyword">AND</span>{" "}
                          <span className="hljs-string">`origin_table`</span>=
                          <span className="hljs-string">'dlist_services'</span>
                          <span className="hljs-keyword">AND</span>{" "}
                          <span className="hljs-string">`origin_column`</span>=
                          <span className="hljs-string">'pagecontent'</span>
                          <span className="hljs-keyword">AND</span>{" "}
                          <span className="hljs-string">`origin_id`</span>=
                          <span className="hljs-string">'2'</span> Limit{" "}
                          <span className="hljs-number">1</span>
                        </span>
                      </code>
                      <span title="Duration" className="phpdebugbar-widgets-duration">
                        334μs
                      </span>
                      <span title="Row count" className="phpdebugbar-widgets-row-count">
                        0
                      </span>
                      <span
                        title="Copy to clipboard"
                        className="phpdebugbar-widgets-copy-clipboard"
                        style={{ cursor: "pointer" }}
                      />
                    </li>
                    <li className="phpdebugbar-widgets-list-item">
                      <code className="phpdebugbar-widgets-sql">
                        <span className="hljs-operator">
                          <span className="hljs-keyword">SELECT</span>{" "}
                          <span className="hljs-string">`translation`</span>{" "}
                          <span className="hljs-keyword">FROM</span>{" "}
                          <span className="hljs-string">`i18n`</span>
                          <span className="hljs-keyword">WHERE</span>{" "}
                          <span className="hljs-string">`lang`</span>=
                          <span className="hljs-string">'en'</span>
                          <span className="hljs-keyword">AND</span>{" "}
                          <span className="hljs-string">`origin_table`</span>=
                          <span className="hljs-string">'dlist_services'</span>
                          <span className="hljs-keyword">AND</span>{" "}
                          <span className="hljs-string">`origin_column`</span>=
                          <span className="hljs-string">'name'</span>
                          <span className="hljs-keyword">AND</span>{" "}
                          <span className="hljs-string">`origin_id`</span>=
                          <span className="hljs-string">'3'</span> Limit{" "}
                          <span className="hljs-number">1</span>
                        </span>
                      </code>
                      <span title="Duration" className="phpdebugbar-widgets-duration">
                        336μs
                      </span>
                      <span title="Row count" className="phpdebugbar-widgets-row-count">
                        0
                      </span>
                      <span
                        title="Copy to clipboard"
                        className="phpdebugbar-widgets-copy-clipboard"
                        style={{ cursor: "pointer" }}
                      />
                    </li>
                    <li className="phpdebugbar-widgets-list-item">
                      <code className="phpdebugbar-widgets-sql">
                        <span className="hljs-operator">
                          <span className="hljs-keyword">SELECT</span>{" "}
                          <span className="hljs-string">`translation`</span>{" "}
                          <span className="hljs-keyword">FROM</span>{" "}
                          <span className="hljs-string">`i18n`</span>
                          <span className="hljs-keyword">WHERE</span>{" "}
                          <span className="hljs-string">`lang`</span>=
                          <span className="hljs-string">'en'</span>
                          <span className="hljs-keyword">AND</span>{" "}
                          <span className="hljs-string">`origin_table`</span>=
                          <span className="hljs-string">'dlist_services'</span>
                          <span className="hljs-keyword">AND</span>{" "}
                          <span className="hljs-string">`origin_column`</span>=
                          <span className="hljs-string">'pagecontent'</span>
                          <span className="hljs-keyword">AND</span>{" "}
                          <span className="hljs-string">`origin_id`</span>=
                          <span className="hljs-string">'3'</span> Limit{" "}
                          <span className="hljs-number">1</span>
                        </span>
                      </code>
                      <span title="Duration" className="phpdebugbar-widgets-duration">
                        341μs
                      </span>
                      <span title="Row count" className="phpdebugbar-widgets-row-count">
                        0
                      </span>
                      <span
                        title="Copy to clipboard"
                        className="phpdebugbar-widgets-copy-clipboard"
                        style={{ cursor: "pointer" }}
                      />
                    </li>
                    <li className="phpdebugbar-widgets-list-item">
                      <code className="phpdebugbar-widgets-sql">
                        <span className="hljs-operator">
                          <span className="hljs-keyword">SELECT</span>{" "}
                          <span className="hljs-string">`translation`</span>{" "}
                          <span className="hljs-keyword">FROM</span>{" "}
                          <span className="hljs-string">`i18n`</span>
                          <span className="hljs-keyword">WHERE</span>{" "}
                          <span className="hljs-string">`lang`</span>=
                          <span className="hljs-string">'en'</span>
                          <span className="hljs-keyword">AND</span>{" "}
                          <span className="hljs-string">`origin_table`</span>=
                          <span className="hljs-string">'dlist_services'</span>
                          <span className="hljs-keyword">AND</span>{" "}
                          <span className="hljs-string">`origin_column`</span>=
                          <span className="hljs-string">'name'</span>
                          <span className="hljs-keyword">AND</span>{" "}
                          <span className="hljs-string">`origin_id`</span>=
                          <span className="hljs-string">'4'</span> Limit{" "}
                          <span className="hljs-number">1</span>
                        </span>
                      </code>
                      <span title="Duration" className="phpdebugbar-widgets-duration">
                        335μs
                      </span>
                      <span title="Row count" className="phpdebugbar-widgets-row-count">
                        0
                      </span>
                      <span
                        title="Copy to clipboard"
                        className="phpdebugbar-widgets-copy-clipboard"
                        style={{ cursor: "pointer" }}
                      />
                    </li>
                    <li className="phpdebugbar-widgets-list-item">
                      <code className="phpdebugbar-widgets-sql">
                        <span className="hljs-operator">
                          <span className="hljs-keyword">SELECT</span>{" "}
                          <span className="hljs-string">`translation`</span>{" "}
                          <span className="hljs-keyword">FROM</span>{" "}
                          <span className="hljs-string">`i18n`</span>
                          <span className="hljs-keyword">WHERE</span>{" "}
                          <span className="hljs-string">`lang`</span>=
                          <span className="hljs-string">'en'</span>
                          <span className="hljs-keyword">AND</span>{" "}
                          <span className="hljs-string">`origin_table`</span>=
                          <span className="hljs-string">'dlist_services'</span>
                          <span className="hljs-keyword">AND</span>{" "}
                          <span className="hljs-string">`origin_column`</span>=
                          <span className="hljs-string">'pagecontent'</span>
                          <span className="hljs-keyword">AND</span>{" "}
                          <span className="hljs-string">`origin_id`</span>=
                          <span className="hljs-string">'4'</span> Limit{" "}
                          <span className="hljs-number">1</span>
                        </span>
                      </code>
                      <span title="Duration" className="phpdebugbar-widgets-duration">
                        332μs
                      </span>
                      <span title="Row count" className="phpdebugbar-widgets-row-count">
                        0
                      </span>
                      <span
                        title="Copy to clipboard"
                        className="phpdebugbar-widgets-copy-clipboard"
                        style={{ cursor: "pointer" }}
                      />
                    </li>
                    <li className="phpdebugbar-widgets-list-item">
                      <code className="phpdebugbar-widgets-sql">
                        <span className="hljs-operator">
                          <span className="hljs-keyword">SELECT</span>{" "}
                          <span className="hljs-string">`translation`</span>{" "}
                          <span className="hljs-keyword">FROM</span>{" "}
                          <span className="hljs-string">`i18n`</span>
                          <span className="hljs-keyword">WHERE</span>{" "}
                          <span className="hljs-string">`lang`</span>=
                          <span className="hljs-string">'en'</span>
                          <span className="hljs-keyword">AND</span>{" "}
                          <span className="hljs-string">`origin_table`</span>=
                          <span className="hljs-string">'dlist_services'</span>
                          <span className="hljs-keyword">AND</span>{" "}
                          <span className="hljs-string">`origin_column`</span>=
                          <span className="hljs-string">'name'</span>
                          <span className="hljs-keyword">AND</span>{" "}
                          <span className="hljs-string">`origin_id`</span>=
                          <span className="hljs-string">'5'</span> Limit{" "}
                          <span className="hljs-number">1</span>
                        </span>
                      </code>
                      <span title="Duration" className="phpdebugbar-widgets-duration">
                        339μs
                      </span>
                      <span title="Row count" className="phpdebugbar-widgets-row-count">
                        0
                      </span>
                      <span
                        title="Copy to clipboard"
                        className="phpdebugbar-widgets-copy-clipboard"
                        style={{ cursor: "pointer" }}
                      />
                    </li>
                    <li className="phpdebugbar-widgets-list-item">
                      <code className="phpdebugbar-widgets-sql">
                        <span className="hljs-operator">
                          <span className="hljs-keyword">SELECT</span>{" "}
                          <span className="hljs-string">`translation`</span>{" "}
                          <span className="hljs-keyword">FROM</span>{" "}
                          <span className="hljs-string">`i18n`</span>
                          <span className="hljs-keyword">WHERE</span>{" "}
                          <span className="hljs-string">`lang`</span>=
                          <span className="hljs-string">'en'</span>
                          <span className="hljs-keyword">AND</span>{" "}
                          <span className="hljs-string">`origin_table`</span>=
                          <span className="hljs-string">'dlist_services'</span>
                          <span className="hljs-keyword">AND</span>{" "}
                          <span className="hljs-string">`origin_column`</span>=
                          <span className="hljs-string">'pagecontent'</span>
                          <span className="hljs-keyword">AND</span>{" "}
                          <span className="hljs-string">`origin_id`</span>=
                          <span className="hljs-string">'5'</span> Limit{" "}
                          <span className="hljs-number">1</span>
                        </span>
                      </code>
                      <span title="Duration" className="phpdebugbar-widgets-duration">
                        336μs
                      </span>
                      <span title="Row count" className="phpdebugbar-widgets-row-count">
                        0
                      </span>
                      <span
                        title="Copy to clipboard"
                        className="phpdebugbar-widgets-copy-clipboard"
                        style={{ cursor: "pointer" }}
                      />
                    </li>
                    <li className="phpdebugbar-widgets-list-item">
                      <code className="phpdebugbar-widgets-sql">
                        <span className="hljs-operator">
                          <span className="hljs-keyword">SELECT</span>{" "}
                          <span className="hljs-string">`translation`</span>{" "}
                          <span className="hljs-keyword">FROM</span>{" "}
                          <span className="hljs-string">`i18n`</span>
                          <span className="hljs-keyword">WHERE</span>{" "}
                          <span className="hljs-string">`lang`</span>=
                          <span className="hljs-string">'en'</span>
                          <span className="hljs-keyword">AND</span>{" "}
                          <span className="hljs-string">`origin_table`</span>=
                          <span className="hljs-string">'dlist_services'</span>
                          <span className="hljs-keyword">AND</span>{" "}
                          <span className="hljs-string">`origin_column`</span>=
                          <span className="hljs-string">'name'</span>
                          <span className="hljs-keyword">AND</span>{" "}
                          <span className="hljs-string">`origin_id`</span>=
                          <span className="hljs-string">'6'</span> Limit{" "}
                          <span className="hljs-number">1</span>
                        </span>
                      </code>
                      <span title="Duration" className="phpdebugbar-widgets-duration">
                        346μs
                      </span>
                      <span title="Row count" className="phpdebugbar-widgets-row-count">
                        0
                      </span>
                      <span
                        title="Copy to clipboard"
                        className="phpdebugbar-widgets-copy-clipboard"
                        style={{ cursor: "pointer" }}
                      />
                    </li>
                    <li className="phpdebugbar-widgets-list-item">
                      <code className="phpdebugbar-widgets-sql">
                        <span className="hljs-operator">
                          <span className="hljs-keyword">SELECT</span>{" "}
                          <span className="hljs-string">`translation`</span>{" "}
                          <span className="hljs-keyword">FROM</span>{" "}
                          <span className="hljs-string">`i18n`</span>
                          <span className="hljs-keyword">WHERE</span>{" "}
                          <span className="hljs-string">`lang`</span>=
                          <span className="hljs-string">'en'</span>
                          <span className="hljs-keyword">AND</span>{" "}
                          <span className="hljs-string">`origin_table`</span>=
                          <span className="hljs-string">'dlist_services'</span>
                          <span className="hljs-keyword">AND</span>{" "}
                          <span className="hljs-string">`origin_column`</span>=
                          <span className="hljs-string">'pagecontent'</span>
                          <span className="hljs-keyword">AND</span>{" "}
                          <span className="hljs-string">`origin_id`</span>=
                          <span className="hljs-string">'6'</span> Limit{" "}
                          <span className="hljs-number">1</span>
                        </span>
                      </code>
                      <span title="Duration" className="phpdebugbar-widgets-duration">
                        333μs
                      </span>
                      <span title="Row count" className="phpdebugbar-widgets-row-count">
                        0
                      </span>
                      <span
                        title="Copy to clipboard"
                        className="phpdebugbar-widgets-copy-clipboard"
                        style={{ cursor: "pointer" }}
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <a className="phpdebugbar-restore-btn" style={{}} />
          </div>
          <div className="sweet-container">
            <div className="sweet-overlay" tabIndex={-1} />
            <div className="sweet-alert" style={{ display: "none" }} tabIndex={-1}>
              <div className="icon error">
                <span className="x-mark">
                  <span className="line left" />
                  <span className="line right" />
                </span>
              </div>
              <div className="icon warning">
                {" "}
                <span className="body" /> <span className="dot" />{" "}
              </div>{" "}
              <div className="icon info" />{" "}
              <div className="icon success">
                {" "}
                <span className="line tip" /> <span className="line long" /> <div className="placeholder" />{" "}
                <div className="fix" />{" "}
              </div>{" "}
              <img className="sweet-image" /> <h2>Title</h2>
              <div className="sweet-content">Text</div>
              <hr className="sweet-spacer" />
              <button className="sweet-confirm">OK</button>
              <button className="sweet-cancel">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(NewDashboard)
