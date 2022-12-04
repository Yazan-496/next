import React from "react"

const Main = () => {
  return (
    <div className="content" id="content">
      <div data-reactroot className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="card buyer-card">
              <div className="toolbar flex-bar" id="flex-bar">
                <div className="flex-bar-start">
                  <div className="flex-item first-item">
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
                    style={{ opacity: "0.5" }}
                  />
                  <div
                    className="flex-item"
                    id="markassoldcomp"
                    style={{ opacity: "0.5" }}
                  >
                    <button className="btn btn-default btn-simple delete-btn">
                      <span className="far fa-envelope margin-right-5" />
                      {/* react-text: 16 */} {/* /react-text */}
                      <span>Mark as Closed</span>
                    </button>
                  </div>
                </div>
                <div className="flex-bar-end">
                  <div className="flex-item">
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
                    <button
                      className="btn btn-fill btn-primary"
                      data-toggle="modal"
                      data-target="#reportreolution"
                    >
                      <span className="fa fa-plus-circle" />
                      <span>Add new Claim</span>
                    </button>
                    <div
                      className="modal fade "
                      id="reportreolution"
                      role="dialog"
                      aria-labelledby="mySmallModalLabel"
                    >
                      <div className="modal-dialog " role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <button
                              type="button"
                              className="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">×</span>
                            </button>
                            <h4 className="modal-title" id="myModalLabel">
                              Report to Resolution Center
                            </h4>
                          </div>
                          <div className="modal-body">
                            <div className="reslutiondata_main">
                              <div className="left">
                                Item(From your orders)*
                              </div>
                              <div className=" rightbb">
                                <select
                                  className="form-control select_ox"
                                  id="meassageitemtrigger"
                                >
                                  <option />
                                </select>
                                <input
                                  type="hidden"
                                  name="selectedorder"
                                  id="selectedorder"
                                />
                                <div className="hoverdiv " id="meassageitemtr">
                                  <div className="datalist" />
                                </div>
                              </div>
                            </div>
                            <div className="reslutiondata_main">
                              <div className=" left">Topic*</div>
                              <div className="rightbbs">
                                <select
                                  id="resProbsval"
                                  className="form-control select_ox "
                                >
                                  <option value={1} className="option">
                                    Product Quality is not good
                                  </option>
                                  <option value={2} className="option">
                                    I didnt get my product
                                  </option>
                                </select>
                              </div>
                            </div>
                            <div className="reslutiondata_main">
                              <div className=" left">Messages*</div>
                              <div className=" rightbb">
                                <textarea
                                  className="textre"
                                  id="textrr"
                                  placeholder="Your messages to contact seller"
                                  defaultValue={""}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="modal_footer">
                            <a
                              href="#"
                              id="payemntadd"
                              className="btn button1"
                              data-dismiss="modal"
                            >
                              Send
                            </a>
                            <a
                              href="#"
                              id="payemntcancel"
                              data-dismiss="modal"
                              className="btn button2"
                            >
                              Cancel
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-item zero-margin-right">
                    <div className="no-wrap">
                      {/* react-text: 56 */}0{/* /react-text */}
                      {/* react-text: 57 */}&nbsp; {/* /react-text */}
                      {/* react-text: 58 */}Request(s){/* /react-text */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="row " id="requestrows">
                <div className="col-md-12 product-list" id="productlist">
                  <table
                    id="data-table"
                    className="table data-table table-hover"
                  >
                    <thead>
                      <tr>
                        <th data-field="checkbox" data-checkbox="true" />
                        <th data-field="request" data-sortable="true">
                          <a href="#">SUBJECT</a>
                        </th>
                        <th data-field="date" data-sortable="true">
                          <a href="#">REQUEST DATE</a>
                          <a href="#">
                            <span className="fa fa-sort" />
                          </a>
                        </th>
                        <th data-field="date" data-sortable="true">
                          <a href="#">SELLER NAME</a>
                        </th>
                        <th data-field="buyer" data-sortable="true">
                          <a href="#">STATUS</a>
                          <a href="#">
                            <span className="fa fa-sort" />
                          </a>
                        </th>
                      </tr>
                    </thead>
                    <tbody />
                  </table>
                </div>
              </div>
            </div>
            <div className="row">
              <div />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
