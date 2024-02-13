"use strict";(this.webpackChunklets_form_rsuite5=this.webpackChunklets_form_rsuite5||[]).push([[566],{58566:function(e,r,n){n.r(r),n.d(r,{default:function(){return j}});var t=n(8156),i=n.n(t),o=n(94184),a=n.n(o),l=n(92652),s=n(64390),f=n(92972),c=n(95099),m=n.n(c),u=n(16405),d=n(23122),p=i().forwardRef((function(e,r){var n=e.className,t=e.classPrefix,o=void 0===t?"btn-toolbar":t,a=e.as,l=void 0===a?d.Z:a,c=e.role,m=void 0===c?"toolbar":c,p=(0,f.Z)(e,["className","classPrefix","as","role"]),v=l===d.Z?{wrap:!0,spacing:10,childrenRenderMode:"clone"}:null,g=(0,u.Z)(o),b=g.withClassPrefix,y=(0,g.merge)(n,b());return i().createElement(l,(0,s.Z)({},v,p,{role:m,ref:r,className:y}))}));p.displayName="ButtonToolbar",p.propTypes={as:m().elementType,classPrefix:m().string};var v=p,g=n(94304),b=n(8228),y=n(93379),h=n.n(y),w=n(7795),x=n.n(w),A=n(90569),Z=n.n(A),C=n(3565),S=n.n(C),E=n(19216),N=n.n(E),k=n(44589),P=n.n(k),T=n(87251),O={};function I(e){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(e)}function R(e,r,n){return(r=function(e){var r=function(e,r){if("object"!==I(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var t=n.call(e,"string");if("object"!==I(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===I(r)?r:String(r)}(r))in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}O.styleTagTransform=P(),O.setAttributes=S(),O.insert=Z().bind(null,"head"),O.domAPI=x(),O.insertStyleElement=N(),h()(T.Z,O),T.Z&&T.Z.locals&&T.Z.locals,(0,b.n)("Loaded RSuite5.Form");var j=function(e){var r,n=e.children,t=e.name,o=e.layout,s=e.fluid,f=void 0!==s&&s,c=e.disabled,m=void 0!==c&&c,u=e.disabledSubmit,d=void 0!==u&&u,p=e.buttonsAlign,b=e.labelSubmit,y=void 0===b?"Submit":b,h=e.labelCancel,w=void 0===h?"Cancel":h,x=e.hideCancel,A=void 0!==x&&x,Z=e.hideSumbut,C=void 0!==Z&&Z,S=e.readOnly,E=void 0!==S&&S,N=e.onlyFields,k=void 0!==N&&N,P=e.hideToolbar,T=void 0!==P&&P,O=e.onSubmit,I=void 0===O?function(){}:O,j=e.onReset,F=void 0===j?function(){}:j,_=e.custom;return k?i().createElement("div",{className:a()("rs-form",(r={},R(r,"rs-form-".concat(o),!0),R(r,"rs-form-fluid",f),r))},n):i().createElement(l.Z,{className:a()("lf-form lf-form-react-rsuite5",R({},p?"lf-form-buttons-align-".concat(p):void 0,!0)),"data-lf-form-name":t,layout:o,fluid:f,readOnly:E,disabled:m},i().createElement("div",null,n),!T&&i().createElement(v,{className:"lf-buttons"},!C&&i().createElement(g.Z,{appearance:"primary",onClick:I,disabled:m||d},y),!A&&i().createElement(g.Z,{onClick:F,disabled:m},w),_))}},87251:function(e,r,n){var t=n(87537),i=n.n(t),o=n(23645),a=n.n(o)()(i());a.push([e.id,".lf-form-react-rsuite5 .lf-buttons{margin-top:24px}.lf-form-react-rsuite5 .rs-form-control-label>.rs-form-help-text.rs-form-help-text-tooltip{margin-top:0px;margin-left:5px}.lf-form-react-rsuite5 .lf-full-width .rs-form-control-wrapper{width:100%}","",{version:3,sources:["webpack://./react-rsuite5/form/index.scss"],names:[],mappings:"AAEE,mCACE,eAAA,CAIA,2FACE,cAAA,CACA,eAAA,CAUF,+DACE,UAAA",sourcesContent:[".lf-form-react-rsuite5 {\n\n  .lf-buttons {\n    margin-top: 24px;\n  }\n  // makes tooltip inside labels with smaller margins\n  .rs-form-control-label {\n    > .rs-form-help-text.rs-form-help-text-tooltip {\n      margin-top: 0px;\n      margin-left: 5px;\n    }\n  }\n\n  // remove the margin bottom, rule is that elements has a margin-top\n  //&.rs-form:not(.rs-form-inline) .rs-form-group:not(:last-child) {\n  //  margin-bottom: 0px;\n  //}\n\n  .lf-full-width {\n    .rs-form-control-wrapper {\n      width: 100%;\n    }\n  }\n\n}\n"],sourceRoot:""}]),r.Z=a},23122:function(e,r,n){n.d(r,{Z:function(){return p}});var t=n(64390),i=n(92972),o=n(8156),a=n.n(o),l=n(95099),s=n.n(l),f=n(47629),c=n(16405),m=n(35678);function u(e){var r=e.as,n=void 0===r?"div":r,o=e.style,l=e.className,s=e.alignSelf,f=e.flex,c=e.grow,m=e.shrink,u=e.order,d=e.basis,p=(0,i.Z)(e,["as","style","className","alignSelf","flex","grow","shrink","order","basis"]);return a().createElement(n,(0,t.Z)({className:l,style:(0,t.Z)({alignSelf:s,order:u},f?{flex:f}:{flexGrow:c,flexShrink:m,flexBasis:d},o)},p))}u.displayName="StackItem",u.propTypes={className:s().string,children:s().node,alignSelf:s().oneOf(["flex-start","flex-end","center","baseline","stretch"]),flex:s().oneOfType([s().string,s().number]),grow:s().number,shrink:s().number,order:s().number,basis:s().string};var d=a().forwardRef((function(e,r){var n,o=e.as,l=void 0===o?"div":o,s=e.alignItems,d=void 0===s?"center":s,p=e.classPrefix,v=void 0===p?"stack":p,g=e.childrenRenderMode,b=void 0===g?"wrap":g,y=e.className,h=e.children,w=e.direction,x=e.justifyContent,A=e.spacing,Z=e.divider,C=e.style,S=e.wrap,E=(0,i.Z)(e,["as","alignItems","classPrefix","childrenRenderMode","className","children","direction","justifyContent","spacing","divider","style","wrap"]),N=(0,f.Z)("Stack").rtl,k=(0,c.Z)(v),P=k.withClassPrefix,T=k.merge,O=k.prefix,I=T(y,P()),R=(0,m._P)(),j=Array.isArray(A)?A:[A,A],F=((n={})[N?"marginLeft":"marginRight"]=j[0],n.marginBottom=j[1],n),_=(0,t.Z)({alignItems:d,justifyContent:x,flexDirection:w,flexWrap:S?"wrap":void 0,gap:R?A:void 0},C),M=a().Children.toArray(h),B=M.length;return a().createElement(l,(0,t.Z)({},E,{ref:r,className:I,style:_}),a().Children.map(M,(function(e,r){return["wrap"===b&&e.type!==u?a().createElement(u,{key:r,className:O("item"),style:R?void 0:F},e):a().cloneElement(e,{className:T(O("item"),e.props.className),style:R?e.props.style:(0,t.Z)({},F,e.props.style)}),r<B-1?Z:null]})))}));d.Item=u,d.displayName="Stack",d.propTypes={className:s().string,children:s().node,classPrefix:s().string,direction:s().oneOf(["row","row-reverse","column","column-reverse"]),alignItems:s().oneOf(["flex-start","center","flex-end","stretch","baseline"]),justifyContent:s().oneOf(["flex-start","center","flex-end","space-between","space-around"]),spacing:s().oneOfType([s().number,s().string,s().array]),divider:s().node,wrap:s().bool};var p=d},35678:function(e,r,n){n.d(r,{_P:function(){return a},fq:function(){return o},w1:function(){return i}});var t=n(50421),i=function(){return t.Z&&/MSIE |Trident\/|Edge\//.test(window.navigator.userAgent)},o=function(){return t.Z&&window.navigator.userAgent.indexOf("Trident")>-1&&window.navigator.userAgent.indexOf("rv:11.0")>-1},a=function(){if(i())return!1;var e=function(){if(t.Z){var e=window.navigator.userAgent.match(/Chrom(e|ium)\/([\d\.]+)\./);return!!e&&parseFloat(e[2])}return!1}(),r=function(){if(t.Z){var e=window.navigator.userAgent.match(/Version\/([\d\.]+).*Safari/);return!!e&&parseFloat(e[1])}return!1}();return e?e>=84:!r||r>=14.1}}}]);
//# sourceMappingURL=566-f1725bcdd8fe935973bb.map