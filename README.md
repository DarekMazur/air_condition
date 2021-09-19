<p align="center">
    <img alt="Air Quality Logo" src="src/assets/AirQualityLogo.svg" width="200" />
</p>

<h1 align="center">
  SmoggyFoggy
</h1>

## Version: 0.9.1 (beta)

Live demo: [app]

## 💨 About app

SmoggyFoggy is showing data abut air quality in Poland. Data is based on Polish GIOS (Główny Inspektorat Ochrony Środowiska - Chief Inspectorate of Environmental Protection) measurement stations.
Data can be displayed based on device localisation or manual choosen.

Application support English, Polish and Russian.

## 🚀 Quick start

1.  **Requirement**

    - npm (v7.16.0)

2.  **Installation**

    To install application navigate to app's directory and use npm command

    ```shell
    cd app-main-dir/
    npm install
    npm run prod
    ```

    Command `npm run prod` will minimize files. If you want to get "human friendly" bundle use `npm run build`

3.  **Developer mode**

    You can run app in developer mode by using command

    ```shell
    npm start
    ```

    Application will run on port 8080 (localhost:8080)

4.  **What's inside?**

A quick look at the top-level files and directories in project.

    .
    ├── src
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── .eslintrc
    ├── .prettierrc
    ├── webpack.config.js
    └── README.md

- **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

- **`index.html`**: Main application file.

- **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

- **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

- **`README.md`**: A text file containing useful reference information about your project.

- **`.eslintrc`**: linter (eslint) configuration file

- **`.prettierrc`**: code formatter (prettier) configuration file

- **`webpack.config.js`**: Awebpack configuration file

## Changelog

**0.8.2**

- added dynamic cache to expand offline accessibility
- change error message

**0.9.0**

- bugfix - displaying actual data if online
- bugfix - install PWA

**0.9.1**

- style - added desktop view

[app]: https://smoggyfoggy.nerdistry.pl/
