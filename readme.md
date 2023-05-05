# Readme for Mercedes Test Automation

The objective of this document is to offer users clear and concise instructions on how to execute the test automation process.

## Requirements

The following must be installed to use the project:

- Node.js should be installed. To install Node.js, please visit the [official Node.js website](https://nodejs.org/en/) and follow the installation instructions.

- Cypress should be installed. To install Cypress, run the following command in your terminal:

```bash
npm install cypress --save-dev
```

## Cloning the Project

- `Git` must be installed to clone the project.

To clone the project, run the following command in your terminal:

```bash
cd <your-project-folder>
git clone https://github.com/cristyveedor/mercedes-test-automation.git
```

After cloning the project, download the needed dependendies. Run the following command in the root of the project.

```bash
cd <your-project-folder>
npm install
```

## Starting Cypress

[After installing you'll be able to execute all of the commands in this document from your project root.](https://docs.cypress.io/guides/guides/command-line)

```bash
cd <your-project-folder>
npx cypress run
```
By default, `cypress` run will run all tests headlessly.


To open `cypress` app:
```bash
cd <your-project-folder>
npx cypress open
```
As alternative you can also use the following command within your terminal:

```bash
npm run cypress:open
```

## Configuration

In `cypress.config.js`, you can specify which test data file should be used for testing.

Test data files should be copied into the subfolder `fixtures`.

In `files`, folder is where we store the text file with the highest and lowest value on the results.

In `screenshots`, folder is where we store the screenshot of the the filtered results. 

# Conclusion

With these requirements and setup steps in place, you should now be able to run th Cypress tests. Happy testing!
