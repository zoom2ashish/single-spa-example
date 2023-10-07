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


