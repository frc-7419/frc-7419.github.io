(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[862],{7771:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about/contact",function(){return a(2144)}])},2144:function(e,t,a){"use strict";a.r(t);var o=a(5893),n=a(7294),r=a(1163);t.default=function(){var e=(0,n.useState)(""),t=e[0],a=e[1],s=(0,n.useState)(""),l=s[0],u=s[1],i=(0,n.useState)(""),d=i[0],c=i[1],b=(0,n.useState)(""),h=b[0],m=b[1],p=(0,n.useState)(""),g=p[0],x=p[1],f=(0,n.useState)(!1),v=f[0],y=f[1],w=(0,r.useRouter)();return(0,o.jsx)("main",{className:"flex-grow",children:(0,o.jsx)("section",{className:"relative",children:(0,o.jsx)("div",{className:"max-w-6xl mx-auto px-4 sm:px-6",children:(0,o.jsxs)("div",{className:"py-12 md:py-20",children:[(0,o.jsxs)("div",{className:"max-w-3xl mx-auto text-center pb-10 md:pb-10",children:[(0,o.jsx)("h2",{className:"h2 mb-4",children:"Contact Us"}),(0,o.jsx)("p",{className:"text-xl text-gray-600","data-aos":"zoom-y-out",children:"Contact us for any questions!"})]}),(0,o.jsx)("div",{children:(0,o.jsxs)("form",{onSubmit:function(e){e.preventDefault();var o={time:Date().toLocaleString(),name:t,email:l,phone:d,team:h,msg:g};y(!0),fetch("https://sheet.best/api/sheets/22f4e307-da45-4fa8-880a-e84b25c39186",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}).then((function(){console.log("form submitted:",o),y(!1)})),w.push("/about/messageReceived"),a(""),u(""),c(""),m(""),x("")},children:[(0,o.jsx)("input",{value:t,onChange:function(e){return a(e.target.value)},className:"block mb-5 text-gray-400 border border-blue-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white drop-shadow-lg",type:"text",required:!0,id:"name",name:"name",placeholder:"Enter Name"}),(0,o.jsx)("input",{value:l,onChange:function(e){return u(e.target.value)},className:"block mb-5 text-gray-400 border border-blue-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white drop-shadow-lg",type:"text",required:!0,id:"email",name:"email",placeholder:"Enter Email"}),(0,o.jsx)("input",{value:d,onChange:function(e){return c(e.target.value)},className:"block mb-5 text-gray-400 border border-blue-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white drop-shadow-lg",type:"text",id:"phone",name:"phone",placeholder:"Enter Phone #(optional)"}),(0,o.jsx)("input",{value:h,onChange:function(e){return m(e.target.value)},className:"block mb-5 text-gray-400 border border-blue-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white drop-shadow-lg",type:"text",id:"team",name:"team",placeholder:"Enter Team # (optional)"}),(0,o.jsx)("textarea",{value:g,onChange:function(e){return x(e.target.value)},className:"block mb-5 text-gray-400 border border-blue-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white drop-shadow-lg",name:"your-message",cols:"40",rows:"10","aria-required":"true","aria-invalid":"false",spellCheck:"false",placeholder:"Enter Message",required:!0}),(0,o.jsx)("br",{}),!v&&(0,o.jsx)("button",{className:" bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded",children:"Submit"}),v&&(0,o.jsx)("button",{className:" bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded opacity-50 cursor-not-allowed",children:"Submitting"})]})})]})})})})}}},function(e){e.O(0,[774,888,179],(function(){return t=7771,e(e.s=t);var t}));var t=e.O();_N_E=t}]);