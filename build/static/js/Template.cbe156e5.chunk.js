"use strict";(self.webpackChunkrrkallan_demo=self.webpackChunkrrkallan_demo||[]).push([[282],{4182:function(t,e,n){n.r(e),n.d(e,{default:function(){return v}});var r=n(2791),o=n(4455),i=n(5671),u=n(3144),s=n(136),c=n(7277),a=function(t){(0,s.Z)(n,t);var e=(0,c.Z)(n);function n(){var t;return(0,i.Z)(this,n),(t=e.apply(this,arguments)).state={bootstrapped:!1},t.handlePersistorState=function(){t.props.persistor.getState().bootstrapped&&(t.props.onBeforeLift?Promise.resolve(t.props.onBeforeLift()).finally((function(){return t.setState({bootstrapped:!0})})):t.setState({bootstrapped:!0}),t._unsubscribe&&t._unsubscribe())},t}return(0,u.Z)(n,[{key:"componentDidMount",value:function(){this._unsubscribe=this.props.persistor.subscribe(this.handlePersistorState.bind(this)),this.handlePersistorState()}},{key:"componentWillUnmount",value:function(){this._unsubscribe&&this._unsubscribe()}},{key:"render",value:function(){return"function"===typeof this.props.children?this.props.children(this.state.bootstrapped):this.state.bootstrapped?this.props.children:this.props.loading}}]),n}(r.PureComponent);a.defaultProps={children:null,loading:null};var f=n(1977),l=n(7006),p="template_container__uZXXF",b=n(184),d=(0,o.ZP)((function(){return Promise.all([n.e(753),n.e(226),n.e(915)]).then(n.bind(n,7920))}),{fallback:(0,b.jsx)(l.gb,{})}),h=(0,o.ZP)((function(){return n.e(351).then(n.bind(n,7835))}),{fallback:(0,b.jsx)(l.gb,{})}),y=(0,o.ZP)((function(){return n.e(97).then(n.bind(n,2050))}),{fallback:(0,b.jsx)(l.gb,{})}),j=(0,o.ZP)((function(){return n.e(27).then(n.bind(n,9343))}),{fallback:(0,b.jsx)(l.gb,{})});var v=function(){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(h,{}),(0,b.jsx)("main",{className:p,children:(0,b.jsx)(a,{loading:(0,b.jsx)(l.gb,{text:"Webapplication is Loading"}),persistor:f.D,children:(0,b.jsx)(r.Suspense,{fallback:(0,b.jsx)(l.gb,{}),children:(0,b.jsx)(d,{})})})}),(0,b.jsx)(y,{}),(0,b.jsx)(j,{})]})}},5671:function(t,e,n){function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,{Z:function(){return r}})},3144:function(t,e,n){function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}n.d(e,{Z:function(){return o}})},7277:function(t,e,n){n.d(e,{Z:function(){return c}});var r=n(1120),o=n(8814),i=n(1002),u=n(7326);function s(t,e){if(e&&("object"===(0,i.Z)(e)||"function"===typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return(0,u.Z)(t)}function c(t){var e=(0,o.Z)();return function(){var n,o=(0,r.Z)(t);if(e){var i=(0,r.Z)(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return s(this,n)}}},1120:function(t,e,n){function r(t){return r=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},r(t)}n.d(e,{Z:function(){return r}})},136:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(9611);function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&(0,r.Z)(t,e)}},8814:function(t,e,n){function r(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}n.d(e,{Z:function(){return r}})}}]);
//# sourceMappingURL=Template.cbe156e5.chunk.js.map