# Job List

## Setup
copy repo: `git clone https://github.com/marafa1985/react-ssr-webpack.git`

cmd: `cd react-ssr-webpack`

run project: `docker-compose up -d`


## Task

This Task was provided by HeyJobs, that require using SSR React Application.

The application developed by [TypeScript](https://www.typescriptlang.org/index.html), [Webpack](https://webpack.js.org/), [React Router](https://github.com/ReactTraining/react-router) , and [Styled Components](https://github.com/styled-components/styled-components).

The goal of the application allows job seeker to get a list of available jobs, and get more details of the job
when click on it.

## User Story
Build a React application which:
   * Displays a list of available jobs.
   * Clicking on a job in the list will bring the user to a page which displays all details of the job.
* The app should be server-rendered.
* The app should be responsive.
* You should create and use dummy data for the list of jobs.


### Based on User Story:

We need to create two React pages contains the following Comonents:

- HomePage: Contains A list of all available Jobs.
- JobPage: Contains Job Details.

## Definition of Done
- Unit tests passed: Task contains 4 testing unit to make sure that the usery story working as needed.
- Component tests.
- Code reviewed.
- Functional tests.
- production reviewed.

## Deployment: Ubuntu

### Install Docker to Ubuntu

Please follow this Link to Install Docker in Ubuntu: https://docs.docker.com/install/linux/docker-ce/ubuntu/

Once you installed Docker to the ubuntu you can start copy the source code to machine as the following

### Copy Surce Code
before you clone the package make sure that you installed git in ubuntu.

- Using github: 
```

git clone https://github.com/marafa1985/react-ssr-webpack.git
```
- Copy the code over storage like USB. (not recommended)

### Deploy 
After the souce code Avaliable on the server you can ru the following command:

- Build Docker image to the ubuntu Machine

```
$ docker build -t heyjobs .
```
- Run Docker image for production, specify port 80  as a default

```
$ docker run -it -p 80:3000 heyjobs
```

Else for test you can specify port 3030 as the following:

```
$ docker run -it -p 3030:3000 heyjobs
```
Wait untill finished.

- Now you can open browser and goto url:

[http://localhost:3000/](http://localhost:3000/)



### Ambiguity

The task didn't specify to use framework like [NextJS](https://nextjs.org/) or using webpack, and bable configuration.

## Available Scripts

In the project directory, you can run:

## `npm start`

## `npm run test`

## `npm run build`

## `npm run eject`

 


