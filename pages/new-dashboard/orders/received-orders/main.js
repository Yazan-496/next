import React from "react"

const Main = () => {
  return (
    <div className="content" id="content">
      <div data-reactroot className="container-fluid">
        <div className="row">
          <div className="col-md-12 card-body">
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
                    id="markassoldcomp"
                    style={{ opacity: "0.5" }}
                  >
                    <button
                      style={{
                        border: "none"
                      }}
                      className="btn btn-default btn-simple delete-btn"
                    >
                      <span className="far fa-envelope  margin-right-5" />
                      {/* react-text: 15 */} {/* /react-text */}
                      <span>Mark as Read</span>
                    </button>
                  </div>
                  <div
                    className="flex-item"
                    id="markasmnotsoldcomp"
                    style={{ opacity: "0.5" }}
                  >
                    <button
                      style={{
                        border: "none"
                      }}
                      className="btn btn-default btn-simple delete-btn"
                    >
                      <span className="far fa-envelope margin-right-5" />
                      {/* react-text: 20 */} {/* /react-text */}
                      <span>Mark as unread</span>
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
                  </div>
                  <div className="flex-item zero-margin-right">
                    <div className="no-wrap">
                      {/* react-text: 30 */}0{/* /react-text */}
                      {/* react-text: 31 */}&nbsp; {/* /react-text */}
                      {/* react-text: 32 */}Order(s){/* /react-text */}
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
                        <th data-field="date" data-sortable="true">
                          <a
                            style={{
                              color: "white"
                            }}
                            href="#"
                          >
                            DATE
                          </a>
                          <a
                            style={{
                              color: "white"
                            }}
                            href="#"
                          >
                            <span className="fa fa-sort" />
                          </a>
                        </th>
                        <th data-field="date" data-sortable="true">
                          <a
                            style={{
                              color: "white"
                            }}
                            href="#"
                          >
                            BUYER NAME
                          </a>
                        </th>
                        <th data-field="price" data-sortable="true">
                          <a
                            style={{
                              color: "white"
                            }}
                            href="#"
                          >
                            TOTAL PRICE
                          </a>
                          <a
                            style={{
                              color: "white"
                            }}
                            href="#"
                          >
                            <span className="fa fa-sort" />
                          </a>
                        </th>
                        <th data-field="buyer" data-sortable="true">
                          <a
                            style={{
                              color: "white"
                            }}
                            href="#"
                          >
                            Status
                          </a>
                        </th>
                        <th data-field="options" data-sortable="false">
                          <a
                            style={{
                              color: "white"
                            }}
                            href="#"
                          >
                            OPTIONS
                          </a>
                        </th>
                      </tr>
                    </thead>
                    <tbody />
                  </table>
                  <div
                    className="custom-modal card-body p-x-0"
                    id="order-details"
                  >
                    <div className="card card-sec d-flex flex-wrap">
                      <div className="data-row">
                        <span>
                          <b>Buyer Name</b>
                        </span>
                        <span className="value" id="buyer-name" />
                      </div>
                      <div className="data-row">
                        <span>
                          <b>Date</b>
                        </span>
                        <span className="value" id="order-date" />
                      </div>
                      <div className="data-row">
                        <span>
                          <b>Status</b>
                        </span>
                        <span className="value" id="order-status" />
                      </div>
                      <div className="data-row">
                        <span>
                          <b>Payment type</b>
                        </span>
                        <span className="value" id="payment-type" />
                      </div>
                      <div className="data-row">
                        <span>
                          <b>Total price</b>
                        </span>
                        <span className="value" id="total-price" />
                      </div>
                      <div className="data-row">
                        <span>
                          <b>Shipping address</b>
                        </span>
                        <span className="value" id="shipping-address" />
                      </div>
                      <div className="data-row">
                        <span>
                          <b>Shipping price</b>
                        </span>
                        <span className="value" id="shipping-price" />
                      </div>
                    </div>
                    <div className="table-container modal-padding">
                      <table
                        id="data-table"
                        className="table data-table table-hover item-details"
                      >
                        <thead>
                          <tr>
                            <th>
                              <a href="javascript:void(0)">Item name</a>
                            </th>
                            <th>
                              <a href="javascript:void(0)">Unit price</a>
                            </th>
                            <th>
                              <a href="javascript:void(0)">Quantity</a>
                            </th>
                          </tr>
                        </thead>
                        <tbody />
                      </table>
                    </div>
                    <div className="d-flex justify-content-center mt-15">
                      <a
                        href="javascript:void(0)"
                        data-id
                        className="btn btn-success ml-7 mr-7"
                      >
                        Accept
                      </a>
                      <a
                        href="javascript:void(0)"
                        data-id
                        className="btn btn-danger ml-7 mr-7"
                      >
                        Reject
                      </a>
                      <a
                        href="javascript:void(0)"
                        className="btn btn-info ml-7 mr-7"
                      >
                        Close
                      </a>
                    </div>
                  </div>
                  <div className="overlay" />
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
