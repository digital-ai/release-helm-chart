"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[334],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},765:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),l=["components"],r={sidebar_position:4},s=void 0,p={unversionedId:"assigning_pods_to_nodes",id:"assigning_pods_to_nodes",isDocsHomePage:!1,title:"assigning_pods_to_nodes",description:"This is internal documentation. This document can be used only if it was recommended by the Support Team.",source:"@site/docs/assigning_pods_to_nodes.md",sourceDirName:".",slug:"/assigning_pods_to_nodes",permalink:"/xl-release-kubernetes-helm-chart/docs/assigning_pods_to_nodes",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"make-custom-configuration",permalink:"/xl-release-kubernetes-helm-chart/docs/make-custom-configuration"},next:{title:"integrating-with-identity-service",permalink:"/xl-release-kubernetes-helm-chart/docs/integrating-with-identity-service"}},d=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Intro",id:"intro",children:[],level:2},{value:"Removing Pods from Specific Node",id:"removing-pods-from-specific-node",children:[],level:2},{value:"Assigning XLR Pods to the Specific Nodes",id:"assigning-xlr-pods-to-the-specific-nodes",children:[],level:2}],c={toc:d};function u(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This is internal documentation. This document can be used only if it was recommended by the Support Team."))),(0,i.kt)("h1",{id:"assigning-pods-to-nodes"},"Assigning Pods to Nodes"),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The kubectl command-line tool"),(0,i.kt)("li",{parentName:"ul"},"Access to a Kubernetes cluster with installed Release")),(0,i.kt)("p",null,"Tested with:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"xl-release 22.2.0-x"),(0,i.kt)("li",{parentName:"ul"},"xl-cli 10.3.9"),(0,i.kt)("li",{parentName:"ul"},"Azure cluster")),(0,i.kt)("h2",{id:"intro"},"Intro"),(0,i.kt)("p",null,"All running pods, deployed with xl-release, have no defined:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"pod tolerations"),(0,i.kt)("li",{parentName:"ul"},"node labels in the ",(0,i.kt)("inlineCode",{parentName:"li"},"nodeSelector")),(0,i.kt)("li",{parentName:"ul"},"node (anti-)affinity")),(0,i.kt)("p",null,"If you need to apply on pods custom scheduling to the appropriate node you can use following files to change that in your operator package:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"digitalai-release/kubernetes/dairelease_cr.yaml")),(0,i.kt)("p",{parentName:"li"},"In the file search all places where is ",(0,i.kt)("inlineCode",{parentName:"p"},"tolerations: []")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"nodeSelector: {}")," and add appropriate values there. ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"digitalai-release/kubernetes/template/deployment.yaml")),(0,i.kt)("p",{parentName:"li"},"In the file add to the path ",(0,i.kt)("inlineCode",{parentName:"p"},"spec.template.spec")," appropriate values with ",(0,i.kt)("inlineCode",{parentName:"p"},"tolerations: []")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"nodeSelector: {}"),"."))),(0,i.kt)("p",null,"In next sections we will display few cases that could be applied."),(0,i.kt)("h2",{id:"removing-pods-from-specific-node"},"Removing Pods from Specific Node"),(0,i.kt)("p",null,"If you need that specific node should not run any xl-release pods, you can apply taint to that node with effect ",(0,i.kt)("inlineCode",{parentName:"p"},"NoExecute"),", for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\u276f kubectl taint nodes node_name key1=value1:NoExecute\n")),(0,i.kt)("p",null,"All pods that do not have that specific toleration will be immediately removed from nodes with that specific taint."),(0,i.kt)("h2",{id:"assigning-xlr-pods-to-the-specific-nodes"},"Assigning XLR Pods to the Specific Nodes"),(0,i.kt)("p",null,"If you need to have just XLR pods, and no other pod, on the specific node you need to do following, for example:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Add to nodes specific taints that will remove all other pods without same tolerations: ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\u276f kubectl taint nodes node_name app=dai:NoExecute\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Add label to the same nodes so XLR when deployed use just that specific nodes:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\u276f kubectl label nodes node_name app_label=dai_label\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("inlineCode",{parentName:"li"},"digitalai-release/kubernetes/dairelease_cr.yaml")," update all places with ",(0,i.kt)("inlineCode",{parentName:"li"},"tolerations"),":")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'tolerations:\n- key: "app"\n  operator: "Equal"\n  value: "dai"\n  effect: "NoExecute"\n')),(0,i.kt)("p",null,"And update all places with ",(0,i.kt)("inlineCode",{parentName:"p"},"nodeSelector"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"nodeSelector:\n  app_label: dai_label\n")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("inlineCode",{parentName:"li"},"digitalai-release/kubernetes/template/deployment.yaml")," add following lines under ",(0,i.kt)("inlineCode",{parentName:"li"},"spec.template.spec"),":")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'tolerations:\n- key: "app"\n  operator: "Equal"\n  value: "dai"\n  effect: "NoExecute"\nnodeSelector:\n  app_label: dai_label\n')))}u.isMDXComponent=!0}}]);