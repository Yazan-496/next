(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[533],{49693:function(e,t,n){"use strict";var r=n(56279);function o(){}function u(){}u.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,u,i){if(i!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:u,resetWarningCache:o};return n.PropTypes=n,n}},96948:function(e,t,n){e.exports=n(49693)()},56279:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},28790:function(e){e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=3)}([function(e,t,n){e.exports=n(5)()},function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,t,n){"use strict";e.exports=n(8)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=(r=n(4))&&r.__esModule?r:{default:r};t.default=o.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=l(n(0)),u=n(2),i=l(u),a=l(n(11));function l(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.values=Array(e.length).fill("").map((function(t,n){return e.initialValue.toString()[n]||""})),n.elements=[],n.currentIndex=0,n.onPaste=n.onPaste.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this.props.focus&&this.props.length&&this.elements[0].focus()}},{key:"clear",value:function(){this.elements.forEach((function(e){return e.clear()})),this.values=this.values.map((function(){})),this.elements[0].focus()}},{key:"focus",value:function(){this.props.length&&this.elements[0].focus()}},{key:"onItemChange",value:function(e,t,n){var r=this.props,o=r.length,u=r.onComplete,i=r.onChange,a=n;this.values[n]=e,1===e.length&&n<o-1&&(a+=1,this.elements[a].focus());var l=this.values.join("");if(t||i(l,a),l.length===o){if(t&&n<o-1)return;u(l,a)}}},{key:"onBackspace",value:function(e){e>0&&this.elements[e-1].focus()}},{key:"onPaste",value:function(e){var t=this.props.length;e.length===t&&this.elements.forEach((function(t,n){return t.update(e[n],!0)}))}},{key:"render",value:function(){var e=this;return i.default.createElement("div",{style:this.props.style,className:"pincode-input-container"},this.values.map((function(t,n){return i.default.createElement(a.default,{initialValue:t,ref:function(t){return e.elements[n]=t},key:n,disabled:e.props.disabled,onBackspace:function(){return e.onBackspace(n)},secret:e.props.secret||!1,onChange:function(t,r){return e.onItemChange(t,r,n)},type:e.props.type,inputMode:e.props.inputMode,validate:e.props.validate,inputStyle:e.props.inputStyle,inputFocusStyle:e.props.inputFocusStyle,autoSelect:e.props.autoSelect,onPaste:0===n?e.onPaste:null,regexCriteria:e.props.regexCriteria,ariaLabel:e.props.ariaLabel,placeholder:e.props.placeholder})})))}}]),t}(u.Component);s.propTypes={initialValue:o.default.oneOfType([o.default.string,o.default.number]),length:o.default.number.isRequired,type:o.default.string,onComplete:o.default.func,validate:o.default.func,secret:o.default.bool,disabled:o.default.bool,focus:o.default.bool,onChange:o.default.func,inputMode:o.default.string,style:o.default.object,inputStyle:o.default.object,inputFocusStyle:o.default.object,autoSelect:o.default.bool,regexCriteria:o.default.any,ariaLabel:o.default.string,placeholder:o.default.string},s.defaultProps={initialValue:"",type:"numeric",secret:!1,validate:null,focus:!1,disabled:!1,onChange:function(){},onComplete:function(){},inputMode:void 0,style:{},inputStyle:{},inputFocusStyle:{},autoSelect:!0,regexCriteria:/^[a-zA-Z0-9]+$/,ariaLabel:"",placeholder:""},t.default=s},function(e,t,n){"use strict";var r=n(1),o=n(6),u=n(7);e.exports=function(){function e(e,t,n,r,i,a){a!==u&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports=function(e,t,n,r,o,u,i,a){if(!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[n,r,o,u,i,a],c=0;(l=new Error(t.replace(/%s/g,(function(){return s[c++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";var r=n(9),o=n(10),u=n(1),i="function"==typeof Symbol&&Symbol.for,a=i?Symbol.for("react.element"):60103,l=i?Symbol.for("react.call"):60104,s=i?Symbol.for("react.return"):60105,c=i?Symbol.for("react.portal"):60106,f=i?Symbol.for("react.fragment"):60107,p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t=arguments.length-1,n="Minified React error #"+e+"; visit http://facebook.github.io/react/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);throw(t=Error(n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings.")).name="Invariant Violation",t.framesToPop=1,t}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};function y(e,t,n){this.props=e,this.context=t,this.refs=o,this.updater=n||h}function b(e,t,n){this.props=e,this.context=t,this.refs=o,this.updater=n||h}function v(){}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&d("85"),this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=y.prototype;var g=b.prototype=new v;function m(e,t,n){this.props=e,this.context=t,this.refs=o,this.updater=n||h}g.constructor=b,r(g,y.prototype),g.isPureReactComponent=!0;var _=m.prototype=new v;_.constructor=m,r(_,y.prototype),_.unstable_isAsyncReactComponent=!0,_.render=function(){return this.props.children};var O={current:null},P=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,n){var r,o={},u=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(u=""+t.key),t)P.call(t,r)&&!S.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var s=Array(l),c=0;c<l;c++)s[c]=arguments[c+2];o.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===o[r]&&(o[r]=l[r]);return{$$typeof:a,type:e,key:u,ref:i,props:o,_owner:O.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var w=/\/+/g,x=[];function C(e,t,n,r){if(x.length){var o=x.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function E(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>x.length&&x.push(e)}function T(e,t,n,r){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var u=!1;if(null===e)u=!0;else switch(o){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case a:case l:case s:case c:u=!0}}if(u)return n(r,e,""===t?"."+R(e,0):t),1;if(u=0,t=""===t?".":t+":",Array.isArray(e))for(var i=0;i<e.length;i++){var f=t+R(o=e[i],i);u+=T(o,f,n,r)}else if("function"==typeof(f=null==e?null:"function"==typeof(f=p&&e[p]||e["@@iterator"])?f:null))for(e=f.call(e),i=0;!(o=e.next()).done;)u+=T(o=o.value,f=t+R(o,i++),n,r);else"object"===o&&d("31","[object Object]"===(n=""+e)?"object with keys {"+Object.keys(e).join(", ")+"}":n,"");return u}function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function A(e,t){e.func.call(e.context,t,e.count++)}function M(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?N(e,r,n,u.thatReturnsArgument):null!=e&&(k(e)&&(t=o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(w,"$&/")+"/")+n,e={$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}),r.push(e))}function N(e,t,n,r,o){var u="";null!=n&&(u=(""+n).replace(w,"$&/")+"/"),t=C(t,u,r,o),null==e||T(e,"",M,t),E(t)}var F={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return N(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;t=C(null,null,t,n),null==e||T(e,"",A,t),E(t)},count:function(e){return null==e?0:T(e,"",u.thatReturnsNull,null)},toArray:function(e){var t=[];return N(e,t,null,u.thatReturnsArgument),t},only:function(e){return k(e)||d("143"),e}},Component:y,PureComponent:b,unstable_AsyncComponent:m,Fragment:f,createElement:j,cloneElement:function(e,t,n){var o=r({},e.props),u=e.key,i=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,l=O.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)P.call(t,c)&&!S.hasOwnProperty(c)&&(o[c]=void 0===t[c]&&void 0!==s?s[c]:t[c])}var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){s=Array(c);for(var f=0;f<c;f++)s[f]=arguments[f+2];o.children=s}return{$$typeof:a,type:e.type,key:u,ref:i,props:o,_owner:l}},createFactory:function(e){var t=j.bind(null,e);return t.type=e,t},isValidElement:k,version:"16.2.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:O,assign:r}},I=Object.freeze({default:F}),$=I&&F||I;e.exports=$.default?$.default:$},function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,a,l=i(e),s=1;s<arguments.length;s++){for(var c in n=Object(arguments[s]))o.call(n,c)&&(l[c]=n[c]);if(r){a=r(n);for(var f=0;f<a.length;f++)u.call(n,a[f])&&(l[a[f]]=n[a[f]])}}return l}},function(e,t,n){"use strict";e.exports={}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=a(n(0)),u=n(2),i=a(u);function a(e){return e&&e.__esModule?e:{default:e}}var l={padding:0,margin:"0 2px",textAlign:"center",border:"1px solid",background:"transparent",width:"50px",height:"50px"},s={outline:"none",boxShadow:"none"},c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={value:n.validate(e.initialValue),focus:!1},n.onChange=n.onChange.bind(n),n.onKeyDown=n.onKeyDown.bind(n),n.onFocus=n.onFocus.bind(n),n.onBlur=n.onBlur.bind(n),n.onPaste=n.onPaste.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"onKeyDown",value:function(e){8!==e.keyCode||this.state.value&&this.state.value.length||this.props.onBackspace()}},{key:"clear",value:function(){this.setState({value:""})}},{key:"update",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this.validate(e);(this.state.value!==r||n)&&r.length<2&&(this.setState({value:r}),setTimeout((function(){t.props.onChange(r,n)}),0))}},{key:"onChange",value:function(e){this.update(e.target.value)}},{key:"focus",value:function(){this.input.focus()}},{key:"onFocus",value:function(e){this.props.autoSelect&&e.target.select(),this.setState({focus:!0})}},{key:"onBlur",value:function(){this.setState({focus:!1})}},{key:"onPaste",value:function(e){if(this.props.onPaste){var t=e.clipboardData.getData("text");this.props.onPaste(t)}}},{key:"validate",value:function(e){if(this.props.validate)return this.props.validate(e);if("numeric"===this.props.type){var t=e.charCodeAt(0);return t>="0".charCodeAt(0)&&t<="9".charCodeAt(0)?e:""}return this.props.regexCriteria.test(e)?e.toUpperCase():""}},{key:"render",value:function(){var e=this,t=this.state,n=t.focus,r=t.value,o=this.props,u=o.type,a=o.inputMode,c=o.inputStyle,f=o.inputFocusStyle,p="numeric"===u?"tel":u||"text";return i.default.createElement("input",{disabled:this.props.disabled?"disabled":void 0,className:"pincode-input-text",onChange:this.onChange,onKeyDown:this.onKeyDown,placeholder:this.props.placeholder?this.props.placeholder:r,"aria-label":this.props.ariaLabel?this.props.ariaLabel:r,maxLength:"1",autoComplete:"off",type:this.props.secret?"password":p,inputMode:a||"text",pattern:"numeric"===this.props.type?"[0-9]*":"^[a-zA-Z0-9]+$",ref:function(t){return e.input=t},onFocus:this.onFocus,onBlur:this.onBlur,onPaste:this.onPaste,style:Object.assign({},l,c,n?Object.assign({},s,f):{}),value:r})}}]),t}(u.Component);c.propTypes={initialValue:o.default.string,onChange:o.default.func.isRequired,onBackspace:o.default.func.isRequired,onPaste:o.default.func,secret:o.default.bool,disabled:o.default.bool,type:o.default.string,inputMode:o.default.string,validate:o.default.func,inputStyle:o.default.object.isRequired,inputFocusStyle:o.default.object.isRequired,autoSelect:o.default.bool,regexCriteria:o.default.any,ariaLabel:o.default.string,placeholder:o.default.string},c.defaultProps={secret:!1,type:"numeric",inputMode:void 0,disabled:!1,validate:void 0,autoSelect:!1,onPaste:void 0,regexCriteria:/^[a-zA-Z0-9]+$/,ariaLabel:"",placeholder:""},t.default=c}])},58433:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/register-new/PinInputs",function(){return n(53925)}])},53925:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return a}});var r=n(93288),o=n(32466),u=(n(96948),n(28790)),i=n.n(u),a=!0;t.default=function(e){e.setCodePanel;var t=e.setPin,n=e.pin,u=e.counter,a=e.setcounter;return(0,o.useEffect)((function(){u>0&&setTimeout((function(){a(u-1)}),1e3)}),[u]),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"action_button5 ".concat(6===(null===n||void 0===n?void 0:n.length)?"greenBack":"err_bac"),children:[(0,r.jsx)("div",{className:"p2sec3",children:(0,r.jsx)("div",{className:"code_area",children:(0,r.jsx)(i(),{length:6,initialValue:"",onChange:function(e,n){return t(e)},type:"numeric",inputMode:"number",style:{marginTop:"20px",marginBottom:"20px"},inputStyle:{borderRadius:10,borderColor:"#b7b7b7",width:40,height:47},inputFocusStyle:{borderColor:"blue"},autoSelect:!0,regexCriteria:/^[ A-Za-z0-9_@./#&+-]*$/})})}),(0,r.jsx)("div",{className:"input-hint",children:"Please Enter The Code Sent To Your Phone, In Case You Encounter A Problem, Request A New Code"})]})})}}},function(e){e.O(0,[9774,2888,179],(function(){return t=58433,e(e.s=t);var t}));var t=e.O();_N_E=t}]);