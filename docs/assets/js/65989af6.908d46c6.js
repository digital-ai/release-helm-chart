"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[133],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),c=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,g=u["".concat(o,".").concat(m)]||u[m]||p[m]||s;return r?a.createElement(g,l(l({ref:t},d),{},{components:r})):a.createElement(g,l({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,l=new Array(s);l[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<s;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},140:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var a=r(7462),n=r(3366),s=(r(7294),r(3905)),l=["components"],i={sidebar_position:10},o=void 0,c={unversionedId:"release-with-http2",id:"release-with-http2",isDocsHomePage:!1,title:"release-with-http2",description:"Install Release with http2 backend enabled",source:"@site/docs/release-with-http2.md",sourceDirName:".",slug:"/release-with-http2",permalink:"/xl-release-kubernetes-helm-chart/docs/release-with-http2",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Release Installation on a Air-gapped K8S Cluster",permalink:"/xl-release-kubernetes-helm-chart/docs/air-gapped-installation"},next:{title:"RBAC rules for the Release installation",permalink:"/xl-release-kubernetes-helm-chart/docs/operator-rbac"}},d=[{value:"Install Release with http2 backend enabled",id:"install-release-with-http2-backend-enabled",children:[],level:2},{value:"Prerequisites",id:"prerequisites",children:[{value:"Create Keystore and Certificate using openssl",id:"create-keystore-and-certificate-using-openssl",children:[],level:3},{value:"Specifying Keystore for Release server when enabling http2",id:"specifying-keystore-for-release-server-when-enabling-http2",children:[{value:"Create base64 encoded string of Keystore file",id:"create-base64-encoded-string-of-keystore-file",children:[],level:4},{value:"Create generic secret for Keystore",id:"create-generic-secret-for-keystore",children:[],level:4}],level:3},{value:"Examples",id:"examples",children:[{value:"Example 1: <code>xl kube install</code> using the Release server Keystore file",id:"example-1-xl-kube-install-using-the-release-server-keystore-file",children:[],level:4},{value:"Example 2: <code>xl kube install</code> using the Release server Keystore secret",id:"example-2-xl-kube-install-using-the-release-server-keystore-secret",children:[],level:4}],level:3},{value:"Fields updated for http2 configuration in the cr.yaml",id:"fields-updated-for-http2-configuration-in-the-cryaml",children:[],level:3},{value:"Accessing the release UI",id:"accessing-the-release-ui",children:[{value:"Command to port-forward Release to localhost port",id:"command-to-port-forward-release-to-localhost-port",children:[],level:4}],level:3}],level:2}],p={toc:d};function u(e){var t=e.components,r=(0,n.Z)(e,l);return(0,s.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"install-release-with-http2-backend-enabled"},"Install Release with http2 backend enabled"),(0,s.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"This is internal documentation. This document can be used only if it was recommended by the Support Team."))),(0,s.kt)("p",null,"This article describes the settings to be configured before you install Release with http2 backend enabled on a Kubernetes cluster."),(0,s.kt)("p",null,"When Release is started with http2, it starts on https/ssl endpoint. And the xl-release backend communicates with ingress on the configured http2 backend endpoint."),(0,s.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/#kubectl"},"kubectl")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.digital.ai/bundle/devops-deploy-version-v.22.3/page/deploy/how-to/install-the-xl-cli.html"},"XL CLI 22.3.5 or later")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/mikefarah/yq"},"yq 4.18.2 or later")),(0,s.kt)("li",{parentName:"ul"},"[openssl]"," (",(0,s.kt)("a",{parentName:"li",href:"https://www.openssl.org/source/"},"https://www.openssl.org/source/"),")"),(0,s.kt)("li",{parentName:"ul"},"keytool (Comes with Java JDK. Required only when generating keystore)")),(0,s.kt)("h3",{id:"create-keystore-and-certificate-using-openssl"},"Create Keystore and Certificate using openssl"),(0,s.kt)("p",null,"Run the following command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"openssl req -x509 -out localhost.crt -keyout localhost.key \\ \n  -newkey rsa:2048 -sha256 \\\n  -subj '/CN=localhost'\n\nopenssl pkcs12 -export -in localhost.crt -inkey localhost.key -name localhost -out ssl-keystore.p12 \n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Keep this handy:")),(0,s.kt)("p",null,"The ",(0,s.kt)("strong",{parentName:"p"},"keystore password")," and ",(0,s.kt)("strong",{parentName:"p"},"keystore key password")," that are generated after running the openssl command. These are required as inputs when you install Release using ",(0,s.kt)("inlineCode",{parentName:"p"},"xl kube install")," for http2 enabled setup."),(0,s.kt)("h3",{id:"specifying-keystore-for-release-server-when-enabling-http2"},"Specifying Keystore for Release server when enabling http2"),(0,s.kt)("p",null,"When you use XL-CLI, you can specify the created keystore in 2 ways:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"base64 encoded string (in a editor or specify the keystore file location)"),(0,s.kt)("li",{parentName:"ul"},"generic secret")),(0,s.kt)("h4",{id:"create-base64-encoded-string-of-keystore-file"},"Create base64 encoded string of Keystore file"),(0,s.kt)("p",null,"Run the following command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"cat ssl-keystore.p12 | base64 -w 0\n")),(0,s.kt)("h4",{id:"create-generic-secret-for-keystore"},"Create generic secret for Keystore"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Important"),": This step is required only when specifying keystore as secret.")),(0,s.kt)("p",null,"Run the following command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"kubectl create secret generic http2-tls-secret --from-file=ssl-keystore.p12=ssl-keystore.p12 -n digital-ai-release\n")),(0,s.kt)("h3",{id:"examples"},"Examples"),(0,s.kt)("p",null,"Below are two examples of running xl kube install with enabling http2 for release"),(0,s.kt)("h4",{id:"example-1-xl-kube-install-using-the-release-server-keystore-file"},"Example 1: ",(0,s.kt)("inlineCode",{parentName:"h4"},"xl kube install")," using the Release server Keystore file"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"C:\\Users\\Administrator>xl-client-23.1.0-rc.2-windows-amd64.exe kube install\n? Following kubectl context will be used during execution: `arn:aws:eks:us-east-1:932770550094:cluster/devops-operator-cluster-test-cluster`? Yes\n? Select the Kubernetes setup where the Digital.ai Devops Platform will be installed, updated or cleaned: AWSEKS [AWS EKS]\n? Do you want to use an custom Kubernetes namespace (current default is 'digitalai'): No\n? Product server you want to perform install for: dai-release [Digital.ai Release]\n? Select type of image registry: default\n? Enter the repository name (eg: <repositoryName> from <repositoryName>/<imageName>:<tagName>): xebialabsunsupported\n? Enter the image name (eg: <imageName> from <repositoryName>/<imageName>:<tagName>): xl-release\n? Enter the image tag (eg: <tagName> from <repositoryName>/<imageName>:<tagName>): 23.1.0-rc.2\n? Enter the release server replica count: 1\n? Enter PVC size for Release (Gi): 1\n? Select between supported Access Modes: ReadWriteMany [ReadWriteMany]\n? Do you want to enable http2 for release: Yes\n? Select source of the keystore for the server: file [Path to the keystore file (the file can be in the raw format or base64 encoded)]\n? Provide keystore file for the server: C:\\Users\\Administrator\\certs\\localhost.p12\n? Provide the server keystore password: test\n? Provide the server keystore key passphrase: test\n? Select between supported ingress types: none [None - Ingress will not be set up during installation]\n? Provide administrator password: admin\n? Type of the OIDC configuration: no-oidc [No OIDC Configuration]\n? Enter the operator image to use (eg: <repositoryName>/<imageName>:<tagName>): xebialabsunsupported/release-operator:23.1.0-rc.2\n? Select source of the license: file\n? Provide license file for the server: C:\\Users\\Administrator\\license\\release-license.lic\n? Select source of the repository keystore: generate\n? Provide keystore passphrase: 4rSuEqVf21G6wS3g\n? Provide storage class for the server: my-efs\n? Do you want to install a new PostgreSQL on the cluster: Yes\n? Provide Storage Class to be defined for PostgreSQL: my-efs\n? Provide PVC size for PostgreSQL (Gi): 1\n? Do you want to install a new RabbitMQ on the cluster: Yes\n? Replica count to be defined for RabbitMQ: 1\n? Storage Class to be defined for RabbitMQ: my-efs\n? Provide PVC size for RabbitMQ (Gi): 1\n         -------------------------------- ----------------------------------------------------\n        | LABEL                          | VALUE                                              |\n         -------------------------------- ----------------------------------------------------\n        | AccessModeRelease              | ReadWriteMany                                      |\n        | AdminPassword                  | admin                                              |\n        | CleanBefore                    | false                                              |\n        | CreateNamespace                | true                                               |\n        | EnablePostgresql               | true                                               |\n        | EnableRabbitmq                 | true                                               |\n        | ExternalOidcConf               | external: false                                    |\n        | GenerationDateTime             | 20230502-114403                                    |\n        | Http2EnabledRelease            | true                                               |\n        | ImageNameRelease               | xl-release                                         |\n        | ImageRegistryType              | default                                            |\n        | ImageTag                       | 23.1.0-rc.2                                        |\n        | IngressType                    | none                                               |\n        | IsCustomImageRegistry          | false                                              |\n        | K8sSetup                       | AWSEKS                                             |\n        | KeystorePassphrase             | 4rSuEqVf21G6wS3g                                   |\n        | License                        | LS0tIExpY2Vuc2UgLS0tCkxpY2Vuc2UgdmVyc2lvbjogMwpQ.. |\n        | LicenseFile                    | C:\\Users\\Administrator\\license\\release-license.lic |\n        | LicenseSource                  | file                                               |\n        | OidcConfigType                 | no-oidc                                            |\n        | OidcConfigTypeInstall          | no-oidc                                            |\n        | OperatorImageReleaseGeneric    | xebialabsunsupported/release-operator:23.1.0-rc.2  |\n        | OsType                         | windows                                            |\n        | PostgresqlPvcSize              | 1                                                  |\n        | PostgresqlStorageClass         | my-efs                                             |\n        | ProcessType                    | install                                            |\n        | PvcSizeRelease                 | 1                                                  |\n        | RabbitmqPvcSize                | 1                                                  |\n        | RabbitmqReplicaCount           | 1                                                  |\n        | RabbitmqStorageClass           | my-efs                                             |\n        | ReleaseKeystore                | MIIJ/AIBAzCCCcIGCSqGSIb3DQEHAaCCCbMEggmvMIIJqzCC.. |\n        | ReleaseKeystoreFile            | C:\\Users\\Administrator\\certs\\localhost.p12         |\n        | ReleaseKeystoreKeyPassword     | test                                               |\n        | ReleaseKeystorePassword        | test                                               |\n        | ReleaseKeystoreSource          | file                                               |\n        | RemoteRunnerUseDefaultLocation | true                                               |\n        | RepositoryKeystoreSource       | generate                                           |\n        | RepositoryName                 | xebialabsunsupported                               |\n        | ServerType                     | dai-release                                        |\n        | ShortServerName                | xlr                                                |\n        | StorageClass                   | my-efs                                             |\n        | UseCustomNamespace             | false                                              |\n        | XlrReplicaCount                | 1                                                  |\n? Do you want to proceed to the deployment with these values? Yes\nFor current process files will be generated in the: digitalai/dai-release/digitalai/20230502-114403/kubernetes\nGenerated answers file successfully: digitalai\\generated_answers_dai-release_digitalai_install-20230502-114403.yaml\nStarting install processing.\nCreated keystore digitalai/dai-release/digitalai/20230502-114403/kubernetes/repository-keystore.jceks\nSkip creating namespace digitalai, already exists\nGenerated files successfully for AWSEKS installation.\nApplying resources to the cluster!\nApplied resource clusterrole/xlr-operator-proxy-role from the file digitalai\\dai-release\\digitalai\\20230502-114403\\kubernetes\\template\\cluster-role-digital-proxy-role.yaml\nApplied resource clusterrole/xlr-operator-manager-role from the file digitalai\\dai-release\\digitalai\\20230502-114403\\kubernetes\\template\\cluster-role-manager-role.yaml\nApplied resource clusterrole/xlr-operator-metrics-reader from the file digitalai\\dai-release\\digitalai\\20230502-114403\\kubernetes\\template\\cluster-role-metrics-reader.yaml\nApplied resource service/xlr-operator-controller-manager-metrics-service from the file digitalai\\dai-release\\digitalai\\20230502-114403\\kubernetes\\template\\controller-manager-metrics-service.yaml\nApplied resource customresourcedefinition/digitalaireleases.xlr.digital.ai from the file digitalai\\dai-release\\digitalai\\20230502-114403\\kubernetes\\template\\custom-resource-definition.yaml\nApplied resource deployment/xlr-operator-controller-manager from the file digitalai\\dai-release\\digitalai\\20230502-114403\\kubernetes\\template\\deployment.yaml\nApplied resource role/xlr-operator-leader-election-role from the file digitalai\\dai-release\\digitalai\\20230502-114403\\kubernetes\\template\\leader-election-role.yaml\nApplied resource rolebinding/xlr-operator-leader-election-rolebinding from the file digitalai\\dai-release\\digitalai\\20230502-114403\\kubernetes\\template\\leader-election-rolebinding.yaml\nApplied resource clusterrolebinding/xlr-operator-manager-rolebinding from the file digitalai\\dai-release\\digitalai\\20230502-114403\\kubernetes\\template\\manager-rolebinding.yaml\nApplied resource clusterrolebinding/xlr-operator-proxy-rolebinding from the file digitalai\\dai-release\\digitalai\\20230502-114403\\kubernetes\\template\\proxy-rolebinding.yaml\nApplied resource digitalairelease/dai-xlr from the file digitalai/dai-release/digitalai/20230502-114403/kubernetes/dai-release_cr.yaml\nInstall finished successfully!\n")),(0,s.kt)("h4",{id:"example-2-xl-kube-install-using-the-release-server-keystore-secret"},"Example 2: ",(0,s.kt)("inlineCode",{parentName:"h4"},"xl kube install")," using the Release server Keystore secret"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"C:\\Users\\Administrator>xl-client-23.1.0-rc.2-windows-amd64.exe kube install\n? Following kubectl context will be used during execution: `arn:aws:eks:us-east-1:932770550094:cluster/devops-operator-cluster-test-cluster`? Yes\n? Select the Kubernetes setup where the Digital.ai Devops Platform will be installed, updated or cleaned: AWSEKS [AWS EKS]\n? Do you want to use an custom Kubernetes namespace (current default is 'digitalai'): No\n? Product server you want to perform install for: dai-release [Digital.ai Release]\n? Select type of image registry: default\n? Enter the repository name (eg: <repositoryName> from <repositoryName>/<imageName>:<tagName>): xebialabsunsupported\n? Enter the image name (eg: <imageName> from <repositoryName>/<imageName>:<tagName>): xl-release\n? Enter the image tag (eg: <tagName> from <repositoryName>/<imageName>:<tagName>): 23.1.0-rc.2\n? Enter the release server replica count: 1\n? Enter PVC size for Release (Gi): 1\n? Select between supported Access Modes: ReadWriteMany [ReadWriteMany]\n? Do you want to enable http2 for release: Yes\n? Select source of the keystore for the server: secret [Generic Secret containing keystore file with key as ssl-keystore.p12]\n? Provide the generic secret name with the release server keystore added as key ssl-keystore.p12: http2-tls-secret\n? Provide the server keystore password: test\n? Provide the server keystore key passphrase: test\n? Select between supported ingress types: none [None - Ingress will not be set up during installation]\n? Provide administrator password: admin\n? Type of the OIDC configuration: no-oidc [No OIDC Configuration]\n? Enter the operator image to use (eg: <repositoryName>/<imageName>:<tagName>): xebialabsunsupported/release-operator:23.1.0-rc.2\n? Select source of the license: file\n? Provide license file for the server: C:\\Users\\Administrator\\license\\release-license.lic\n? Select source of the repository keystore: generate\n? Provide keystore passphrase: JILR8MbG18U479RG\n? Provide storage class for the server: my-efs\n? Do you want to install a new PostgreSQL on the cluster: Yes\n? Provide Storage Class to be defined for PostgreSQL: my-efs\n? Provide PVC size for PostgreSQL (Gi): 1\n? Do you want to install a new RabbitMQ on the cluster: Yes\n? Replica count to be defined for RabbitMQ: 1\n? Storage Class to be defined for RabbitMQ: my-efs\n? Provide PVC size for RabbitMQ (Gi): 1\n         -------------------------------- ----------------------------------------------------\n        | LABEL                          | VALUE                                              |\n         -------------------------------- ----------------------------------------------------\n        | AccessModeRelease              | ReadWriteMany                                      |\n        | AdminPassword                  | admin                                              |\n        | CleanBefore                    | false                                              |\n        | CreateNamespace                | true                                               |\n        | EnablePostgresql               | true                                               |\n        | EnableRabbitmq                 | true                                               |\n        | ExternalOidcConf               | external: false                                    |\n        | GenerationDateTime             | 20230502-125654                                    |\n        | Http2EnabledRelease            | true                                               |\n        | ImageNameRelease               | xl-release                                         |\n        | ImageRegistryType              | default                                            |\n        | ImageTag                       | 23.1.0-rc.2                                        |\n        | IngressType                    | none                                               |\n        | IsCustomImageRegistry          | false                                              |\n        | K8sSetup                       | AWSEKS                                             |\n        | KeystorePassphrase             | JILR8MbG18U479RG                                   |\n        | License                        | LS0tIExpY2Vuc2UgLS0tCkxpY2Vuc2UgdmVyc2lvbjogMwpQ.. |\n        | LicenseFile                    | C:\\Users\\Administrator\\license\\release-license.lic |\n        | LicenseSource                  | file                                               |\n        | OidcConfigType                 | no-oidc                                            |\n        | OidcConfigTypeInstall          | no-oidc                                            |\n        | OperatorImageReleaseGeneric    | xebialabsunsupported/release-operator:23.1.0-rc.2  |\n        | OsType                         | windows                                            |\n        | PostgresqlPvcSize              | 1                                                  |\n        | PostgresqlStorageClass         | my-efs                                             |\n        | ProcessType                    | install                                            |\n        | PvcSizeRelease                 | 1                                                  |\n        | RabbitmqPvcSize                | 1                                                  |\n        | RabbitmqReplicaCount           | 1                                                  |\n        | RabbitmqStorageClass           | my-efs                                             |\n        | ReleaseKeystoreKeyPassword     | test                                               |\n        | ReleaseKeystorePassword        | test                                               |\n        | ReleaseKeystoreSecretName      | http2-tls-secret                                   |\n        | ReleaseKeystoreSource          | secret                                             |\n        | RemoteRunnerUseDefaultLocation | true                                               |\n        | RepositoryKeystoreSource       | generate                                           |\n        | RepositoryName                 | xebialabsunsupported                               |\n        | ServerType                     | dai-release                                        |\n        | ShortServerName                | xlr                                                |\n        | StorageClass                   | my-efs                                             |\n        | UseCustomNamespace             | false                                              |\n        | XlrReplicaCount                | 1                                                  |\n? Do you want to proceed to the deployment with these values? Yes\nFor current process files will be generated in the: digitalai/dai-release/digitalai/20230502-125654/kubernetes\nGenerated answers file successfully: digitalai\\generated_answers_dai-release_digitalai_install-20230502-125654.yaml\nStarting install processing.\nCreated keystore digitalai/dai-release/digitalai/20230502-125654/kubernetes/repository-keystore.jceks\nSkip creating namespace digitalai, already exists\nGenerated files successfully for AWSEKS installation.\nApplying resources to the cluster!\nApplied resource clusterrole/xlr-operator-proxy-role from the file digitalai\\dai-release\\digitalai\\20230502-125654\\kubernetes\\template\\cluster-role-digital-proxy-role.yaml\nApplied resource clusterrole/xlr-operator-manager-role from the file digitalai\\dai-release\\digitalai\\20230502-125654\\kubernetes\\template\\cluster-role-manager-role.yaml\nApplied resource clusterrole/xlr-operator-metrics-reader from the file digitalai\\dai-release\\digitalai\\20230502-125654\\kubernetes\\template\\cluster-role-metrics-reader.yaml\nApplied resource service/xlr-operator-controller-manager-metrics-service from the file digitalai\\dai-release\\digitalai\\20230502-125654\\kubernetes\\template\\controller-manager-metrics-service.yaml\nApplied resource customresourcedefinition/digitalaireleases.xlr.digital.ai from the file digitalai\\dai-release\\digitalai\\20230502-125654\\kubernetes\\template\\custom-resource-definition.yaml\nApplied resource deployment/xlr-operator-controller-manager from the file digitalai\\dai-release\\digitalai\\20230502-125654\\kubernetes\\template\\deployment.yaml\nApplied resource role/xlr-operator-leader-election-role from the file digitalai\\dai-release\\digitalai\\20230502-125654\\kubernetes\\template\\leader-election-role.yaml\nApplied resource rolebinding/xlr-operator-leader-election-rolebinding from the file digitalai\\dai-release\\digitalai\\20230502-125654\\kubernetes\\template\\leader-election-rolebinding.yaml\nApplied resource clusterrolebinding/xlr-operator-manager-rolebinding from the file digitalai\\dai-release\\digitalai\\20230502-125654\\kubernetes\\template\\manager-rolebinding.yaml\nApplied resource clusterrolebinding/xlr-operator-proxy-rolebinding from the file digitalai\\dai-release\\digitalai\\20230502-125654\\kubernetes\\template\\proxy-rolebinding.yaml\nApplied resource digitalairelease/dai-xlr from the file digitalai/dai-release/digitalai/20230502-125654/kubernetes/dai-release_cr.yaml\nInstall finished successfully!\n")),(0,s.kt)("h3",{id:"fields-updated-for-http2-configuration-in-the-cryaml"},"Fields updated for http2 configuration in the cr.yaml"),(0,s.kt)("p",null,"The following fields in cr yaml are updated to configure http2 for release."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},".spec.http2.enabled\n.spec.ssl.enabled\n.spec.ssl.keystorePassword\n.spec.ssl.keystoreKeypassword\n.spec.ssl.keystore\n")),(0,s.kt)("h3",{id:"accessing-the-release-ui"},"Accessing the release UI"),(0,s.kt)("p",null,"The ingress controller charts we support in the release helm chart(nginx and haproxy) do not support http2 backend. We need to setup external ingress controller seperately and configure to handle http2 backends, to expose the release server over public url. "),(0,s.kt)("p",null,"For accessing release UI without ingress controller setup, suggest to use kubectl port forward release http2 port to localhost and access release UI from localhost:5543."),(0,s.kt)("h4",{id:"command-to-port-forward-release-to-localhost-port"},"Command to port-forward Release to localhost port"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"kubectl port-forward pod/<release-pod-name> 5543:5543\n")),(0,s.kt)("p",null,"After port forwarding, release UI will be accessible from https://localhost:5543"))}u.isMDXComponent=!0}}]);