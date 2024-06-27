"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[403],{800:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>a,contentTitle:()=>o,default:()=>g,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var s=r(4848),n=r(8453);const t={sidebar_position:10},o="Release Installation on a Air-gapped K8S Cluster",l={id:"air-gapped-installation",title:"Release Installation on a Air-gapped K8S Cluster",description:"This is internal documentation. This document can be used only if it was recommended by the Support Team.",source:"@site/docs/air-gapped-installation.md",sourceDirName:".",slug:"/air-gapped-installation",permalink:"/release-helm-chart/docs/air-gapped-installation",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Manual integration with the Identity Service",permalink:"/release-helm-chart/docs/integrating-with-identity-service"},next:{title:"Install Release with http2 backend enabled",permalink:"/release-helm-chart/docs/release-with-http2"}},a={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Installation steps",id:"installation-steps",level:2},{value:"Download matching version of the xl-op-blueprints",id:"download-matching-version-of-the-xl-op-blueprints",level:3},{value:"Get the operator related images to your image repository",id:"get-the-operator-related-images-to-your-image-repository",level:3},{value:"Prerequisite Images",id:"prerequisite-images",level:4},{value:"If you are using nginx include",id:"if-you-are-using-nginx-include",level:4},{value:"If you are using haproxy include",id:"if-you-are-using-haproxy-include",level:4},{value:"If you are using embedded keycloak include",id:"if-you-are-using-embedded-keycloak-include",level:4},{value:"If you are using embedded postgresql include",id:"if-you-are-using-embedded-postgresql-include",level:4},{value:"If you are using embedded rabbitmq include",id:"if-you-are-using-embedded-rabbitmq-include",level:4},{value:"How to push image to internally accessible docker registry",id:"how-to-push-image-to-internally-accessible-docker-registry",level:3},{value:"Create registry secret if using a private image registry protected by password",id:"create-registry-secret-if-using-a-private-image-registry-protected-by-password",level:3},{value:"Use <code>xl kube install</code> to install using custom docker image registry option",id:"use-xl-kube-install-to-install-using-custom-docker-image-registry-option",level:3},{value:"Upgrade steps",id:"upgrade-steps",level:2},{value:"Example of running upgrade using custom docker image registry option",id:"example-of-running-upgrade-using-custom-docker-image-registry-option",level:3},{value:"For Default image registry",id:"for-default-image-registry",level:3},{value:"For custom docker registry (public)",id:"for-custom-docker-registry-public",level:3},{value:"For custom docker registry (private)",id:"for-custom-docker-registry-private",level:3},{value:"Image repository related fields that are getting updated in Installation and Upgrade process by xl cli when using a custom image registry",id:"image-repository-related-fields-that-are-getting-updated-in-installation-and-upgrade-process-by-xl-cli-when-using-a-custom-image-registry",level:2},{value:"kubernetes/dai-release_cr.yaml",id:"kubernetesdai-release_cryaml",level:4},{value:"If you are using nginx",id:"if-you-are-using-nginx",level:5},{value:"If you are using haproxy",id:"if-you-are-using-haproxy",level:5},{value:"If you are using embedded keycloak",id:"if-you-are-using-embedded-keycloak",level:5},{value:"If you are using embedded postgresql",id:"if-you-are-using-embedded-postgresql",level:5},{value:"If you are using embedded rabbitmq",id:"if-you-are-using-embedded-rabbitmq",level:5},{value:"kubernetes/template/deployment.yaml",id:"kubernetestemplatedeploymentyaml",level:4},{value:"kubernetes/template/postgresql-init-keycloak-db.yaml",id:"kubernetestemplatepostgresql-init-keycloak-dbyaml",level:4}];function d(e){const i={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"release-installation-on-a-air-gapped-k8s-cluster",children:"Release Installation on a Air-gapped K8S Cluster"}),"\n",(0,s.jsx)(i.admonition,{type:"caution",children:(0,s.jsx)(i.p,{children:"This is internal documentation. This document can be used only if it was recommended by the Support Team."})}),"\n",(0,s.jsx)(i.admonition,{type:"caution",children:(0,s.jsx)(i.p,{children:"From 23.3 version this document is outdated. Use official Digital.ai documentation."})}),"\n",(0,s.jsx)(i.h2,{id:"requirements",children:"Requirements"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Running k8s cluster"}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"kubectl"})," connected to the cluster"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"xl-cli"})," installed - version 23.1.x"]}),"\n",(0,s.jsx)(i.li,{children:"Release operator - version 23.1.x"}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"installation-steps",children:"Installation steps"}),"\n",(0,s.jsx)(i.h3,{id:"download-matching-version-of-the-xl-op-blueprints",children:"Download matching version of the xl-op-blueprints"}),"\n",(0,s.jsxs)(i.p,{children:["Check what you need with ",(0,s.jsx)(i.code,{children:"xl kube help"}),", for example:"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{children:"\u276f xl kube help\n\nInstall, upgrade or clean Digital.ai Deploy or Digital.ai Release on a Kubernetes cluster using operator technology.\n\nInstallation blueprint files are used from https://dist.xebialabs.com/public/xl-op-blueprints/23.1.x/\n\nYou need to have kubectl installed and configured for the target Kubernetes cluster.\n"})}),"\n",(0,s.jsxs)(i.p,{children:["You can see from here that ",(0,s.jsx)(i.code,{children:"xl kube"})," needs blueprints from location ",(0,s.jsx)(i.a,{href:"https://dist.xebialabs.com/public/xl-op-blueprints/23.1.x/",children:"https://dist.xebialabs.com/public/xl-op-blueprints/23.1.x/"}),"\n(Note: 23.1.x denotes the appropriate version of ",(0,s.jsx)(i.code,{children:"xl-op-blueprints"})," pointed by ",(0,s.jsx)(i.code,{children:"xl"}),". Use the specific version in your case.)"]}),"\n",(0,s.jsxs)(i.p,{children:["You need to download and put all files from that location to the server where you will execute ",(0,s.jsx)(i.code,{children:"xl kube"}),"."]}),"\n",(0,s.jsxs)(i.admonition,{type:"tip",children:[(0,s.jsxs)(i.p,{children:["You can download zipped version of the xl-op-blueprints from here:\n",(0,s.jsx)(i.a,{href:"https://nexus.xebialabs.com/nexus/content/repositories/digitalai-public/ai/digital/xlclient/blueprints/xl-op-blueprints/",children:"https://nexus.xebialabs.com/nexus/content/repositories/digitalai-public/ai/digital/xlclient/blueprints/xl-op-blueprints/"})]}),(0,s.jsxs)(i.p,{children:["Unzip it to the server where you will execute ",(0,s.jsx)(i.code,{children:"xl kube"}),"."]})]}),"\n",(0,s.jsx)(i.h3,{id:"get-the-operator-related-images-to-your-image-repository",children:"Get the operator related images to your image repository"}),"\n",(0,s.jsx)(i.p,{children:"The kubernetes cluster running in airgapped environment cannot download any image from public registry (such as docker.io, gcr.io, quay.io). The images need to be pushed to a image registry accessible to the kubernetes cluster. Create either a private image repository on your cloud provider or a local image repository that is accessible to the kubernetes cluster."}),"\n",(0,s.jsx)(i.h4,{id:"prerequisite-images",children:"Prerequisite Images"}),"\n",(0,s.jsx)(i.p,{children:"Push the images according to your planned installation to your image repository.\nFor example, for version 23.1.x, following is the list of the images that you will need:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"docker.io/xebialabs/xl-release:23.1.x"}),"\n",(0,s.jsx)(i.li,{children:"docker.io/xebialabs/tiny-tools:22.2.0"}),"\n",(0,s.jsx)(i.li,{children:"docker.io/xebialabs/release-operator:23.1.x"}),"\n",(0,s.jsxs)(i.li,{children:["gcr.io/kubebuilder/kube-rbac-proxy",":v0",".8.0"]}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"if-you-are-using-nginx-include",children:"If you are using nginx include"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"docker.io/bitnami/nginx:1.22.1-debian-11-r44"}),"\n",(0,s.jsx)(i.li,{children:"docker.io/bitnami/nginx-ingress-controller:1.6.4-debian-11-r5"}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"if-you-are-using-haproxy-include",children:"If you are using haproxy include"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["quay.io/jcmoraisjr/haproxy-ingress",":v0",".14.2"]}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"if-you-are-using-embedded-keycloak-include",children:"If you are using embedded keycloak include"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"docker.io/jboss/keycloak:17.0.1"}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"if-you-are-using-embedded-postgresql-include",children:"If you are using embedded postgresql include"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"docker.io/bitnami/postgresql:14.5.0-debian-11-r35"}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"if-you-are-using-embedded-rabbitmq-include",children:"If you are using embedded rabbitmq include"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"docker.io/bitnami/rabbitmq:3.11.10-debian-11-r0"}),"\n",(0,s.jsx)(i.li,{children:"docker.io/bitnami/bitnami-shell:11-debian-11-r92"}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"how-to-push-image-to-internally-accessible-docker-registry",children:"How to push image to internally accessible docker registry"}),"\n",(0,s.jsx)(i.p,{children:"You need to pull the required images first on a bastion instance where public internet connectivity is there, then tag it and push it to your internally accessible docker image registry. Your kubernetes cluster will pull images from the docker registry."}),"\n",(0,s.jsxs)(i.p,{children:["For example with a docker registry at ",(0,s.jsx)(i.code,{children:"myrepo_host"}),", the steps to push a docker image(for eg. xl-release) to the repository ",(0,s.jsx)(i.code,{children:"myrepo"})," would be as follows."]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{children:"docker pull docker.io/xebialabs/xl-release:22.3.1\ndocker tag docker.io/xebialabs/xl-release:22.3.1 myrepo_host/myrepo/xl-release:22.3.1\ndocker push myrepo_host/myrepo/xl-release:22.3.1\n"})}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsx)(i.p,{children:"Make sure, you're logged in to the docker registry before pushing the docker image."}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"create-registry-secret-if-using-a-private-image-registry-protected-by-password",children:"Create registry secret if using a private image registry protected by password"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{children:"kubectl create secret docker-registry regcred \\\n  --docker-server=myrepo_host \\\n  --docker-username=<reg-user> \\\n  --docker-password=<reg-password> \\\n  -n digitalai\n"})}),"\n",(0,s.jsxs)(i.p,{children:["This example creates a secret ",(0,s.jsx)(i.code,{children:"regcred"})," which will be used for pull secrets for pulling image when using custom private image registry."]}),"\n",(0,s.jsxs)(i.h3,{id:"use-xl-kube-install-to-install-using-custom-docker-image-registry-option",children:["Use ",(0,s.jsx)(i.code,{children:"xl kube install"})," to install using custom docker image registry option"]}),"\n",(0,s.jsxs)(i.p,{children:["When using custom docker registry, the operator image will be in the format ",(0,s.jsx)(i.code,{children:"myrepo_host/myrepo/release-operator:image_tag"})]}),"\n",(0,s.jsxs)(i.p,{children:["Here is example of the installation on minikube with a local docker registry running at ",(0,s.jsx)(i.code,{children:"localhost:5000"})]}),"\n",(0,s.jsxs)(i.p,{children:["In the below example the registry name is ",(0,s.jsx)(i.code,{children:"localhost:5000"}),", the repository name is ",(0,s.jsx)(i.code,{children:"myrepo"}),", so operator image would be like ",(0,s.jsx)(i.code,{children:"localhost:5000/myrepo/release-operator:23.1.x"}),". Remember to override default answer and specify in this format. And also use the actual image tag version in place of ",(0,s.jsx)(i.code,{children:"23.1.x"})]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{children:"\u276f xl kube install -l ./xl-op-blueprints\n? Following kubectl context will be used during execution: `minikube`? Yes\n? Select the Kubernetes setup where the Digital.ai Devops Platform will be installed, updated or cleaned: PlainK8s [Plain multi-node K8s cluster]\n? Do you want to use an custom Kubernetes namespace (current default is 'digitalai'): No\n? Do you want to create custom Kubernetes namespace digitalai, it does not exist: Yes\n? Product server you want to perform install for: dai-release [Digital.ai Release]\n? Select type of image registry: public [Custom Public Registry (Uses a specific custom registry)]\n? Enter the custom docker image registry name: localhost:5000\n? Enter the repository name (eg: <repositoryName> from <repositoryName>/<imageName>:<tagName>): myrepo\n? Enter the image name (eg: <imageName> from <repositoryName>/<imageName>:<tagName>): xl-release\n? Enter the image tag (eg: <tagName> from <repositoryName>/<imageName>:<tagName>): 23.1.x\n? Enter PVC size for Release (Gi): 1\n? Select between supported Access Modes: ReadWriteMany [ReadWriteMany]\n? Select between supported ingress types: nginx [NGINX]\n? Do you want to enable an TLS/SSL configuration (if yes, requires existing TLS secret in the namespace): No\n? Provide DNS name for accessing UI of the server: test.com\n? Provide administrator password: OJnEi1BMBRuDm3ny\n? Type of the OIDC configuration: no-oidc [No OIDC Configuration]\n? Enter the operator image to use (eg: <imageRegistryName>/<repositoryName>/<imageName>:<tagName>): localhost:5000/myrepo/release-operator:23.1.x\n? Select source of the license: file [Path to the license file (the file can be in clean text or base64 encoded)]\n? Provide license file for the server: ./xl-release-license.lic\n? Select source of the repository keystore: generate [Generate the repository keystore during installation (you need to have keytool utility installed in your path)]\n? Provide keystore passphrase: ANk9nAJnmQjLmFPy\n? Provide storage class for the server: standard\n? Do you want to install a new PostgreSQL on the cluster: Yes\n? Provide Storage Class to be defined for PostgreSQL: standard\n? Provide PVC size for PostgreSQL (Gi): 1\n? Do you want to install a new RabbitMQ on the cluster: Yes\n? Replica count to be defined for RabbitMQ: 1\n? Storage Class to be defined for RabbitMQ: standard\n? Provide PVC size for RabbitMQ (Gi): 1\n\n...\n\n? Do you want to proceed to the deployment with these values? Yes\nFor current process files will be generated in the: digitalai/dai-release/digitalai/20221019-234412/kubernetes\nGenerated answers file successfully: digitalai/generated_answers_dai-release_digitalai_install-20221019-234412.yaml\nStarting install processing.\n...\n"})}),"\n",(0,s.jsx)(i.p,{children:"After the install command completes successfully, you will see operator and other resources pods coming up and running."}),"\n",(0,s.jsx)(i.h2,{id:"upgrade-steps",children:"Upgrade steps"}),"\n",(0,s.jsxs)(i.p,{children:["Use ",(0,s.jsx)(i.code,{children:"xl kube upgrade"})," to upgrade. It is similar to installation steps. Here the already installed cluster resources are overwritten/upgraded with the newly supplied values."]}),"\n",(0,s.jsx)(i.h3,{id:"example-of-running-upgrade-using-custom-docker-image-registry-option",children:"Example of running upgrade using custom docker image registry option"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{children:"\u276f xl kube upgrade -l ./xl-op-blueprints\n...\n? Select type of image registry: public [Custom Public Registry (Uses a specific custom registry)]\n? Enter the custom docker image registry name: localhost:5000\n? Enter the repository name (eg: <repositoryName> from <repositoryName>/<imageName>:<tagName>): myrepo\n...\n? Enter the operator image to use (eg: <imageRegistryName>/<repositoryName>/<imageName>:<tagName>): localhost:5000/myrepo/release-operator:22.3.1\n...\n? Edit list of custom resource keys that will migrate to the new Release CR: \n...\n? Do you want to proceed to the deployment with these values? Yes\nFor current process files will be generated in the: digitalai/dai-release/digitalai/20221020-004412/kubernetes\nGenerated answers file successfully: digitalai/generated_answers_dai-release_digitalai_upgrade-20221020-004412.yaml\nStarting upgrade processing.\n...\n"})}),"\n",(0,s.jsxs)(i.p,{children:["During upgrade for the question ",(0,s.jsx)(i.code,{children:"Edit list of custom resource keys that will migrate to the new Release CR:"})," append to the list following keys:"]}),"\n",(0,s.jsx)(i.h3,{id:"for-default-image-registry",children:"For Default image registry"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{children:".spec.TinyToolsImageRepository\n.spec.nginx-ingress-controller.defaultBackend.image.registry\n.spec.nginx-ingress-controller.defaultBackend.image.repository\n.spec.nginx-ingress-controller.image.registry\n.spec.nginx-ingress-controller.image.repository\n.spec.haproxy-ingress.controller.image.repository\n.spec.keycloak.image.repository\n.spec.keycloak.postgresql.image.registry\n.spec.keycloak.postgresql.image.repository\n.spec.postgresql.image.registry\n.spec.postgresql.image.repository\n.spec.rabbitmq.image.registry\n.spec.rabbitmq.image.repository\n.spec.rabbitmq.volumePermissions.image.registry\n.spec.rabbitmq.volumePermissions.image.repository\n"})}),"\n",(0,s.jsx)(i.h3,{id:"for-custom-docker-registry-public",children:"For custom docker registry (public)"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{children:".spec.TinyToolsImageRepository\n.spec.nginx-ingress-controller.defaultBackend.image.repository\n.spec.nginx-ingress-controller.image.repository\n.spec.nginx-ingress-controller.global.imageRegistry\n.spec.haproxy-ingress.controller.image.repository\n.spec.keycloak.image.repository\n.spec.keycloak.postgresql.image.registry\n.spec.keycloak.postgresql.image.repository\n.spec.postgresql.image.repository\n.spec.postgresql.global.imageRegistry\n.spec.rabbitmq.image.repository\n.spec.rabbitmq.global.imageRegistry\n.spec.rabbitmq.volumePermissions.image.repository\n"})}),"\n",(0,s.jsx)(i.h3,{id:"for-custom-docker-registry-private",children:"For custom docker registry (private)"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{children:".spec.TinyToolsImageRepository\n.spec.nginx-ingress-controller.defaultBackend.image.repository\n.spec.nginx-ingress-controller.image.repository\n.spec.nginx-ingress-controller.global.imageRegistry\n.spec.haproxy-ingress.controller.image.repository\n.spec.keycloak.image.repository\n.spec.keycloak.postgresql.image.registry\n.spec.keycloak.postgresql.image.repository\n.spec.postgresql.image.repository\n.spec.postgresql.global.imageRegistry\n.spec.rabbitmq.image.repository\n.spec.rabbitmq.global.imageRegistry\n.spec.rabbitmq.volumePermissions.image.repository\n.spec.nginx-ingress-controller.global.imagePullSecrets\n.spec.keycloak.imagePullSecrets\n.spec.keycloak.postgresql.imagePullSecrets\n.spec.postgresql.global.imagePullSecrets\n.spec.rabbitmq.global.imagePullSecrets\n"})}),"\n",(0,s.jsx)(i.h2,{id:"image-repository-related-fields-that-are-getting-updated-in-installation-and-upgrade-process-by-xl-cli-when-using-a-custom-image-registry",children:"Image repository related fields that are getting updated in Installation and Upgrade process by xl cli when using a custom image registry"}),"\n",(0,s.jsx)(i.h4,{id:"kubernetesdai-release_cryaml",children:"kubernetes/dai-release_cr.yaml"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:'spec.ImageRepository: "myrepo_host/myrepo/xl-release"'}),"\n",(0,s.jsx)(i.li,{children:'spec.TinyToolsImageRepository: "myrepo_host/myrepo/tiny-tools"'}),"\n",(0,s.jsx)(i.li,{children:"spec.ImagePullSecret: regcred (only for custom private image registry requiring authentication)"}),"\n"]}),"\n",(0,s.jsx)(i.h5,{id:"if-you-are-using-nginx",children:"If you are using nginx"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"spec.nginx-ingress-controller.defaultBackend.image.registry: myrepo_host"}),"\n",(0,s.jsx)(i.li,{children:"spec.nginx-ingress-controller.defaultBackend.image.repository: myrepo/nginx"}),"\n",(0,s.jsx)(i.li,{children:"spec.nginx-ingress-controller.image.registry: myrepo_host"}),"\n",(0,s.jsx)(i.li,{children:"spec.nginx-ingress-controller.image.repository: myrepo/nginx-ingress-controller"}),"\n",(0,s.jsx)(i.li,{children:"spec.nginx-ingress-controller.imagePullSecrets.[0]: regcred (only for custom private image registry requiring authentication)"}),"\n"]}),"\n",(0,s.jsx)(i.h5,{id:"if-you-are-using-haproxy",children:"If you are using haproxy"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"spec.haproxy-ingress.controller.image.repository: myrepo_host/myrepo/haproxy-ingress"}),"\n",(0,s.jsx)(i.li,{children:"spec.haproxy-ingress.imagePullSecrets[0].name: regcred (only for custom private image registry requiring authentication)"}),"\n"]}),"\n",(0,s.jsx)(i.h5,{id:"if-you-are-using-embedded-keycloak",children:"If you are using embedded keycloak"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"spec.keycloak.image.repository: myrepo_host/myrepo/keycloak"}),"\n",(0,s.jsx)(i.li,{children:"spec.keycloak.postgresql.image.registry: myrepo_host"}),"\n",(0,s.jsx)(i.li,{children:"spec.keycloak.postgresql.image.repository: myrepo/postgresql"}),"\n",(0,s.jsx)(i.li,{children:"spec.keycloak.imagePullSecrets[0].name: regcred (only for custom private image registry requiring authentication)"}),"\n",(0,s.jsx)(i.li,{children:"spec.keycloak.postgres.imagePullSecrets[0].name: regcred (only for custom private image registry requiring authentication)"}),"\n"]}),"\n",(0,s.jsx)(i.h5,{id:"if-you-are-using-embedded-postgresql",children:"If you are using embedded postgresql"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"spec.postgresql.image.registry: myrepo_host"}),"\n",(0,s.jsx)(i.li,{children:"spec.postgresql.image.repository: myrepo/postgresql"}),"\n",(0,s.jsx)(i.li,{children:"spec.postgres.global.imagePullSecrets.[0]: regcred (only for custom private image registry requiring authentication)"}),"\n"]}),"\n",(0,s.jsx)(i.h5,{id:"if-you-are-using-embedded-rabbitmq",children:"If you are using embedded rabbitmq"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"spec.rabbitmq.image.registry: myrepo_host"}),"\n",(0,s.jsx)(i.li,{children:"spec.rabbitmq.image.repository: myrepo/rabbitmq"}),"\n",(0,s.jsx)(i.li,{children:"spec.rabbitmq.volumePermissions.image.registry: myrepo_host"}),"\n",(0,s.jsx)(i.li,{children:"spec.rabbitmq.volumePermissions.image.repository: myrepo/bitnami-shell"}),"\n",(0,s.jsx)(i.li,{children:"spec.rabbitmq.global.imagePullSecrets.[0]: regcred (only for custom private image registry requiring authentication)"}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"kubernetestemplatedeploymentyaml",children:"kubernetes/template/deployment.yaml"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["spec.template.spec.containers[0].image: myrepo_host/myrepo/kube-rbac-proxy",":v0",".8.0"]}),"\n",(0,s.jsxs)(i.li,{children:["spec.template.spec.containers[1].image: myrepo_host/myrepo/release-operator",":operator-imageTag-given-in-xl-cmd-question"]}),"\n",(0,s.jsx)(i.li,{children:"spec.template.spec.imagePullSecrets[0].name: regcred (only for custom private image registry requiring authentication)"}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"kubernetestemplatepostgresql-init-keycloak-dbyaml",children:"kubernetes/template/postgresql-init-keycloak-db.yaml"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"spec.template.spec.initContainers[0].image: myrepo_host/myrepo/tiny-tools:22.2.0"}),"\n",(0,s.jsx)(i.li,{children:"spec.template.spec.containers[0].image: myrepo_host/myrepo/tiny-tools:22.2.0"}),"\n",(0,s.jsx)(i.li,{children:"spec.template.spec.imagePullSecrets[0].name: regcred (only for custom private image registry requiring authentication)"}),"\n"]})]})}function g(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,i,r)=>{r.d(i,{R:()=>o,x:()=>l});var s=r(6540);const n={},t=s.createContext(n);function o(e){const i=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(t.Provider,{value:i},e.children)}}}]);