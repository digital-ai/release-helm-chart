Digital.ai Release empowers developer teams to seamlessly release and deploy software on a large scale across hybrid environments, all while ensuring that compliance and security requirements are effectively in place.

## About this Operator

Digital.ai Releas operator is based on helm chart that is available from [here](https://github.com/digital-ai/release-helm-chart).
The operator includes subcharts which are dependencies for the Release containers to run successfully. 
Nginx Ingress and Haproxy ingress are disabled and not used with installations on the Openshift (and the images are not used in the installation)

### Subcharts include:

- [PostgresSQL](https://github.com/bitnami/charts/tree/main/bitnami/postgresql)
- [RabbitMQ](https://github.com/bitnami/charts/tree/main/bitnami/rabbitmq)
- [Nginx Ingress controller](https://github.com/bitnami/charts/tree/main/bitnami/nginx-ingress-controller)
- [Haproxy Ingress controller](https://github.com/jcmoraisjr/haproxy-ingress/)

## Installation

The installation can be done using the sample configuration provided below. Please note that this is a minimal configuration and it's not recommended for production use.

```
apiVersion: xlr.digital.ai/v1alpha1
kind: DigitalaiRelease
metadata:
  name: dair-doc
spec:
  k8sSetup:
    platform: Openshift
  auth:
    adminPassword: 'admin'
  licenseAcceptEula: true
  keystore:
    passphrase: 'test1234'
    keystore: 'zs7OzgAAAAIAAAABAAAAAwAWZGVwbG95aXQtcGFzc3N3b3JkLWtleQAAAY66Cf9nrO0ABXNyADNjb20uc3VuLmNyeXB0by5wcm92aWRlci5TZWFsZWRPYmplY3RGb3JLZXlQcm90ZWN0b3LNV8pZ5zC7UwIAAHhyABlqYXZheC5jcnlwdG8uU2VhbGVkT2JqZWN0PjY9psO3VHACAARbAA1lbmNvZGVkUGFyYW1zdAACW0JbABBlbmNyeXB0ZWRDb250ZW50cQB+AAJMAAlwYXJhbXNBbGd0ABJMamF2YS9sYW5nL1N0cmluZztMAAdzZWFsQWxncQB+AAN4cHVyAAJbQqzzF/gGCFTgAgAAeHAAAAARMA8ECD0yEJAHFhBOAgMDDUB1cQB+AAUAAACQUhNP1jw1dwOxWArpm0JBAX40fr4fvvAmyGGrx7mzlCVjb4uOxi4IroUoxcbBx8cpjiS6QzCUg6chsCQ0IABB6s7Tow2VR8vRlxXyxpJXvlUwfH8hwJn/ZK8rQuDsCkzd2rC+lYR0pEO0lUP3/AQ7dHJ4TgloyZOKKbWRNJvE4K4EOafqASuNTkyrr0SPflRydAAWUEJFV2l0aE1ENUFuZFRyaXBsZURFU3QAFlBCRVdpdGhNRDVBbmRUcmlwbGVERVO3iVKkgrEJQ78wacyjhp3UZBSB/Q=='
  replicaCount: 1
  hooks:
    getLicense:
      enabled: true
  persistence:
    storageClass: ''
    accessModes:
      - ReadWriteOnce
    size: 1Gi
  podSecurityContext:
    enabled: true
  containerSecurityContext:
    enabled: true    
  securityContextConstraints:
    enabled: true
  volumePermissions:
    enabled: false
  route:
    enabled: false
    annotations:
      haproxy.router.openshift.io/cookie_name: JSESSIONID
      haproxy.router.openshift.io/disable_cookies: 'false'
      haproxy.router.openshift.io/rewrite-target: /
      haproxy.router.openshift.io/timeout: 120s
    hostname: '<mandatory-release-hostname>'
    path: /
    tls:
      enabled: true
      termination: edge
  postgresql:
    install: true
    primary:
      persistence:
        size: 1Gi
        storageClass: ''
      podSecurityContext:
        enabled: true
      containerSecurityContext:
        enabled: true
      securityContextConstraints:
        enabled: true
    volumePermissions:
      enabled: true
  rabbitmq:
    install: true
    persistence:
      size: 1Gi
      storageClass: ''
    replicaCount: 1
    podSecurityContext:
      enabled: true
    containerSecurityContext:
      enabled: true
    securityContextConstraints:
      enabled: true
    volumePermissions:
      enabled: true
```

### Configuration Details

The sample configuration uses:

- Autogenerated limited license
- Simple administrator initial password
- Default keystore setup
- Only one replica is set for all pods
- All Pods are missing resource limit setup
- Default storage class and minimal size for persistent storage
- Release pods are using persistence access mode `ReadWriteOnce`, for Release pods the requirement is to have `ReadWriteMany`
- Embedded PostgreSQL for DB management
- Embedded RabbitMQ for message queue management

## Customize Your Configuration

Configurations can be further personalized. Here are some areas you might want to consider:

- **External DB:** For avoiding uncertified container images required by the subcharts, refer to these [instructions for setting up an external DB](https://docs.digital.ai/bundle/devops-release-version-v.24.1/page/release/operator/xl-op-release-external-db-migration.html).
- **External Message Queue:** To set up an external message queue, follow this [guide](https://docs.digital.ai/bundle/devops-release-version-v.24.1/page/release/operator/xl-op-release-external-mq-migration.html).
- **Custom License:** To apply a custom license, refer to this [process](https://docs.digital.ai/bundle/devops-release-version-v.24.1/page/release/operator/xl-op-release-license-update.html).
- **Custom Configuration:** For modifying the configuration files, use this [guide](https://docs.digital.ai/bundle/devops-release-version-v.24.1/page/release/operator/xl-op-release-customize.html).
- **Truststore Setup:** For modifying default truststore for Release, use this [guide](https://docs.digital.ai/bundle/devops-release-version-v.24.1/page/release/operator/xl-op-release-setup-truststore.html).
- **Plugin Management:** Managing plugins can be done using the following methods:
    - [Plugin Management using XL CLI](https://docs.digital.ai/bundle/devops-release-version-v.24.1/page/release/operator/xl-op-release-plugin-management.html)
    - [Managing Plugins Offline for Kubernetes Environment](https://docs.digital.ai/bundle/devops-release-version-v.24.1/page/release/operator/xl-op-release-offline-plugin-management.html)