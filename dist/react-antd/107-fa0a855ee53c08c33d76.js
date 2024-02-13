"use strict";(this.webpackChunklets_form_antd=this.webpackChunklets_form_antd||[]).push([[107],{98919:function(e,t,l){var a=l(75263).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let{className:t,direction:l,index:a,marginDirection:o,children:i,split:s,wrap:c}=e;const{horizontalSize:p,verticalSize:d,latestIndex:u,supportFlexGap:m}=n.useContext(r.SpaceContext);let f={};return m||("vertical"===l?a<u&&(f={marginBottom:p/(s?2:1)}):f=Object.assign(Object.assign({},a<u&&{[o]:p/(s?2:1)}),c&&{paddingBottom:d})),null==i?null:n.createElement(n.Fragment,null,n.createElement("div",{className:t,style:f},i),a<u&&s&&n.createElement("span",{className:`${t}-split`,style:f},s))};var n=a(l(8156)),r=l(74048)},74048:function(e,t,l){var a=l(75263).default,n=l(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.SpaceContext=void 0;var r=n(l(94184)),o=n(l(45598)),i=a(l(8156)),s=l(31929),c=n(l(87855)),p=n(l(46549)),d=n(l(98919)),u=n(l(54277));const m=i.createContext({latestIndex:0,horizontalSize:0,verticalSize:0,supportFlexGap:!1});t.SpaceContext=m;const f={small:8,middle:16,large:24},h=e=>{const{getPrefixCls:t,space:l,direction:a}=i.useContext(s.ConfigContext),{size:n=(null==l?void 0:l.size)||"small",align:p,className:h,rootClassName:g,children:v,direction:b="horizontal",prefixCls:x,split:y,style:w,wrap:C=!1}=e,A=function(e,t){var l={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(l[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(l[a[n]]=e[a[n]])}return l}(e,["size","align","className","rootClassName","children","direction","prefixCls","split","style","wrap"]),O=(0,c.default)(),[S,j]=i.useMemo((()=>(Array.isArray(n)?n:[n,n]).map((e=>function(e){return"string"==typeof e?f[e]:e||0}(e)))),[n]),z=(0,o.default)(v,{keepEmpty:!0}),E=void 0===p&&"horizontal"===b?"center":p,N=t("space",x),[P,k]=(0,u.default)(N),I=(0,r.default)(N,k,`${N}-${b}`,{[`${N}-rtl`]:"rtl"===a,[`${N}-align-${E}`]:E},h,g),Z=`${N}-item`,$="rtl"===a?"marginLeft":"marginRight";let M=0;const _=z.map(((e,t)=>{null!=e&&(M=t);const l=e&&e.key||`${Z}-${t}`;return i.createElement(d.default,{className:Z,key:l,direction:b,index:t,marginDirection:$,split:y,wrap:C},e)})),B=i.useMemo((()=>({horizontalSize:S,verticalSize:j,latestIndex:M,supportFlexGap:O})),[S,j,M,O]);if(0===z.length)return null;const L={};return C&&(L.flexWrap="wrap",O||(L.marginBottom=-j)),O&&(L.columnGap=S,L.rowGap=j),P(i.createElement("div",Object.assign({className:I,style:Object.assign(Object.assign({},L),w)},A),i.createElement(m.Provider,{value:B},_)))};h.Compact=p.default;var g=h;t.default=g},28107:function(e,t,l){l.r(t),l.d(t,{default:function(){return E}});var a=l(8156),n=l.n(a),r=l(97538),o=l(64749),i=l(74048),s=l(55593),c=l(78145),p=l(8228),d=l(93379),u=l.n(d),m=l(7795),f=l.n(m),h=l(90569),g=l.n(h),v=l(3565),b=l.n(v),x=l(19216),y=l.n(x),w=l(44589),C=l.n(w),A=l(14016),O={};O.styleTagTransform=C(),O.setAttributes=b(),O.insert=g().bind(null,"head"),O.domAPI=f(),O.insertStyleElement=y(),u()(A.Z,O),A.Z&&A.Z.locals&&A.Z.locals;var S=["name","label","hint","value","size","placeholder","showCount","tooltip","disabled","readOnly","required","maxLength","error","prefix","lfLocale","postfix","allowClear","bordered","onChange","onBlur","width","fullWidth","popupMatchSelectWidth","showSearch","placement","showArrow","listHeight","virtual","options","filterKey","filterValue","showImageOptions"];function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},j.apply(this,arguments)}var z=(0,s.mb)((function(e){var t=e.name,l=e.label,a=e.hint,s=e.value,p=e.size,d=e.placeholder,u=(e.showCount,e.tooltip),m=void 0!==u&&u,f=e.disabled,h=void 0!==f&&f,g=e.readOnly,v=void 0!==g&&g,b=e.required,x=void 0!==b&&b,y=(e.maxLength,e.error),w=(e.prefix,e.lfLocale,e.postfix,e.allowClear),C=e.bordered,A=e.onChange,O=e.onBlur,z=e.width,E=e.fullWidth,N=e.popupMatchSelectWidth,P=e.showSearch,k=e.placement,I=e.showArrow,Z=e.listHeight,$=e.virtual,M=e.options,_=e.filterKey,B=e.filterValue,L=e.showImageOptions,F=void 0!==L&&L,W=function(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}(e,S);return n().createElement(r.Z.Item,{"data-lf-field-name":t,className:"lf-control-select",label:l,name:t,help:null!=y?y:a&&!m?a:void 0,required:x,tooltip:m&&a,hasFeedback:null!=y,validateStatus:y?"error":void 0},n().createElement(o.Z,j({placeholder:d,readOnly:v,disabled:h,onChange:A,onBlur:O,value:s,size:p,bordered:C,listHeight:Z,placement:k,showArrow:I,virtual:$,showSearch:P,allowClear:w,popupMatchSelectWidth:N,style:(0,c.PZ)(E,z)},(0,c.QF)(W)),((0,c.MN)(M,B,_)||[]).map((function(e){return n().createElement(o.Z.Option,{key:e.value,value:e.value,label:e.label},e.image&&F&&n().createElement(i.default,{className:"lf-control-select-option-antd",align:"center"},n().createElement("img",{src:e.image,alt:e.label}),e.label))}))))}),["label","hint","placeholder"],{options:c.Lo});(0,p.n)("Loaded AntD.Select");var E=z},14016:function(e,t,l){var a=l(87537),n=l.n(a),r=l(23645),o=l.n(r)()(n());o.push([e.id,".lf-control-select-option-antd img{width:20px;max-width:20px;max-height:20px;vertical-align:middle;margin-top:-2px}","",{version:3,sources:["webpack://./react-antd/select/select.scss"],names:[],mappings:"AAEI,mCACE,UAAA,CACA,cAAA,CACA,eAAA,CACA,qBAAA,CACA,eAAA",sourcesContent:["\n  .lf-control-select-option-antd {\n    img {\n      width: 20px;\n      max-width: 20px;\n      max-height: 20px;\n      vertical-align: middle;\n      margin-top: -2px;\n    }\n  }\n"],sourceRoot:""}]),t.Z=o}}]);
//# sourceMappingURL=107-fa0a855ee53c08c33d76.map