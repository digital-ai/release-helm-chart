
USER root

RUN microdnf clean all &&  \
    microdnf upgrade -y \
        --refresh \
        --best \
        --nodocs \
        --noplugins \
        --setopt=install_weak_deps=0 && \
    microdnf clean all

USER ${USER_UID}

LABEL name="Digital.ai Release Operator" \
      vendor="Digital.ai" \
      version="${VERSION}" \
      release="1" \
      summary="Digital.ai Release Operator based on helm chart" \
      description="Digital.ai Release Operator based on helm chart from https://github.com/digital-ai/release-helm-chart"

COPY licenses /licenses
COPY linux-amd64/helm /usr/local/bin/helm
