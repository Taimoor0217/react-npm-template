## React-npm-template

The repository provides a continuous dev and deploy setup for publishing react components to npm. You can wrtie your react components, test and debug them and conviniently publish them to npm with a few commands.

<img src="./assets/npm-react.gif" alt="drawing" width="800"/>


### setup

The project uses the webpack dev server to compile and serve the resrouces in dev mode. Both the dev and build commands use a common src folder to serve or compile the react components.

Follow these steps to cusomize the repo for your self

#### package.json

Navigaton to package.json and changes the name, description and github repository of the project. The "main" attribute is where npm will check for the compiled bundle of the react component. Feel free to change the name of the bundle.
***you must change the bundle name in webpack.prod.js if you choos to change the bundle name***

<img src="./assets/npm-entry-point.png" alt="drawing"/>

make sure to update values like homepage url and keywords as well.


#### webpack

There are two webpack files namely **webpack.dev.js** and **webpack.prod.js**. You donot necessarily need to make any changes to these files, however, If you wish to change the build path for you components, you can update the output filename , path and entry points in **webpack.prod.js**. Make sure the entry point is valid for webpack to be able to build the project.

<img src="./assets/webpack.png" alt="drawing"/>

### dev server

```js
npm start
````
opens up the dev server with port 9000. You can place all you components in src and can import them to dev, the dev server hot-reloads with every change.

<img src="./assets/start.png" alt="drawing"/>


### build

```js
npm run build
```
create an optimal bundle for our react componet, which is ready to be shipped

<img src="./assets/build.png" alt="drawing"/>

### publishing to npm

```js
npm login
```
enter you credentials 

```js
npm publish
```
<img src="./assets/publish.png" alt="drawing"/>


*****your pull requests are welcomed*****

