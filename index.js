const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generate = require("./generateMD");
const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "Project",
      message: "What's your Projects Title?",
    },
    {
      type: "input",
      name: "Description",
      message: "Project Description",
    },
    {
      type: "input",
      name: "Installation",
      message: "Add Installation Guide",
    },
    {
      type: "input",
      name: "Usage",
      message: "Add Usage Guide",
    },
    {
      type: "input",
      name: "Contributors",
      message: "Add Contributors",
    },
    {
      type: "input",
      name: "License",
      message: "Add License Info",
    },

    {
      type: "input",
      name: "Test",
      message: "Add info for testing",
    },

    {
      type: "input",
      name: "GithubEmail",
      message: "Github Email ?",
    },
  ]);
}

promptUser()
  .then(function (answers) {
    const md = generate.generateMarkdown(answers);

    return writeFileAsync("README.md", md);
  })
  .then(function () {
    console.log("Successfully wrote to README.md");
  })
  .catch(function (err) {
    console.log(err);
  });
