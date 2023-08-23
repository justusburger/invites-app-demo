# Invites App Demo
This app demonstrates a simple react UI that fetches data from an express/node server. The server uses a mysql database server for persistance.

# Getting started
## 1. Install docker 
If you haven't done so before, install docker locally by visiting downloading the [Mac](https://docs.docker.com/docker-for-mac/install/) or [Windows](https://docs.docker.com/docker-for-windows/install/) version.

## 2. Clone repo
Download or clone this git repo to a folder onn your local machine. You can do this by running `git@github.com:justusburger/invites-app-demo.git`. Then run `cd invites-app-demo`.  

## 3. Run `docker-compose up`
From the root of this project, run `docker-compose up`. This will probably take a few minutes the first time. Wait for the text `ui_1        | wait-for-it.sh: server:8080 is available after x seconds` to appear. 

## 4. Browse to [http://localhost:3000](http://localhost:3000)
You should then be able to visit http://localhost:3000 and see a list of job invites.

# Video walk through
https://www.youtube.com/playlist?list=PLjkRnDmaPPw3whxs-kBWR0muaRXX-rzv_
