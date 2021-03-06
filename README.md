# Chat UI
> Small chat app(the goal of app is to play with socket io)

## Table of Contents

- [Where to find demo](http://faradey27.github.io/chat-ui)
- [Quickstart](#quickstart)
  - [Prerequisites](#prerequisites)
  - [How to run localy](#how-to-run-localy)
- [Commands](#commands)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
- [Design](#design)
  - [Folder Structure](#folder-structure)
  - [State managment](#state-managment)
  - [Styling](#styling)
  - [Performance and bundle size](#performance-and-bundle-size)
  - [Server side rendering](#server-side-rendering)
- [Costs](#costs)
- [Supported Browsers](#supported-browsers)
- [License](#license)

## Quickstart

This is our small react + redux chat.
To play with it a little make sure that you have node 8 or later and npm.
I strongly recommend you to use unix like OS(mac os, ubuntu, etc.), becaus I have not test this on windows.

### Prerequisites

```
node >= 8.1.0
npm >= 5.6.0
unix-like operation system
git
basic knowledge of js, react
```

### How to run localy

do such commands:
- `git clone https://github.com/Faradey27/chat-ui.git`
- `cd chat-ui`
- `npm install`
- `npm start`

Awesome, now dev version of the app will be started on localhost:3000 and you are able to play with it or to continue development.
Read next chapters to know more)

## Commands

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Design

For this app, I decided to use [React](https://reactjs.org/) for V part of application and [Redux](https://redux.js.org/) for application state management.
Some part of my motivation about these technologies will be in other parts of this doc.

Briefly, React provide for us good and really flexible solution for View layer + some trivial state management out of the box.
Also, it will provide for us components which will help us make the app more simple and stable(as it easy to work with independt parts).
And last good thing, React one of the most popular libraries in FE community, so it is really easy to find answers to any questions and to find libs that you need.
(Angular 4, Ember, Vue, etc. also provide smth like this, but they are very different from React and provide more complex(all-in-one) solutions,
which we could disscuss in PM)

Let us begin from small UML-like diagram to describe main parts of our app and relations between them

![](./docs/Chat-ui-diagram.png)

Small notes about it:
We will have a provider which will provide for our store and give us the ability to select data from it and to dispatch actions.
We will have several clever components - Containers, they will retrieve data from the store and send it to children + handle actions.
We will have SocketIO and Local/Session storage connectors, they will communicate with the main container and redux(initial state).

Note:
At start, i was thinking about Typescript, but as application really small, Typescript will not make development much faster or safer than without types.
Also current about do not have any routing - because it not required, in future we will start to use React-router

### Folder Structure

I stoped on such folder Structure

```
chat-ui/
  README.md
  COSTS.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    assets/
    data/
      messages/
        actions/
        reducers/
        ...
      ...
    components/
      MessageText/
      MessageDate/
      SendButton/
      ...
    containers/
      Chat/
      MessageListArea/
      ...
    services/
      LocalStorageService/
      SocketsService/
    utils/
      ...
    index.css
    index.js
```

So we will have
Components - shared via whole app components
Containers - our clever components
Data - here we will have all things related to the data layer, like redux, etc.
Services - some big helper features

Notes:
If the application will become bigger and we would like to have more features, not just simple chat(maybe users list, etc)
We could start to think about `modules`(feature folders), each feature folder will have own reducers, actions, containers, etc.
But for a current small app, we do not need to do this and it will be easy to move to modules approach in future.

### State managment

For state management we will use Redux + clever/dump components approach.(Redux is one of the Flux implementation, which is alternative for MVC, MVP, etc..)
To not dependend on store directly and provide way to update store structure without brokening whole app we will do selection from store via `selectors` approach(selectUsersWithAgeBigger10(state))
As we use sockets for communication with server and other clients, we do not need to worry about async actions currently(in future we will think about thunk and maybe smth for side effects).

### Styling

There tonn of ways how to style components:
 - css modules
 - vanilla css(BEM, etc.)
 - inline styles
 - css in js

For this app, i decided to stop on CSS in js, as a compromise solution between performance, native css features, and developer experience.
There are tons of libs for this - I have chosen an emotion, they provide tiny size and good performance.

### Performance and bundle size

For performance monitoring I am using:
 - chrome performance tab(with nice React integration)
 - chrome memory tab
 - chrome audits

For bundle size:
 - webpack-bundle-analyzer(or source-map-explorer)
 - make sure to use gziped version of builds
 - http2 push(maybe in future)

When project will become bigger, we will start to use code splitting(dynamic components), maybe also code splitting based on routing(webpack provide nice features for this)
After all macro optimisations, maybe we will try to use server-side rendering(it is really easy to do with react) to improve performance.
And if we will want even more, maybe we will try to use Netflix approach and create small sub app on vanilla js, the goal of which will be to provide simple functionality till we loading all other React parts.

### Testing

We will try to do this project TDD(or mostly TDD).

For unit(in reality integration) tests of components we will use enzyme + jest(create react app provide jest behind the curtains).
For unit and integration tests of services, utils we will also use jest :)

Why so much jest? - it simple test runner with build-in jasmine and a lot of other built-in tools, awesome performance and nice UI(in terminal)
For e2e tests, we have not so many choices - selenium based libs or headless chrome based libs. As the second one is really young, we will go with selenium based.
There is a lot of choices like - protractor, Nightwatch, vanilla, etc. We will select protractor as simple, fast and with big community tool.

Note:
We will also use for all Drivers(page objects) approach for all kind of tests. This will helps us to abstract internal logic.
So instead of
```
expect(mount(<User />).text()).toBe('blah');
```
We will have
```
expect(userDriver.get.userText())).toBe('blah');
```

It will make our tests more libs agnostic and more readable

### Server side rendering

In the first version of our app, we will not implement this. But as future easy performance win, we could do this.
We could eject create-react-app and make our project ssr friendly or we even could migrate to smth like next.js, which provide awesome SSR support out of the box.

## Costs
Here you could find my estimates about project.

[Costs](./COSTS.md)

## Supported browsers
  - Chrome 64

Maybe also other browsers, but I have not tested this.

## License
[Apache License 2.0](./LICENSE)
