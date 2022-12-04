import React from "react"

const Main = () => {
  return (
    <div className="content" id="content">
      <div data-reactroot className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="card product-panel">
              <div className="toolbar flex-bar">
                <div className="flex-bar-start">
                  <div className="flex-item first-item" id="selectall">
                    <div data-reactroot className="checkbox-solid-sm">
                      <input
                        type="checkbox"
                        defaultValue="None"
                        id="new"
                        name="check"
                      />
                      <label htmlFor="new" />
                    </div>
                  </div>
                  <div className="flex-item">
                    <label className="fixed-width">VIEW BY</label>
                    <div className="toolbar-control-item" id="sortby">
                      <div className="custom-positive-relative">
                        <select
                          name="cities"
                          id="cit"
                          className="selectpicker form-control custom-select1 custom-hover"
                          data-title="View"
                          data-style="btn-default btn-block"
                          data-menu-style="dropdown-blue"
                          value={0}
                          defaultValue={0}
                          style={{ width: "75%", display: "block !important" }}
                        >
                          <option value={0} className="custom-hover">
                            recent
                          </option>
                          <option value="Title" className="custom-hover">
                            title
                          </option>
                          <option value="Price" className="custom-hover">
                            price
                          </option>
                        </select>
                        <span className="icon-dropdown fa fa-angle-down" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-item">
                    <label className="fixed-width">LIST</label>
                    <div className="toolbar-control-item" id="orderby">
                      <div data-reactroot className="custom-positive-relative ">
                        <select
                          name="cities"
                          id="acded"
                          className="selectpicker form-control custom-select1 custom-hover"
                          data-title="LIST"
                          data-style="btn-default btn-block"
                          data-menu-style="dropdown-blue"
                          style={{ width: "75%", display: "block !important" }}
                          value={0}
                          defaultValue={0}
                        >
                          <option selected="true" value={0}>
                            Descending
                          </option>
                          <option value={1}>Ascending</option>
                        </select>

                        <span className="icon-dropdown fa fa-angle-down" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-bar-middle">
                  <div
                    className="flex-item"
                    id="deletecomp"
                    style={{ display: "none" }}
                  >
                    <button
                      data-reactroot
                      className="btn btn-default btn-simple delete-btn"
                    >
                      <span className="fa fa-trash" />
                      {/* react-text: 3 */} {/* /react-text */}
                      <span className="custom-span">Delete</span>
                    </button>
                  </div>
                  <div
                    className="flex-item"
                    id="markassoldcomp"
                    style={{ display: "none" }}
                  >
                    <div data-reactroot className="checkbox-solid-sm">
                      <input
                        type="checkbox"
                        defaultValue="None"
                        id="sold"
                        name="check"
                      />
                      <label htmlFor="sold" />
                      <span className="custom-span">Mark as Inactive</span>
                    </div>
                  </div>
                  <div
                    className="flex-item"
                    id="markasmnotsoldcomp"
                    style={{ display: "none" }}
                  >
                    <div data-reactroot className="checkbox-solid-sm">
                      <input
                        type="checkbox"
                        defaultValue="None"
                        id="not-sold"
                        name="check"
                      />
                      <label htmlFor="not-sold" />
                      <span className="custom-span">Mark as active</span>
                    </div>
                  </div>
                </div>
                <div className="flex-bar-end">
                  <div className="flex-item" id="searchbar">
                    <div data-reactroot className="input-group search-bar">
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
                      {/* react-text: 28 */}0{/* /react-text */}
                      {/* react-text: 29 */} Product(s){/* /react-text */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="row" id="productlist">
                <div className="content-loadings" style={{ display: "none" }}>
                  <img
                    src="https://assets.abraacdn.com/assets/images/ajax-loader.gif"
                    alt="loading icon"
                  />
                </div>
                <div className="col-md-12 product-list" />
              </div>
            </div>
            <div className="row" id="paginationdiv">
              <div />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
