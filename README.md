# Single Spa Example

This application is to demonstrate capability of Single Spa Framework to load applications of different frameworks.

This example leverages the monorepo concept and uses NX to manage multiple applications in same repo.

# Repo Structure

- apps/shell : Single Spa Shell application which hosts header and also responsible for registering applications and loading the on route change.
- apps/angular-app : MicroFrontEnd application using Angular
- apps/vanillajs-app : MicroFrontEnd Application using Vanilla JS

# System requirements
- Node.js >= v16
- Npm >= 8.1.2

# Running the application in dev mode

- Install required npm dependencies using following commands
    ```npm install```

- Start Shell application using following command
    ```npm run start:all```

- Open browser and access url: http://localhost:4200

# Notes
- SingleSpa framework requires the remove application to be loaded as Javascript library/module which exposes three functions: bootstrap, mount and unmount
- Here, the project.json file for vanillaJs and angular Apps are modified to generate the application as UMD module exposing it as global variable such as `window["vanillaJs"` and `window["angular"]`
- project.json is also modified to combine runtime.js and main.js
- `single-spa-html` is used to get SingleSpa LifeCycle hooks for VanillaJS application
- `single-spa-angular` is used to get Single Lifecyle hooks for Angular Application
- Shell Application showcases two different ways of loading microfrontends:
  * Using <script> tag (supports compile time decoupling and multi-repo approach)
  * Using `import()` method (Supports chunk loading and Compile time module referencing. Useful for monorepo)