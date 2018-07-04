
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [HOWTO Set Up a  local CI/CD Developemnt Environment](#howto-set-up-a--local-cicd-developemnt-environment)
- [React Project](#react-project)
- [Install Jenkins](#install-jenkins)
- [Install Sonarqube](#install-sonarqube)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# HOWTO Set Up a  local CI/CD Development Environment


## React Project
```
git clone git@github.com:judyobrienie/sample-react-app-project.git
```
## Set Up an Isolated Network for your Containers
```
docker network create isolated_project_nw
```
## Install Jenkins
```
  docker run -u root --rm -d --name jenkins \
  --network=isolated_project_nw -p 8080:8080 \
  -p 50000:50000 \
  -v jenkins-data:/var/jenkins_home \
  -v /var/run/docker.sock:/var/run/docker.sock \
  quay.io/judyobrien/jenkins
  ```
## Install Sonarqube
```
    docker run -d \
    --name sonarqube \
    -p 9000:9000 -p 9092:9092 \
    --network=isolated_project_nw \
    quay.io/judyobrien/sonarqube
```

Use the follow command to get the IPv4Address of this sonarqube container as and note it down. You will need this for jenkins config.
```
docker network ls
docker network inspect 'networkid'
```

Follow configuration guidelines on my [Blog - A Journey — The 40+ Year Old Intern (Part 6)](https://medium.com/@judyobrienie/a-journey-the-40-year-old-intern-part-6-147173400a07) 
