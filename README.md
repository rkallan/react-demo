# RR Kallan React Application

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Files stored at folder @rrkallan will be NPM packages

## Development

This demo project is build with React, NodeJs and NPM and focused on Linux based environment.
This application is recommended to run with Local SSL certification, else there will be a notice in your browser about unsafe.It's possible to still run the application.

This project is build with

    NodeJS version 18.5.0
    NPM version 8.13.2

Install NodeJS and NPM on your device. See section Recommended how to install Node Version Manager

Clone this project from GitHub to your device.

Go to the application root folder on your device.
run `npm install`

For SSL Cert see next section

### To run the application in development mode

run `npm start`

### To build and localy test the application with SSL

run `npm run start:productionBuild`

go to <https://localhost:1888>

### Localy test the application with SSL on excisting build

run `npm run start:production`

go to <http://localhost:1888>

### To build and localy test the application without SSL

run `npm run start:productionBuild`

go to <https://localhost:2888>

### Localy test the application without SSL on excisting build

run `npm run start:production-noSSL`

go to <http://localhost:2888>

## SSL Cert for local development

Runing the react app with trusted ssl for development.

Use mkcert to solve local trusted SSL certification.

Documantation and guide at: <https://github.com/FiloSottile/mkcert> It's discribed how to use for Mac Os, Windows and Linux.

When the cert and key files are generated and stored on the root folder `.cert`

add or create on the root file `.env.developmen.local` and add these 2 lines

    ```bash
        SSL_CRT_FILE=./.cert/cert.pem
        SSL_KEY_FILE=./.cert/key.pem
    ```

now run the app with `npm start`

NOTE: Don't use this for production

### Recommendations

-   [Visual Code](https://code.visualstudio.com/Download) (recommendation)
    IDE wich is Free, Open source, lightweight and Runs everywhere. It's available for Windows, OsX and Linux. Support multiple code languages, Project specific preferences which
    which are ideal for code conferences and quality
    **Bold**Install extensions**Bold** - Better Comments - DotENV - EditorConfig for VS Code - ESLint - Git Blame - Git History - Git History Diff - Material Icon Theme - npm - npm Intellisense - Sass - SVG Viewer

-   [Cmder](https://cmder.net/) (recommendation for windows users)
    A pre-configured software package providing you with the terminal emulator on Windows. You can use ls, rm and other linux terminal syntax

    **Bold**To run Cmder as the VS Code terminal**Bold**

    1. Press Ctrl + , to access VSCode Settings
    2. Search for settings.json
    3. Click Edit in settings.json
    4. Append or modify the following variables into your configuration file:
       "terminal.integrated.shell.windows": "cmd.exe",
       "terminal.integrated.shellArgs.windows": [
       "/k", "[cmder_root]\\vendor\\init.bat"
       ],

        _Italic_ NOTE: Substitute [cmder_root] with your Cmder installation directory. _Italic_
        _Italic_ NOTE: You can also add a variable %path% for cmder _Italic_
        _Italic_ NOTE: Spaces in path needs te prepend a ^ before each space. To avoid this use the directory short name. type dir /X in command line to get the short name _Italic_

    5. Restart Visual Code en open the terminal with ctrl `

-   Node Version Manager [Windows](https://github.com/coreybutler/nvm-windows) [OsX, Linux](https://github.com/creationix/nvm)
    _Italic_NOTE: use of Yarn is not recommendat. NPM is maybe a bit slower but the benefit which yarn had with the lock file is also avaible in npm_Italic_
    Support for multiple Node versions. Easy to switch between Node and npm versions if there are multiple projects with different requirements for node and npm versions. Also we want to have our solution updated with latest version. With Node Version Manager testing on serval versions is simple, easy and saves time.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [https://localhost:3000](https://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm start:productionBuild`

Runs the app in the production mode.
Open [https://localhost:1888](https://localhost:1888) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder. Also it deletes first build folder if excist
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Useful commands

-   package.json sorting from command line

    `npx sort-package-json`

    This project is provided with a script to sort package.json

    `npm run sort:package`

-   Check packages to update

    `npx npm-check-updates`

    to update all packages to latest version

    `npx npm-check-updates -u`

## FAQ

When there you have updated packages or pull latest code, and `npm install` trwos an error.
Try first the follow solution which 99/100 times will solved the problem
Delete node_modules folder and package-lock file

run `rm -rf node_modules package-lock.json`
run `npm install`

When `npm install` throws follow error

    ```bash
        npm ERR! code ERESOLVE
        npm ERR! ERESOLVE unable to resolve dependency tree
        ...
    ```

run `npm install --legacy-peer-deps`
