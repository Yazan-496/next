"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7048],{85744:function(e,n,a){a.d(n,{Z:function(){return u}});var t=a(93288),i=a(32466),s=a(95114),r=function(e,n,a,t){var i=new FormData;return i.append("file",a),i.append("file_name",e),i.append("custom_file_path",n),s.b.post("".concat("https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/IMG_Academy_Logo.svg/1200px-IMG_Academy_Logo.svg.png","/api/v1/upload_file"),i,{headers:{"Content-Type":"multipart/form-data"},onUploadProgress:t})},o=a(87488),l=a(42493),c=a.n(l),d={src:"/_next/static/media/file.73a8a554.png",height:200,width:200,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAUklEQVR42jXIQQqDMBAAwBH6gELpuW0salb0IPiDIJL/P8hcZG4DT4OP8EAH4SupFoAkVKdiB/5CcdjkO7LSjHodJLPazHdkvbVJAniZ/JrJmwsNhAfwsEK9HQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8};function u(e){var n=e.open,a=e.handleClose,s=e.handleFinishUpLoadSuccessfully,l=e.handleAdd,u=e.dialogTitle,m=e.folder,p=e.pathupload,g=void 0===p?void 0:p,h=(0,i.useState)(void 0),f=h[0],_=h[1],x=(0,i.useState)(void 0),j=x[0],b=x[1],y=(0,i.useState)(void 0),N=y[0],v=y[1],C=(0,i.useState)(0),w=C[0],A=C[1],I=(0,i.useState)(""),S=I[0],k=I[1],P=(0,i.useState)(""),T=P[0],M=P[1],Q=(0,i.useState)([]),B=Q[0],L=Q[1],D=function(e){return null!==e.match(/\.(jpeg|jpg|gif|png)$/)};return(0,t.jsxs)(o.u_,{centered:!0,isOpen:n,children:[(0,t.jsxs)(o.xB,{closeButton:!0,id:"form-dialog-title",children:[(0,t.jsx)("span",{onClick:a,style:{position:"absolute",right:"21px",cursor:"pointer"},children:"x"}),u]}),(0,t.jsx)(o.fe,{id:"form-dialog-title",children:(0,t.jsxs)("div",{children:[N&&(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:"text-center",children:[w,"%"]}),(0,t.jsx)(o.Ex,{value:w})]}),(0,t.jsx)("label",{className:"btn btn-default",children:(0,t.jsx)("input",{type:"file",onChange:function(e){_(e.target.files),console.log(e.target.value,"event.target.files")}})}),(0,t.jsx)("div",{className:"alert alert-light",role:"alert",children:S}),(0,t.jsxs)("div",{children:[T&&!D(T)&&(0,t.jsx)(c(),{src:d,width:"250px",height:"150px"}),D(T)&&(0,t.jsx)(c(),{src:T,width:"250px",height:"150px"})]})]})}),(0,t.jsxs)(o.mz,{children:[(0,t.jsx)("button",{className:"btn btn-primary",disabled:!f,onClick:function(){var e=f[0];A(0),v(e),void 0!==g&&r(e.name.split(".")[0],"collection1/".concat(m),e,(function(e){A(Math.round(100*e.loaded/e.total))})).then((function(e){return L(e.data.file_path),M("".concat("https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/IMG_Academy_Logo.svg/1200px-IMG_Academy_Logo.svg.png").concat(e.data.file_path)),s("".concat("https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/IMG_Academy_Logo.svg/1200px-IMG_Academy_Logo.svg.png").concat(e.data.file_path)),k("uploaded successfully"),b(1),e.data})).catch((function(){A(0),v(void 0)}))},children:"Upload"}),(0,t.jsx)("button",{closeButton:!0,className:"btn btn-primary",disabled:!j,onClick:function(e){return M(""),k(""),void l(B)},children:"add"})]})]})}},3146:function(e,n,a){a.d(n,{Fk:function(){return c},zN:function(){return l}});var t=a(63463),i=a(55248);function s(){var e=(0,t.Z)(["\n  {\n    products(first: 10, page: 2603) {\n      data {\n        id\n        is_active\n        product_translations {\n          product_name\n        }\n        product_photos {\n          is_4_listing\n        }\n      }\n      paginatorInfo {\n        currentPage\n        lastPage\n      }\n    }\n  }\n"]);return s=function(){return e},e}function r(){var e=(0,t.Z)(['\n  mutation createProduct($is_active: Boolean, $product_name: String, $is_4_listing: Boolean) {\n    createProduct(\n      input: {\n        is_active: $is_active\n        number_of_views: 12\n        is_for_advertise: true\n        is_for_saving: true\n        is_notified: true\n        price: 123\n        showed_price: 1234\n        newprice: 132\n        is_downloadable_product: true\n        SKU: "ibrahem"\n        less_number_of_sell: 123\n        product_translations: {\n          create: {\n            language_code: "String"\n            product_name: $product_name\n            description_text: "String"\n            product_note: "String"\n          }\n        }\n        physical_products: {\n          create: {\n            stock_id: 1\n            number_in_stock: 1\n            price: 1\n            newprice: 1\n            is_rechargeable: true\n            unlimited_number: true\n            has_free_shipping: true\n            has_free_return: true\n            attributes: {\n              create: {\n                attribute_value: {\n                  create: { int_value: 2, tiny_value: 2, datetime_value: "asd", string_value: "String" }\n                }\n              }\n            }\n          }\n        }\n        product_photos: {\n          create: {\n            photo_path: "String"\n            photo_size: "String"\n            is_4_listing: $is_4_listing\n            is_main_for_listing: true\n            is_4_detail: true\n            is_main_for_details: true\n            product_photo_categories: { sync: [1] }\n          }\n        }\n        product_categories: { sync: [1] }\n        meta_tag_translations: {\n          create: { language_code: "en", meta_keywords: "String", meta_description: "String" }\n        }\n      }\n    ) {\n      id\n      is_active\n      product_translations {\n        product_name\n      }\n      product_photos {\n        is_4_listing\n      }\n    }\n  }\n']);return r=function(){return e},e}function o(){var e=(0,t.Z)(["\n  {\n    categories(first: 10, page: 1) {\n      data {\n        id\n        category_translations {\n          language_code\n          category_name\n        }\n        sub_categories {\n          id\n          category_translations {\n            language_code\n            category_name\n          }\n        }\n      }\n      paginatorInfo {\n        currentPage\n        lastPage\n      }\n    }\n  }\n"]);return o=function(){return e},e}(0,i.Ps)(s());var l=(0,i.Ps)(r()),c=(0,i.Ps)(o())},77048:function(e,n,a){a.r(n),a.d(n,{__N_SSG:function(){return h},default:function(){return f}});var t=a(59354),i=a(93288),s=a(32466),r=(a(32852),a(66731)),o=a.n(r),l=a(21395),c=a(44515),d=(a(55565),a(68080)),u=a(87488),m=(a(8523),a(44640),a(98733)),p=a(8106),g=a(3146),h=(a(85744),!0);function f(e){(0,l.useRouter)();var n=(0,s.useState)(null===e||void 0===e?void 0:e.categories),a=n[0],r=(n[1],(0,s.useState)(null===e||void 0===e?void 0:e.categoriesId)),h=(r[0],r[1],(0,s.useState)(null===e||void 0===e?void 0:e.categoriesNames)),f=h[0],_=(h[1],(0,c.cI)()),x=(_.register,_.errors,_.handleSubmit),j=_.control,b=[{label:"Yes",value:"yes"},{label:"No",value:"no"}],y=(0,t.Z)((0,p.D)(g.zN,{onComplete:function(e){console.log(e)}}),2),N=(y[0],y[1]),v=(N.data,N.loading,N.error,(0,s.useState)({}));v[0],v[1];return(0,i.jsxs)(u.l0,{action:"/",className:"breadcrumb-container flex-grow-1 d-flex flex-column",onSubmit:x((function(e){!function(e){console.log("\ud83d\ude80 ~ file: addProductModal.js:44 ~ handleAdd ~ data",e)}(e)})),children:[console.log(a,"categories"),(0,i.jsx)(u.xB,{className:"title",children:(0,i.jsx)("p",{className:"title",children:"Basic Information"})}),(0,i.jsxs)("div",{className:"breadcrumb-container",children:[(0,i.jsxs)("div",{className:"banner",children:[(0,i.jsx)("span",{className:"pull-left custom-label",children:"Selected Category"}),(0,i.jsx)("span",{className:"pull-right",children:(0,i.jsx)(o(),{href:"/new-dashboard/my-store/add-product",children:(0,i.jsx)("a",{onClick:function(){return e.handleMain(!0)},id:"changeCategory",children:"Change category"})})})]}),(0,i.jsx)("ol",{className:"breadcrumb",children:null===f||void 0===f?void 0:f.map((function(e){return" \u203a   ".concat(e)}))}),(0,i.jsx)("div",{className:"category",children:(0,i.jsx)("a",{onClick:function(){return e.handleMain(!0)},id:"icCategory",children:(0,i.jsx)("span",{className:"icon-category"})})})]}),(0,i.jsxs)(u.fe,{className:"form-items flex-grow-1 pb-sm-0 pb-3 modal-body",children:[(0,i.jsxs)(u.cw,{className:"form-group",children:[(0,i.jsx)(u.__,{id:"titleLabel",for:"titleLabel",children:"Item Title"}),(0,i.jsx)(c.Qr,{placeholder:"Title",className:"form-control checkable",as:u.II,name:"title",id:"title",control:j,type:"text"}),(0,i.jsx)(u.__,{id:"ar_titleLabel",for:"ar_titleLabel",children:"Arabic Item Title (Recommended)"}),(0,i.jsx)(c.Qr,{name:"ar_title",id:"ar_title",as:u.II,placeholder:"Arabic Title (Recommended)",className:"form-control",control:j,type:"text"})]}),(0,i.jsxs)(u.cw,{className:"upload-image uploading-box",children:[(0,i.jsx)(u.__,{id:"item-img",for:"item-img"}),(0,i.jsx)("input",{type:"hidden",id:"default_image"}),(0,i.jsx)(c.Qr,{as:u.II,type:"hidden",name:"item-img",id:"item-img",multiple:!0,control:j}),(0,i.jsx)("div",{className:"thumbnail-img",children:(0,i.jsx)("a",{href:"#",className:"thumbnail",children:(0,i.jsx)("span",{className:"fa fa-plus-square"})})})]}),(0,i.jsxs)(u.cw,{className:"form-group",children:[(0,i.jsx)(u.__,{id:"youtube_videoLabel",for:"youtube_videoLabel",children:"Video URL"}),(0,i.jsx)(c.Qr,{as:u.II,type:"text",name:"youtube_video",id:"youtube_video",className:"form-control",control:j})]})]}),(0,i.jsxs)(u.fe,{className:"form-items flex-grow-1 pb-sm-0 pb-3 modal-body",children:[(0,i.jsx)(u.xB,{className:"title",children:(0,i.jsx)("p",{className:"title",children:"Item Specifications"})}),(0,i.jsxs)(u.cw,{className:"form-group col-md-4",children:[(0,i.jsx)(u.__,{id:"Condition",for:"Condition",children:"Condition"}),(0,i.jsx)(c.Qr,{as:u.II,type:"text",name:"youtube_video",id:"youtube_video",className:"form-control",control:j})]}),(0,i.jsxs)(u.cw,{className:"form-group col-md-4",children:[(0,i.jsx)(u.__,{id:"Brand",for:"Brand",children:"Brand"}),(0,i.jsx)(c.Qr,{as:u.II,type:"text",id:"attr[14]","data-ival":14,name:"attr[14]",className:"form-control",placeholder:"Brand",control:j})]}),(0,i.jsxs)(u.cw,{className:"form-group col-md-4",children:[(0,i.jsx)(u.__,{id:"Warranty",for:"Warranty",children:"Warranty*"}),(0,i.jsx)(c.Qr,{as:m.ZP,name:"Warranty",id:"Warranty",control:j,defaultValue:"yes",options:b})]}),(0,i.jsxs)(u.cw,{className:"form-group col-md-4",children:[(0,i.jsx)(u.__,{id:"MechanicalCondition*",for:"MechanicalCondition*",children:"Mechanical Condition*"}),(0,i.jsx)(c.Qr,{as:m.ZP,name:"MechanicalCondition",id:"MechanicalCondition",defaultValue:"Choose Mechanical Condition",options:b,control:j})]}),(0,i.jsxs)(u.cw,{className:"form-group col-md-4",children:[(0,i.jsx)(u.__,{id:"Color",for:"Color",children:"Color*"}),(0,i.jsx)(c.Qr,{as:m.ZP,defaultValue:"Choose Mechanical Condition",options:b,name:"Color",id:"Color",control:j})]}),(0,i.jsxs)(u.cw,{className:"form-group col-md-4",children:[(0,i.jsx)(u.__,{id:"FuelType",for:"FuelType",children:"Fuel Type*"}),(0,i.jsx)(c.Qr,{as:m.ZP,options:b,name:"FuelType",id:"FuelType",control:j})]}),(0,i.jsxs)(u.cw,{className:"form-group col-md-4",children:[(0,i.jsx)(u.__,{id:"FuelTankCapacity",for:"FuelTankCapacity",children:"Fuel Tank Capacity*"}),(0,i.jsx)(c.Qr,{as:m.ZP,options:b,name:"FuelTankCapacity",id:"FuelTankCapacity",control:j})]}),(0,i.jsxs)(u.cw,{className:"form-group col-md-4",children:[(0,i.jsx)(u.__,{id:"TransmissionSystem",for:"TransmissionSystem",children:"Transmission System"}),(0,i.jsx)(c.Qr,{as:m.ZP,name:"TransmissionSystem",id:"TransmissionSystem",options:b,control:j})]}),(0,i.jsxs)(u.cw,{className:"form-group col-md-4",children:[(0,i.jsx)(u.__,{id:"Certification",for:"Certification",children:"Certification"}),(0,i.jsx)(c.Qr,{as:m.ZP,options:b,name:"Certification",id:"Certification",control:j})]}),(0,i.jsxs)(u.cw,{style:{marginTop:"300px"},className:"form-group",children:[(0,i.jsx)(u.__,{id:"Details",for:"CertificatioDetailsn",children:"Details"}),(0,i.jsx)(c.Qr,{as:d.M,name:"Details",className:"",id:"Details",control:j})]})]}),(0,i.jsxs)(u.fe,{className:"form-items flex-grow-1 pb-sm-0 pb-3 modal-body",children:[(0,i.jsx)(u.xB,{className:"title",children:(0,i.jsx)("p",{className:"title",children:"Prices & Offers"})}),(0,i.jsxs)(u.cw,{className:"form-group col-md-4",children:[(0,i.jsx)(u.__,{id:"Currency",for:"Currency",children:"Currency"}),(0,i.jsx)(c.Qr,{as:u.II,type:"text",name:"Currency",id:"Currency",control:j})]}),(0,i.jsxs)(u.cw,{className:"input-group form-group col-md-4",children:[(0,i.jsx)(u.__,{id:"Price",for:"Price",children:"Price"}),(0,i.jsx)(c.Qr,{as:u.II,className:"form-control",type:"text",name:"Price",id:"Price",control:j}),(0,i.jsx)("div",{className:"input-group-btn",children:(0,i.jsx)("div",{className:"btn-group bootstrap-select",children:(0,i.jsxs)("button",{type:"button",style:{marginTop:"27px"},className:"btn dropdown-toggle btn-default btn-block","data-toggle":"dropdown",title:" Unit",children:[(0,i.jsx)("span",{className:"filter-option pull-left unitper",children:" Unit"}),(0,i.jsx)("span",{className:"hidden",id:"unitVal"}),(0,i.jsx)("span",{className:"bs-caret",children:(0,i.jsx)("span",{className:"fa fa-sort"})})]})})})]}),(0,i.jsxs)(u.cw,{className:"form-group col-md-4",children:[(0,i.jsx)(u.__,{id:"Order",for:"Order",children:"Minimum Order*"}),(0,i.jsx)(c.Qr,{as:u.II,type:"text",name:"Order",id:"Order",control:j})]})]}),(0,i.jsxs)(u.fe,{className:"form-items flex-grow-1 pb-sm-0 pb-3 modal-body",children:[(0,i.jsx)(u.xB,{className:"title",children:(0,i.jsx)("p",{className:"title",children:"Shipping & Delivery"})}),(0,i.jsxs)(u.cw,{className:"input-group form-group col-md-4",children:[(0,i.jsx)(u.__,{id:"Deliver",for:"Deliver",children:"I Can Deliver"}),(0,i.jsx)(c.Qr,{as:u.II,type:"text",name:"Deliver",className:"form-control",id:"Deliver",control:j}),(0,i.jsx)("div",{className:"input-group-btn",children:(0,i.jsx)("div",{className:"btn-group bootstrap-select",children:(0,i.jsxs)("button",{type:"button",style:{marginTop:"27px"},className:"btn dropdown-toggle btn-default btn-block","data-toggle":"dropdown",title:" Unit",children:[(0,i.jsx)("span",{className:"filter-option pull-left unitper",children:" Unit"}),(0,i.jsx)("span",{className:"hidden",id:"unitVal"}),(0,i.jsx)("span",{className:"bs-caret",children:(0,i.jsx)("span",{className:"fa fa-sort"})})]})})})]}),(0,i.jsxs)(u.cw,{className:"form-group col-md-4",children:[(0,i.jsx)(u.__,{id:"Manufacturing",for:"Manufacturing",children:"Manufacturing Country*"}),(0,i.jsx)(c.Qr,{as:m.ZP,options:b,name:"Manufacturing",id:"Manufacturing",control:j})]}),(0,i.jsxs)(u.cw,{className:"form-group col-md-4",children:[(0,i.jsx)(u.__,{id:"Pckaging",for:"Pckaging",children:"Pckaging Type"}),(0,i.jsx)(c.Qr,{as:m.ZP,options:b,name:"Pckaging",id:"Pckaging",control:j})]})]}),(0,i.jsx)(u.mz,{className:"col-md-12",children:(0,i.jsx)(u.zx,{type:"submit",className:"btn btn-primary btn-fill",color:"primary",children:(0,i.jsx)("span",{children:"Submit"})})})]})}}}]);