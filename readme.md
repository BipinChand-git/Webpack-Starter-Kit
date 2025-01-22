# Webpack Starter Kit--

## Overview

This is a basic starter kit for building modern web applications using Webpack. It includes essential configuration to get us started with Webpack and ES6 modules.

## Installation

### Install dependencies

```sh
npm install
```

### To create a production build

```sh
npm run build
```

### To start the development server

```sh
npm run dev
```

## Packages Used

1. **webpack**
   - A powerful module bundler for JavaScript applications. It bundles JavaScript files and their dependencies into a single or multiple output files, optimizing them for production use.

2. **webpack-cli**
   - A command-line interface for Webpack that provides commands to run Webpack. It allows you to interact with Webpack via the terminal.

3. **webpack-dev-server**
   - A development server that provides live reloading, hot module replacement, and a variety of other development features. It serves your bundled files from a local server, making development more efficient.

4. **css-loader**
   - A loader for Webpack that interprets `@import` and `url()` like `import/require()` and resolves them. It allows you to import CSS files in your JavaScript modules.

5. **style-loader**
   - A loader that injects CSS into the DOM by adding a `<style>` tag. This loader adds CSS to your HTML dynamically, which is useful in development.

6. **html-webpack-plugin**
   - A plugin that simplifies the creation of HTML files to serve your Webpack bundles. It generates an HTML file, injects the output bundles, and writes the file to the output directory.

7. **babel-loader**
   - A loader for Webpack that allows you to transpile JavaScript files using Babel. It processes your JavaScript files, applying the transformations specified in your Babel configuration.

8. **@babel/core**
   - The core library for Babel, which is a JavaScript compiler that allows you to use the latest JavaScript features in older browsers or environments. It transforms your modern JavaScript code into a backward-compatible version.

9. **@babel/preset-env**
   - A smart preset that automatically determines the Babel plugins and polyfills you need based on your targeted browser or runtime environments. It enables you to use the latest JavaScript without worrying about compatibility.

10. **mini-css-extract-plugin**
    - A plugin that extracts CSS into separate files. It creates a CSS file per JavaScript file that contains CSS. This is useful for having CSS in separate files rather than inline in the JavaScript bundles.

## File Structure

```sh
project
├── dist/                  # Production build files
├── node_modules/          # Node.js modules
├── src/                   # Source files
│   └── css/               # CSS files
│       └── style.css      # Main CSS file
│   ├── index.html         # HTML template
│   ├── index.js           # Main JavaScript file
│   ├── Person.js          # Person class module
├── .gitignore             # Git ignore file
├── package.json           # NPM package configuration
├── webpack.config.js      # Webpack configuration
└── README.md              # Project documentation
```
