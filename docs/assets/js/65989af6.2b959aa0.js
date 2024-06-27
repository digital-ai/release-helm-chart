"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[45],{1306:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>n,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var s=t(4848),a=t(8453);const i={sidebar_position:10},n="Install Release with http2 backend enabled",l={id:"release-with-http2",title:"Install Release with http2 backend enabled",description:"This is internal documentation. This document can be used only if it was recommended by the Support Team.",source:"@site/docs/release-with-http2.md",sourceDirName:".",slug:"/release-with-http2",permalink:"/release-helm-chart/docs/release-with-http2",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Release Installation on a Air-gapped K8S Cluster",permalink:"/release-helm-chart/docs/air-gapped-installation"},next:{title:"RBAC rules for the Release installation",permalink:"/release-helm-chart/docs/operator-rbac"}},o={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create Keystore and Certificate using openssl",id:"create-keystore-and-certificate-using-openssl",level:3},{value:"Specifying Keystore for Release server when enabling http2",id:"specifying-keystore-for-release-server-when-enabling-http2",level:3},{value:"Create base64 encoded string of Keystore file",id:"create-base64-encoded-string-of-keystore-file",level:4},{value:"Create generic secret for Keystore",id:"create-generic-secret-for-keystore",level:4},{value:"Examples",id:"examples",level:3},{value:"Example 1: <code>xl kube install</code> using the Release server Keystore file",id:"example-1-xl-kube-install-using-the-release-server-keystore-file",level:4},{value:"Example 2: <code>xl kube install</code> using the Release server Keystore secret",id:"example-2-xl-kube-install-using-the-release-server-keystore-secret",level:4},{value:"Fields updated for http2 configuration in the cr.yaml",id:"fields-updated-for-http2-configuration-in-the-cryaml",level:3},{value:"Accessing the release UI",id:"accessing-the-release-ui",level:3},{value:"Command to port-forward Release to localhost port",id:"command-to-port-forward-release-to-localhost-port",level:4}];function c(e){const r={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"install-release-with-http2-backend-enabled",children:"Install Release with http2 backend enabled"}),"\n",(0,s.jsx)(r.admonition,{type:"caution",children:(0,s.jsx)(r.p,{children:"This is internal documentation. This document can be used only if it was recommended by the Support Team."})}),"\n",(0,s.jsx)(r.admonition,{type:"caution",children:(0,s.jsx)(r.p,{children:"From 23.3 version this document is outdated. Use official Digital.ai documentation."})}),"\n",(0,s.jsx)(r.p,{children:"This article describes the settings to be configured before you install Release with http2 backend enabled on a Kubernetes cluster."}),"\n",(0,s.jsx)(r.p,{children:"When Release is started with http2, it starts on https/ssl endpoint. And the xl-release backend communicates with ingress on the configured http2 backend endpoint."}),"\n",(0,s.jsx)(r.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://kubernetes.io/docs/tasks/tools/#kubectl",children:"kubectl"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://docs.digital.ai/bundle/devops-deploy-version-v.22.3/page/deploy/how-to/install-the-xl-cli.html",children:"XL CLI 22.3.5 or later"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://github.com/mikefarah/yq",children:"yq 4.18.2 or later"})}),"\n",(0,s.jsxs)(r.li,{children:["[openssl] (",(0,s.jsx)(r.a,{href:"https://www.openssl.org/source/",children:"https://www.openssl.org/source/"}),")"]}),"\n",(0,s.jsx)(r.li,{children:"keytool (Comes with Java JDK. Required only when generating keystore)"}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"create-keystore-and-certificate-using-openssl",children:"Create Keystore and Certificate using openssl"}),"\n",(0,s.jsx)(r.p,{children:"Run the following command:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"openssl req -x509 -out localhost.crt -keyout localhost.key \\ \n  -newkey rsa:2048 -sha256 \\\n  -subj '/CN=localhost'\n\nopenssl pkcs12 -export -in localhost.crt -inkey localhost.key -name localhost -out ssl-keystore.p12 \n"})}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Keep this handy:"})}),"\n",(0,s.jsxs)(r.p,{children:["The ",(0,s.jsx)(r.strong,{children:"keystore password"})," and ",(0,s.jsx)(r.strong,{children:"keystore key password"})," that are generated after running the openssl command. These are required as inputs when you install Release using ",(0,s.jsx)(r.code,{children:"xl kube install"})," for http2 enabled setup."]}),"\n",(0,s.jsx)(r.h3,{id:"specifying-keystore-for-release-server-when-enabling-http2",children:"Specifying Keystore for Release server when enabling http2"}),"\n",(0,s.jsx)(r.p,{children:"When you use XL-CLI, you can specify the created keystore in 2 ways:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"base64 encoded string (in a editor or specify the keystore file location)"}),"\n",(0,s.jsx)(r.li,{children:"generic secret"}),"\n"]}),"\n",(0,s.jsx)(r.h4,{id:"create-base64-encoded-string-of-keystore-file",children:"Create base64 encoded string of Keystore file"}),"\n",(0,s.jsx)(r.p,{children:"Run the following command:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"cat ssl-keystore.p12 | base64 -w 0\n"})}),"\n",(0,s.jsx)(r.h4,{id:"create-generic-secret-for-keystore",children:"Create generic secret for Keystore"}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Important"}),": This step is required only when specifying keystore as secret."]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Run the following command:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"kubectl create secret generic http2-tls-secret --from-file=ssl-keystore.p12=ssl-keystore.p12 -n digital-ai-release\n"})}),"\n",(0,s.jsx)(r.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(r.p,{children:"Below are two examples of running xl kube install with enabling http2 for release"}),"\n",(0,s.jsxs)(r.h4,{id:"example-1-xl-kube-install-using-the-release-server-keystore-file",children:["Example 1: ",(0,s.jsx)(r.code,{children:"xl kube install"})," using the Release server Keystore file"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"C:\\Users\\Administrator>xl-client-23.1.0-rc.2-windows-amd64.exe kube install\n? Following kubectl context will be used during execution: `arn:aws:eks:us-east-1:932770550094:cluster/devops-operator-cluster-test-cluster`? Yes\n? Select the Kubernetes setup where the Digital.ai Devops Platform will be installed, updated or cleaned: AWSEKS [AWS EKS]\n? Do you want to use an custom Kubernetes namespace (current default is 'digitalai'): No\n? Product server you want to perform install for: dai-release [Digital.ai Release]\n? Select type of image registry: default\n? Enter the repository name (eg: <repositoryName> from <repositoryName>/<imageName>:<tagName>): xebialabsunsupported\n? Enter the image name (eg: <imageName> from <repositoryName>/<imageName>:<tagName>): xl-release\n? Enter the image tag (eg: <tagName> from <repositoryName>/<imageName>:<tagName>): 23.1.0-rc.2\n? Enter the release server replica count: 1\n? Enter PVC size for Release (Gi): 1\n? Select between supported Access Modes: ReadWriteMany [ReadWriteMany]\n? Do you want to enable http2 for release: Yes\n? Select source of the keystore for the server: file [Path to the keystore file (the file can be in the raw format or base64 encoded)]\n? Provide keystore file for the server: C:\\Users\\Administrator\\certs\\localhost.p12\n? Provide the server keystore password: test\n? Provide the server keystore key passphrase: test\n? Select between supported ingress types: none [None - Ingress will not be set up during installation]\n? Provide administrator password: admin\n? Type of the OIDC configuration: no-oidc [No OIDC Configuration]\n? Enter the operator image to use (eg: <repositoryName>/<imageName>:<tagName>): xebialabsunsupported/release-operator:23.1.0-rc.2\n? Select source of the license: file\n? Provide license file for the server: C:\\Users\\Administrator\\license\\release-license.lic\n? Select source of the repository keystore: generate\n? Provide keystore passphrase: 4rSuEqVf21G6wS3g\n? Provide storage class for the server: my-efs\n? Do you want to install a new PostgreSQL on the cluster: Yes\n? Provide Storage Class to be defined for PostgreSQL: my-efs\n? Provide PVC size for PostgreSQL (Gi): 1\n? Do you want to install a new RabbitMQ on the cluster: Yes\n? Replica count to be defined for RabbitMQ: 1\n? Storage Class to be defined for RabbitMQ: my-efs\n? Provide PVC size for RabbitMQ (Gi): 1\n         -------------------------------- ----------------------------------------------------\n        | LABEL                          | VALUE                                              |\n         -------------------------------- ----------------------------------------------------\n        | AccessModeRelease              | ReadWriteMany                                      |\n        | AdminPassword                  | admin                                              |\n        | CleanBefore                    | false                                              |\n        | CreateNamespace                | true                                               |\n        | EnablePostgresql               | true                                               |\n        | EnableRabbitmq                 | true                                               |\n        | ExternalOidcConf               | external: false                                    |\n        | GenerationDateTime             | 20230502-114403                                    |\n        | Http2EnabledRelease            | true                                               |\n        | ImageNameRelease               | xl-release                                         |\n        | ImageRegistryType              | default                                            |\n        | ImageTag                       | 23.1.0-rc.2                                        |\n        | IngressType                    | none                                               |\n        | IsCustomImageRegistry          | false                                              |\n        | K8sSetup                       | AWSEKS                                             |\n        | KeystorePassphrase             | 4rSuEqVf21G6wS3g                                   |\n        | License                        | LS0tIExpY2Vuc2UgLS0tCkxpY2Vuc2UgdmVyc2lvbjogMwpQ.. |\n        | LicenseFile                    | C:\\Users\\Administrator\\license\\release-license.lic |\n        | LicenseSource                  | file                                               |\n        | OidcConfigType                 | no-oidc                                            |\n        | OidcConfigTypeInstall          | no-oidc                                            |\n        | OperatorImageReleaseGeneric    | xebialabsunsupported/release-operator:23.1.0-rc.2  |\n        | OsType                         | windows                                            |\n        | PostgresqlPvcSize              | 1                                                  |\n        | PostgresqlStorageClass         | my-efs                                             |\n        | ProcessType                    | install                                            |\n        | PvcSizeRelease                 | 1                                                  |\n        | RabbitmqPvcSize                | 1                                                  |\n        | RabbitmqReplicaCount           | 1                                                  |\n        | RabbitmqStorageClass           | my-efs                                             |\n        | ReleaseKeystore                | MIIJ/AIBAzCCCcIGCSqGSIb3DQEHAaCCCbMEggmvMIIJqzCC.. |\n        | ReleaseKeystoreFile            | C:\\Users\\Administrator\\certs\\localhost.p12         |\n        | ReleaseKeystoreKeyPassword     | test                                               |\n        | ReleaseKeystorePassword        | test                                               |\n        | ReleaseKeystoreSource          | file                                               |\n        | RemoteRunnerUseDefaultLocation | true                                               |\n        | RepositoryKeystoreSource       | generate                                           |\n        | RepositoryName                 | xebialabsunsupported                               |\n        | ServerType                     | dai-release                                        |\n        | ShortServerName                | xlr                                                |\n        | StorageClass                   | my-efs                                             |\n        | UseCustomNamespace             | false                                              |\n        | XlrReplicaCount                | 1                                                  |\n? Do you want to proceed to the deployment with these values? Yes\nFor current process files will be generated in the: digitalai/dai-release/digitalai/20230502-114403/kubernetes\nGenerated answers file successfully: digitalai\\generated_answers_dai-release_digitalai_install-20230502-114403.yaml\nStarting install processing.\nCreated keystore digitalai/dai-release/digitalai/20230502-114403/kubernetes/repository-keystore.jceks\nSkip creating namespace digitalai, already exists\nGenerated files successfully for AWSEKS installation.\nApplying resources to the cluster!\nApplied resource clusterrole/xlr-operator-proxy-role from the file digitalai\\dai-release\\digitalai\\20230502-114403\\kubernetes\\template\\cluster-role-digital-proxy-role.yaml\nApplied resource clusterrole/xlr-operator-manager-role from the file digitalai\\dai-release\\digitalai\\20230502-114403\\kubernetes\\template\\cluster-role-manager-role.yaml\nApplied resource clusterrole/xlr-operator-metrics-reader from the file digitalai\\dai-release\\digitalai\\20230502-114403\\kubernetes\\template\\cluster-role-metrics-reader.yaml\nApplied resource service/xlr-operator-controller-manager-metrics-service from the file digitalai\\dai-release\\digitalai\\20230502-114403\\kubernetes\\template\\controller-manager-metrics-service.yaml\nApplied resource customresourcedefinition/digitalaireleases.xlr.digital.ai from the file digitalai\\dai-release\\digitalai\\20230502-114403\\kubernetes\\template\\custom-resource-definition.yaml\nApplied resource deployment/xlr-operator-controller-manager from the file digitalai\\dai-release\\digitalai\\20230502-114403\\kubernetes\\template\\deployment.yaml\nApplied resource role/xlr-operator-leader-election-role from the file digitalai\\dai-release\\digitalai\\20230502-114403\\kubernetes\\template\\leader-election-role.yaml\nApplied resource rolebinding/xlr-operator-leader-election-rolebinding from the file digitalai\\dai-release\\digitalai\\20230502-114403\\kubernetes\\template\\leader-election-rolebinding.yaml\nApplied resource clusterrolebinding/xlr-operator-manager-rolebinding from the file digitalai\\dai-release\\digitalai\\20230502-114403\\kubernetes\\template\\manager-rolebinding.yaml\nApplied resource clusterrolebinding/xlr-operator-proxy-rolebinding from the file digitalai\\dai-release\\digitalai\\20230502-114403\\kubernetes\\template\\proxy-rolebinding.yaml\nApplied resource digitalairelease/dai-xlr from the file digitalai/dai-release/digitalai/20230502-114403/kubernetes/dai-release_cr.yaml\nInstall finished successfully!\n"})}),"\n",(0,s.jsxs)(r.h4,{id:"example-2-xl-kube-install-using-the-release-server-keystore-secret",children:["Example 2: ",(0,s.jsx)(r.code,{children:"xl kube install"})," using the Release server Keystore secret"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"C:\\Users\\Administrator>xl-client-23.1.0-rc.2-windows-amd64.exe kube install\n? Following kubectl context will be used during execution: `arn:aws:eks:us-east-1:932770550094:cluster/devops-operator-cluster-test-cluster`? Yes\n? Select the Kubernetes setup where the Digital.ai Devops Platform will be installed, updated or cleaned: AWSEKS [AWS EKS]\n? Do you want to use an custom Kubernetes namespace (current default is 'digitalai'): No\n? Product server you want to perform install for: dai-release [Digital.ai Release]\n? Select type of image registry: default\n? Enter the repository name (eg: <repositoryName> from <repositoryName>/<imageName>:<tagName>): xebialabsunsupported\n? Enter the image name (eg: <imageName> from <repositoryName>/<imageName>:<tagName>): xl-release\n? Enter the image tag (eg: <tagName> from <repositoryName>/<imageName>:<tagName>): 23.1.0-rc.2\n? Enter the release server replica count: 1\n? Enter PVC size for Release (Gi): 1\n? Select between supported Access Modes: ReadWriteMany [ReadWriteMany]\n? Do you want to enable http2 for release: Yes\n? Select source of the keystore for the server: secret [Generic Secret containing keystore file with key as ssl-keystore.p12]\n? Provide the generic secret name with the release server keystore added as key ssl-keystore.p12: http2-tls-secret\n? Provide the server keystore password: test\n? Provide the server keystore key passphrase: test\n? Select between supported ingress types: none [None - Ingress will not be set up during installation]\n? Provide administrator password: admin\n? Type of the OIDC configuration: no-oidc [No OIDC Configuration]\n? Enter the operator image to use (eg: <repositoryName>/<imageName>:<tagName>): xebialabsunsupported/release-operator:23.1.0-rc.2\n? Select source of the license: file\n? Provide license file for the server: C:\\Users\\Administrator\\license\\release-license.lic\n? Select source of the repository keystore: generate\n? Provide keystore passphrase: JILR8MbG18U479RG\n? Provide storage class for the server: my-efs\n? Do you want to install a new PostgreSQL on the cluster: Yes\n? Provide Storage Class to be defined for PostgreSQL: my-efs\n? Provide PVC size for PostgreSQL (Gi): 1\n? Do you want to install a new RabbitMQ on the cluster: Yes\n? Replica count to be defined for RabbitMQ: 1\n? Storage Class to be defined for RabbitMQ: my-efs\n? Provide PVC size for RabbitMQ (Gi): 1\n         -------------------------------- ----------------------------------------------------\n        | LABEL                          | VALUE                                              |\n         -------------------------------- ----------------------------------------------------\n        | AccessModeRelease              | ReadWriteMany                                      |\n        | AdminPassword                  | admin                                              |\n        | CleanBefore                    | false                                              |\n        | CreateNamespace                | true                                               |\n        | EnablePostgresql               | true                                               |\n        | EnableRabbitmq                 | true                                               |\n        | ExternalOidcConf               | external: false                                    |\n        | GenerationDateTime             | 20230502-125654                                    |\n        | Http2EnabledRelease            | true                                               |\n        | ImageNameRelease               | xl-release                                         |\n        | ImageRegistryType              | default                                            |\n        | ImageTag                       | 23.1.0-rc.2                                        |\n        | IngressType                    | none                                               |\n        | IsCustomImageRegistry          | false                                              |\n        | K8sSetup                       | AWSEKS                                             |\n        | KeystorePassphrase             | JILR8MbG18U479RG                                   |\n        | License                        | LS0tIExpY2Vuc2UgLS0tCkxpY2Vuc2UgdmVyc2lvbjogMwpQ.. |\n        | LicenseFile                    | C:\\Users\\Administrator\\license\\release-license.lic |\n        | LicenseSource                  | file                                               |\n        | OidcConfigType                 | no-oidc                                            |\n        | OidcConfigTypeInstall          | no-oidc                                            |\n        | OperatorImageReleaseGeneric    | xebialabsunsupported/release-operator:23.1.0-rc.2  |\n        | OsType                         | windows                                            |\n        | PostgresqlPvcSize              | 1                                                  |\n        | PostgresqlStorageClass         | my-efs                                             |\n        | ProcessType                    | install                                            |\n        | PvcSizeRelease                 | 1                                                  |\n        | RabbitmqPvcSize                | 1                                                  |\n        | RabbitmqReplicaCount           | 1                                                  |\n        | RabbitmqStorageClass           | my-efs                                             |\n        | ReleaseKeystoreKeyPassword     | test                                               |\n        | ReleaseKeystorePassword        | test                                               |\n        | ReleaseKeystoreSecretName      | http2-tls-secret                                   |\n        | ReleaseKeystoreSource          | secret                                             |\n        | RemoteRunnerUseDefaultLocation | true                                               |\n        | RepositoryKeystoreSource       | generate                                           |\n        | RepositoryName                 | xebialabsunsupported                               |\n        | ServerType                     | dai-release                                        |\n        | ShortServerName                | xlr                                                |\n        | StorageClass                   | my-efs                                             |\n        | UseCustomNamespace             | false                                              |\n        | XlrReplicaCount                | 1                                                  |\n? Do you want to proceed to the deployment with these values? Yes\nFor current process files will be generated in the: digitalai/dai-release/digitalai/20230502-125654/kubernetes\nGenerated answers file successfully: digitalai\\generated_answers_dai-release_digitalai_install-20230502-125654.yaml\nStarting install processing.\nCreated keystore digitalai/dai-release/digitalai/20230502-125654/kubernetes/repository-keystore.jceks\nSkip creating namespace digitalai, already exists\nGenerated files successfully for AWSEKS installation.\nApplying resources to the cluster!\nApplied resource clusterrole/xlr-operator-proxy-role from the file digitalai\\dai-release\\digitalai\\20230502-125654\\kubernetes\\template\\cluster-role-digital-proxy-role.yaml\nApplied resource clusterrole/xlr-operator-manager-role from the file digitalai\\dai-release\\digitalai\\20230502-125654\\kubernetes\\template\\cluster-role-manager-role.yaml\nApplied resource clusterrole/xlr-operator-metrics-reader from the file digitalai\\dai-release\\digitalai\\20230502-125654\\kubernetes\\template\\cluster-role-metrics-reader.yaml\nApplied resource service/xlr-operator-controller-manager-metrics-service from the file digitalai\\dai-release\\digitalai\\20230502-125654\\kubernetes\\template\\controller-manager-metrics-service.yaml\nApplied resource customresourcedefinition/digitalaireleases.xlr.digital.ai from the file digitalai\\dai-release\\digitalai\\20230502-125654\\kubernetes\\template\\custom-resource-definition.yaml\nApplied resource deployment/xlr-operator-controller-manager from the file digitalai\\dai-release\\digitalai\\20230502-125654\\kubernetes\\template\\deployment.yaml\nApplied resource role/xlr-operator-leader-election-role from the file digitalai\\dai-release\\digitalai\\20230502-125654\\kubernetes\\template\\leader-election-role.yaml\nApplied resource rolebinding/xlr-operator-leader-election-rolebinding from the file digitalai\\dai-release\\digitalai\\20230502-125654\\kubernetes\\template\\leader-election-rolebinding.yaml\nApplied resource clusterrolebinding/xlr-operator-manager-rolebinding from the file digitalai\\dai-release\\digitalai\\20230502-125654\\kubernetes\\template\\manager-rolebinding.yaml\nApplied resource clusterrolebinding/xlr-operator-proxy-rolebinding from the file digitalai\\dai-release\\digitalai\\20230502-125654\\kubernetes\\template\\proxy-rolebinding.yaml\nApplied resource digitalairelease/dai-xlr from the file digitalai/dai-release/digitalai/20230502-125654/kubernetes/dai-release_cr.yaml\nInstall finished successfully!\n"})}),"\n",(0,s.jsx)(r.h3,{id:"fields-updated-for-http2-configuration-in-the-cryaml",children:"Fields updated for http2 configuration in the cr.yaml"}),"\n",(0,s.jsx)(r.p,{children:"The following fields in cr yaml are updated to configure http2 for release."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:".spec.http2.enabled\n.spec.ssl.enabled\n.spec.ssl.keystorePassword\n.spec.ssl.keystoreKeypassword\n.spec.ssl.keystore\n"})}),"\n",(0,s.jsx)(r.h3,{id:"accessing-the-release-ui",children:"Accessing the release UI"}),"\n",(0,s.jsx)(r.p,{children:"The ingress controller charts we support in the release helm chart(nginx and haproxy) do not support http2 backend. We need to setup external ingress controller seperately and configure to handle http2 backends, to expose the release server over public url."}),"\n",(0,s.jsx)(r.p,{children:"For accessing release UI without ingress controller setup, suggest to use kubectl port forward release http2 port to localhost and access release UI from localhost:5543."}),"\n",(0,s.jsx)(r.h4,{id:"command-to-port-forward-release-to-localhost-port",children:"Command to port-forward Release to localhost port"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"kubectl port-forward pod/<release-pod-name> 5543:5543\n"})}),"\n",(0,s.jsxs)(r.p,{children:["After port forwarding, release UI will be accessible from ",(0,s.jsx)(r.a,{href:"https://localhost:5543",children:"https://localhost:5543"})]})]})}function p(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,r,t)=>{t.d(r,{R:()=>n,x:()=>l});var s=t(6540);const a={},i=s.createContext(a);function n(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:n(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);