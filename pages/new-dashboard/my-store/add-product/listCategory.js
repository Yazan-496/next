import React from "react"

export default function ListCategory(props) {
  return (
    <div className="content" id="content">
      <div data-reactroot className="modal-content category-modals" style={{ color: "black" }}>
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
          <h4 className="modal-title" id="myModalLabel">
            List New Product
          </h4>
        </div>
        <div className="modal-body">
          <div className="input-group search">
            <input
              type="text"
              id="search_keyval"
              className="form-control"
              placeholder="Please type here what you want to sell"
              style={{ minHeight: 50 }}
            />
            <span className="input-group-addon">
              <a href="#">
                {/* react-text: 11 */} {/* /react-text */}
                <i className="fa fa-search" />
              </a>
            </span>
          </div>
          <div className="selectcattxt simpleor"></div>
          <div className="selectcattxt" style={{ marginBottom: 8 }}>
            {" "}
            Please Select From Below Categories
          </div>
          <div className="search-results">
            <ul>
              {props.categoryArray?.map((category) => {
                return (
                  <li onClick={() => props.handleSelectCategory(category)}>
                    <a href="#" id={category?.id} style={{ color: "black" }}>
                      {category?.category_translations[0]?.category_name}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
          <div>
            <button
              onClick={() => props.handleMain(true)}
              style={{ color: "#1180b0" }}
              className="btn btn-simple btn-sm"
            >
              <i style={{ color: "#1180b0" }} id="backmainbtn" className="fa fa-arrow-left" />
              {/* react-text: 55 */} Back to Main{/* /react-text */}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
