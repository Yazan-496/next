(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1605],{5163:function(e,t,r){"use strict";r.d(t,{G:function(){return v}});var a=r(91855),s=r(12337),n=r.n(s),i=r(32466);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e,t){if(null==e)return{};var r,a,s=function(e,t){if(null==e)return{};var r,a,s={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}function d(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function h(e){return t=e,(t-=0)===t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}var b=["style"];function y(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,a=t.indexOf(":"),s=h(t.slice(0,a)),n=t.slice(a+1).trim();return s.startsWith("webkit")?e[(r=s,r.charAt(0).toUpperCase()+r.slice(1))]=n:e[s]=n,e}),{})}var m=!1;try{m=!0}catch(N){}function x(e){return e&&"object"===c(e)&&e.prefix&&e.iconName&&e.icon?e:a.Qc.icon?a.Qc.icon(e):null===e?null:e&&"object"===c(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"===typeof e?{prefix:"fas",iconName:e}:void 0}function j(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?u({},e,t):{}}var v=i.forwardRef((function(e,t){var r=e.icon,s=e.mask,n=e.symbol,i=e.className,o=e.title,c=e.titleId,f=e.maskId,p=x(r),h=j("classes",[].concat(d(function(e){var t,r=e.beat,a=e.fade,s=e.beatFade,n=e.bounce,i=e.shake,o=e.flash,l=e.spin,c=e.spinPulse,f=e.spinReverse,d=e.pulse,p=e.fixedWidth,h=e.inverse,b=e.border,y=e.listItem,m=e.flip,x=e.size,j=e.rotation,v=e.pull,g=(u(t={"fa-beat":r,"fa-fade":a,"fa-beat-fade":s,"fa-bounce":n,"fa-shake":i,"fa-flash":o,"fa-spin":l,"fa-spin-reverse":f,"fa-spin-pulse":c,"fa-pulse":d,"fa-fw":p,"fa-inverse":h,"fa-border":b,"fa-li":y,"fa-flip":!0===m,"fa-flip-horizontal":"horizontal"===m||"both"===m,"fa-flip-vertical":"vertical"===m||"both"===m},"fa-".concat(x),"undefined"!==typeof x&&null!==x),u(t,"fa-rotate-".concat(j),"undefined"!==typeof j&&null!==j&&0!==j),u(t,"fa-pull-".concat(v),"undefined"!==typeof v&&null!==v),u(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(g).map((function(e){return g[e]?e:null})).filter((function(e){return e}))}(e)),d(i.split(" ")))),b=j("transform","string"===typeof e.transform?a.Qc.transform(e.transform):e.transform),y=j("mask",x(s)),N=(0,a.qv)(p,l(l(l(l({},h),b),y),{},{symbol:n,title:o,titleId:c,maskId:f}));if(!N)return function(){var e;!m&&console&&"function"===typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",p),null;var O=N.abstract,w={ref:t};return Object.keys(e).forEach((function(t){v.defaultProps.hasOwnProperty(t)||(w[t]=e[t])})),g(O[0],w)}));v.displayName="FontAwesomeIcon",v.propTypes={beat:n().bool,border:n().bool,beatFade:n().bool,bounce:n().bool,className:n().string,fade:n().bool,flash:n().bool,mask:n().oneOfType([n().object,n().array,n().string]),maskId:n().string,fixedWidth:n().bool,inverse:n().bool,flip:n().oneOf([!0,!1,"horizontal","vertical","both"]),icon:n().oneOfType([n().object,n().array,n().string]),listItem:n().bool,pull:n().oneOf(["right","left"]),pulse:n().bool,rotation:n().oneOf([0,90,180,270]),shake:n().bool,size:n().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:n().bool,spinPulse:n().bool,spinReverse:n().bool,symbol:n().oneOfType([n().bool,n().string]),title:n().string,titleId:n().string,transform:n().oneOfType([n().string,n().object]),swapOpacity:n().bool},v.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var g=function e(t,r){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof r)return r;var s=(r.children||[]).map((function(r){return e(t,r)})),n=Object.keys(r.attributes||{}).reduce((function(e,t){var a=r.attributes[t];switch(t){case"class":e.attrs.className=a,delete r.attributes.class;break;case"style":e.attrs.style=y(a);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=a:e.attrs[h(t)]=a}return e}),{attrs:{}}),i=a.style,o=void 0===i?{}:i,c=f(a,b);return n.attrs.style=l(l({},n.attrs.style),o),t.apply(void 0,[r.tag,l(l({},n.attrs),c)].concat(d(s)))}.bind(null,i.createElement)},70715:function(e,t,r){"use strict";var a=r(45151);function s(){}function n(){}n.resetWarningCache=s,e.exports=function(){function e(e,t,r,s,n,i){if(i!==a){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:n,resetWarningCache:s};return r.PropTypes=r,r}},12337:function(e,t,r){e.exports=r(70715)()},45151:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},8818:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/new-dashboard/buyer-account/sidebar1",function(){return r(55358)}])},55358:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return l},default:function(){return c}});var a=r(93288),s=r(32466),n=r(5163),i=r(21905),o=r(21395),l=!0;function c(e){var t=(0,o.useRouter)(),r=(0,s.useState)(e.openSide),l=r[0],c=(r[1],(0,s.useState)(!1)),u=(c[0],c[1],(0,s.useState)(!1)),f=(u[0],u[1],(0,s.useState)(!1)),d=(f[0],f[1],(0,s.useState)(!1)),p=(d[0],d[1],(0,s.useState)(!0)),h=p[0],b=p[1];return(0,a.jsx)("div",{className:"sidebar1",children:(0,a.jsx)("div",{id:"sidebar1",children:(0,a.jsxs)("div",{className:!0===l?"sidebar1-wrapper ps-container ps-theme-default ps-active-x ps-active-y":"sidebar1-wrapper","data-ps-id":!0===l?"95a42841-cba6-accc-f187-80875dfd8ed8":"",children:[(0,a.jsx)("div",{className:"logo",children:(0,a.jsx)("a",{onClick:function(){return t.push({pathname:"/"})},className:"logo-text",children:(0,a.jsx)("img",{src:"https://assets.abraacdn.com/assets/react-assets/img/logo-white.svg",alt:"Abraa",title:"Abraa"})})}),(0,a.jsx)("div",{style:{display:!0===l?"block":"none"},className:"logo logo-mini",children:(0,a.jsx)("a",{className:"logo-text",children:(0,a.jsx)("img",{src:"https://assets.abraacdn.com/assets/react-assets/img/6-layers.svg",alt:"Abraa",title:"Abraa"})})}),(0,a.jsx)("div",{className:"user",children:(0,a.jsxs)("div",{className:"info",children:[(0,a.jsx)("a",{onClick:function(){return b(!h)},"data-toggle":"collapse",className:h?"":"collapsed","aria-expanded":h?"false":"true",children:(0,a.jsxs)("span",{className:"hidden-toggle",children:[" ","Buyer Account ",(0,a.jsx)(n.G,{icon:i.EyR,className:"fa fa-caret-left transition"})]})}),(0,a.jsx)("div",{className:h?"collapse":"collapse in","aria-expanded":h?"true":"false",style:{height:"auto"},children:(0,a.jsx)("div",{className:"info",children:(0,a.jsx)("div",{className:h?"collapse":"collapse in","aria-expanded":h?"true":"false",style:{height:"auto"},children:(0,a.jsxs)("ul",{className:"nav1",children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"/new-dashboard/",style:{placeContent:"center"},className:"account",children:"Supplier Account"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"/new-dashboard/shipper-account",style:{placeContent:"center"},className:"account",children:"Shipper Account"})})]})})})})]})}),(0,a.jsxs)("ul",{className:"nav1",children:[(0,a.jsx)("li",{className:"active",children:(0,a.jsxs)("a",{href:"/new-dashboard/buyer-account/",children:[(0,a.jsx)("i",{className:"icon-dashboard"}),(0,a.jsx)("p",{children:"Dashboard"})]})}),(0,a.jsx)("li",{className:!0,children:(0,a.jsxs)("a",{href:"/new-dashboard/buyer-account/purchase-orders",children:[(0,a.jsx)("i",{className:"icon-order"}),(0,a.jsx)("p",{children:"Purchase Orders"})]})}),(0,a.jsx)("li",{className:!0,children:(0,a.jsxs)("a",{href:"/new-dashboard/buyer-account/buying-requests",children:[(0,a.jsx)("i",{className:"fa fa-pen-square","aria-hidden":"true"}),(0,a.jsx)("p",{children:"Request For Quotations"})]})}),(0,a.jsx)("li",{className:!0,children:(0,a.jsxs)("a",{href:"/new-dashboard/buyer-account/notifications",children:[(0,a.jsx)("i",{className:"fa fa-bell","aria-hidden":"true"}),(0,a.jsx)("p",{children:"Notifications"})]})}),(0,a.jsx)("li",{className:!0,children:(0,a.jsxs)("a",{href:"/new-dashboard/buyer-account/messages",children:[(0,a.jsx)("i",{className:"icon-message"}),(0,a.jsx)("p",{children:"Messages"})]})}),(0,a.jsx)("li",{className:!0,children:(0,a.jsxs)("a",{href:"/new-dashboard/buyer-account/resolution",children:[(0,a.jsx)("i",{className:"fa fa-list","aria-hidden":"true"}),(0,a.jsx)("p",{children:"Resolution Center"})]})}),(0,a.jsx)("li",{className:!0,children:(0,a.jsxs)("a",{href:"/new-dashboard/buyer-account/wishlist",children:[(0,a.jsx)("i",{className:"fa fa-heart","aria-hidden":"true"}),(0,a.jsx)("p",{children:"Watchlist"})]})}),(0,a.jsx)("li",{className:!0,children:(0,a.jsxs)("a",{href:"/new-dashboard/buyer-account/accountsettings",children:[(0,a.jsx)("i",{className:"icon-settings"}),(0,a.jsx)("p",{children:"My Account"})]})})]}),(0,a.jsx)("div",{className:"sidebar1-footer",children:(0,a.jsxs)("div",{className:"info",children:[(0,a.jsx)("p",{children:(0,a.jsx)("span",{className:"hidden-toggle",children:"You are in Basic plan "})}),(0,a.jsxs)("button",{className:"btn btn-success btn-fill upgrade",children:["UPGRADE ",(0,a.jsx)("span",{className:"hidden-toggle",children:"NOW"})]})]})}),(0,a.jsx)("div",{className:"ps-scrollbar-x-rail",style:{width:80,left:0,bottom:3},children:(0,a.jsx)("div",{className:"ps-scrollbar-x",tabIndex:0,style:{left:0,width:27}})}),(0,a.jsx)("div",{className:"ps-scrollbar-y-rail",style:{top:0,height:647,right:3},children:(0,a.jsx)("div",{className:"ps-scrollbar-y",tabIndex:0,style:{top:0,height:601}})})]})})})}}},function(e){e.O(0,[4976,9774,2888,179],(function(){return t=8818,e(e.s=t);var t}));var t=e.O();_N_E=t}]);