import React from "react"

const Main = () => {
  return (
     <div className="content" id="content">
     <div data-reactroot className="container-fluid">
       <div className="row">
         <div className="col-md-12 card-body">
           <div className="card buyer-card">
             <div className="toolbar flex-bar" id="flex-bar">
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
                     {/* react-text: 35 */}0{/* /react-text */}
                     {/* react-text: 36 */}&nbsp; {/* /react-text */}
                     <b>Request(s)</b>
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
                         <a href="#">Request</a>
                         <a href="#">
                           <span className="fa fa-sort" />
                         </a>
                       </th>
                       <th data-field="date" data-sortable="true">
                         <a href="#">QTY</a>
                         <a href="#">
                           <span className="fa fa-sort" />
                         </a>
                       </th>
                       <th data-field="date" data-sortable="true">
                         <a href="#">Status</a>
                         <a href="#">
                           <span className="fa fa-sort" />
                         </a>
                       </th>
                       <th data-field="price" data-sortable="true">
                         <a href="#">supplier</a>
                         <a href="#">
                           <span className="fa fa-sort" />
                         </a>
                       </th>
                       <th data-field="buyer" data-sortable="true">
                         <a href="#">DATE</a>
                         <a href="#">
                           <span className="fa fa-sort" />
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
                     <div className="data-row" id="payment-link-div">
                       <span>
                         <b>Payment Link</b>
                       </span>
                       <a
                         className="btn btn-fill btn-success ml-7 mr-7"
                         href
                         id="payment-link"
                         target="_blank"
                       >
                         Pay Now
                       </a>
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
                       className="btn btn-fill btn-danger ml-7 mr-7"
                     >
                       Cancel Order
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
