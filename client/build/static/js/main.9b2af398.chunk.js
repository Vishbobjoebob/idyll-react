(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{106:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){},114:function(e,t,a){},116:function(e,t,a){"use strict";a.r(t);var r=a(5),c=a.n(r),n=a(33),s=a.n(n),i=(a(88),a(47)),l=a.n(i),o=(a(106),a(46)),b=(a(53),a(6)),d=(a(68),a(109),a(110),a(4));a(80);var j=a(120);function u(e){var t=Object(r.useRef)();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"search-container",children:Object(d.jsxs)("div",{className:"search-bar",children:[Object(d.jsx)(j.a,{id:"search-icon",color:"gray",size:24}),Object(d.jsx)("input",{ref:t,className:"",id:"search-input",name:"password",placeholder:"Search..."})]})}),Object(d.jsx)("div",{id:"green-line"})]})}var m=a(0),p=a.n(m),h=a(1),f=a(13),O=a(16),x=(a(114),a.p+"static/media/google_logo.78998f2b.png"),v=a.p+"static/media/apple_logo.98e79cd8.png",g=a(123),w=a(124),y=(a(117),o.a.initializeApp({apiKey:"AIzaSyACcaM3rXl9f7QKcuS0RjKjYStZND1WPDY",authDomain:"idyll-29e66.firebaseapp.com",projectId:"idyll-29e66",storageBucket:"idyll-29e66.appspot.com",messagingSenderId:"234972897619",appId:"1:234972897619:web:1590b3558db4cfaa4f41a6",measurementId:"G-F47RPBZJBV"})),A=y.auth(),N=c.a.createContext();function C(e){var t=e.children,a=Object(r.useState)(void 0),c=Object(f.a)(a,2),n=c[0],s=c[1],i=Object(r.useState)(!0===window.localStorage.getItem("auth")),o=Object(f.a)(i,2),b=(o[0],o[1]),j=Object(r.useState)(""),u=Object(f.a)(j,2),m=(u[0],u[1]),O=Object(r.useState)(!0),x=Object(f.a)(O,2),v=(x[0],x[1]);function g(){return g=Object(h.a)(p.a.mark((function e(t,a,r,c,n,i){var l;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=void 0,e.next=3,A.createUserWithEmailAndPassword(t,a).then((function(e){e&&(b(!0),window.localStorage.setItem("auth","true"),e.user.getIdToken().then((function(a){m(a),s(e),y(a,t,r,c,n,i)})).catch((function(){console.log("bruh")})))})).catch((function(e){l=e}));case 3:return e.abrupt("return",l);case 4:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}function w(){return(w=Object(h.a)(p.a.mark((function e(t,a){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=void 0,e.next=3,A.signInWithEmailAndPassword(t,a).then((function(e){e&&(b(!0),window.localStorage.setItem("auth","true"),s(e))})).catch((function(e){r=e}));case 3:return e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var y=function(){var e=Object(h.a)(p.a.mark((function e(t,a,r,c,n,s){var i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.post("https://us-central1-idyll-29e66.cloudfunctions.net/server/api/signup",{email:a,username:r,firstName:c,lastName:n,phoneNumber:s},{headers:{Authorization:"Bearer "+t}});case 2:i=e.sent,console.log(i.data);case 4:case"end":return e.stop()}}),e)})));return function(t,a,r,c,n,s){return e.apply(this,arguments)}}(),C={currentUser:n,signup:function(e,t,a,r,c,n){return g.apply(this,arguments)},login:function(e,t){return w.apply(this,arguments)}};return Object(r.useEffect)((function(){var e=A.onAuthStateChanged((function(e){e&&(b(!0),window.localStorage.setItem("auth","true"),e.getIdToken().then((function(e){m(e)})),s(e),v(!1))}));return e}),[n]),Object(d.jsx)(N.Provider,{value:C,children:t})}var I=a(121),k=a(122);function P(e){var t,a,c,n,s,i,l,o,j,u,m,y=Object(r.useState)(!1),A=Object(f.a)(y,2),C=A[0],P=A[1],D=Object(r.useState)(!1),S=Object(f.a)(D,2),L=S[0],E=S[1],F=Object(r.useState)(!1),V=Object(f.a)(F,2),X=V[0],H=V[1],K=function(){return P(!1)},U=function(){return P(!0)},z=function(){return E(!1)},B=function(){return E(!0)},J=function(){return H(!1)},R=function(){return H(!0)},M=Object(r.useRef)(),W=Object(r.useRef)(),G=Object(r.useRef)(),Y=Object(r.useRef)(),Q=Object(r.useRef)(),Z=Object(r.useRef)(),T=Object(r.useRef)(),q=Object(r.useRef)(),_=Object(r.useRef)(),$=Object(r.useRef)(),ee=Object(r.useRef)(),te=Object(O.f)(),ae=Object(r.useContext)(N),re=ae.currentUser,ce=ae.signup,ne=ae.login,se=Object(r.useState)(void 0),ie=Object(f.a)(se,2),le=ie[0],oe=ie[1],be=Object(r.useState)(void 0),de=Object(f.a)(be,2),je=de[0],ue=de[1];function me(){return(me=Object(h.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),oe(""),e.next=4,ne(M.current.value,W.current.value);case 4:e.sent?oe("Invalid email or password"):(P(!1),te("/"));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function pe(){return(pe=Object(h.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),Z.current.value===T.current.value){e.next=4;break}return ue("It looks like your passwords don't match. Please check again."),e.abrupt("return");case 4:if(Y.current.value===Q.current.value){e.next=7;break}return ue("It looks like your emails don't match. Please check again."),e.abrupt("return");case 7:return ue(""),e.next=10,ce(Y.current.value,Z.current.value,$.current.value,q.current.value,_.current.value,ee.current.value);case 10:if(!(a=e.sent)){e.next=23;break}e.t0=a.code,e.next="auth/email-already-in-use"===e.t0?15:"auth/invalid-email"===e.t0?17:"auth/weak-password"===e.t0?19:21;break;case 15:return ue("It looks like you already have an account with this email. Please login."),e.abrupt("break",22);case 17:return ue("Please use a valid email."),e.abrupt("break",22);case 19:return ue("Your password is too weak. Please try again."),e.abrupt("break",22);case 21:ue("We failed to create an account for you. Please try again.");case 22:return e.abrupt("return");case 23:z();case 24:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function he(){return(he=Object(h.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),K(),R();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function fe(){return(fe=Object(h.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),J(),U();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Oe(){return(Oe=Object(h.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),J(),B();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function xe(){return(xe=Object(h.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),z(),R();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("nav",{id:"navbar",className:"",children:[Object(d.jsx)("div",{className:"logo",children:Object(d.jsx)("a",{id:"company-logo",href:"/",children:Object(d.jsx)("img",{alt:"logo",id:"logo",src:"data:image/png;base64,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",width:"124px"})})}),Object(d.jsxs)("ul",{id:"nav-links",children:[Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"/map",children:"Map"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"/browse",children:"Browse"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"/sell",children:"Sell"})})]}),re?Object(d.jsxs)("div",{className:"welcome",children:[" Welcome ",re.email," "]}):Object(d.jsx)("button",{type:"button",class:"green-btn",id:"login-btn",onClick:U,children:" Log In "}),Object(d.jsxs)(g.a,{id:"login-modal",show:C,onHide:K,"aria-labelledby":"contained-modal-title-vcenter",backdrop:"static",centered:!0,children:[Object(d.jsx)(g.a.Header,{closeButton:!0,children:Object(d.jsx)(g.a.Title,{children:"Log In To Idyll"})}),Object(d.jsxs)(g.a.Body,{children:[Object(d.jsxs)("form",{id:"item-information",className:"form-horizontal",onSubmit:function(e){return me.apply(this,arguments)},children:[le&&Object(d.jsx)(w.a,{variant:"danger",children:le}),Object(d.jsx)("label",(t={className:"control-label",style:{margin:"0px"},htmlFor:"dish-name"},Object(b.a)(t,"className","label-name"),Object(b.a)(t,"id","email-label"),Object(b.a)(t,"children"," Email "),t)),Object(d.jsx)("input",(a={ref:M,className:"form-control green-border",type:"text",id:"email",name:"email",autoComplete:"off",placeholder:"Email"},Object(b.a)(a,"id","email-box"),Object(b.a)(a,"required",!0),a)),Object(d.jsx)("br",{}),Object(d.jsx)("label",{htmlFor:"dish-price",id:"password-label",children:" Password "}),Object(d.jsx)("input",(c={ref:W,className:"form-control green-border",type:"password",id:"password",name:"password",autoComplete:"off",placeholder:"Password"},Object(b.a)(c,"id","password-box"),Object(b.a)(c,"required",!0),c)),Object(d.jsx)("br",{}),Object(d.jsx)("input",{class:"form-check-input",type:"checkbox",value:"",id:"remember-me"}),Object(d.jsx)("label",{ref:G,className:"form-check-label",for:"remember-me",id:"remember-me-label",children:" Remember Me "}),Object(d.jsx)("a",{href:"#",class:"",id:"forgot-password",children:"Forgot password?"}),Object(d.jsx)("input",{id:"submit-btn",className:"btn btn-primary mb-3",type:"submit",value:"Login"})]}),Object(d.jsxs)("div",{class:"separator",children:[Object(d.jsx)("div",{id:"left-line",class:"line-bruh"}),Object(d.jsx)("div",{id:"or",children:" OR "}),Object(d.jsx)("div",{id:"left-line",class:"line-bruh"})]}),Object(d.jsxs)("div",{class:"alternative-auth",children:[Object(d.jsx)("a",{id:"google",href:"",children:Object(d.jsx)("img",{id:"logo",src:x,width:"54px"})}),Object(d.jsx)("a",{id:"apple",href:"",children:Object(d.jsx)("img",{id:"logo",src:v,width:"122px"})})]}),Object(d.jsxs)("div",{id:"registration",children:[Object(d.jsx)("div",{id:"registration-question",children:"Not registered?"}),Object(d.jsx)("a",{id:"registration-signup",href:"",onClick:function(e){return he.apply(this,arguments)},children:" Sign Up for free! "})]})]})]}),Object(d.jsxs)(g.a,{id:"signup-modal",show:L,onHide:z,"aria-labelledby":"contained-modal-title-vcenter",backdrop:"static",centered:!0,children:[Object(d.jsxs)(g.a.Header,{closeButton:!0,children:[Object(d.jsx)(I.a,{onClick:function(e){return xe.apply(this,arguments)},id:"back-btn",color:"black",size:32}),Object(d.jsx)(g.a.Title,{id:"email-title",children:"Sign Up With Email"})]}),Object(d.jsx)(g.a.Body,{children:Object(d.jsxs)("form",{id:"item-information",className:"form-horizontal",onSubmit:function(e){!function(e){pe.apply(this,arguments)}(e)},children:[je&&Object(d.jsx)(w.a,{variant:"danger",children:je}),Object(d.jsx)("div",{className:"error"}),Object(d.jsx)("label",(n={htmlFor:"firstName",className:"control-label"},Object(b.a)(n,"className","label-name"),Object(b.a)(n,"children"," First Name "),n)),Object(d.jsx)("input",{ref:q,className:"form-control",type:"text",id:"firstName",name:"firstName",placeholder:"John",autoComplete:"off",required:!0}),Object(d.jsx)("br",{}),Object(d.jsx)("label",(s={htmlFor:"lastName",className:"control-label"},Object(b.a)(s,"className","label-name"),Object(b.a)(s,"children"," Last Name "),s)),Object(d.jsx)("input",{ref:_,className:"form-control",type:"text",id:"lastName",name:"lastName",placeholder:"Doe",autoComplete:"off",required:!0}),Object(d.jsx)("br",{}),Object(d.jsx)("label",(i={htmlFor:"email",className:"control-label"},Object(b.a)(i,"className","label-name"),Object(b.a)(i,"children"," Email "),i)),Object(d.jsx)("input",{ref:Y,className:"form-control",type:"text",id:"email",name:"email",placeholder:"idyll@idyll.shop",autoComplete:"off",required:!0}),Object(d.jsx)("br",{}),Object(d.jsx)("label",(l={htmlFor:"email-confirmation",className:"control-label"},Object(b.a)(l,"className","label-name"),Object(b.a)(l,"children"," Email Confirmation "),l)),Object(d.jsx)("input",{ref:Q,className:"form-control",type:"text",id:"email-confirmation",name:"emailConfirmation",placeholder:"idyll@idyll.shop",autoComplete:"off",required:!0}),Object(d.jsx)("br",{}),Object(d.jsx)("label",(o={htmlFor:"username",className:"control-label"},Object(b.a)(o,"className","label-name"),Object(b.a)(o,"children"," Username "),o)),Object(d.jsx)("input",{ref:$,className:"form-control",type:"text",id:"username",name:"username",placeholder:"Idyll",autoComplete:"off",required:!0}),Object(d.jsx)("br",{}),Object(d.jsx)("label",(j={htmlFor:"password",className:"control-label"},Object(b.a)(j,"className","label-name"),Object(b.a)(j,"children"," Password "),j)),Object(d.jsx)("input",{ref:Z,className:"form-control",type:"password",id:"password",name:"password",placeholder:"At least 6 letters and numbers",autoComplete:"off",required:!0}),Object(d.jsx)("br",{}),Object(d.jsx)("label",(u={htmlFor:"password-confirmation",className:"control-label"},Object(b.a)(u,"className","label-name"),Object(b.a)(u,"children"," Password Confirmation "),u)),Object(d.jsx)("input",{ref:T,className:"form-control",type:"password",id:"password-confirmation",name:"passwordConfirmation",placeholder:"At least 6 letters and numbers",autoComplete:"off",required:!0}),Object(d.jsx)("br",{}),Object(d.jsx)("label",(m={htmlFor:"phoneNumber",className:"control-label"},Object(b.a)(m,"className","label-name"),Object(b.a)(m,"children"," Phone Number "),m)),Object(d.jsx)("input",{ref:ee,className:"form-control",type:"text",id:"phoneNumber",name:"phoneNumber",placeholder:"xxxxxxxxxx",autoComplete:"off",required:!0}),Object(d.jsx)("br",{}),Object(d.jsx)("input",{id:"submit-btn",className:"btn btn-primary mb-3",type:"submit",value:"Sign Up"})]})})]}),Object(d.jsxs)(g.a,{id:"signup-choose-modal",show:X,onHide:J,"aria-labelledby":"contained-modal-title-vcenter",backdrop:"static",centered:!0,children:[Object(d.jsx)(g.a.Header,{closeButton:!0,children:Object(d.jsx)(g.a.Title,{children:"Sign Up for Idyll"})}),Object(d.jsxs)(g.a.Body,{children:[Object(d.jsxs)("div",{class:"signup-options",children:[Object(d.jsxs)("div",{class:"option",id:"email-and-password-option",onClick:function(e){return Oe.apply(this,arguments)},children:[Object(d.jsx)("div",{class:"subpicture",id:"email-pic",children:Object(d.jsx)(k.a,{class:"center-pic",color:"black",size:37})}),Object(d.jsx)("div",{class:"option-text",children:"Use email/password"})]}),Object(d.jsxs)("div",{class:"option",id:"google-option",children:[Object(d.jsxs)("div",{class:"subpicture",id:"google-pic",children:[" ",Object(d.jsx)("img",{class:"center-pic",src:x,width:"36px"})]}),Object(d.jsx)("div",{class:"option-text",children:"Continue With Google"})]}),Object(d.jsxs)("div",{class:"option",id:"apple-option",children:[Object(d.jsxs)("div",{class:"subpicture",id:"apple-pic",children:[" ",Object(d.jsx)("img",{class:"center-pic",src:v,width:"73px"})]}),Object(d.jsx)("div",{class:"option-text",children:"Continue With Apple"})]})]}),Object(d.jsxs)("div",{id:"registration1",children:[Object(d.jsx)("div",{id:"registration-question1",children:"Already registered?"}),Object(d.jsx)("a",{id:"registration-signup1",href:"",onClick:function(e){return fe.apply(this,arguments)},children:" Log in! "})]})]})]})]}),Object(d.jsxs)("div",{className:"menuIcon",children:[Object(d.jsx)("span",{className:"icon icon-bars"}),Object(d.jsx)("span",{className:"icon icon-bars overlay"})]}),Object(d.jsx)("div",{className:"overlay-menu",children:Object(d.jsxs)("ul",{id:"menu",children:[Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"/map",children:"Map"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"/browse",children:"Browse"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"/sell",children:"Sell"})})]})})]})}var D=a(70);var S=function(){return Object(d.jsx)(D.a,{children:Object(d.jsx)(C,{children:Object(d.jsx)(O.c,{children:Object(d.jsx)(O.a,{path:"/",element:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(P,{}),Object(d.jsx)(u,{})]})})})})})};a(115);s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(S,{})}),document.getElementById("root"))},68:function(e,t,a){},80:function(e,t,a){},88:function(e,t,a){}},[[116,1,2]]]);
//# sourceMappingURL=main.9b2af398.chunk.js.map