#!groovy
@Library('jenkins-pipeline-libs@master')
import com.xebialabs.pipeline.utils.Branches

pipeline {
    agent none

    options {
        buildDiscarder(logRotator(numToKeepStr: '20', artifactDaysToKeepStr: '7', artifactNumToKeepStr: '5'))
        timeout(time: 1, unit: 'HOURS')
        timestamps()
        ansiColor('xterm')
    }

    environment {
        REPOSITORY_NAME = 'release-helm-chart'
        RELEASE_EXPLICIT = "25.1.0-${getBranch()}"
    }

    stages {
        stage('Validate Release Helm Readme') {
            parallel {
                stage('Validate Readme Release Helm Chart') {
                    agent {
                        node {
                            label 'xld'
                        }
                    }

                    tools {
                        jdk env.LINUX_JDK_NAME
                    }

                    steps {
                        checkout scm
                        sh "./gradlew clean buildReadme --info"
                    }
                }
                stage('Lint and Unit test Release Helm Chart') {
                    agent {
                        node {
                            label 'xld'
                        }
                    }

                    tools {
                        jdk env.LINUX_JDK_NAME
                    }

                    steps {
                        checkout scm
                        sh "./gradlew clean runHelmUnitTest --info"
                    }
                }
            }
        }
        stage('Build Release Helm Chart') {
            agent {
                node {
                    label 'xld'
                }
            }

            tools {
                jdk env.LINUX_JDK_NAME
            }

            steps {
                checkout scm
                sh "./gradlew clean devSnapshot publish -x updateDocs -x buildReadme -x test --info"
                script {
                    if (fileExists('build/version.dump') == true) {
                        currentVersion = readFile 'build/version.dump'
                        env.version = currentVersion
                    }
                }
                archiveArtifacts artifacts: 'build/xlr/digital-release-*', fingerprint: true
            }
        }
        stage('Build Release Helm Operator Image') {
            agent {
                node {
                    label 'xld'
                }
            }

            tools {
                jdk env.LINUX_JDK_NAME
            }

            steps {
                checkout scm
                sh "./gradlew clean publishOperatorToDockerHub -x updateDocs -x buildReadme -x test --info"
                script {
                    if (fileExists('build/version.dump') == true) {
                        currentVersion = readFile 'build/version.dump'
                        env.version = currentVersion
                    }
                }
            }
        }
        stage('Build Release Helm Operator Bundle') {
            agent {
                node {
                    label 'xld'
                }
            }

            tools {
                jdk env.LINUX_JDK_NAME
            }

            steps {
                checkout scm
                sh "./gradlew clean publishBundleToDockerHub -x updateDocs -x buildReadme -x test --info"
                script {
                    if (fileExists('build/version.dump') == true) {
                        currentVersion = readFile 'build/version.dump'
                        env.version = currentVersion
                    }
                }
                archiveArtifacts artifacts: 'build/xlr/bundle/*', fingerprint: true
            }
        }
    }
    post {
        success {
            script {
                if (env.BRANCH_NAME == 'master') {
                    slackSend color: "good", tokenCredentialId: "slack-token", message: "Release Helm Chart master build *SUCCESS* - <${env.BUILD_URL}|click to open>", channel: 'team-apollo'
                }
            }
        }
        failure {
            script {
                if (env.BRANCH_NAME == 'master') {
                    slackSend color: "danger", tokenCredentialId: "slack-token", message: "Release Helm Chart master build *FAILED* - <${env.BUILD_URL}|click to open>", channel: 'team-apollo'
                }
            }
        }
    }
}

def getBranch() {
    // on simple Jenkins pipeline job the BRANCH_NAME is not filled in, and we run it only on master
    return env.BRANCH_NAME ?: 'master'
}
