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
                    <div className="col-md-7">
                      <p className="title">YOUR NOTIFICATIONS</p>
                    </div>
                    <div className="col-md-1" />
                    <div className="col-md-4">
                      <a
                        className="subtitless"
                        href="https://www.abraa.com/new-dashboard/notifications/?showall=true"
                      >
                        Show all notifications
                      </a>
                    </div>
                  </div>
                  <div className="notification">
                    <ul className="media-list">
                      <li className="media unread">
                        <div className="media-left">
                          <a href="#">
                            <img className="media-object" alt="abraa icon" />
                          </a>
                        </div>
                        <div
                          className="media-body"
                          style={{ cursor: "pointer" }}
                        >
                          <p className="pull-left">
                            <b>
                              <span className="font-success"> </span>
                            </b>
                          </p>
                          <p className="pull-right" />
                        </div>
                      </li>
                      <li className="media unread">
                        <div className="media-left">
                          <a href="#">
                            <img
                              className="media-object"
                              src="https://assets.abraacdn.com/assets/react-assets/img/abrra-icon.jpg"
                              alt="abraa icon"
                            />
                          </a>
                        </div>
                        <div
                          className="media-body"
                          style={{ cursor: "pointer" }}
                          onclick="verifyByWhatsapp()"
                        >
                          <p className="pull-left">
                            <b>
                              <span className="font-success">
                                Your phone number is not verified!
                              </span>
                            </b>
                          </p>
                          <p className="pull-right" />
                        </div>
                      </li>
                      <li className="media unread">
                        <div className="media-left">
                          <a href="#">
                            <img
                              className="media-object"
                              src="https://assets.abraacdn.com/assets/react-assets/img/abrra-icon.jpg"
                              alt="abraa icon"
                            />
                          </a>
                        </div>
                        <div
                          className="media-body"
                          style={{ cursor: "pointer" }}
                          onclick="resendVerifyEmail('ghaithadanof2021@gmail.com')"
                        >
                          <p className="pull-left">
                            <b>
                              <span className="font-success">
                                Your email is not verified!
                              </span>
                            </b>
                          </p>
                          <p className="pull-right" />
                        </div>
                      </li>
                      <li className="media unread">
                        <div className="media-left">
                          <a href="#">
                            <img className="media-object" alt="abraa icon" />
                          </a>
                        </div>
                        <div
                          className="media-body"
                          style={{ cursor: "pointer" }}
                        >
                          <p className="pull-left">
                            <b>
                              <span className="font-success"> </span>
                            </b>
                          </p>
                          <p className="pull-right" />
                        </div>
                      </li>
                      <li className="media unread">
                        <div className="media-left">
                          <a href="https://www.abraa.com/new-dashboard/store-settings">
                            <img
                              className="media-object"
                              src="https://assets.abraacdn.com/assets/react-assets/img/abrra-icon.jpg"
                              alt="abraa icon"
                            />
                          </a>
                        </div>
                        <div
                          className="media-body"
                          style={{ cursor: "pointer" }}
                          onclick="location.href='https://www.abraa.com/new-dashboard/store-settings'"
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
