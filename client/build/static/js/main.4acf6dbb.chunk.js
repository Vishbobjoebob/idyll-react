(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{121:function(e,t,a){},122:function(e,t,a){},165:function(e,t,a){},183:function(e,t,a){},204:function(e,t,a){},205:function(e,t,a){},251:function(e,t,a){},252:function(e,t,a){},266:function(e,t,a){"use strict";a.r(t);var r=a(1),c=a.n(r),n=a(32),s=a.n(n),i=(a(165),a(49)),l=a.n(i),o=(a(183),a(61)),j=(a(92),a(5)),d=a(25),u=a(10),b=a(0),h=a.n(b),O=a(277),p=a(278),m=a(156),f=a(289),x=a(158),v=a(279),g=a(130),y=a.n(g),w=(a(270),o.a.initializeApp({apiKey:"AIzaSyACcaM3rXl9f7QKcuS0RjKjYStZND1WPDY",authDomain:"idyll-29e66.firebaseapp.com",projectId:"idyll-29e66",storageBucket:"idyll-29e66.appspot.com",messagingSenderId:"234972897619",appId:"1:234972897619:web:1590b3558db4cfaa4f41a6",measurementId:"G-F47RPBZJBV"})),N=w.auth(),C=a(2),k=c.a.createContext();new o.a.auth.GoogleAuthProvider;function A(){return Object(r.useContext)(k)}function I(e){var t=e.children,a=Object(r.useState)("getting zip code..."),c=Object(u.a)(a,2),n=c[0],s=c[1],i=Object(r.useState)(void 0),o=Object(u.a)(i,2),d=o[0],b=o[1],O=Object(r.useState)(!0===window.localStorage.getItem("auth")),p=Object(u.a)(O,2),m=(p[0],p[1]),f=Object(r.useState)(""),x=Object(u.a)(f,2),v=x[0],g=x[1],y=Object(r.useState)(!0),w=Object(u.a)(y,2),A=(w[0],w[1]),I=Object(r.useState)(void 0),S=Object(u.a)(I,2),P=S[0],D=S[1],L=function(){var e=Object(j.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l.a.get("https://ipapi.co/json/").then((function(e){s(e.data.postal)})).catch((function(e){console.log(e),s("Failed to retreive zip code")}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function F(){return F=Object(j.a)(h.a.mark((function e(t,a,r,c,n,s){var i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=void 0,e.next=3,N.createUserWithEmailAndPassword(t,a).then((function(e){e&&(m(!0),window.localStorage.setItem("auth","true"),e.user.getIdToken().then(function(){var a=Object(j.a)(h.a.mark((function a(i){return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,g(i);case 2:return a.next=4,b(e);case 4:return a.next=6,E(i,t,r,c,n,s);case 6:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()).catch((function(){console.log("bruh")})))})).catch((function(e){i=e}));case 3:return e.abrupt("return",i);case 4:case"end":return e.stop()}}),e)}))),F.apply(this,arguments)}function R(){return(R=Object(j.a)(h.a.mark((function e(t,a){var r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=void 0,e.next=3,N.signInWithEmailAndPassword(t,a).then((function(e){e&&(m(!0),window.localStorage.setItem("auth","true"),b(e))})).catch((function(e){r=e}));case 3:return e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(){return(B=Object(j.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.signOut();case 2:localStorage.setItem("auth","false");case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var E=function(){var e=Object(j.a)(h.a.mark((function e(t,a,r,c,n,s){var i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.post("https://us-central1-idyll-29e66.cloudfunctions.net/server/api/signup",{email:a,username:r,firstName:c,lastName:n,phoneNumber:s},{headers:{Authorization:"Bearer "+t}});case 2:i=e.sent,console.log(i.data);case 4:case"end":return e.stop()}}),e)})));return function(t,a,r,c,n,s){return e.apply(this,arguments)}}(),T=function(){var e=Object(j.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("https://us-central1-idyll-29e66.cloudfunctions.net/server/api/getData",{headers:{Authorization:"Bearer "+t}});case 2:return a=e.sent,e.abrupt("return",JSON.parse(JSON.stringify(a.data)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){var e=N.onAuthStateChanged(function(){var e=Object(j.a)(h.a.mark((function e(t){var a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=13;break}return m(!0),window.localStorage.setItem("auth","true"),e.next=5,t.getIdToken();case 5:return a=e.sent,g(a),b(t),e.next=10,T(a);case 10:r=e.sent,D(r),A(!1);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return e}),[d]);var z={currentUser:d,signup:function(e,t,a,r,c,n){return F.apply(this,arguments)},login:function(e,t){return R.apply(this,arguments)},signout:function(){return B.apply(this,arguments)},userData:P,zipCode:n,getZipCode:L,token:v};return Object(C.jsx)(k.Provider,{value:z,children:t})}a(268),a(204),a(205);var S=a(20),P=(a(206),a(155)),D=a.n(P),L=a(62),F=(a(143),a(157));function R(e){var t=Object(S.f)(),a=new Date,c=a.getHours()+":"+a.getMinutes(),n=Object(r.useState)(!1),s=Object(u.a)(n,2),i=s[0],b=s[1],g=Object(r.useState)(!1),w=Object(u.a)(g,2),N=w[0],k=w[1],I=Object(r.useState)([]),P=Object(u.a)(I,2),R=P[0],B=P[1],E=Object(r.useState)(c),T=Object(u.a)(E,2),z=T[0],H=T[1],G=A(),V=G.zipCode,J=G.getZipCode,U=G.token,X=G.userData,K=Object(r.useRef)(),M=Object(r.useRef)(),W=Object(r.useRef)(),q=Object(r.useRef)(),Y=Object(r.useRef)(),Z=Object(r.useRef)(),Q=Object(r.useRef)(),_=Object(r.useRef)(),$=Object(r.useRef)(),ee=Object(r.useRef)();Object(r.useEffect)((function(){J()}),[]);function te(){return(te=Object(j.a)(h.a.mark((function e(a){var r,c,n,s,j,d,u;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),r={dishName:K.value,dishDescription:M.value,dishRestrictions:W.value,dishPrice:q.value,type:Y.value,cuisine:Z.value,waitTime:Q.value,servings:_.value,dropOff:$.checked,additionalComments:ee.value,cooked:i,zipCode:V,userData:X},"true"===localStorage.getItem("auth")){e.next=5;break}return L.b.error("You must be logged in to post a dish.",{position:"top-right",autoClose:7e3,hideProgressBar:!1,pauseOnHover:!1,closeOnClick:!0,draggable:!0,progress:void 0}),e.abrupt("return");case 5:k(!0),J(),c=[],console.log(R),n=0;case 10:if(!(n<R.length)){e.next=23;break}return s=o.a.storage().ref().child(R[n][0].name),j={contentType:R[n].type},e.next=15,s.put(R[n][0],j);case 15:return d=e.sent,e.next=18,d.ref.getDownloadURL();case 18:u=e.sent,c.push(u);case 20:n++,e.next=10;break;case 23:return r.pictureURLs=c,e.next=26,l()({method:"post",url:"https://us-central1-idyll-29e66.cloudfunctions.net/server/api/uploadPost",data:r,headers:{Authorization:"Bearer "+U}}).catch((function(e){k(!1),console.log("my boi"),L.b.error("There was an error posting your dish. Please try again.",{position:"top-right",autoClose:7e3,hideProgressBar:!1,pauseOnHover:!1,closeOnClick:!0,draggable:!0,progress:void 0})}));case 26:e.sent.data.success?(t("/"),L.b.success("Your dish has been posted!",{position:"top-right",autoClose:7e3,hideProgressBar:!1,pauseOnHover:!1,closeOnClick:!0,draggable:!0,progress:void 0})):(L.b.error("There was an error posting your dish. Please try again.",{position:"top-right",autoClose:7e3,hideProgressBar:!1,pauseOnHover:!1,closeOnClick:!0,draggable:!0,progress:void 0}),k(!1));case 28:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(C.jsx)(O.a,{fluid:!0,children:Object(C.jsxs)(p.a,{children:[Object(C.jsx)(m.a,{children:"1 of 3"}),Object(C.jsx)(m.a,{xs:12,sm:12,md:12,lg:5,xl:5,children:Object(C.jsx)("div",{class:"form-wrapper",children:Object(C.jsxs)(f.a,{onSubmit:function(e){return te.apply(this,arguments)},children:[Object(C.jsx)("h1",{id:"sell-form-header",children:"Tell us a little about your dishes"}),Object(C.jsxs)("h1",{id:"location-text",children:[Object(C.jsx)(v.a,{color:"black",size:22}),"Your zip code: ",V]}),Object(C.jsxs)(f.a.Group,{className:"mb-3",controlId:"gray",children:[Object(C.jsx)(f.a.Label,{children:"Name of Dish"}),Object(C.jsx)(f.a.Control,{ref:function(e){return K=e},required:!0})]}),Object(C.jsxs)(f.a.Group,{className:"mb-3",controlId:"gray",children:[Object(C.jsx)(f.a.Label,{children:"Description"}),Object(C.jsx)(f.a.Control,{className:"gray",as:"textarea",rows:5,ref:function(e){return M=e},required:!0})]}),Object(C.jsxs)(f.a.Group,{className:"mb-3",controlId:"gray",children:[Object(C.jsx)(f.a.Label,{children:"Dietary Restrictions"}),Object(C.jsx)(f.a.Control,{className:"gray",ref:function(e){return W=e},required:!0})]}),Object(C.jsxs)("div",{class:"multiple-groups",children:[Object(C.jsxs)(f.a.Group,{className:"mb-3 half",controlId:"gray",children:[Object(C.jsx)(f.a.Label,{children:"Price (USD)"}),Object(C.jsx)(f.a.Control,{className:"gray",ref:function(e){return q=e},type:"number",required:!0})]}),Object(C.jsxs)(f.a.Group,{className:"mb-3 half",controlId:"gray",children:[Object(C.jsx)(f.a.Label,{children:"Type"}),Object(C.jsxs)(f.a.Select,{ref:function(e){return Y=e},required:!0,className:"gray",children:[Object(C.jsx)("option",{value:"Breakfast",children:"Breakfast"}),Object(C.jsx)("option",{value:"Lunch",children:"Lunch"}),Object(C.jsx)("option",{value:"Dinner",children:"Dinner"}),Object(C.jsx)("option",{value:"Dessert",children:"Dessert"})]})]})]}),Object(C.jsxs)("div",{class:"multiple-groups",children:[Object(C.jsxs)(f.a.Group,{className:"mb-3 half",controlId:"gray",children:[Object(C.jsx)(f.a.Label,{children:"Wait Time (minutes)"}),Object(C.jsx)(f.a.Control,{ref:function(e){return Q=e},type:"number",required:!0})]}),Object(C.jsxs)(f.a.Group,{className:"mb-3 half",controlId:"gray",children:[Object(C.jsx)(f.a.Label,{children:"Servings"}),Object(C.jsx)(f.a.Control,{className:"gray",type:"number",ref:function(e){return _=e},required:!0})]})]}),Object(C.jsxs)(f.a.Group,{className:"mb-3",controlId:"gray",children:[Object(C.jsx)(f.a.Label,{children:"Cuisine"}),Object(C.jsxs)(f.a.Select,{ref:function(e){return Z=e},className:"gray",required:!0,children:[Object(C.jsx)("option",{value:"American",children:"American Food"}),Object(C.jsx)("option",{value:"Chinese",children:"Chinese Food"}),Object(C.jsx)("option",{value:"French",children:"French Food"}),Object(C.jsx)("option",{value:"Indian",children:"Indian Food"}),Object(C.jsx)("option",{value:"Italian",children:"Italian Food"}),Object(C.jsx)("option",{value:"Japanese",children:"Japanese Food"}),Object(C.jsx)("option",{value:"Korean",children:"Korean Food"}),Object(C.jsx)("option",{value:"Mexican",children:"Mexican Food"}),Object(C.jsx)("option",{value:"Thai",children:"Thai Food"})]})]}),Object(C.jsxs)(f.a.Group,{className:"mb-3",controlId:"gray",children:[Object(C.jsx)(f.a.Label,{children:"Pictures"}),Object(C.jsx)(f.a.Control,{required:!0,onChange:function(e){B((function(t){return[].concat(Object(d.a)(t),[e.target.files])}))},className:"file-input",type:"file",multiple:!0})]}),0!==R.length?R.map((function(e,t){return Object(C.jsx)(F.a,{className:"images",src:URL.createObjectURL(e[0]),alt:"",fluid:!0})})):null,Object(C.jsx)(f.a.Group,{className:"mb-3",id:"",children:Object(C.jsx)(f.a.Check,{onChange:function(e){e.target.checked?b(!0):b(!1)},type:"checkbox",label:"Is the food already cooked?"})}),i?Object(C.jsxs)("div",{class:"multiple-groups",children:[Object(C.jsxs)(f.a.Group,{className:"mb-3 half",children:[Object(C.jsx)(f.a.Label,{children:"Start Time"})," ",Object(C.jsx)("br",{}),Object(C.jsx)(y.a,{onChange:H,value:z})]}),Object(C.jsxs)(f.a.Group,{className:"mb-3 half",children:[Object(C.jsx)(f.a.Label,{children:"End Time"})," ",Object(C.jsx)("br",{}),Object(C.jsx)(y.a,{onChange:H,value:z})]})]}):null,Object(C.jsx)(f.a.Group,{className:"mb-3",id:"",children:Object(C.jsx)(f.a.Check,{ref:function(e){return $=e},type:"checkbox",label:"Are you willing to drop off the food?"})}),Object(C.jsxs)(f.a.Group,{className:"mb-3",controlId:"gray",children:[Object(C.jsx)(f.a.Label,{children:"Additional Comments"}),Object(C.jsx)(f.a.Control,{ref:function(e){return ee=e},className:"gray",as:"textarea",rows:5})]}),Object(C.jsxs)("div",{className:"sell-btns",children:[Object(C.jsx)(x.a,{type:"submit",id:"add-btn",children:"Add another dish"}),N?Object(C.jsx)(D.a,{className:"loader",type:"ThreeDots",color:"#568850",height:80,width:80}):Object(C.jsx)(x.a,{type:"submit",id:"sell-submit-btn",children:"Submit"})]})]})})}),Object(C.jsx)(m.a,{})]})})}a(121),a(122);var B=a(59),E=a(98),T=a.n(E),z=(a(240),a(241),a(280)),H=a(281),G=a(7),V=a(294);function J(e){var t=c.a.useRef(null);return Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)(V.a,{id:"card-container",children:[Object(C.jsxs)("div",{id:"card-img-slider",children:[Object(C.jsx)("div",{className:"arrow-left",id:"card-arrow-left",onClick:function(){var e;return null===t||void 0===t||null===(e=t.current)||void 0===e?void 0:e.slickPrev()},children:Object(C.jsx)(z.a,{color:"black",size:18})}),Object(C.jsx)("div",{className:"arrow-right",id:"card-arrow-right",onClick:function(){var e;return null===t||void 0===t||null===(e=t.current)||void 0===e?void 0:e.slickNext()},children:Object(C.jsx)(H.a,{color:"black",size:18})}),Object(C.jsx)(T.a,Object(G.a)(Object(G.a)({ref:t},{dots:!1,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1}),{},{children:e.imgs.map((function(e){return Object(C.jsx)(F.a,{id:"card-img",src:e})}))}))]}),Object(C.jsxs)(V.a.Body,{children:[Object(C.jsx)(V.a.Title,{id:"card-title",children:e.name}),Object(C.jsxs)(V.a.Text,{id:"card-price",children:["$",e.price]}),Object(C.jsxs)(V.a.Text,{id:"card-time",children:[e.time," min away"]})]})]})})}a(242);var U=a(132);a(250);function X(e){var t=Object(r.useRef)(null),a=Object(r.useRef)(null),c=Object(r.useState)("slider"),n=Object(u.a)(c,2),s=n[0],i=n[1],o=Object(r.useState)("See All"),d=Object(u.a)(o,2),b=d[0],O=d[1],p=Object(r.useState)(""),m=Object(u.a)(p,2),f=m[0],x=m[1],v=Object(r.useState)(),g=Object(u.a)(v,2),y=g[0],w=g[1],N=function(){var e=Object(j.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("https://us-central1-idyll-29e66.cloudfunctions.net/server/getBrowseData/30024");case 2:return t=e.sent,console.log(JSON.parse(JSON.stringify(t.data))),e.abrupt("return",JSON.parse(JSON.stringify(t.data)));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)(Object(j.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:t=e.sent,console.log(t),w(t.items);case 5:case"end":return e.stop()}}),e)}))),[]);var k=function(e){t.current.scrollLeft+=e,console.log(t)};return Object(C.jsxs)("div",{class:"category-container",ref:a,children:[Object(C.jsxs)("div",{id:"category-header",children:[Object(C.jsx)("h1",{id:"category-title",children:e.name||Object(C.jsx)(U.a,{})}),Object(C.jsxs)("div",{className:"arrows",children:[Object(C.jsx)("div",{id:"see-all",onClick:function(){"slider"===s?(i("slider-all"),O("Collapse"),x("off")):(i("slider"),O("See All"),x(""))},children:b}),Object(C.jsx)("div",{className:"arrow-left",id:f,children:Object(C.jsx)(z.a,{color:"black",size:18,onClick:function(){return k(-350)}})}),Object(C.jsx)("div",{className:"arrow-right",id:f,children:Object(C.jsx)(H.a,{color:"black",size:18,onClick:function(){return k(350)}})})]})]}),Object(C.jsx)("div",{id:s,ref:t,children:y?y.map((function(e){return Object(C.jsx)(J,{name:e.dishName,price:e.dishPrice,imgs:e.pictureURLs})})):Object(C.jsx)(U.a,{})})]})}function K(e){Object(r.useRef)();return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("div",{id:"green-line"}),Object(C.jsx)(O.a,{className:"px-4",style:{maxWidth:"83rem"},fluid:!0,children:Object(C.jsxs)(p.a,{children:[Object(C.jsxs)("div",{id:"dropdown-container",children:[Object(C.jsxs)(B.a,{id:"filter-box",children:[Object(C.jsx)(B.a.Toggle,{variant:"light",id:"dropdown",children:"Cities nearby"}),Object(C.jsxs)(B.a.Menu,{children:[Object(C.jsx)(B.a.Item,{children:"Johns Creek"}),Object(C.jsx)(B.a.Item,{children:"Duluth"}),Object(C.jsx)(B.a.Item,{children:"Atlanta"})]})]}),Object(C.jsxs)(B.a,{id:"filter-box",children:[Object(C.jsx)(B.a.Toggle,{variant:"light",id:"dropdown",children:"Cities nearby"}),Object(C.jsxs)(B.a.Menu,{children:[Object(C.jsx)(B.a.Item,{children:"Johns Creek"}),Object(C.jsx)(B.a.Item,{children:"Duluth"}),Object(C.jsx)(B.a.Item,{children:"Atlanta"})]})]})]}),Object(C.jsxs)("div",{id:"browse-container",children:[Object(C.jsx)(X,{name:"Local Favorites"}),Object(C.jsx)(X,{name:"Fresh"})]}),Object(C.jsx)(m.a,{})]})})]})}var M=a(6),W=(a(251),a.p+"static/media/google_logo.78998f2b.png"),q=a.p+"static/media/apple_logo.98e79cd8.png",Y=a(290),Z=a(293),Q=a(285),_=a(291),$=a(286),ee=a(284),te=a(287),ae=a(288),re=a(282),ce=a(283),ne=a(292),se=a(159),ie=a.n(se);a(252);function le(e){var t=Object(r.useRef)(null),a=Object(r.useState)(!1),c=Object(u.a)(a,2),n=(c[0],c[1],ie()("G7XGFCN3QV","12af5740b6d988432c9b23af2f5a9480")),s=function(){},i=Object(re.a)((function(e){var a=e.currentRefinement,r=(e.isSearchStalled,e.refine);return Object(C.jsx)("input",{id:"searchBox",type:"search",ref:t,className:"form-control",value:a,onChange:function(e){return r(e.currentTarget.value)},onFocus:s,placeholder:"Search..."})})),l=Object(ce.a)((function(e){var t=e.hits;return Object(C.jsx)("div",{className:"hit-wrapper",children:t.map((function(e){return Object(C.jsxs)("div",{className:"hit-content",children:[Object(C.jsx)("div",{className:"hit-img-wrapper",children:Object(C.jsx)("img",{className:"hit-img",src:e.pictureURLs})}),Object(C.jsx)("div",{className:"hit-name",children:e.dishName}),Object(C.jsx)("div",{className:"hit-price",children:e.dishPrice}),Object(C.jsx)("div",{className:"hit-seller",children:e.fullName})]})}))})}));return Object(C.jsxs)(_.a,{contentClassName:"search-modal",show:e.show,onHide:e.onHide,centered:!0,closeButton:!0,children:[Object(C.jsx)(_.a.Header,{closeButton:!0,children:Object(C.jsx)(_.a.Title,{children:"What are you craving?"})}),Object(C.jsxs)(_.a.Body,{children:[Object(C.jsx)("div",{children:Object(C.jsxs)(ne.a,{searchClient:n,indexName:"searchPosts",children:[Object(C.jsx)(i,{}),Object(C.jsxs)("div",{className:"content",children:[Object(C.jsx)("h1",{className:"search-item-header",children:"Items"}),Object(C.jsx)(l,{})]})]})}),Object(C.jsx)("h1",{id:"popular-searches-header",children:" Popular Searches "}),Object(C.jsxs)("ul",{id:"popular-searches",children:[Object(C.jsx)("li",{children:"Noodles"}),Object(C.jsx)("li",{children:"Chinese"}),Object(C.jsx)("li",{children:"Indian"}),Object(C.jsx)("li",{children:"Fresh"})]})]})]})}function oe(e){var t,a,c,n,s,i,l,o,d,b,p,m,f=Object(r.useState)(!1),x=Object(u.a)(f,2),v=x[0],g=x[1],y=Object(r.useState)(!1),w=Object(u.a)(y,2),N=w[0],k=w[1],I=Object(r.useState)(!1),P=Object(u.a)(I,2),D=P[0],F=P[1],R=Object(r.useState)(!1),B=Object(u.a)(R,2),E=B[0],T=B[1],z=Object(r.useState)(!1),H=Object(u.a)(z,2),G=H[0],V=H[1],J=function(){return g(!1)},U=function(){return g(!0)},X=function(){return k(!1)},K=function(){return k(!0)},re=function(){return F(!1)},ce=function(){return F(!0)},ne=Object(r.useRef)(),se=Object(r.useRef)(),ie=Object(r.useRef)(),oe=Object(r.useRef)(),je=Object(r.useRef)(),de=Object(r.useRef)(),ue=Object(r.useRef)(),be=Object(r.useRef)(),he=Object(r.useRef)(),Oe=Object(r.useRef)(),pe=Object(r.useRef)(),me=Object(S.f)(),fe=A(),xe=fe.currentUser,ve=fe.signup,ge=fe.login,ye=fe.signout,we=fe.userData,Ne=Object(r.useState)(void 0),Ce=Object(u.a)(Ne,2),ke=Ce[0],Ae=Ce[1],Ie=Object(r.useState)(void 0),Se=Object(u.a)(Ie,2),Pe=Se[0],De=Se[1];function Le(){return(Le=Object(j.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),Ae(""),e.next=4,ge(ne.current.value,se.current.value);case 4:e.sent?Ae("Invalid email or password"):(g(!1),me("/"));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Fe(){return(Fe=Object(j.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),de.current.value===ue.current.value){e.next=4;break}return De("It looks like your passwords don't match. Please check again."),e.abrupt("return");case 4:if(oe.current.value===je.current.value){e.next=7;break}return De("It looks like your emails don't match. Please check again."),e.abrupt("return");case 7:return De(""),e.next=10,ve(oe.current.value,de.current.value,Oe.current.value,be.current.value,he.current.value,pe.current.value);case 10:if(!(a=e.sent)){e.next=22;break}e.t0=a.code,e.next="auth/email-already-in-use"===e.t0?15:"auth/invalid-email"===e.t0?17:"auth/weak-password"===e.t0?19:21;break;case 15:return De("It looks like you already have an account with this email. Please login."),e.abrupt("break",22);case 17:return De("Please use a valid email."),e.abrupt("break",22);case 19:return De("Your password is too weak. Please try again."),e.abrupt("break",22);case 21:De("We failed to create an account for you. Please try again.");case 22:X(),me("/");case 24:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Re(){return(Re=Object(j.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),J(),ce();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Be(){return(Be=Object(j.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),re(),U();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ee(){return(Ee=Object(j.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),re(),K();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Te(){return(Te=Object(j.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),X(),ce();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("div",{className:"Toastify",children:Object(C.jsx)(L.a,{})}),Object(C.jsxs)(Y.a,{expand:"lg",className:"px-4 py-0",children:[Object(C.jsxs)(O.a,{children:[Object(C.jsx)(Y.a.Brand,{href:"#home",children:Object(C.jsx)("img",{src:"data:image/png;base64,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",className:"img",alt:""})}),Object(C.jsx)(Y.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(C.jsx)(Y.a.Collapse,{id:"basic-navbar-nav",children:Object(C.jsxs)(Z.a,{className:"ms-auto",children:[Object(C.jsxs)("div",{class:"search-icon-div",style:{paddingTop:"6px"},onClick:function(){return V(!0)},children:[" ",Object(C.jsx)(ee.a,{id:"search-icon",size:20,color:"black"})," "]}),xe&&we?Object(C.jsxs)(Q.a,{title:we.firstName,id:"basic-nav-dropdown",children:[Object(C.jsxs)(Q.a.ItemText,{children:[" Welcome, ",we.firstName," "]}),Object(C.jsx)(Q.a.Divider,{}),Object(C.jsx)(Q.a.Item,{href:"/",onClick:ye,children:"Log Out"})]}):Object(C.jsx)(Z.a.Link,{onClick:U,children:" Log In "}),Object(C.jsx)(Z.a.Link,{href:"/sell",children:"Sell"}),Object(C.jsx)(Z.a.Link,{href:"/map",children:"Map"}),Object(C.jsx)(Z.a.Link,{href:"/browse",children:"Browse"})]})})]}),Object(C.jsxs)(_.a,{id:"login-modal",show:v,onHide:J,"aria-labelledby":"contained-modal-title-vcenter",backdrop:"static",centered:!0,children:[Object(C.jsx)(_.a.Header,{closeButton:!0,children:Object(C.jsx)(_.a.Title,{children:"Log In To Idyll"})}),Object(C.jsxs)(_.a.Body,{children:[Object(C.jsxs)("form",{id:"item-information",className:"form-horizontal",onSubmit:function(e){return Le.apply(this,arguments)},children:[ke&&Object(C.jsx)($.a,{variant:"danger",children:ke}),Object(C.jsx)("label",(t={className:"control-label",style:{margin:"0px"},htmlFor:"dish-name"},Object(M.a)(t,"className","label-name"),Object(M.a)(t,"id","email-label"),Object(M.a)(t,"children"," Email "),t)),Object(C.jsx)("input",(a={ref:ne,className:"form-control green-border",type:"text",id:"email",name:"email",autoComplete:"off",placeholder:"Email"},Object(M.a)(a,"id","email-box"),Object(M.a)(a,"required",!0),a)),Object(C.jsx)("br",{}),Object(C.jsx)("label",{htmlFor:"dish-price",id:"password-label",children:" Password "}),Object(C.jsx)("input",(c={ref:se,className:"form-control green-border",type:"password",id:"password",name:"password",autoComplete:"off",placeholder:"Password"},Object(M.a)(c,"id","password-box"),Object(M.a)(c,"required",!0),c)),Object(C.jsx)("br",{}),Object(C.jsx)("input",{class:"form-check-input",type:"checkbox",value:"",id:"remember-me"}),Object(C.jsx)("label",{ref:ie,className:"form-check-label",for:"remember-me",id:"remember-me-label",children:" Remember Me "}),Object(C.jsx)("a",{href:"#",class:"",id:"forgot-password",children:"Forgot password?"}),Object(C.jsx)("input",{id:"submit-btn",className:"btn btn-primary mb-3",type:"submit",value:"Login"})]}),Object(C.jsxs)("div",{class:"separator",children:[Object(C.jsx)("div",{id:"left-line",class:"line-bruh"}),Object(C.jsx)("div",{id:"or",children:" OR "}),Object(C.jsx)("div",{id:"left-line",class:"line-bruh"})]}),Object(C.jsxs)("div",{class:"alternative-auth",children:[Object(C.jsx)("a",{id:"google",href:"",children:Object(C.jsx)("img",{id:"logo",src:W,width:"54px"})}),Object(C.jsx)("a",{id:"apple",href:"",children:Object(C.jsx)("img",{id:"logo",src:q,width:"122px"})})]}),Object(C.jsxs)("div",{id:"registration",children:[Object(C.jsx)("div",{id:"registration-question",children:"Not registered?"}),Object(C.jsx)("a",{id:"registration-signup",href:"",onClick:function(e){return Re.apply(this,arguments)},children:" Sign Up for free! "})]})]})]}),Object(C.jsxs)(_.a,{id:"signup-modal",show:N,onHide:X,"aria-labelledby":"contained-modal-title-vcenter",backdrop:"static",centered:!0,children:[Object(C.jsxs)(_.a.Header,{closeButton:!0,children:[Object(C.jsx)(te.a,{onClick:function(e){return Te.apply(this,arguments)},id:"back-btn",color:"black",size:32}),Object(C.jsx)(_.a.Title,{id:"email-title",children:"Sign Up With Email"})]}),Object(C.jsx)(_.a.Body,{children:Object(C.jsxs)("form",{id:"item-information",className:"form-horizontal",onSubmit:function(e){!function(e){Fe.apply(this,arguments)}(e)},children:[Pe&&Object(C.jsx)($.a,{variant:"danger",children:Pe}),Object(C.jsx)("div",{className:"error"}),Object(C.jsx)("label",(n={htmlFor:"firstName",className:"control-label"},Object(M.a)(n,"className","label-name"),Object(M.a)(n,"children"," First Name "),n)),Object(C.jsx)("input",{ref:be,className:"form-control",type:"text",id:"firstName",name:"firstName",placeholder:"John",autoComplete:"off",required:!0}),Object(C.jsx)("br",{}),Object(C.jsx)("label",(s={htmlFor:"lastName",className:"control-label"},Object(M.a)(s,"className","label-name"),Object(M.a)(s,"children"," Last Name "),s)),Object(C.jsx)("input",{ref:he,className:"form-control",type:"text",id:"lastName",name:"lastName",placeholder:"Doe",autoComplete:"off",required:!0}),Object(C.jsx)("br",{}),Object(C.jsx)("label",(i={htmlFor:"email",className:"control-label"},Object(M.a)(i,"className","label-name"),Object(M.a)(i,"children"," Email "),i)),Object(C.jsx)("input",{ref:oe,className:"form-control",type:"text",id:"email",name:"email",placeholder:"idyll@idyll.shop",autoComplete:"off",required:!0}),Object(C.jsx)("br",{}),Object(C.jsx)("label",(l={htmlFor:"email-confirmation",className:"control-label"},Object(M.a)(l,"className","label-name"),Object(M.a)(l,"children"," Email Confirmation "),l)),Object(C.jsx)("input",{ref:je,className:"form-control",type:"text",id:"email-confirmation",name:"emailConfirmation",placeholder:"idyll@idyll.shop",autoComplete:"off",required:!0}),Object(C.jsx)("br",{}),Object(C.jsx)("label",(o={htmlFor:"username",className:"control-label"},Object(M.a)(o,"className","label-name"),Object(M.a)(o,"children"," Username "),o)),Object(C.jsx)("input",{ref:Oe,className:"form-control",type:"text",id:"username",name:"username",placeholder:"Idyll",autoComplete:"off",required:!0}),Object(C.jsx)("br",{}),Object(C.jsx)("label",(d={htmlFor:"password",className:"control-label"},Object(M.a)(d,"className","label-name"),Object(M.a)(d,"children"," Password "),d)),Object(C.jsx)("input",{ref:de,className:"form-control",type:"password",id:"password",name:"password",placeholder:"At least 6 letters and numbers",autoComplete:"off",required:!0}),Object(C.jsx)("br",{}),Object(C.jsx)("label",(b={htmlFor:"password-confirmation",className:"control-label"},Object(M.a)(b,"className","label-name"),Object(M.a)(b,"children"," Password Confirmation "),b)),Object(C.jsx)("input",{ref:ue,className:"form-control",type:"password",id:"password-confirmation",name:"passwordConfirmation",placeholder:"At least 6 letters and numbers",autoComplete:"off",required:!0}),Object(C.jsx)("br",{}),Object(C.jsx)("label",(p={htmlFor:"phoneNumber",className:"control-label"},Object(M.a)(p,"className","label-name"),Object(M.a)(p,"children"," Phone Number "),p)),Object(C.jsx)("input",{ref:pe,className:"form-control",type:"text",id:"phoneNumber",name:"phoneNumber",placeholder:"xxxxxxxxxx",autoComplete:"off",required:!0}),Object(C.jsx)("br",{}),Object(C.jsx)("input",{id:"submit-btn",className:"btn btn-primary mb-3",type:"submit",value:"Sign Up"})]})})]}),Object(C.jsxs)(_.a,{id:"signup-choose-modal",show:D,onHide:re,"aria-labelledby":"contained-modal-title-vcenter",backdrop:"static",centered:!0,children:[Object(C.jsx)(_.a.Header,{closeButton:!0,children:Object(C.jsx)(_.a.Title,{children:"Sign Up for Idyll"})}),Object(C.jsxs)(_.a.Body,{children:[Object(C.jsxs)("div",{class:"signup-options",children:[Object(C.jsxs)("div",{class:"option",id:"email-and-password-option",onClick:function(e){return Ee.apply(this,arguments)},children:[Object(C.jsx)("div",{class:"subpicture",id:"email-pic",children:Object(C.jsx)(ae.a,{class:"center-pic",color:"black",size:37})}),Object(C.jsx)("div",{class:"option-text",children:"Use email/password"})]}),Object(C.jsxs)("div",{class:"option",id:"google-option",children:[Object(C.jsxs)("div",{class:"subpicture",id:"google-pic",children:[" ",Object(C.jsx)("img",{class:"center-pic",src:W,width:"36px"})]}),Object(C.jsx)("div",{class:"option-text",children:"Continue With Google"})]}),Object(C.jsxs)("div",{class:"option",id:"apple-option",children:[Object(C.jsxs)("div",{class:"subpicture",id:"apple-pic",children:[" ",Object(C.jsx)("img",{class:"center-pic",src:q,width:"73px"})]}),Object(C.jsx)("div",{class:"option-text",children:"Continue With Apple"})]})]}),Object(C.jsxs)("div",{id:"registration1",children:[Object(C.jsx)("div",{id:"registration-question1",children:"Already registered?"}),Object(C.jsx)("a",{id:"registration-signup1",href:"",onClick:function(e){return Be.apply(this,arguments)},children:" Log in! "})]})]})]}),Object(C.jsxs)(_.a,{id:"contact-info-modal",show:E,onHide:function(){return T(!1)},"aria-labelledby":"contained-modal-title-vcenter",backdrop:"static",centered:!0,children:[Object(C.jsx)(_.a.Header,{closeButton:!0,children:Object(C.jsx)(_.a.Title,{children:" Contact Information "})}),Object(C.jsx)(_.a.Body,{children:Object(C.jsxs)("div",{class:"signup-options",children:[Object(C.jsx)("label",(m={htmlFor:"phone-num",className:"control-label"},Object(M.a)(m,"className","label-name"),Object(M.a)(m,"children"," Phone Number "),m)),Object(C.jsx)("input",{ref:be,className:"form-control",type:"text",id:"phone-num",name:"phone-num",autoComplete:"off",required:!0}),Object(C.jsx)("br",{})]})})]}),Object(C.jsx)(le,{show:G,onHide:function(){return V(!1)}})]})]})}var je=a(99);var de=function(){return Object(C.jsx)(je.a,{children:Object(C.jsx)(I,{children:Object(C.jsxs)(S.c,{children:[Object(C.jsx)(S.a,{path:"/",element:Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(oe,{}),Object(C.jsx)(K,{})]})}),Object(C.jsx)(S.a,{path:"/sell",element:Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(oe,{}),Object(C.jsx)(R,{})]})})]})})})};a(265);s.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(de,{})}),document.getElementById("root"))}},[[266,1,2]]]);
//# sourceMappingURL=main.4acf6dbb.chunk.js.map