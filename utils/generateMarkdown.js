// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license, data) {
  let link;

  switch (data.license) {
    case "MIT":
      link = "https://opensource.org/licenses/MIT"
      break;
    case "Apache2.0":
      link = "https://opensource.org/licenses/Apache-2.0"
      break;
    case "BSD3":
      link = "https://opensource.org/licenses/BSD-3-Clause"
      break;
    case "GPL":
      link = "https://opensource.org/licenses/GPL-2.0"
      break;
    case "Mozilla2.0":
      link = "https://opensource.org/licenses/MPL-2.0"
      break;
    default:
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //renderLicenseLink(license);
  return `
  ![GitHub License](https://img.shields.io/badge/license-${data.license}-blue.svg)
  # ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  [Installation](#installation)\n
  [Usage](#usage)\n
  [Contributing](#contributing)\n
  [License](#license)\n
  [Tests](#tests)\n
  [Questions](#questions)\n
  [Screenshots](#screenshots)
  
  ## Installation
  ${data.instructions}
  ## Usage
  ${data.usage}
  ## Contributing
  ${data.contribution}
  ## License
  The license used is ${data.license}\n
  Find the license link here: [https://opensource.org/licenses/${data.license}](https://opensource.org/licenses/${data.license})
  ## Tests
  ${data.test}
  ## Questions
  GitHub Username: ${data.username}\n
  Link to GitHub: [https://github.com/${data.username}](https://github.com/${data.username})\n
  Reach out to me at the following email for any questions you may have: ${data.email}
  ## Screenshots

`;
}

module.exports = generateMarkdown;
