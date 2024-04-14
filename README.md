# Github Repositories Explorer

This application lets you search for users on Github and displays their repositories. Currently the number of requests is limited due to a missing accessToken. It can be easily generated though and be added in the headers to expand the limit further.

## Run the Application Locally

After running an initial `npm install` to install all node modules, simply execute `npm run dev` to start the project in a local dev environment. The bash output will tell you which link/port to use in your browser (e.g. `http://localhost:5174/`).

## Linting the Code

If you want to enforce a code formatting according to the setup within `./prettierrc.json`, run `npm run format`.

## Technologies in Use

-   [Vite](https://vitejs.dev/)
-   [React](https://legacy.reactjs.org/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [ESLint](https://eslint.org/)
-   [Vitest](https://vitest.dev/)

## About the Architecture of Components

To be able to port this project later on to a pattern library like e.g. Storybook, all components are composed as:

1. Atoms - These atoms include basic HTML elements like form labels, inputs, buttons, and others that can’t be broken down any further without ceasing to be functional.
2. Molecules - In interfaces, molecules are relatively simple groups of UI elements functioning together as a unit. For example, a form label, search input, and button can join together to create a search form molecule.
3. Organisms - Organisms are relatively complex UI components composed of groups of molecules and/or atoms and/or other organisms. These organisms form distinct sections of an interface.

If you want to learn more about the atomic design metodology visit [Brad Frost's awesome guide](https://atomicdesign.bradfrost.com/chapter-2/).

## Testing Components

For matters of setup convenience and way better integration into Vite this application uses Vitest instead of the classic Jest setup. To test components for their individually defined tests (usually within their respective `index.test.tsx` files), run:

`npx vitest` or `npm test`

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

-   Configure the top-level `parserOptions` property like this:

```js
export default {
    // other rules...
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json', './tsconfig.node.json'],
        tsconfigRootDir: __dirname
    }
};
```

-   Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
-   Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
-   Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
