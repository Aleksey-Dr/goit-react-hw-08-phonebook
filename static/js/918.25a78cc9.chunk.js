"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[918],{5579:function(e,n,t){t.d(n,{Z:function(){return i}});var a=t(8182),r="Title_title__ugKfF",s=t(184),i=function(e){var n=e.children;return(0,s.jsx)("h2",{className:(0,a.Z)(r),children:n})}},9918:function(e,n,t){t.r(n),t.d(n,{default:function(){return N}});var a=t(9434),r=t(8182),s="Filter_labl__wYIqS",i="Filter_filter-input__PKXqW",c=t(6895),u=t(184),o=function(){var e=(0,a.I0)();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h3",{children:"Contacts"}),(0,u.jsxs)("label",{className:(0,r.Z)(s),children:["Find contacts by name",(0,u.jsx)("input",{className:(0,r.Z)(i),type:"text",onChange:function(n){e((0,c.M)(n.currentTarget.value))}})]})]})},l=t(9439),d=t(2791),m="ContactForm_form__ttXmo",h="ContactForm_input__e2U+9",f=t(8097),x=t(6351),_=t(5579),b=function(){var e=(0,a.I0)(),n=(0,a.v9)(x.a1),t=(0,d.useState)(""),s=(0,l.Z)(t,2),i=s[0],c=s[1],o=(0,d.useState)(""),b=(0,l.Z)(o,2),p=b[0],j=b[1],v=function(e){var n=e.currentTarget,t=n.name,a=n.value;switch(t){case"name":c(a);break;case"number":j(a);break;default:return}};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(_.Z,{children:"Phonebook"}),(0,u.jsxs)("form",{className:(0,r.Z)(m),onSubmit:function(t){t.preventDefault(),n.find((function(e){return e.name===i}))?alert(i+" is already in contacts"):(!function(n,t,a){e((0,f.uK)(n,t,a))}({name:i,number:p}),c(""),j(""))},children:[(0,u.jsxs)("label",{htmlFor:i,children:["Name",(0,u.jsx)("input",{className:(0,r.Z)(h),type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:i,onChange:v})]}),(0,u.jsxs)("label",{htmlFor:p,children:["Number",(0,u.jsx)("input",{className:(0,r.Z)(h),type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:p,onChange:v})]}),(0,u.jsx)("button",{type:"submit",children:"Add contact"})]})]})},p="ContactList_list__S-drv",j="ContactsItem_contacts-item__oqFff",v="ContactsItem_name__Yu+LA",g=function(e){var n=e.id,t=e.name,s=e.number,i=(0,a.I0)();return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("li",{className:(0,r.Z)(j),children:[(0,u.jsxs)("span",{children:[(0,u.jsxs)("span",{className:(0,r.Z)(v),children:[t,":"]})," ",s]}),(0,u.jsx)("button",{type:"button",onClick:function(){return i((0,f.GK)({id:n}))},children:"Delete"})]})})},C=t(643),Z=function(){return(0,u.jsx)(C.g4,{height:"80",width:"80",color:"rgba(0, 0, 0, 0.75)",ariaLabel:"grid-loading",radius:"12.5",wrapperStyle:{margin:"auto"},visible:!0})},F=function(){var e=(0,a.I0)();(0,d.useEffect)((function(){e((0,f.yF)())}),[e]);var n=(0,a.v9)(x.AD),t=(0,a.v9)(x.a1),s=(0,a.v9)(x.Af),i=s.isLoading,c=s.error,o=n.toLowerCase(),l=t.filter((function(e){return e.name.toLowerCase().includes(o)}));return(0,u.jsxs)("div",{children:[i&&(0,u.jsx)(Z,{}),c&&(0,u.jsxs)("p",{children:[(0,u.jsx)("b",{children:"Error: "}),c]}),(0,u.jsx)("ul",{className:(0,r.Z)(p),children:l.map((function(e){var n=e.id,t=e.name,a=e.number;return(0,u.jsx)(g,{id:n,name:t,number:a},n)}))})]})},N=function(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(b,{}),(0,u.jsx)(o,{}),(0,u.jsx)(F,{})]})}}}]);
//# sourceMappingURL=918.25a78cc9.chunk.js.map