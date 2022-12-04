import React from "react"

const Main = () => {
  return (
    <div className="content" id="content">
      <div data-reactroot className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="card" style={{ minHeight: 800 }}>
              <div className="content">
                <div className>
                  <div className="toolbar flex-bar">
                    <div className="flex-bar-start">
                      <div
                        className="flex-item first-item"
                        id="selectall"
                        style={{ display: "none" }}
                      >
                        <div className="checkbox-solid-sm">
                          <input type="checkbox" id="inbox-all" name="check" />
                          <label htmlFor="inbox-all" />
                        </div>
                      </div>
                    </div>
                    <div className="flex-bar-middle">
                      <div
                        className="flex-item"
                        id="deletecomp"
                        style={{ display: "none" }}
                      >
                        <button className="btn btn-default btn-simple delete-btn">
                          <span className="fa fa-trash" />
                          {/* react-text: 17 */} {/* /react-text */}
                          <span>Delete</span>
                        </button>
                      </div>
                      <div
                        className="flex-item"
                        id="markassoldcomp"
                        style={{ display: "none" }}
                      />
                      <div
                        className="flex-item"
                        id="markasmnotsoldcomp"
                        style={{ display: "none" }}
                      />
                    </div>
                    <div className="flex-bar-end">
                      <div className="flex-item" id="searchbar">
                        <div className="input-group search-bar">
                          <input
                            type="text"
                            id="search_keyval"
                            className="form-control"
                            placeholder="Search.."
                          />
                          <span className="input-group-addon">
                            <i className="fa fa-search" />
                          </span>
                        </div>
                      </div>
                      <div className="flex-item zero-margin-right">
                        <div className="no-wrap">
                          {/* react-text: 29 */}0{/* /react-text */}
                          {/* react-text: 30 */} {/* /react-text */}
                          <b>Product(s)</b>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="wishlist_area">
                    <div
                      className="content-loadings"
                      style={{ display: "none" }}
                    >
                      <img
                        src="https://assets.abraacdn.com/assets/images/ajax-loader.gif"
                        alt="loading icon"
                      />
                    </div>
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
