import React from "react"
// import SVG from "react-inlinesvg"
import Svg1 from "../../assets/Svg1.svg"

export default function Main() {
  return (
    <div style={{ marginLeft: "auto" }} className="content" id="content">
      <div data-reactroot className="container-fluid">
        <div className="row">
          <div className="col-md-12" id="cardTotal">
            <div className="row" id="info-container">
              <div
                data-reactroot
                id="info-card-container"
                style={{
                  width: "100% !important"
                }}
                className="info-card-container custom-padding"
              >
                <div className="col-md-3 col-sm-6 col-xs-12">
                  <div className="info-card">
                    <div className="info-card-lhs">
                      <span className="info-card-header fa fa-circle font-red" />
                      <span className="font-info-card">Total RFQ Received</span>
                      <div className="info-card-data">
                        <span className="font-info-light">00</span>
                        <span>0</span>
                      </div>
                    </div>
                    <div className="info-card-rhs">
                      <div className="icon">
                        <span className="icon-document" />
                      </div>
                      <div className="message">
                        <p className="font-green">3 Quotes Remaining</p>
                        <a className="font-green" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                  <div className="info-card">
                    <div className="info-card-lhs">
                      <span className="info-card-header fa fa-circle font-green" />
                      <span className="font-info-card">Total Orders</span>
                      <div className="info-card-data">
                        <span className="font-info-light">00</span>
                        <span>0</span>
                      </div>
                    </div>
                    <div className="info-card-rhs">
                      <div className="icon">
                        <span className="icon-speaker" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                  <div className="info-card" style={{ cursor: "auto" }}>
                    <div className="info-card-lhs">
                      <span className="info-card-header fa fa-circle font-blue" />
                      <span className="font-info-card">Visitors</span>
                      <div className="info-card-data">
                        <span className="font-info-light">00</span>
                        <span>0</span>
                      </div>
                    </div>
                    <div className="info-card-rhs">
                      <div className="icon">
                        <span className="icon-eye" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                  <div className="info-card">
                    <div className="info-card-lhs">
                      <span className="info-card-header fa fa-circle font-light-green" />
                      <span className="font-info-card">Messages</span>
                      <div className="info-card-data">
                        <span className="font-info-light">00</span>
                        <span>0</span>
                      </div>
                    </div>
                    <div className="info-card-rhs">
                      <div className="icon">
                        <span className="icon-document2" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="header negative-margin">
              <h4 className="title">Global RFQ by Top Locations</h4>
              <p className="category">All RFQ that quoted</p>
            </div>
          </div>
        </div>
        <div className="row" style={{ marginBottom: 18 }}>
          <div className="col-md-6 pl-0" style={{ paddingLeft: 0 }}>
            <div className="card custom-table">
              <div className="header">
                <h4 className="title">Monthly Store Performance</h4>
                <p className="category">All Activities</p>
              </div>
              <div className="content">
                <div id="chartHours" className="ct-chart">
                  {/* <img src={require("./svg1.svg")} /> */}
                  <Svg1 />
                </div>
              </div>
              <div className="footer">
                <div className="legend">
                  <span className="text-info">
                    <i className="fa fa-square" />
                    {/* react-text: 21 */}
                    My store activities
                    {/* /react-text */}
                  </span>
                  <span className="text-danger">
                    <i className="fa fa-square" />
                    {/* react-text: 24 */}
                    Abraa average
                    {/* /react-text */}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card custom-table">
              <div className="header">
                <h4 className="title">Products Split</h4>
                <p className="category">Top performing products</p>
              </div>
              <div className="row content">
                <div className="col-md-6">
                  <div id="chartEmail" className="ct-chart" />
                </div>
                <div className="table-responsive col-md-6" id="topproducts">
                  <table data-reactroot className="table plain-table small-font single-row max-width-100">
                    <thead>
                      <tr>
                        <th />
                        <th>TYPE</th>
                        <th>PCT</th>
                        <th>TOTAL</th>
                      </tr>
                    </thead>
                    <tbody />
                  </table>
                </div>
              </div>
              <div className="footer" />
            </div>
          </div>
        </div>

        <div className="row" id="buydata">
          <div data-reactroot className="col-md-12" style={{ paddingLeft: 0 }}>
            <div className="card custom-table">
              <div className="header">
                <h4 className="title">Request For Quotation</h4>
                <p className="category">Latest Request For Quotation for your categories</p>
              </div>
              <div
                className="table-responsive table-padding content"
                style={{ height: 443, overflowY: "scroll" }}
              >
                <table className="table single-row">
                  <thead className="bold">
                    <tr>
                      <th width="40%">REQUEST(S)</th>
                      <th>QTY</th>
                      <th>LATEST QUOTE</th>
                      <th>Country</th>
                      <th>DATE</th>
                    </tr>
                  </thead>
                  <tbody />
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
