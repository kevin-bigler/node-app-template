# node-app-template
Node js template, boilerplate base

package.json is atm geared towards being a browser app. if not-browser (ie a server) app, then replace index.html with index.js and add "testEnvironment": "node" to the "jest" block and I think `dev` script could just be deleted in that case