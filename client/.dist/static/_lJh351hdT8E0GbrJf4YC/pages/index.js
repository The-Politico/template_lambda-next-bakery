(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"5dyF":function(e,n,t){e.exports=t("9CGT")},"9CGT":function(e,n,t){"use strict";var r=t("KBEF"),o=t("J/q3"),i=t("3esu"),a=t("8m4E"),u=t("Od8a"),s=t("k3h2"),c=t("PL1w");n.__esModule=!0,n.default=void 0;var f,l=c(t("6mFX")),p=t("so/P"),h=s(t("mXGw")),v=(c(t("W0B4")),c(t("bBV7"))),d=t("Z0wt"),w=t("z4BS");function y(e){return e&&"object"===typeof e?(0,w.formatWithValidation)(e):e}var m=new l.default,_=window.IntersectionObserver;function E(){return f||(_?f=new _(function(e){e.forEach(function(e){if(m.has(e.target)){var n=m.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),m.delete(e.target),n())}})},{rootMargin:"200px"}):void 0)}var g=function(e){function n(e){var t;return r(this,n),(t=i(this,a(n).call(this,e))).p=void 0,t.cleanUpListeners=function(){},t.formatUrls=function(e){var n=null,t=null,r=null;return function(o,i){if(r&&o===n&&i===t)return r;var a=e(o,i);return n=o,t=i,r=a,a}}(function(e,n){return{href:y(e),as:n?y(n):n}}),t.linkClicked=function(e){var n=e.currentTarget,r=n.nodeName,o=n.target;if("A"!==r||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var i=t.formatUrls(t.props.href,t.props.as),a=i.href,u=i.as;if(function(e){var n=(0,p.parse)(e,!1,!0),t=(0,p.parse)((0,w.getLocationOrigin)(),!1,!0);return!n.host||n.protocol===t.protocol&&n.host===t.host}(a)){var s=window.location.pathname;a=(0,p.resolve)(s,a),u=u?(0,p.resolve)(s,u):a,e.preventDefault();var c=t.props.scroll;null==c&&(c=u.indexOf("#")<0),v.default[t.props.replace?"replace":"push"](a,u,{shallow:t.props.shallow}).then(function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})}}},t.p=!1!==e.prefetch,t}return u(n,e),o(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"handleRef",value:function(e){var n=this;this.p&&_&&e&&e.tagName&&(this.cleanUpListeners(),this.cleanUpListeners=function(e,n){var t=E();return t?(t.observe(e),m.set(e,n),function(){try{t.unobserve(e)}catch(n){console.error(n)}m.delete(e)}):function(){}}(e,function(){n.prefetch()}))}},{key:"prefetch",value:function(){if(this.p){var e=window.location.pathname,n=this.formatUrls(this.props.href,this.props.as).href,t=(0,p.resolve)(e,n);v.default.prefetch(t)}}},{key:"render",value:function(){var e=this,n=this.props.children,t=this.formatUrls(this.props.href,this.props.as),r=t.href,o=t.as;"string"===typeof n&&(n=h.default.createElement("a",null,n));var i=h.Children.only(n),a={ref:function(n){e.handleRef(n),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(n):"object"===typeof i.ref&&(i.ref.current=n))},onMouseEnter:function(n){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(n),e.prefetch()},onClick:function(n){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(n),n.defaultPrevented||e.linkClicked(n)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(a.href=o||r),a.href&&"undefined"!==typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(a.href=(0,d.rewriteUrlForNextExport)(a.href)),h.default.cloneElement(i,a)}}]),n}(h.Component);g.propTypes=void 0;var k=g;n.default=k},"QyV/":function(e,n,t){"use strict";var r=t("mXGw"),o=t.n(r).a.createElement;n.a=function(){return o("div",{className:"header"})}},"R3/3":function(e,n,t){"use strict";t.d(n,"a",function(){return a});var r=t("ZOIa"),o=t.n(r);function i(e,n,t,r,i,a,u){try{var s=e[a](u),c=s.value}catch(f){return void t(f)}s.done?n(c):o.a.resolve(c).then(r,i)}function a(e){return function(){var n=this,t=arguments;return new o.a(function(r,o){var a=e.apply(n,t);function u(e){i(a,r,o,u,s,"next",e)}function s(e){i(a,r,o,u,s,"throw",e)}u(void 0)})}}},RNiq:function(e,n,t){"use strict";t.r(n);var r=t("UrUy"),o=t.n(r),i=t("R3/3"),a=t("mXGw"),u=t.n(a),s=t("5dyF"),c=t.n(s),f=t("QyV/"),l=u.a.createElement,p=function(e){var n=e.query,t=n.appRoot,r=n.pages.map(function(e){return l("li",null,l(c.a,{href:"".concat(t||"/").concat(e.slug,"/")},l("a",null,e.title)))});return l("div",null,l(f.a,null),l("h1",null,"Home page"),l("ul",null,r))};p.getInitialProps=function(){var e=Object(i.a)(o.a.mark(function e(n){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.query,e.abrupt("return",{query:t});case 2:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),n.default=p},TqC3:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("RNiq")}])}},[["TqC3",0,1]]]);