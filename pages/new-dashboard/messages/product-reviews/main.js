import React from "react"

const Main = () => {
  return (
    <div className="content" id="content">
      <div className="row">
        <div className="col-md-12">
          <div className="card product-panel">
            <div className="toolbar flex-bar">
              <div className="flex-bar-start"></div>
              <div className="flex-bar-middle">
                <div className="flex-item" style={{ display: "none" }}>
                  <button className="btn btn-default btn-simple delete-btn">
                    <span className="fa fa-trash-o" /> <span>Delete</span>
                  </button>
                </div>
              </div>
              <div className="flex-bar-end">
                <div className="flex-item">
                  <div className="input-group search-bar">
                    <input
                      type="text"
                      name="searchtxt"
                      id="searchtxt"
                      className="form-control"
                      placeholder="Search.."
                    />
                    <span className="input-group-addon">
                      <i className="fa fa-search buysearch" />
                    </span>
                  </div>
                </div>
                <div className="flex-item zero-margin-right">
                  <div className="no-wrap">0 Reviews </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 review-list">
                <div id="reviews">
                  <ul>
                    <div className="col-md-12 product-list">
                      <div className="emtpy-message no-reviews text-center">
                        <img
                          src="https://assets.abraacdn.com/assets/react-assets/img/no-review.svg"
                          alt="no review icon"
                          className="img-responsive"
                        />
                        <div className="review-content">
                          <h2>
                            No reviews <br />
                            found
                          </h2>
                        </div>
                      </div>
                    </div>
                  </ul>
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
