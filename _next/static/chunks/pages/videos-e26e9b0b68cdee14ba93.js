_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery;return n||a&&(void 0!==o&&o)}},"5fIB":function(e,t,n){var r=n("7eYB");e.exports=function(e){if(Array.isArray(e))return r(e)}},"8Kt/":function(e,t,n){"use strict";n("oI91");t.__esModule=!0,t.defaultHead=f,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),u=n("FYa8"),c=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var l=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var u=0,c=l.length;u<c;u++){var s=l[u];if(a.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?o=!1:n.add(s);else{var f=a.props[s],d=r[s]||new Set;d.has(f)?o=!1:(d.add(f),r[s]=d)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,a.useContext)(i.AmpStateContext),r=(0,a.useContext)(u.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}h.rewind=function(){};var v=h;t.default=v},AnCH:function(e){e.exports=JSON.parse('{"title":"Module Federation ","description":"Official site for all things related to Webpack 5 Module Federation","repositoryUrl":"https://github.com/module-federation/module-federation.github.io"}')},Mt1y:function(e,t,n){"use strict";var r=n("wx14"),a=n("iuhU"),o=(n("17x9"),n("q1tI")),i=n.n(o),u=n("ZeOK"),c=n("ICNK"),s=n("Y53p"),f=n("H+2d");function d(e){var t=e.children,n=e.className,o=e.clearing,l=e.content,p=e.fitted,h=e.hidden,v=e.horizontal,m=e.inverted,y=e.section,g=e.vertical,b=Object(a.a)("ui",Object(u.a)(o,"clearing"),Object(u.a)(p,"fitted"),Object(u.a)(h,"hidden"),Object(u.a)(v,"horizontal"),Object(u.a)(m,"inverted"),Object(u.a)(y,"section"),Object(u.a)(g,"vertical"),"divider",n),_=Object(c.a)(d,e),M=Object(s.a)(d,e);return i.a.createElement(M,Object(r.a)({},_,{className:b}),f.a.isNil(t)?l:t)}d.handledProps=["as","children","className","clearing","content","fitted","hidden","horizontal","inverted","section","vertical"],d.propTypes={},t.a=d},Xuae:function(e,t,n){"use strict";var r=n("mPvQ"),a=n("/GRZ"),o=n("i2R6"),i=n("qXWd"),u=n("48fX"),c=n("tCBg"),s=n("T0f4");function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var a=s(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var d=n("q1tI"),l=!1,p=function(e){u(n,e);var t=f(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,l&&o._hasHeadManager&&(o.props.headManager.mountedInstances.add(i(o)),o.emitChange()),o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(d.Component);t.default=p},YFqc:function(e,t,n){e.exports=n("cTJO")},aF3N:function(e,t,n){e.exports={videoWrapper:"video_videoWrapper__rV6ut",videoTitle:"video_videoTitle__S4B_V"}},cTJO:function(e,t,n){"use strict";var r=n("zoAU"),a=n("7KCV");t.__esModule=!0,t.default=void 0;var o,i=a(n("q1tI")),u=n("elyg"),c=(n("g/15"),n("nOHt")),s=new Map,f=window.IntersectionObserver,d={};var l=function(e,t){var n=o||(f?o=new f((function(e){e.forEach((function(e){if(s.has(e.target)){var t=s.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),s.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),s.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}s.delete(e)}):function(){}};function p(e,t,n,r){(0,u.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),d[t+"%"+n]=!0)}var h=function(e){var t=!1!==e.prefetch,n=i.default.useState(),a=r(n,2),o=a[0],s=a[1],h=(0,c.useRouter)(),v=h&&h.pathname||"/",m=i.default.useMemo((function(){var t=(0,u.resolveHref)(v,e.href);return{href:t,as:e.as?(0,u.resolveHref)(v,e.as):t}}),[v,e.href,e.as]),y=m.href,g=m.as;i.default.useEffect((function(){if(t&&f&&o&&o.tagName&&(0,u.isLocalURL)(y)&&!d[y+"%"+g])return l(o,(function(){p(h,y,g)}))}),[t,o,y,g,h]);var b=e.children,_=e.replace,M=e.shallow,w=e.scroll;"string"===typeof b&&(b=i.default.createElement("a",null,b));var O=i.Children.only(b),C={ref:function(e){e&&s(e),O&&"object"===typeof O&&O.ref&&("function"===typeof O.ref?O.ref(e):"object"===typeof O.ref&&(O.ref.current=e))},onClick:function(e){O.props&&"function"===typeof O.props.onClick&&O.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,u.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:o}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,h,y,g,_,M,w)}};return t&&(C.onMouseEnter=function(e){(0,u.isLocalURL)(y)&&(O.props&&"function"===typeof O.props.onMouseEnter&&O.props.onMouseEnter(e),p(h,y,g,{priority:!0}))}),!e.passHref&&("a"!==O.type||"href"in O.props)||(C.href=(0,u.addBasePath)(g)),i.default.cloneElement(O,C)};t.default=h},e0ig:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return g})),n.d(t,"default",(function(){return b}));var r=n("q1tI"),a=n("8Kt/"),o=n.n(a),i=n("YFqc"),u=n.n(i),c=n("yE/o"),s=n("3mGJ"),f=n("Mt1y"),d=n("aQu0"),l=n("AnCH"),p=n("0Ti5"),h=n("fjV5"),v=n("Q201"),m=n("aF3N"),y=r.createElement,g=!0;function b(e){var t=e.embeds;return y(r.Fragment,null,y(o.a,null,y("title",null,"The Federated Blog | ",l.title)),y(h.a,{menuItems:p.a.menuItems,secondaryMenuItems:p.a.secondaryMenuItems,heading:function(){return y(v.a,null,y(c.a,{text:!0},y("h1",null,"The Federated Videos"),y("h2",null,"Check out videos about module federation")))}},y(s.a,{style:{padding:"8em 0em"},vertical:!0},y(c.a,{text:!0},t.map((function(e,t){return y(r.Fragment,{key:e.thumbnail_url},t>0&&y(f.a,{style:{margin:"3em 0em"}}),y(d.a,{as:"h3",className:m.videoTitle,style:{fontSize:"2em"}},y(u.a,{href:"/videos/".concat(e.slug)},e.title)),y("div",{className:m.videoWrapper,dangerouslySetInnerHTML:{__html:e.html}}))}))))))}},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},mPvQ:function(e,t,n){var r=n("5fIB"),a=n("rlHP"),o=n("KckH"),i=n("kG2m");e.exports=function(e){return r(e)||a(e)||o(e)||i()}},oI91:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},rvc0:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/videos",function(){return n("e0ig")}])}},[["rvc0",0,1,2,3]]]);