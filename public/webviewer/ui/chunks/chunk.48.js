(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{1483:function(e,t,o){"use strict";o(45),o(51),o(92),o(35),o(76),o(123),o(39),o(16),o(18),o(11),o(13),o(8),o(14),o(10),o(9),o(12),o(15),o(20),o(17);var n=o(0),i=o.n(n),r=o(19),l=o.n(r),a=(o(1548),o(396)),c=o(4),d=o.n(c),s=o(2),u=o(6),p=o(50),m=o(21),h=o(3),f=o(43),y=o(96),b=o(124);function x(e){return function(e){if(Array.isArray(e))return g(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||v(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var n,i,r,l,a=[],c=!0,d=!1;try{if(r=(o=o.call(e)).next,0===t){if(Object(o)!==o)return;c=!1}else for(;!(c=(n=r.call(o)).done)&&(a.push(n.value),a.length!==t);c=!0);}catch(e){d=!0,i=e}finally{try{if(!c&&null!=o.return&&(l=o.return(),Object(l)!==l))return}finally{if(d)throw i}}return a}}(e,t)||v(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){if(e){if("string"==typeof e)return g(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?g(e,t):void 0}}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}var S=function(e){var t,o;if(!e)return e;var n=e;return null!==(t=n)&&void 0!==t&&t.toHexString&&(n=n.toHexString()),null!==(o=n)&&void 0!==o&&o.toLowerCase&&(n=n.toLowerCase()),n},C=i.a.createElement("svg",{width:"100%",height:"100%",className:l()("transparent")},i.a.createElement("line",{stroke:"#d82e28",x1:"0",y1:"100%",x2:"100%",y2:"0",strokeWidth:"2",strokeLinecap:"round"})),E={color:d.a.any,ariaTypeLabel:d.a.string},T=function(e){var t=e.onColorChange,o=e.hasTransparentColor,r=void 0!==o&&o,c=e.color,d=e.activeTool,v=e.type,g=e.ariaTypeLabel,E=Object.values(window.Core.Tools.ToolNames).includes(d)?d:window.Core.Tools.ToolNames.EDIT,T=Object(u.f)(),k=Object(a.a)().t,P=Object(u.d)(),A=w(Object(u.e)((function(e){return[h.a.getColors(e,E,v)]})),1)[0],O=w(Object(n.useState)(),2),j=O[0],R=O[1],z=w(Object(n.useState)(!1),2),L=z[0],_=z[1],N=Object(n.useRef)(!0);Object(n.useEffect)((function(){N.current=!0}),[E,c]),Object(n.useEffect)((function(){c&&R(S(c))}),[c]);var F=function(){var e=h.a.getCustomColor(T.getState());return P(s.a.setCustomColor(null)),e},I=Object(n.useCallback)((function(){P(s.a.openElement("ColorPickerModal"));Object(m.c)().addEventListener(p.a.VISIBILITY_CHANGED,(function e(o){var n=o.detail,i=n.element,r=n.isVisible;if("ColorPickerModal"===i&&!r){var l=S(F());if(l)if(A.includes(l))R(l),t(l);else{var a=[].concat(x(A),[l]);P(s.a.setColors(a,E,v,!0)),R(l),t(l)}}Object(m.c)().removeEventListener(p.a.VISIBILITY_CHANGED,e)}))}),[null==A?void 0:A.length,P,R,t,F,v,E]),D=Object(y.a)(I),M=A.map((function(e){return e.toLowerCase()}));r&&M.push("transparent"),j||R("transparent"),M.indexOf(j)>6&&!L&&N.current&&(_(!0),N.current=!1);var H=M.length<=7,W=!(j&&!M.includes(j)),B=M.length<=1||!W;return L||(M=M.slice(0,7)),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:l()("ColorPalette")},M.map((function(e){return S(e)})).map((function(e,o){var n,r,a;return e?i.a.createElement(b.a,{content:"".concat(k("option.colorPalette.colorLabel")," ").concat(null==e||null===(n=e.toUpperCase)||void 0===n?void 0:n.call(e)),key:null==e||null===(r=e.toUpperCase)||void 0===r?void 0:r.call(e)},i.a.createElement("button",{className:"cell-container",onClick:function(){R(e),t(e)},"aria-label":"".concat(g," ").concat(k("option.colorPalette.colorLabel")," ").concat(null==e||null===(a=e.toUpperCase)||void 0===a?void 0:a.call(e)),"aria-current":S(j)===e||!S(j)&&"transparent"===e},i.a.createElement("div",{className:l()({"cell-outer":!0,active:S(j)===e||!S(j)&&"transparent"===e})},i.a.createElement("div",{className:l()({cell:!0,border:!0}),style:{backgroundColor:e}},"transparent"===e&&C)))):i.a.createElement("div",{key:o,className:"dummy-cell"})}))),i.a.createElement("div",{className:"palette-controls"},i.a.createElement("div",{className:"button-container"},i.a.createElement(f.a,{img:"icon-header-zoom-in-line",title:k("action.addNewColor"),onClick:D,className:"control-button",dataElement:"addCustomColor",ariaLabel:"".concat(g," ").concat(k("action.addNewColor")," ").concat(k("action.fromCustomColorPicker"))}),i.a.createElement(f.a,{img:"icon-delete-line",title:k("action.deleteColor"),onClick:function(){var e=S(j),o=x(A),n=o.indexOf(e);if(n>-1){var i=n===o.length-1?0:n+1;R(A[i]),t(A[i]),o.splice(n,1),P(s.a.setColors(o,E,v,!0))}},disabled:B,className:"control-button",dataElement:"deleteSelectedColor",ariaLabel:"".concat(g," ").concat(k("action.deleteColor")," ").concat(j)}),i.a.createElement(f.a,{img:"icon-copy2",title:k("action.copySelectedColor"),onClick:function(){var e=S(j),t=[].concat(x(A),[e]);P(s.a.setColors(t,E,v,!0))},disabled:W,className:"control-button",dataElement:"copySelectedColor",ariaLabel:"".concat(g," ").concat(k("action.copySelectedColor")," ").concat(j)})),i.a.createElement("button",{className:l()("show-more-button control-button",{hidden:H}),onClick:function(){_(!L)},"aria-label":"".concat(g," ").concat(k(k(L?"action.showLessColors":"action.showMoreColors")))},k(L?"message.showLess":"message.showMore"))))};T.propTypes=E;var k=T;t.a=k},1548:function(e,t,o){var n=o(30),i=o(1549);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:function(e){if(!window.isApryseWebViewerWebComponent)return void document.head.appendChild(e);let t;t=document.getElementsByTagName("apryse-webviewer"),t.length||(t=function e(t,o=document){const n=[];return o.querySelectorAll(t).forEach(e=>n.push(e)),o.querySelectorAll("*").forEach(o=>{o.shadowRoot&&n.push(...e(t,o.shadowRoot))}),n}("apryse-webviewer"));const o=[];for(let n=0;n<t.length;n++){const i=t[n];if(0===n)i.shadowRoot.appendChild(e),e.onload=function(){o.length>0&&o.forEach(t=>{t.innerHTML=e.innerHTML})};else{const t=e.cloneNode(!0);i.shadowRoot.appendChild(t),o.push(t)}}},singleton:!1};n(i,r);e.exports=i.locals||{}},1549:function(e,t,o){(t=e.exports=o(31)(!1)).push([e.i,":host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.StylePicker .ColorPalette{display:flex;flex-wrap:wrap;display:grid;grid-template-columns:repeat(7,1fr);grid-row-gap:8px;row-gap:8px;justify-items:center}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.StylePicker .ColorPalette{width:196px}}.StylePicker .ColorPalette.padding{padding:4px 12px 8px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .StylePicker .ColorPalette{max-width:450px;width:auto}}@media(max-width:640px)and (-ms-high-contrast:active),(max-width:640px)and (-ms-high-contrast:none){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .StylePicker .ColorPalette{width:308px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .StylePicker .ColorPalette{max-width:450px;width:auto}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.App.is-web-component:not(.is-in-desktop-only-mode) .StylePicker .ColorPalette{width:308px}}}.StylePicker .ColorPalette .cell-container{padding:0;border:none;background-color:transparent;flex:1 0 14%;cursor:pointer;width:var(--cell-border-size);height:var(--cell-border-size);display:flex;align-items:center;justify-content:center}:host(:not([data-tabbing=true])) .StylePicker .ColorPalette .cell-container,html:not([data-tabbing=true]) .StylePicker .ColorPalette .cell-container{outline:none}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .StylePicker .ColorPalette .cell-container{width:44px;height:44px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .StylePicker .ColorPalette .cell-container{width:44px;height:44px}}.StylePicker .ColorPalette .cell-container .cell-outer.active{border:1px solid var(--color-palette-border);width:var(--cell-outer-border-size);height:var(--cell-outer-border-size);border-radius:10000000px;display:flex;align-items:center;justify-content:center}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .StylePicker .ColorPalette .cell-container .cell-outer.active{width:36px;height:36px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .StylePicker .ColorPalette .cell-container .cell-outer.active{width:36px;height:36px}}.StylePicker .ColorPalette .cell-container .cell-outer .cell{width:18px;height:18px;border-radius:10000000px}.StylePicker .ColorPalette .cell-container .cell-outer .cell .transparent{border:2px solid var(--faded-text);border-radius:10000000px}.StylePicker .ColorPalette .cell-container .cell-outer .cell.border{border:1px solid var(--white-color-palette-border)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .StylePicker .ColorPalette .cell-container .cell-outer .cell{width:24px;height:24px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .StylePicker .ColorPalette .cell-container .cell-outer .cell{width:24px;height:24px}}.StylePicker .palette-controls{padding-right:12px;padding-left:2px;display:flex;justify-content:space-between}.StylePicker .palette-controls .button-container{display:flex;grid-gap:8px;gap:8px}.StylePicker .palette-controls .control-button{display:flex;align-items:center;justify-content:center;text-align:center;min-width:32px;min-height:32px;padding:0;border:none;background-color:transparent;cursor:pointer;border-radius:4px}:host(:not([data-tabbing=true])) .StylePicker .palette-controls .control-button,html:not([data-tabbing=true]) .StylePicker .palette-controls .control-button{outline:none}.StylePicker .palette-controls .control-button.show-more-button{color:var(--ribbon-active-color)}.StylePicker .palette-controls .control-button.show-more-button:hover{background:none;color:var(--primary-button-hover)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .StylePicker .palette-controls .control-button.show-more-button{color:var(--ribbon-active-color)}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .StylePicker .palette-controls .control-button.show-more-button{color:var(--ribbon-active-color)}}.StylePicker .palette-controls .control-button:disabled{cursor:no-drop}.StylePicker .palette-controls .control-button:disabled .Icon{color:var(--disabled-icon)}.StylePicker .palette-controls .control-button.hidden{display:none}.StylePicker .palette-controls .control-button.focus-visible,.StylePicker .palette-controls .control-button:focus-visible{outline:var(--focus-visible-outline)}",""]),t.locals={LEFT_HEADER_WIDTH:"41px",RIGHT_HEADER_WIDTH:"41px"}},1550:function(e,t,o){var n=o(30),i=o(1551);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:function(e){if(!window.isApryseWebViewerWebComponent)return void document.head.appendChild(e);let t;t=document.getElementsByTagName("apryse-webviewer"),t.length||(t=function e(t,o=document){const n=[];return o.querySelectorAll(t).forEach(e=>n.push(e)),o.querySelectorAll("*").forEach(o=>{o.shadowRoot&&n.push(...e(t,o.shadowRoot))}),n}("apryse-webviewer"));const o=[];for(let n=0;n<t.length;n++){const i=t[n];if(0===n)i.shadowRoot.appendChild(e),e.onload=function(){o.length>0&&o.forEach(t=>{t.innerHTML=e.innerHTML})};else{const t=e.cloneNode(!0);i.shadowRoot.appendChild(t),o.push(t)}}},singleton:!1};n(i,r);e.exports=i.locals||{}},1551:function(e,t,o){(t=e.exports=o(31)(!1)).push([e.i,":host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}@keyframes bottom-up{0%{transform:translateY(100%)}to{transform:translateY(0)}}@keyframes up-bottom{0%{transform:translateY(0)}to{transform:translateY(100%)}}.RichTextStyleEditor{margin-bottom:16px}.RichTextStyleEditor .menu-items{margin-bottom:8px!important}.RichTextStyleEditor .menu-items .icon-grid{padding-top:12px;grid-row-gap:12px;row-gap:12px}.RichTextStyleEditor .menu-items .icon-grid .row{padding-top:0}.RichTextStyleEditor .menu-items .icon-grid .row.isRedaction{padding-bottom:8px}.RichTextStyleEditor .menu-items .icon-grid .auto-size-checkbox{padding-top:4px;padding-bottom:8px}.RichTextStyleEditor .menu-items .icon-grid .auto-size-checkbox .ui__choice__input__check--focus{outline:var(--focus-visible-outline)}.RichTextStyleEditor .Dropdown__wrapper{width:100%}.RichTextStyleEditor .Dropdown__wrapper .Dropdown{width:100%!important}.RichTextStyleEditor .Dropdown__wrapper .Dropdown__items{right:unset;width:100%!important}.RichTextStyleEditor .FontSizeDropdown{width:100%!important}.RichTextStyleEditor .ColorPalette{padding-bottom:8px}.RichTextStyleEditor .text-size-slider{margin-top:16px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .RichTextStyleEditor .icon-grid{display:flex;flex-direction:column}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .RichTextStyleEditor .icon-grid{display:flex;flex-direction:column}}",""]),t.locals={LEFT_HEADER_WIDTH:"41px",RIGHT_HEADER_WIDTH:"41px"}},1608:function(e,t,o){"use strict";o.r(t);o(35),o(45),o(51),o(18),o(87),o(337),o(403),o(405),o(11),o(13),o(8),o(14),o(10),o(9),o(12),o(16),o(15),o(20),o(17),o(27),o(28),o(25),o(22),o(34),o(32),o(54),o(23),o(24),o(56),o(55),o(60),o(46);var n=o(0),i=o.n(n),r=o(6),l=o(4),a=o.n(l),c=o(1483),d=o(1),s=o(2),u=o(3),p=(o(1550),o(5)),m=o(288),h=o(1445),f=o(396);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(){return(b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}function x(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function w(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?x(Object(o),!0).forEach((function(t){v(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):x(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function v(e,t,o){return(t=function(e){var t=function(e,t){if("object"!==y(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var n=o.call(e,t||"default");if("object"!==y(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===y(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var n,i,r,l,a=[],c=!0,d=!1;try{if(r=(o=o.call(e)).next,0===t){if(Object(o)!==o)return;c=!1}else for(;!(c=(n=r.call(o)).done)&&(a.push(n.value),a.length!==t);c=!0);}catch(e){d=!0,i=e}finally{try{if(!c&&null!=o.return&&(l=o.return(),Object(l)!==l))return}finally{if(d)throw i}}return a}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return S(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return S(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}var C={annotation:a.a.object,editor:a.a.object,style:a.a.shape({TextColor:a.a.string,RichTextStyle:a.a.any}),isFreeTextAutoSize:a.a.bool,onFreeTextSizeToggle:a.a.func,onPropertyChange:a.a.func,onRichTextStyleChange:a.a.func,isRedaction:a.a.bool,isRichTextEditMode:a.a.bool,setIsRichTextEditMode:a.a.func,isWidget:a.a.bool},E=function(e){var t,o,l,a,y,x,S,C,E,T,k,P,A,O=e.annotation,j=e.editor,R=e.style,z=e.isFreeTextAutoSize,L=e.onFreeTextSizeToggle,_=e.onPropertyChange,N=e.onRichTextStyleChange,F=e.isRichTextEditMode,I=e.setIsRichTextEditMode,D=e.isRedaction,M=e.isWidget,H=e.activeTool,W=g(Object(r.e)((function(e){return[u.a.getFonts(e)]}),r.c),1)[0],B=g(Object(n.useState)({}),2),Y=B[0],U=B[1],V=Object(n.useRef)(null),q=Object(n.useRef)(null),G=Object(n.useRef)({}),J=Object(r.d)(),$=Object(n.useRef)(),K=Object(n.useRef)();K.current=F;var Q=g(Object(f.a)(),1)[0];Object(n.useEffect)((function(){var e=function(e,t){!e&&t&&V.current&&V.current.setSelection(t.index,t.length),e&&V.current&&U(Z(e))},t=function(){var e;U(Z(null===(e=V.current)||void 0===e?void 0:e.getSelection()))};return d.a.addEventListener("editorSelectionChanged",e),d.a.addEventListener("editorTextChanged",t),J(s.a.disableElements([p.a.ANNOTATION_STYLE_POPUP])),function(){d.a.removeEventListener("editorSelectionChanged",e),d.a.removeEventListener("editorTextChanged",t),J(s.a.enableElements([p.a.ANNOTATION_STYLE_POPUP]))}}),[]),Object(n.useEffect)((function(){var e;if(V.current=j,q.current=O,F&&O){var t,o,n,i,r,l,a="solid";try{a="dash"===O.Style?"".concat(O.Style,",").concat(O.Dashes):O.Style}catch(e){console.error(e)}var c=O.getRichTextStyle()[0];G.current={Font:O.Font,FontSize:O.FontSize,TextAlign:O.TextAlign,TextVerticalAlign:O.TextVerticalAlign,bold:null!==(t="bold"===(null==c?void 0:c["font-weight"]))&&void 0!==t&&t,italic:null!==(o="italic"===(null==c?void 0:c["font-style"]))&&void 0!==o&&o,underline:(null==c||null===(n=c["text-decoration"])||void 0===n?void 0:n.includes("underline"))||(null==c||null===(i=c["text-decoration"])||void 0===i?void 0:i.includes("word")),strikeout:null!==(r=null==c||null===(l=c["text-decoration"])||void 0===l?void 0:l.includes("line-through"))&&void 0!==r&&r,size:null==c?void 0:c["font-size"],font:null==c?void 0:c["font-family"],StrokeStyle:a,calculatedFontSize:O.getCalculatedFontSize()}}U(Z(null===(e=V.current)||void 0===e?void 0:e.getSelection())),$.current&&(V.current.setSelection($.current),$.current=null)}),[O,j,F]),Object(n.useEffect)((function(){var e=function(){V.current=null,q.current=null,I(!1)},t=function(){I(!0)};return d.a.addEventListener("editorBlur",e),d.a.addEventListener("editorFocus",t),function(){d.a.removeEventListener("editorBlur",e),d.a.removeEventListener("editorFocus",t)}}),[J]);var X,Z=function(e){if(!e)return{};var t=V.current.getFormat(e.index,e.length);if("string"==typeof t.color)t.color=new window.Core.Annotations.Color(t.color);else if(Array.isArray(t.color)){var o=new window.Core.Annotations.Color(t.color[t.color.length-1]);t.color=o}else t.color||(t.color=q.current.TextColor);for(var n=0,i=["font","size","originalSize"];n<i.length;n++){var r=i[n];t[r]&&Array.isArray(t[r])&&(t[r]=void 0)}return t},ee=function(e,t){var o,n;"size"===e?null===(o=V.current)||void 0===o||o.format("applyCustomFontSize",t):null===(n=V.current)||void 0===n||n.format(e,t);"color"===e&&(t=new window.Core.Annotations.Color(t)),U(w(w({},Y),{},v({},e,t)))},te=function(e,t){if(K.current){var o=V.current.getSelection(),n=o.index,i=o.length,r=q.current;r[e]=t,V.current.blur(),"FontSize"!==e&&"Font"!==e||Object(h.a)(r),setTimeout((function(){$.current={index:n,length:i},d.a.getAnnotationManager().getEditBoxManager().focusBox(r)}),0)}else _(e,t)},oe=R.RichTextStyle,ne={bold:null!==(t="bold"===(null==oe||null===(o=oe[0])||void 0===o?void 0:o["font-weight"]))&&void 0!==t&&t,italic:null!==(l="italic"===(null==oe||null===(a=oe[0])||void 0===a?void 0:a["font-style"]))&&void 0!==l&&l,underline:(null==oe||null===(y=oe[0])||void 0===y||null===(x=y["text-decoration"])||void 0===x?void 0:x.includes("underline"))||(null==oe||null===(S=oe[0])||void 0===S||null===(C=S["text-decoration"])||void 0===C?void 0:C.includes("word")),strikeout:null!==(E=null==oe||null===(T=oe[0])||void 0===T||null===(k=T["text-decoration"])||void 0===k?void 0:k.includes("line-through"))&&void 0!==E&&E,font:null==oe||null===(P=oe[0])||void 0===P?void 0:P["font-family"],size:null==oe||null===(A=oe[0])||void 0===A?void 0:A["font-size"],StrokeStyle:"solid"};X=w(w({},R),ne),F&&O&&(G.current.bold=Y.bold,G.current.italic=Y.italic,G.current.underline=Y.underline,G.current.strikeout=Y.strike,G.current.quillFont=Y.font||G.current.Font,G.current.quillFontSize=Y.originalSize||G.current.FontSize);var ie={fonts:W,onPropertyChange:te,properties:X,stateless:!0,isFreeText:!D},re={onRichTextStyleChange:function(e,t){if(K.current){var o={"font-weight":"bold","font-style":"italic",underline:"underline","line-through":"strike","font-family":"font","font-size":"size"};if("font-family"===e||"font-size"===e){ee(o[e],t);var n=q.current;if(n.isAutoSized())d.a.getAnnotationManager().getEditBoxManager().resizeAnnotation(n)}else!function(e){return function(){var t=V.current.getSelection(),o=t.index,n=t.length;if(0===n){$.current={index:o,length:n};var i=V.current.getSelection();o=i.index,n=i.length}var r=V.current.getFormat(o,n);ee(e,!r[e])}}(o[e])()}else N(e,t)},properties:F?G.current:X,isFreeTextAutoSize:z,isRichTextEditMode:F,isRedaction:D,onFreeTextSizeToggle:L},le={onRichTextStyleChange:te,isFreeTextAutoSize:!1,isRichTextEditMode:!1,isRedaction:!1,isWidget:M};return i.a.createElement("div",{className:"RichTextStyleEditor",onMouseDown:function(e){"touchstart"!==e.type&&F&&e.preventDefault()}},i.a.createElement("div",{className:"menu-items"},i.a.createElement(m.a,b({},ie,M?le:re))),i.a.createElement(c.a,{onColorChange:function(e){!function(e,t){K.current?ee("color",t.toHexString()):_(e,t)}("TextColor",new window.Core.Annotations.Color(e))},color:F?Y.color:R.TextColor,activeTool:H,type:"Text",ariaTypeLabel:Q("option.stylePopup.textStyle")}))};E.propTypes=C;var T=i.a.memo(E);t.default=T}}]);
//# sourceMappingURL=chunk.48.js.map