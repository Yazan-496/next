import React from "react"

const Main = () => {
  return (
    <div className="content" id="content">
      <div data-reactroot className="row">
        <div className="col-md-12 message-tabs">
          <ul className="nav nav-tabs ml-141">
            <li className="active">
              <a
                style={{
                  border: "none"
                }}
                data-toggle="tab"
                href="#inbox"
              >
                messages ( 0 new )
              </a>
            </li>
            <li>
              <a data-toggle="tab" href="#company">
                Abraa messages ( 0 new )
              </a>
            </li>
            <li>
              <a data-toggle="tab" href="#security">
                Resolution Center
              </a>
            </li>
          </ul>
          <div className="message-sidebar">
            <ul className="nav nav-pills nav-stacked">
              <li className="active">
                <a data-toggle="tab" href="#inbox">
                  <span className="fa fa-inbox" />
                  Inbox ( 0 new )
                </a>
              </li>
              <li>
                <a data-toggle="tab" href="#inbox">
                  <span className="fa fa-tag" />
                  {/* react-text: 40 */} {/* /react-text */}
                  {/* react-text: 41 */}Important{/* /react-text */}
                </a>
              </li>
              <li>
                <a data-toggle="tab" href="#security">
                  <span className="fa fa-trash" />
                  {/* react-text: 45 */} {/* /react-text */}
                  {/* react-text: 46 */}Trash{/* /react-text */}
                </a>
              </li>
            </ul>
          </div>
          <div className="tab-content card ml-141">
            <span className="tab-result">0 0</span>

            <div id="security" className="tab-pane card-content fade in">
              <div className="toolbar flex-bar">
                <div className="flex-bar-start">
                  <div className="flex-item first-item">
                    <div className="checkbox-solid-sm">
                      <input
                        type="checkbox"
                        defaultValue="None"
                        id="new"
                        name="check"
                      />
                      <label />
                    </div>
                  </div>
                  <div className="flex-item" />
                </div>
                <div className="flex-bar-middle">
                  <div
                    className="flex-item"
                    id="resdeleteComp"
                    style={{ display: "none" }}
                  >
                    <button className="btn btn-default btn-simple delete-btn">
                      <span className="fa fa-trash" />
                      {/* react-text: 59 */} {/* /react-text */}
                      <span>Delete</span>
                    </button>
                  </div>
                  <div
                    className="flex-item"
                    id="resmarkreadComp"
                    style={{ display: "none" }}
                  >
                    <div className="checkbox-solid-sm">
                      <input type="checkbox" id="sold" name="check" />
                      <label htmlFor="sold" />
                      <span>Mark as Read</span>
                    </div>
                  </div>
                  <div
                    className="flex-item"
                    id="resmarkunreadComp"
                    style={{ display: "none" }}
                  >
                    <div className="checkbox-solid-sm">
                      <input type="checkbox" id="not-sold" name="check" />
                      <label htmlFor="not-sold" />
                      <span>Mark as unread</span>
                    </div>
                  </div>
                </div>
                <div className="flex-bar-end">
                  <div className="flex-item">
                    <div className="toolbar-control-item">
                      <select
                        name="cities"
                        className="selectpicker custom-picker"
                        data-title="View"
                        data-style="btn-default btn-block"
                        data-menu-style="dropdown-blue"
                      >
                        <option value="id">10</option>
                        <option value="ms">50</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex-item mr-0">
                    <div className="input-group search-bar">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search.."
                      />
                      <span className="input-group-addon">
                        <i className="fa fa-search" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className>
                <table id="message-table" className="table data-table">
                  <thead>
                    <tr>
                      <th data-field="checkbox" data-checkbox="true" />
                      <th data-field="name" data-sortable="true">
                        {/* react-text: 88 */}ITEM NAME{/* /react-text */}
                        {/* react-text: 89 */} {/* /react-text */}
                        <a href="#">
                          <span className="fa fa-sort" />
                        </a>
                      </th>
                      <th data-field="date" data-sortable="true">
                        {/* react-text: 93 */}REQUEST DATE{/* /react-text */}
                        {/* react-text: 94 */} {/* /react-text */}
                        <a href="#">
                          <span className="fa fa-sort" />
                        </a>
                      </th>
                      <th data-field="seller" data-sortable="true">
                        {/* react-text: 98 */}SELLER NAME{/* /react-text */}
                        {/* react-text: 99 */} {/* /react-text */}
                        <a href="#">
                          <span className="fa fa-sort" />
                        </a>
                      </th>
                      <th data-field="status" data-sortable="true">
                        {/* react-text: 103 */}Status{/* /react-text */}
                        {/* react-text: 104 */} {/* /react-text */}
                        <a href="#">
                          <span className="fa fa-sort" />
                        </a>
                      </th>
                    </tr>
                  </thead>
                </table>
                <div className="row">
                  <div className="col-md-12 product-list">
                    <div className="emtpy-message no-reviews text-center">
                      <img
                        src="https://assets.abraacdn.com/assets/react-assets/img/no-review.svg"
                        alt="no reviews icon"
                        className="img-responsive"
                      />
                      <div className="review-content">
                        <h2>
                          {/* react-text: 113 */}No data{/* /react-text */}
                          {/* react-text: 114 */} {/* /react-text */}
                          <br />
                          {/* react-text: 116 */}found{/* /react-text */}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="inbox" className="tab-pane card-content fade in active">
              <div className="toolbar flex-bar">
                <div className="flex-bar-start">
                  <div className="flex-item first-item">
                    <div className="checkbox-solid-sm">
                      <input type="checkbox" id="inbox-all" name="check" />
                      <label htmlFor="inbox-all" />
                    </div>
                  </div>
                  <div className="flex-item" />
                </div>
                <div className="flex-bar-middle">
                  <div
                    className="flex-item"
                    id="inbdeleteComp"
                    style={{ display: "none" }}
                  >
                    <button className="btn btn-default btn-simple delete-btn">
                      <span className="fa fa-trash" />
                      {/* react-text: 129 */} {/* /react-text */}
                      <span>Delete</span>
                    </button>
                  </div>
                  <div
                    className="flex-item"
                    id="inbmarkreadComp"
                    style={{ display: "none" }}
                  >
                    <button className="btn btn-default btn-simple delete-btn">
                      <span className="far fa-envelope margin-right-5" />
                      {/* react-text: 134 */} {/* /react-text */}
                      <span>Mark as Read</span>
                    </button>
                  </div>
                  <div
                    className="flex-item"
                    id="inbmarkunreadComp"
                    style={{ display: "none" }}
                  >
                    <button className="btn btn-default btn-simple delete-btn">
                      <span className="far fa-envelope margin-right-5" />
                      {/* react-text: 139 */} {/* /react-text */}
                      <span>Mark as unread</span>
                    </button>
                  </div>
                </div>
                <div className="flex-bar-end">
                  <div className="flex-item">
                    <div className="toolbar-control-item">
                      <div className="custom-position-relative">
                        <select
                          name="cities"
                          className="selectpicker custom-picker"
                          data-title="View"
                          data-style="btn-default btn-block"
                          data-menu-style="dropdown-blue"
                        >
                          <option value="id">10</option>
                          <option value="ms">50</option>
                        </select>
                        <span className="icon-dropdown fa fa-angle-down" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-item mr-0">
                    <div className="input-group search-bar">
                      <input
                        type="text"
                        id="search_inb_keyval"
                        className="form-control"
                        placeholder="Search.."
                      />
                      <span className="input-group-addon">
                        <i className="fa fa-search" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className>
                <div className="row">
                  <div className="col-md-12 product-list">
                    <div className="emtpy-message no-reviews text-center">
                      <img
                        src="https://assets.abraacdn.com/assets/react-assets/img/no-review.svg"
                        alt="no reviews icon"
                        className="img-responsive"
                      />
                      <div className="review-content">
                        <h2>
                          {/* react-text: 161 */}No data{/* /react-text */}
                          {/* react-text: 162 */} {/* /react-text */}
                          <br />
                          {/* react-text: 164 */}found{/* /react-text */}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="personal" className="tab-pane card-content fade in">
              <div className="toolbar flex-bar">
                <div className="flex-bar-start">
                  <div className="flex-item first-item">
                    <div className="checkbox-solid-sm">
                      <input type="checkbox" id="inbox-all" name="check" />
                      <label htmlFor="inbox-all" />
                    </div>
                  </div>
                  <div className="flex-item" />
                </div>
                <div className="flex-bar-middle">
                  <div
                    className="flex-item"
                    id="inbdeleteComp"
                    style={{ display: "none" }}
                  >
                    <button className="btn btn-default btn-simple delete-btn">
                      <span className="fa fa-trash" />
                      {/* react-text: 177 */} {/* /react-text */}
                      <span>Delete</span>
                    </button>
                  </div>
                  <div
                    className="flex-item"
                    id="inbmarkreadComp"
                    style={{ display: "none" }}
                  >
                    <button className="btn btn-default btn-simple delete-btn">
                      <span className="far fa-envelope margin-right-5" />
                      {/* react-text: 182 */} {/* /react-text */}
                      <span>Mark as Read</span>
                    </button>
                  </div>
                  <div
                    className="flex-item"
                    id="inbmarkunreadComp"
                    style={{ display: "none" }}
                  >
                    <button className="btn btn-default btn-simple delete-btn">
                      <span className="far fa-envelope margin-right-5" />
                      {/* react-text: 187 */} {/* /react-text */}
                      <span>Mark as unread</span>
                    </button>
                  </div>
                </div>
                <div className="flex-bar-end">
                  <div className="flex-item">
                    <div className="toolbar-control-item">
                      <div className="custom-position-relative">
                        <select
                          name="cities"
                          className="selectpicker custom-picker"
                          data-title="View"
                          data-style="btn-default btn-block"
                          data-menu-style="dropdown-blue"
                        >
                          <option value="id">10</option>
                          <option value="ms">50</option>
                        </select>
                        <span className="icon-dropdown fa fa-angle-down" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-item mr-0">
                    <div className="input-group search-bar">
                      <input
                        type="text"
                        id="search_inb_keyval"
                        className="form-control"
                        placeholder="Search.."
                      />
                      <span className="input-group-addon">
                        <i className="fa fa-search" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className>
                <div className="row">
                  <div className="col-md-12 product-list">
                    <div className="emtpy-message no-reviews text-center">
                      <img
                        src="https://assets.abraacdn.com/assets/react-assets/img/no-review.svg"
                        alt="no reviews icon"
                        className="img-responsive"
                      />
                      <div className="review-content">
                        <h2>
                          {/* react-text: 209 */}No data{/* /react-text */}
                          {/* react-text: 210 */} {/* /react-text */}
                          <br />
                          {/* react-text: 212 */}found{/* /react-text */}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="company" className="tab-pane card-content fade in ">
              <div className="content-loadings" style={{ display: "none" }}>
                <img
                  src="https://assets.abraacdn.com/assets/images/ajax-loader.gif"
                  alt="loading icon"
                />
              </div>
              <div className="row">
                <div className="col-md-12 product-list">
                  <div className="emtpy-message no-reviews text-center">
                    <img
                      src="https://assets.abraacdn.com/assets/react-assets/img/no-review.svg"
                      alt="no reviews icon"
                      className="img-responsive"
                    />
                    <div className="review-content">
                      <h2>
                        {/* react-text: 222 */}No data{/* /react-text */}
                        {/* react-text: 223 */} {/* /react-text */}
                        <br />
                        {/* react-text: 225 */}found{/* /react-text */}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row ml-141" />
        </div>
      </div>
    </div>
  )
}

export default Main
