# Workflow Course Assignment

This repository contains the workflow course assignment, it takes an existing front end and sets up a proper environment for development and testing

## Description

This project contains a front end for the noroff api, unit tests for login and logout functions, end to end tests for login and logout credentials. It contains github actions for building and deploying, as well as automatic linting and code formatting.

## Getting Started

### Dependencies

- Bootstrap Dark 5 for styling
- SASS for CSS pre-processing
- Jest for unit testing
- Cypress for end-to-end testing
- ESLint for code linting
- Prettier for code formatting
- Husky for Git hooks
- Lint-Staged for linting staged files

### Installing

1. Clone the repository:

2. Install dependencies:

```bash
npm install
```

### How to use

- Build the project which compiles SCSS to CSS:

```bash
npm run build
```

- Run the project with live reloading:

```bash
npm start
```

- Run unit tests:

```bash
npm run test-unit
```

- Run end-to-end tests with Cypress:

```bash
npm run test-e2e
```

- Run run unit test & end-to-end test:

```bash
npm run test
```

## Help

For any issues or help, please raise an issue in the repository or contact the maintainers.

## Authors

Noroff  


## Version History
- 1.3.2
  - Added automation for unit & end-to-end tests

- 1.3.1
  - Added README.md documentation

- 1.3.0
  - Added end to end tests for:
        -logging in
        -logging in with invalid credentials
        -logging out
        
- 1.2.0
  - Added unit-tests for:
        -login function
        -logout function

- 1.1.6
  - added coverage/ to gitignore
  - updated .eslintrc.json to expect node.js global variables

- 1.1.5
  - Updated Jest script to include coverage

- 1.1.4
  - installed and configured babel for compiling

- 1.1.3
  - Installed jest plugin for eslint

- 1.1.2
  - Installed jest for unit testing

- 1.1.1
  - Installed mrm tool for commit hooks
  - automated prettier and lint as pre-commit hooks

- 1.1.0
  - Installed and set up eslint:

- 1.0.2
  - Installed prettier for formatting

- 1.0.1
  - Updated dependencies

- 1.0.0
  - Original release



## License

This project is licensed under the ISC License - see the LICENSE.md file for details.

## Acknowledgments

Noroff