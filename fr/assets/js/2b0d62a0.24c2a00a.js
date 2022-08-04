"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7845],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>m});var r=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(i),m=n,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return i?r.createElement(h,o(o({ref:t},c),{},{components:i})):r.createElement(h,o({ref:t},c))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<a;p++)o[p]=i[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}u.displayName="MDXCreateElement"},34:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=i(7462),n=(i(7294),i(3905));const a={sidebar_position:1},o="SIPMediaDeploy",l={unversionedId:"jitsi/sip-media/sip-media-deploy",id:"jitsi/sip-media/sip-media-deploy",title:"SIPMediaDeploy",description:"This repository hosts all scripts that permit to deploy from scratch the entire SIP Media Gateway stack! It is divided in three parts:",source:"@site/docs/jitsi/sip-media/sip-media-deploy.md",sourceDirName:"jitsi/sip-media",slug:"/jitsi/sip-media/sip-media-deploy",permalink:"/Docusaurus1/fr/docs/jitsi/sip-media/sip-media-deploy",draft:!1,editUrl:"https://github.com/AjaIoa/Docusaurus1/docs/jitsi/sip-media/sip-media-deploy.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Jitsi Box",permalink:"/Docusaurus1/fr/docs/jitsi/jitsi-box/j-box-"}},s={},p=[{value:"Configuration",id:"configuration",level:2},{value:"Installation",id:"installation",level:2},{value:"Deploy the stack",id:"deploy-the-stack",level:2},{value:"Licensing",id:"licensing",level:2}],c={toc:p};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"sipmediadeploy"},"SIPMediaDeploy"),(0,n.kt)("p",null,"This repository hosts all scripts that permit to deploy from scratch the entire SIP Media Gateway stack! It is divided in three parts:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the ansible directory, that uses Ansible for the provisioning of the virtual machines."),(0,n.kt)("li",{parentName:"ul"},"the packer directory, that uses Packer to build VM images."),(0,n.kt)("li",{parentName:"ul"},"the terraform directory, that uses Terraform to deploy the stack on several cloud providers and configures it with Cloud-Init.")),(0,n.kt)("p",null,"The solution developed in this repository relies on two external repositories that permit to build the Docker images:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the SIPMediaGateway repository, which contains the code of the SIP Media Gateway."),(0,n.kt)("li",{parentName:"ul"},"the SimpleScaleVM repository, which contains the code of the scaling module.")),(0,n.kt)("p",null,"The full explanation of the approach and functioning of this project are described in the documentation directory."),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("p",null,"All of the configuration is located in the env.d directory."),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)("p",null,"Each part of the repository relies on packages and dependencies; to install them, follow the installation guidelines detailed in the READMEs and install dependencies with the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"make install\n")),(0,n.kt)("h2",{id:"deploy-the-stack"},"Deploy the stack"),(0,n.kt)("p",null,"To deploy the stack, you must first build the VM images:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"make build\n")),(0,n.kt)("p",null,"Then, you may deploy the stack:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"make deploy\n")),(0,n.kt)("h2",{id:"licensing"},"Licensing"),(0,n.kt)("p",null,"Apache License Version 2.0."),(0,n.kt)("p",null,"See LICENSE to see the full text."))}d.isMDXComponent=!0}}]);