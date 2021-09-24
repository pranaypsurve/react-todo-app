(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{12:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var i=a(8),n=a(2),s=a(3),c=a(5),o=a(4),l=a(1),r=a.n(l),d=a(0),m=function(e){return e.data.items?Object(d.jsx)(d.Fragment,{children:e.data.items.map((function(t,a){return Object(d.jsxs)("div",{className:"row todolist mb-2 m-0 p-2",children:[Object(d.jsx)("i",{className:"col-1 col-sm-1 col-lg-1 fa fa-edit",onClick:function(){e.data.edit(a+t)},title:"Edit Todo"}),Object(d.jsx)("h4",{className:"col-10 col-sm-10 col-lg-10",children:t}),Object(d.jsx)("i",{className:"col-1 col-sm-1 col-lg-1 fa fa-trash",onClick:function(){return e.data.delete(a+t)},"aria-hidden":"true",title:"Delete Todo"})]},a+t)}))}):null},u=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(e){var i;return Object(n.a)(this,a),(i=t.call(this,e)).state={hasError:!1},i}return Object(s.a)(a,[{key:"componentDidCatch",value:function(e,t){console.log(t)}},{key:"render",value:function(){return this.state.hasError?Object(d.jsx)("h2",{children:"Some Error has Occured"}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),a}(l.Component),j=(a(11),a(12),function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){var e;return Object(n.a)(this,a),(e=t.call(this)).handleTodoAdd=function(t){if(t.preventDefault(),""!==e.state.name.trim()){console.log(e.state.name);var a=[].concat(Object(i.a)(e.state.item),[e.state.name]);window.localStorage.setItem("items",JSON.stringify(a)),e.setState({item:a,name:""})}else alert("Please Fill Todo Name")},e.handleTodoInput=function(t){e.setState({name:t.target.value})},e.delete=function(t){var a=e.state.item.filter((function(e,a){return t!==a+e}));window.localStorage.setItem("items",JSON.stringify(a)),e.setState({item:JSON.parse(window.localStorage.getItem("items"))})},e.edit=function(t){e.setState({edit:!0});var a=e.state.item.filter((function(e,a){return t===a+e}));e.setState({name:a.toString()});var i=e.state.item.filter((function(e,a){return t!==a+e}));window.localStorage.setItem("items",JSON.stringify(i)),e.setState({item:JSON.parse(window.localStorage.getItem("items"))})},e.removeAll=function(){window.localStorage.setItem("items",JSON.stringify([])),e.setState({item:[]})},e.state={item:window.localStorage.getItem("items")?JSON.parse(window.localStorage.getItem("items")):[],name:"",sectionTitle:"Todo App Developed by Pranay",edit:!1,currTime:(new Date).toLocaleTimeString(),currDate:(new Date).toLocaleDateString(),featuresApi:["Edit","Delete","One Click Remove All"]},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(d.jsx)("section",{className:"todo",children:Object(d.jsx)("div",{className:"container-fluid",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-lg-4",children:Object(d.jsxs)("div",{className:"text-center p-4  float-lg-start",style:{color:"#F7F0D4",fontSize:"25px",fontWeight:"bold"},children:["Date : ",this.state.currDate]})}),Object(d.jsx)("div",{className:"col-lg-4",children:Object(d.jsx)("div",{className:"text-center p-4",style:{color:"#F7F0D4",fontSize:"25px",fontWeight:"bold"},children:this.state.sectionTitle})}),Object(d.jsx)("div",{className:"col-lg-4",children:Object(d.jsxs)("div",{className:"text-center p-4 float-lg-end",style:{color:"#F7F0D4",fontSize:"25px",fontWeight:"bold"},children:["Time : ",this.state.currTime]})}),Object(d.jsx)("div",{className:"col-lg-4",children:Object(d.jsxs)("div",{className:"features border-warning",children:[Object(d.jsx)("h2",{children:"Features - Todo App"}),Object(d.jsx)("ol",{className:"m-0",children:this.state.featuresApi.map((function(e,t){return Object(d.jsx)("li",{children:e},t)}))})]})}),Object(d.jsx)("div",{className:"col-lg-4",children:Object(d.jsxs)("div",{className:"row todo-container",children:[Object(d.jsx)("div",{className:"col-lg-12",children:Object(d.jsx)("form",{onSubmit:this.handleTodoAdd,children:Object(d.jsxs)("div",{className:"custom-input-field",children:[Object(d.jsx)("input",{type:"text",className:"form-control",name:"addtodo",value:this.state.name,onChange:this.handleTodoInput,autoComplete:"off",required:!0}),Object(d.jsx)("i",{className:this.state.edit?"fas fa-edit":"fas fa-plus",onClick:this.handleTodoAdd,title:"Add Todo"})]})})}),Object(d.jsxs)("div",{className:"col-lg-12 mt-3",children:[Object(d.jsx)(u,{children:Object(d.jsx)(m,{data:{items:this.state.item,delete:this.delete,edit:this.edit}})}),Object(d.jsx)("p",{className:"text-center btn btn-primary",onClick:this.removeAll,children:"Remove All"})]})]})})]})})})}},{key:"componentDidMount",value:function(){var e=this;this.intervalId=setInterval((function(){e.setState({currTime:(new Date).toLocaleTimeString(),currDate:(new Date).toLocaleDateString()})}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalId)}}]),a}(r.a.Component)),h=function(){return Object(d.jsx)(j,{})},f=a(7);a.n(f).a.render(Object(d.jsx)(h,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.3cd867df.chunk.js.map