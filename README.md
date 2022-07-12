# Expo dynamic platform OS rendering with Typescript

This repo illustrates the following [article](https://prastoin.netlify.app/writing/posts/expo-dynamic-platform-rendering/).
It contains a Typescript expo application that runs different maps component for both native and web platform OS.

## Setup

To start this demo repository you need to have [Expo](https://docs.expo.dev/get-started/installation/).

### Install deps

Install dependencies and enter the expo CLI running.

```
yarn start
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command        | Action                            |
| :------------- | :-------------------------------- |
| `yarn start`   | Starts the application            |
| `yarn web`     | Starts the application on web     |
| `yarn android` | Starts the application on android |
| `yarn ios`     | Starts the application on IOS     |

## How I created this repo

To create and setup the demonstration repository you need to have [Expo](https://docs.expo.dev/get-started/installation/) and [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) installed on your computer.

### Create the app

```bash
npx create-expo-app YOUR-APP-NAME
```

### Setup typescript

To setup typescript create an empty `tsconfig.json` file.

```bash
touch tsconfig.json
```

Then run `expo start`, it will find the `tsconfig.json` and detect that typescript dependencies are not installed and will ask for them to be installed.

```bash
expo start
```
