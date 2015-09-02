# Node-Authentication!
A example of local authentication on Openshift using Passport, Express, Nodejs, Mongodb and Bootstrap 

This code is an adaptation of [Scotch.io][1] to users of Openshift RedHat
[1]:http://scotch.io/tutorials/javascript/easy-node-authentication-setup-and-local

## Install
```sh
git clone https://github.com/JavaGarcia/node-authentication.git
cd node-authentication
npm install
node server.js
```
## OpenShift Quick Deployment
You can create your application from the command line with this command:

    rhc app create <nameAPP> nodejs-0.10 mongodb-2.4 --env NODE_ENV=production --from-code https://github.com/JavaGarcia/node-authentication.git



