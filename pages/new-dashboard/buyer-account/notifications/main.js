import React from "react"

const Main = () => {
  return (
    <div className="content" id="content">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="content">
              <div className="row">
                <div className="col-md-12">
                  <div className="header">
                    <p className="title">YOUR NOTIFICATIONS</p>
                  </div>
                  <div className="notification">
                    <ul className="media-list">
                      <li className="media unread">
                        <div className="media-left">
                          <a href="https://www.abraa.com/new-dashboard/store-settings">
                            <img
                              className="media-object"
                              src="https://assets.abraacdn.com/assets/react-assets/img/abrra-icon.jpg"
                              alt="Abraa icon"
                            />
                          </a>
                        </div>
                        <div
                          className="media-body"
                          style={{ cursor: "pointer" }}
                          onclick="javascript: location.href='new-dashboard/store-settings'"
                        >
                          <p className="pull-left">
                            <b>
                              <span className="font-success">
                                Your seller profile is incomplete !<br />
                              </span>
                            </b>
                          </p>
                          <p className="pull-right">2022-10-22 12:30:08</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
