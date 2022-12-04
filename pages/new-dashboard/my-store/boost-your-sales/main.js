import React from "react"

const Main = () => {
  return (
    <div className="content" id="content">
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n         .show-details-table td {\n             font-weight: bold;\n             font-size: 14px;\n         }\n         table{\n             width: 100%!important;\n         }\n         .table-container {\n             overflow-x: scroll;\n             overflow-y: auto;\n             /*transform:rotateX(180deg);*/\n         }\n         .table-parent-wrapper {\n             transform: rotateX(180deg)!important;\n             overflow-x: auto;\n         }\n         .table-child-wrapper {\n             transform: rotateX(180deg)!important;\n         }\n     \n         }\n     "
        }}
      />
      <div className="row">
        <h1 className="h3 mb-3">Your Banners</h1>
      </div>
      <div className="row" style={{ paddingTop: 20 }} />
      <div
        style={{
          display: "flow-root"
        }}
        className="row"
      >
        <div className="d-flex justify-content-center">
          <a style={{ color: "white" }} disabled="disabled" className="btn btn-fill btn-primary" href="">
            {" "}
            Add New Banner
          </a>
        </div>
        <div className="d-flex justify-content-center">
          {" "}
          <p style={{ color: "red", fontSize: "x-large" }}>This Feature Not Available Now</p>{" "}
        </div>
      </div>
    </div>
  )
}

export default Main
