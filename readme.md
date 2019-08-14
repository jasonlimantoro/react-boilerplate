# React Boilerplate with Redux + Reselect + Immutable

## Table of contents

[Project structure](#project-structure)

[Installation](#installation)

[Configuration](#configuration)

## Project structure

```
build/
src/
|- index.jsx            _________________________________ # Application entry
|  |- actions/          _________________________________ # Redux actions
|  |- components/       _________________________________ # Reusable components
|  |- reducers/         _________________________________ # Redux reducer
|  |- routes/           _________________________________ # Application routes
|  |- services/         _________________________________ # Service connecting to the API call
|  |- store/            _________________________________ # Redux store
|  |- stylesheets/      _________________________________ # Application stylesheets
|  |- templates/        _________________________________ # HTML template

webpack
|- paths.js ________________________________ # webpack paths needed
|- webpack.common.js _______________________ # common webpack config
|- webpack.dev.js __________________________ # development config
|- webpack.prod.js _________________________ # production config
```

## Installation

```
git clone https://gitlab.com/IT_PINTU/pintu-resume-web.git
cd pintu-resume-web
yarn install
yarn start
```

## Build

```
yarn build
```

## Configuration

- Webpack Config paths based on your file structure you can go to `webpack/paths.js` and modify the source and file names based on your need.
- `webpack/webpack.common.js` config common webpack for both dev and production environments.
- webpack/webpack.dev.js config webpack for dev environment.
- `webpack/webpack.prod.js` config webpack for production environment.
- `/webpack.config.js` main webpack config that merge common and webpack environment based config.
