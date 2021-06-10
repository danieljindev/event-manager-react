# Application Guidelines

## Folder Structure

Description of the project files and directories.

```bash
├── config/                    # Configuration
│   ├── cypress.config.js      # Cypress end-to-end test configuration
│   ├── jest.config.js         # Jest unit/component test configuration
├── assets/                    # Supplemental assets
├── public/                    # Files that will write to dist on build
├── src/                       # All TakeNote app source files
│   ├── components/            # React components
│   ├── contexts/              # React context global state without Redux
│   ├── pages/                 # React pages
│   ├── resources/             # Shared resources
│   ├── router/                # React private and public routes
│   ├── sagas/                 # Redux sagas
│   ├── selectors/             # Redux Toolkit selectors
│   ├── slices/                # Redux Toolkit slices
│   ├── store/                 # Redux Toolkit store
│   ├── theme/                 # App theme configuration
│   ├── types/                 # TypeScript types
│   ├── utils/                 # Utility functions
│   └── index.tsx              # Client side entry point
├── tests/                     # Test suites
│   ├── e2e/                   # Cypress end-to-end tests
│   └── unit/                  # React Testing Library and Jest tests
├── .env                       # Environment
├── .eslintrc.js               # Eslint Configuration
├── .gitignore                 # Files ignored by git
├── .prettierrc                # Code convention enforced by Prettier
├── SOLUTION.md
├── package-lock.json          # Package lockfile
├── package.json               # Dependencies and additional information
├── README.md
└── tsconfig.json              # Typescript configuration
```

## Scripts

An explanation of the `package.json` scripts.

| Command         | Description                                               |
| --------------- | --------------------------------------------------------- |
| `start`         | Run App in a development environment                      |
| `build`         | Create a production build of App                          |
| `test`          | Run unit and component tests                              |
| `test:coverage` | Get test coverage                                         |
| `test:e2e`      | Run end-to-end tests in the command line                  |
| `test:e2e:open` | Open end-to-end tests in a browser                        |
| `eslint`        | Run Eslint and Find Problems                              |
| `eslint:fix`    | Instructs ESLint to try to fix as many issues as possible |
| `format`        | Run Prettier to format code                               |
| `format:check`  | Run Prettier to check if your files are formatted         |

## Technologies

This project is possible thanks to all these open source languages, libraries, and frameworks.

| Tech                                                                 | Description                                                       |
| -------------------------------------------------------------------- | ----------------------------------------------------------------- |
| [React](https://reactjs.org/)                                        | Front end user interface                                          |
| [Create React App](https://github.com/facebook/create-react-app/)    | Set up a modern react app by running one command.                 |
| [React-Router](https://reactrouter.com/)                             | A collection of navigational components                           |
| [TypeScript](https://www.typescriptlang.org/)                        | Static type-checking programming language                         |
| [Redux](https://redux.js.org/)                                       | Global state management                                           |
| [Redux Thunk](https://github.com/reduxjs/redux-thunk/)               | Thunk middleware for Redux                                        |
| [Redux Saga](https://redux-saga.js.org/)                             | An intuitive Redux side effect manager                            |
| [Axios](https://sass-lang.com/)                                      | Promise based HTTP client for the browser and node.js             |
| [Sass](https://sass-lang.com/)                                       | Style preprocessor                                                |
| [ESLint](https://eslint.org/)                                        | TypeScript linting                                                |
| [Jest](https://jestjs.io/)                                           | Unit testing framework                                            |
| [Cypress](https://www.cypress.io/)                                   | End-to-end testing framework                                      |
| [Emotion](https://github.com/emotion-js/emotion/)                    | CSS-in-JS library designed for high performance style composition |
| [Styled Components](https://styled-components.com/)                  | One of the new ways to use CSS in modern JavaScript               |
| [Material-UI](https://material-ui.com/)                              | A popular React UI framework                                      |
| [Redux Toolkit](https://github.com/reduxjs/redux-toolkit/)           | The official, opinionated toolset for efficient Redux development |
| [Day.js](https://day.js.org/)                                        | Fast 2kB alternative to Moment.js with the same modern API        |
| [React Feather](https://github.com/feathericons/react-feather)       | React component for Feather icons                                 |
| [React Helmet Async](https://github.com/staylor/react-helmet-async/) | A document head manager for React                                 |
| [Prettier](https://prettier.io/)                                     | An opinionated code formatter                                     |
| [lint-staged](https://www.cypress.io/)                               | Run linters on git staged files                                   |

## Styleguide

Coding conventions are enforced by [ESLint](.eslintrc.js) and [Prettier](.prettierrc).

- No semicolons
- Single quotes
- Two space indentation
- Trailing commas in arrays and objects
- [Non-default exports](https://humanwhocodes.com/blog/2019/01/stop-using-default-exports-javascript-module/) are preferred for components
- Module imports are ordered and separated: **built-in** -> **external** -> **internal** -> **css/assets/other**
- TypeScript: strict mode, with no implicitly any
- React: functional style with Hooks (no classes)
- `const` preferred over `let`
