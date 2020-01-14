(this["webpackJsonpcrud-react"]=this["webpackJsonpcrud-react"]||[]).push([[0],{30:function(e,t,a){},34:function(e,t,a){e.exports=a(64)},39:function(e,t,a){},41:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(31),s=a.n(r),o=(a(39),a(40),a(41),a(10)),c=a(12),i=a(17),m=a(4),u=a(6),d=a(8),h=a(7),p=a(9),g=a(15),E=a.n(g),v=new function e(){Object(m.a)(this,e),this.GetUser=function(){return E.a.get("http://localhost:3000/get")},this.AddUser=function(e){return E.a.post("http://localhost:3000/post",e)},this.deleteUser=function(e){var t="http://localhost:3000/delete/"+e;return E.a.delete("".concat(t))},this.EditUser=function(e){return E.a.put("http://localhost:3000/put",e)}},b=function(e){var t="";return e?/\S+@\S+\.\S+/.test(e)||(t="Email address is invalid"):t="Email address is required",t},f=function(e){var t="";return e||(t="required"),t},N=function(e){var t=!1,a="";return e.forEach((function(e){e.checked&&(t=!0)})),t||(a="required"),a},w=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).changeHandler=function(e){var t=a.setEventValues(e);a.Validation(t)},a.onCheckBoxSelected=function(e){var t=e.target.value,n=a.designationList;n=n.map((function(e){return e.Name===t&&e.checked?e.checked=!1:e.Name===t?e.checked=!0:e.checked?e.checked=!0:e.checked=!1,e})),a.checkBoxSelected=n;var l=a.setEventValues(e);a.Validation(l)},a.onBlur=function(e){var t=a.setEventValues(e);a.Validation(t)},a.submitHandler=function(e){e.preventDefault(),v.AddUser(a.state).then((function(e){console.log("Response : ",e.data.res),a.props.history.push("/getUser")})).catch((function(e){console.log("err ",e)}))},a.getName=function(e,t){a.setState(Object(i.a)({},t,e)),console.log("Child to parent  ",e,t),console.log("Child to parent state :: ",a.state.name)},a.Validation=function(e){var t=e.id,n=e.value,l=e.type,r=e.index;console.log("e = ",e),a.setState(Object(i.a)({},t,n));var s=a.validate,o="v_"+t;switch(s[o]={touched:!0},!0){case"email"===t||"email"===l:s[o]={v_msg:b(n)};break;case"phone"===t||"phone"===l:case"matchPassword"===t||"matchPassword"===l:s[o].v_msg=f(n);break;case 0===r:s[o].v_msg=0===r?"required":"",a.setState({dept:""});break;case"designation"===t||"checkbox"===l:s[o].v_msg=N(a.checkBoxSelected);break;case"text"===l:s[o].v_msg=f(n)}a.isSubmitValid=a.submitValidation(),console.log("IsSubmit ",a.isSubmitValid)},a.state={name:"",dept:"",email:"",designation:[],password:""},a.bindDeptList(),a.designationList=[{Id:"1",Name:"DR"},{Id:"2",Name:"Manager"},{Id:"3",Name:"Asst. Manager"},{Id:"4",Name:"TL"},{Id:"5",Name:"Trainee"}],a.isSubmitValid=!1,a.selectedItem=[],a.checkBoxSelected=[],a.validate={},a.dropDownSelectedValue="",a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"bindDeptList",value:function(){this.deptList=[{depId:"1",deptName:"MEAN"},{depId:"2",deptName:"MERN"},{depId:"3",deptName:"MEVN"},{depId:"4",deptName:"DOT NET"},{depId:"5",deptName:"PHP"}]}},{key:"setEventValues",value:function(e){return{id:e.target.id,value:e.target.value,type:e.target.type,index:e.target.selectedIndex}}},{key:"change",value:function(e){var t=e.target.value,a=this.setEventValues(e);0!==a.index?this.setState({dept:t},(function(){console.log("worked ",this.state.dept),this.dropDownSelectedValue=t,this.Validation(a);var e=this.deptList;e=e.map((function(e){return e.checked=e.deptName===t,e})),this.selectedItem=e})):this.Validation(a)}},{key:"submitValidation",value:function(){var e=!0;return console.log("this.state ",this.state),Object.values(this.state).forEach((function(t){console.log("submit button ",t),t||(e=!1),console.log("IsValid ",e)})),"required"===N(this.checkBoxSelected)&&(e=!1),e}},{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,r=t.password,s=this.validate,c=s.v_name,i=s.v_dept,m=s.v_email,u=s.v_password,d=s.v_designation;return l.a.createElement("div",{className:"container mt-5 border"},l.a.createElement("h1",null,l.a.createElement("u",null,"Add User Page")),l.a.createElement("h3",null,l.a.createElement(o.b,{to:"/getUser"},"Go to home")),l.a.createElement("form",{onSubmit:this.submitHandler},l.a.createElement("table",{className:"table"},l.a.createElement("thead",{className:"thead-dark"},l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"Name"),l.a.createElement("th",{scope:"col"},"Department"),l.a.createElement("th",{scope:"col"},"Email"),l.a.createElement("th",{scope:"col"},"Password"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},l.a.createElement("input",{type:"text",className:"form-control",value:a,onChange:this.changeHandler,id:"name",onBlur:this.onBlur}),c&&c.touched&&c.v_msg?l.a.createElement("p",{className:"text-danger"},c.v_msg):""),l.a.createElement("td",null,l.a.createElement("select",{id:"dept",className:"form-control",name:"dept",onChange:this.change.bind(this)},l.a.createElement("option",{value:"select"},"select"),this.deptList.map((function(e,t){return l.a.createElement("option",{key:t,value:e.Name},e.deptName)}))),i&&i.v_msg?l.a.createElement("p",{className:"text-danger"},i.v_msg):""),l.a.createElement("td",null,l.a.createElement("input",{type:"text",className:"form-control",value:n,onChange:this.changeHandler,id:"email",onBlur:this.onBlur}),m?l.a.createElement("p",{className:"text-danger"},m.v_msg):""),l.a.createElement("td",null,l.a.createElement("input",{type:"text",className:"form-control",value:r,onChange:this.changeHandler,id:"password",onBlur:this.onBlur}),u&&u.touched&&u.v_msg?l.a.createElement("p",{className:"text-danger"},u.v_msg):"")),l.a.createElement("tr",{className:"thead-dark"},l.a.createElement("th",{scope:"col"},"Designation"),l.a.createElement("th",{scope:"col"},"Gender")),l.a.createElement("tr",null,l.a.createElement("td",null,this.designationList.map((function(t,a){return l.a.createElement("span",{key:a}," ",l.a.createElement("input",{type:"checkbox",value:t.Name,className:"col-3",onChange:e.onCheckBoxSelected,id:"designation"})," ",t.Name," ")})),d&&d.v_msg?l.a.createElement("p",{className:"text-danger"},d.v_msg):""),l.a.createElement("td",{className:"radio"},l.a.createElement("input",{type:"radio",className:"col-6",value:"male",name:"optradio"}),"Male",l.a.createElement("input",{type:"radio",className:"col-6",value:"female",name:"optradio"}),"Female")))),l.a.createElement("button",{type:"submit",disabled:!this.isSubmitValid,className:"btn btn-primary float-right mb-5"},"Submit")))}}]),t}(n.Component),k=(a(30),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).showRegisterModal=function(e){a.props.onRegisterShow()},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"onClose",value:function(e){this.props.onLoginClose()}},{key:"render",value:function(){var e=this;return this.props.showLogin?l.a.createElement("div",{className:"bglogin1"},l.a.createElement("div",{className:"login"},l.a.createElement("span",{onClick:function(t){e.onClose(t)},className:"close"},"\xd7"),l.a.createElement("h2",null,"Login "),l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"username"},"Username"),l.a.createElement("input",{type:"text",className:"form-control"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{type:"password",className:"form-control"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("button",{className:"btn btn-primary"},"Login"),l.a.createElement("a",{href:"/#",className:"nav-item nav-link",onClick:function(t){e.showRegisterModal()}},"Register"))))):null}}]),t}(n.Component)),y=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(d.a)(this,Object(h.a)(t).call(this))).showLoginModal=function(t){e.props.onLoginShow()},e.changeHandler=function(t){e.setEventValues(t)},e.state={userName:"",password:""},e}return Object(p.a)(t,e),Object(u.a)(t,[{key:"onClose",value:function(e){this.props.onRegisterClose()}},{key:"render",value:function(){var e=this;if(!this.props.showRegister)return null;var t=this.state,a=t.userName,n=t.password;return l.a.createElement("div",{className:"bglogin1"},l.a.createElement("div",{className:"login"},l.a.createElement("span",{onClick:function(t){e.onClose(t)},className:"close"},"\xd7"),l.a.createElement("h2",null,"Register "),l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"username"},"Username"),l.a.createElement("input",{type:"text",className:"form-control",value:a,onChange:this.changeHandler,id:"userName"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{type:"password",className:"form-control",value:n})),l.a.createElement("div",{className:"form-group"},l.a.createElement("button",{className:"btn btn-primary"},"Register"),l.a.createElement("a",{href:"/#",className:"nav-item nav-link",onClick:function(t){e.showLoginModal()}},"Login")))))}}]),t}(n.Component),S=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(d.a)(this,Object(h.a)(t).call(this))).getUser=function(){v.GetUser().then((function(t){e.setState({user:t.data}),localStorage.setItem("AllUser",JSON.stringify(e.state.user)),console.log("result ",t)})).catch((function(t){console.log(t),e.setState({err:"Error reterving data :: "+t})}))},e.addUserHandler=function(){e.props.history.push("/addUser")},e.showLoginModal=function(t){e.setState({showLogin:!e.state.showLogin}),e.setState({showRegister:!1})},e.showRegisterModal=function(t){e.setState({showRegister:!e.state.showRegister}),e.setState({showLogin:!1})},e.state={user:[],err:"",showLogin:!1,showRegister:!1},e}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getUser()}},{key:"deleteHandler",value:function(e){var t=this;v.deleteUser(e).then((function(e){console.log(e),t.getUser()})).catch((function(e){console.log(e),t.setState({err:"Error reterving data :: "+e})}))}},{key:"editUserHandler",value:function(e){this.props.history.push("/editUser/"+e)}},{key:"render",value:function(){var e=this,t=this.state,a=t.user,n=t.err;return l.a.createElement("div",{className:"container mt-5 border"},l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement("img",{src:"https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg",width:"30",height:"30",className:"d-inline-block align-top",alt:""}),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup"},l.a.createElement("div",{className:"navbar-nav"},l.a.createElement(o.b,{className:"nav-item nav-link active",to:"/getUser"},"Home")," ",l.a.createElement("span",{className:"sr-only"},"(current)"),l.a.createElement(o.b,{className:"nav-item nav-link",to:"/addUser"},"Add User"),l.a.createElement("a",{href:"/#",className:"nav-item nav-link",onClick:function(t){e.showLoginModal()}},"Login"),l.a.createElement(k,{onLoginClose:this.showLoginModal,showLogin:this.state.showLogin,onRegisterShow:this.showRegisterModal}),l.a.createElement(y,{onRegisterClose:this.showRegisterModal,showRegister:this.state.showRegister,onLoginShow:this.showLoginModal}),l.a.createElement(o.b,{className:"nav-item nav-link",to:"/getUser"}))),l.a.createElement("form",{className:"form-inline my-2 my-lg-0"},l.a.createElement("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search"}),l.a.createElement("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit"},"Search"))),n?l.a.createElement("span",null,n," "):l.a.createElement("div",null,l.a.createElement("table",{className:"table"},l.a.createElement("thead",{className:"thead-dark"},l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"Name"),l.a.createElement("th",{scope:"col"},"Department"),l.a.createElement("th",{scope:"col"},"Email"),l.a.createElement("th",{scope:"col"},"Password"),l.a.createElement("th",{scope:"col"},"Designation"),l.a.createElement("th",{scope:"col"},"Button"))),l.a.createElement("tbody",null,a.length?a.map((function(t){return l.a.createElement("tr",{key:t._id},l.a.createElement("th",{scope:"row"},t.name),l.a.createElement("td",null,t.dept),l.a.createElement("td",null,t.email),l.a.createElement("td",null,t.password),l.a.createElement("td",null,t.designation),l.a.createElement("td",null,l.a.createElement("button",{className:"btn btn-primary  mr-1",onClick:function(){return e.editUserHandler(t._id)}},"Edit"),l.a.createElement("button",{className:"btn btn-danger",onClick:function(){return e.deleteHandler(t._id)}},"Delete")))})):null))))}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).changeHandler=function(e){var t=e.target.id,n=e.target.value,l=a.state.user[0];l[t]=n,l.filePath="",a.setState(l)},a.getUser=function(){var e=a.props.match.params.id,t=JSON.parse(localStorage.getItem("AllUser"));t=t.filter((function(t){return t._id===e})),a.setState({user:t}),console.log("this.setState  ",a.setState.user)},a.submitHandler=function(e){e.preventDefault(),v.EditUser(a.state.user[0]).then((function(e){console.log("Response : ",e.data.res),a.props.history.push("/getUser")})).catch((function(e){console.log("err ",e)}))},a.state={user:[{name:"",dept:"",email:"",password:"",designation:""}]},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getUser()}},{key:"render",value:function(){var e=this.state.user[0],t=e.name,a=e.dept,n=e.email,r=e.password,s=e.designation;return l.a.createElement("div",{className:"container mt-5 border"},l.a.createElement("h1",null,l.a.createElement("u",null,"Edit User Page")),l.a.createElement("h3",null,l.a.createElement(o.b,{to:"/getUser"},"Go to home")),l.a.createElement("form",{onSubmit:this.submitHandler},l.a.createElement("table",{className:"table"},l.a.createElement("thead",{className:"thead-dark"},l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"Name"),l.a.createElement("th",{scope:"col"},"Department"),l.a.createElement("th",{scope:"col"},"Email"),l.a.createElement("th",{scope:"col"},"Password"),l.a.createElement("th",{scope:"col"},"Designation"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},l.a.createElement("input",{type:"text",className:"form-control",value:t,onChange:this.changeHandler,id:"name"})),l.a.createElement("td",null,l.a.createElement("input",{type:"text",className:"form-control",value:a,onChange:this.changeHandler,id:"dept"})),l.a.createElement("td",null,l.a.createElement("input",{type:"text",className:"form-control",value:n,onChange:this.changeHandler,id:"email"})),l.a.createElement("td",null,l.a.createElement("input",{type:"text",className:"form-control",value:r,onChange:this.changeHandler,id:"password"})),l.a.createElement("td",null,l.a.createElement("input",{type:"text",className:"form-control",value:s,onChange:this.changeHandler,id:"designation"}))))),l.a.createElement("button",{type:"submit",className:"btn btn-primary float-right mb-5"},"Submit")))}}]),t}(n.Component),U=function(){return l.a.createElement("div",null,l.a.createElement(o.a,null,l.a.createElement(c.c,null,l.a.createElement(c.a,{path:"/",exact:!0,component:S}),l.a.createElement(c.a,{path:"/getUser",exact:!0,component:S}),l.a.createElement(c.a,{path:"/addUser",exact:!0,component:w}),l.a.createElement(c.a,{path:"/editUser/:id",component:C}),l.a.createElement(c.a,{path:"/",render:function(){return l.a.createElement("div",null,"Error : 404, Page Not Found")}}))))};var x=function(){return l.a.createElement("div",null,l.a.createElement(U,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.b66e9060.chunk.js.map