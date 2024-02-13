"use strict";(this.webpackChunklets_form_bootstrap=this.webpackChunklets_form_bootstrap||[]).push([[660],{3660:function(t,e,n){n.r(e),n.d(e,{default:function(){return Z}});var r=n(8156),a=n.n(r),o=n(9633),i=n(4184),l=n.n(i),s=n(5893);const u=["as","disabled"];function c({tagName:t,disabled:e,href:n,target:r,rel:a,role:o,onClick:i,tabIndex:l=0,type:s}){t||(t=null!=n||null!=r||null!=a?"a":"button");const u={tagName:t};if("button"===t)return[{type:s||"button",disabled:e},u];const c=r=>{(e||"a"===t&&function(t){return!t||"#"===t.trim()}(n))&&r.preventDefault(),e?r.stopPropagation():null==i||i(r)};return"a"===t&&(n||(n="#"),e&&(n=void 0)),[{role:null!=o?o:"button",disabled:void 0,tabIndex:e?void 0:l,href:n,target:"a"===t?r:void 0,"aria-disabled":e||void 0,rel:"a"===t?a:void 0,onClick:c,onKeyDown:t=>{" "===t.key&&(t.preventDefault(),c(t))}},u]}r.forwardRef(((t,e)=>{let{as:n,disabled:r}=t,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,u);const[o,{tagName:i}]=c(Object.assign({tagName:n,disabled:r},a));return(0,s.jsx)(i,Object.assign({},a,o,{ref:e}))})).displayName="Button";var d=n(6792);const f=r.forwardRef((({as:t,bsPrefix:e,variant:n,size:r,active:a,className:o,...i},u)=>{const f=(0,d.vE)(e,"btn"),[b,{tagName:m}]=c({tagName:t,...i}),v=m;return(0,s.jsx)(v,{...b,...i,ref:u,className:l()(o,f,a&&"active",n&&`${f}-${n}`,r&&`${f}-${r}`,i.href&&i.disabled&&"disabled")})}));f.displayName="Button",f.defaultProps={variant:"primary",active:!1,disabled:!1};var b=f,m=n(8228),v=n(3379),p=n.n(v),y=n(7795),g=n.n(y),h=n(569),A=n.n(h),C=n(3565),S=n.n(C),x=n(9216),E=n.n(x),N=n(4589),k=n.n(N),w=n(8484),j={};function P(t){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(t)}j.styleTagTransform=k(),j.setAttributes=S(),j.insert=A().bind(null,"head"),j.domAPI=g(),j.insertStyleElement=E(),p()(w.Z,j),w.Z&&w.Z.locals&&w.Z.locals,(0,m.n)("Loaded ReactBootrap.Form");var Z=function(t){var e,n,r,i=t.name,s=t.children,u=t.onSubmit,c=t.buttonsAlign,d=t.onReset,f=t.hideToolbar,m=void 0!==f&&f,v=t.onlyFields,p=void 0!==v&&v,y=t.disabled,g=void 0!==y&&y,h=t.disabledSubmit,A=void 0!==h&&h,C=t.plaintext,S=t.labelSubmit,x=void 0===S?"Submit":S,E=t.labelCancel,N=void 0===E?"Cancel":E,k=t.custom;return a().createElement(o.Z,{className:l()("lf-form lf-form-react-bootstrap",(e={},n=c?"lf-form-buttons-align-".concat(c):void 0,r=!0,(n=function(t){var e=function(t,e){if("object"!==P(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==P(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===P(e)?e:String(e)}(n))in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e)),"data-lf-form-name":i,onSubmit:u},a().createElement("div",null,s),!m&&!p&&!C&&a().createElement("div",{className:"lf-buttons"},a().createElement(b,{variant:"primary",onClick:u,disabled:g||A},x),a().createElement(b,{variant:"secondary",onClick:d,disabled:g},N),k))}},8484:function(t,e,n){var r=n(7537),a=n.n(r),o=n(3645),i=n.n(o)()(a());i.push([t.id,".lf-form-react-bootstrap .lf-buttons{display:flex}.lf-form-react-bootstrap .lf-buttons button:not(:first-child){margin-left:10px}","",{version:3,sources:["webpack://./react-bootstrap/form/index.scss"],names:[],mappings:"AACE,qCACE,YAAA,CAEA,8DACE,gBAAA",sourcesContent:[".lf-form-react-bootstrap {\n  .lf-buttons {\n    display: flex;\n\n    button:not(:first-child) {\n      margin-left: 10px;\n    }\n  }\n\n}\n"],sourceRoot:""}]),e.Z=i}}]);
//# sourceMappingURL=660-ef238a5caef4fa11de9f.map