(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(9),r=n.n(c),i=(n(14),n(6)),o=n(2),h=n(3),l=n(5),u=n(4),b=(n(15),n(0)),d=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).handleIncrease=function(){e.props.onIncrease(e.props.habit)},e.handleDecrease=function(){e.props.onDecrease(e.props.habit)},e.handleDelete=function(){e.props.onDelete(e.props.habit)},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props.habit,t=e.name,n=e.count;return Object(b.jsxs)("li",{className:"habit",children:[Object(b.jsx)("span",{className:"habit-name",children:t}),Object(b.jsx)("span",{className:"habit-count",children:n}),Object(b.jsx)("button",{className:"habit-button habit-increase",onClick:this.handleIncrease,children:Object(b.jsx)("i",{className:"fas fa-plus-square"})}),Object(b.jsx)("button",{className:"habit-button habit-decrease",onClick:this.handleDecrease,children:Object(b.jsx)("i",{className:"fas fa-minus-square"})}),Object(b.jsx)("button",{className:"habit-button habit-delete",onClick:this.handleDelete,children:Object(b.jsx)("i",{className:"fas fa-trash"})})]})}}]),n}(a.Component),j=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).formRef=s.a.createRef(),e.inputRef=s.a.createRef(),e.onSubmit=function(t){t.preventDefault();var n=e.inputRef.current.value;n&&e.props.onAdd(n),e.formRef.current.reset()},e}return Object(h.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("form",{ref:this.formRef,className:"add-form",onSubmit:this.onSubmit,children:[Object(b.jsx)("input",{ref:this.inputRef,className:"add-input",placeholder:"habit"}),Object(b.jsx)("button",{className:"add-button",children:"Add"})]})}}]),n}(a.Component),p=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).handleIncrease=function(t){e.props.onIncrease(t)},e.handleDecrease=function(t){e.props.onDecrease(t)},e.handleDelete=function(t){e.props.onDelete(t)},e.handleAdd=function(t){e.props.onAdd(t)},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return Object(b.jsxs)("section",{children:[Object(b.jsx)(j,{onAdd:this.handleAdd}),Object(b.jsx)("ul",{children:this.props.habits.map((function(t){return Object(b.jsx)(d,{habit:t,onIncrease:e.handleIncrease,onDecrease:e.handleDecrease,onDelete:e.handleDelete},t.id)}))}),Object(b.jsx)("button",{className:"habits-reset",onClick:this.props.onReset,children:"Reset All"})]})}}]),n}(a.Component),f=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("header",{className:"navbar",children:[Object(b.jsx)("span",{children:"Habit Tracker"}),Object(b.jsx)("span",{className:"navbar-count",children:this.props.totalCount})]})}}]),n}(a.Component),O=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={habits:[{id:1,name:"Coding",count:0},{id:2,name:"Reading",count:0},{id:3,name:"Running",count:0}]},e.handleIncrease=function(t){var n=Object(i.a)(e.state.habits),a=n.indexOf(t);n[a].count++,e.setState({habits:n})},e.handleDecrease=function(t){var n=Object(i.a)(e.state.habits),a=n.indexOf(t),s=n[a].count-1;n[a].count=s<0?0:s,e.setState({habits:n})},e.handleDelete=function(t){var n=e.state.habits.filter((function(e){return e.id!==t.id}));e.setState({habits:n})},e.handleAdd=function(t){var n=[].concat(Object(i.a)(e.state.habits),[{id:Date.now(),name:t,count:0}]);e.setState({habits:n})},e.handelReset=function(){var t=e.state.habits.map((function(e){return e.count=0,e}));e.setState({habits:t})},e}return Object(h.a)(n,[{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(f,{totalCount:this.state.habits.filter((function(e){return e.count>0})).length}),Object(b.jsx)(p,{habits:this.state.habits,onIncrease:this.handleIncrease,onDecrease:this.handleDecrease,onDelete:this.handleDelete,onAdd:this.handleAdd,onReset:this.handelReset})]})}}]),n}(a.Component);n(17);r.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.a1a42ea7.chunk.js.map