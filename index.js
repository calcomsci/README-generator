const inquirer = require('inquirer');

const fs = require('fs');

inquirer
  .prompt([
    {
        //Begin prompts for user choices and input. The contents will have a different order when the readme is generated
        type: 'input',
        message: 'Please enter the name of your software that requires a README. For example: "Welcome to Music Clip"',
        name: 'webname',
    },
    {
        type: 'input',
        message: 'Please write a brief description about your software. For example: "Music Clip is a music discovery web app"',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please enter the [AS A] part of your user story. The parts inside brackets are already written for you. For example: "[AS A] music listener"',
        name: 'asA',
    },
    {
        type: 'input',
        message: 'Please enter the [I WANT] part of your user story. The parts inside brackets are already written for you. For example: "[I WANT] to learn more about music artists and their albums"',
        name: 'iWant',
    },
    {
        type: 'input',
        message: 'Please enter your [SO THAT] I part of your user story. The parts inside brackets are already written for you. For example: "[SO THAT I] can look at music artist discography"',
        name: 'soThatI',
    },
    {
        type: 'input',
        message: 'Please enter your acceptance criteria. For example: " GIVEN a command-line application that accepts user input, WHEN I am prompted for information about my application repository, THEN a high-quality, professional README.md is generated with the title of my project and section entitled Description/Table of Contents/Installation/Usage/License/Contributing/Tests/Questions"',
        name: 'acceptance',
    },
    {
        type: 'input',
        message: 'Please enter the URL for your live webpage. For example: "https://calcomsci.github.io/Clone-Music-Clip/"',
        name: 'livelink'
    },
    {
        type: 'input',
        message: 'Please enter the first key technology used. For example: "HTML"',
        name: 'first'
    },
    {
        type: 'input',
        message: 'Please enter the description of the first key technology used. For example: "HTML is used to build web pages"',
        name: 'description1'
    },
    {
        type: 'input',
        message: 'Please enter the second key technology used. For example: "CSS"',
        name: 'second'
    },
    {
        type: 'input',
        message: 'Please enter the description of the second key technology used. For example: "CSS is used to stylize HTML web pages"',
        name: 'description2'
    },
    {
        type: 'input',
        message: 'Please enter the third key technology used. For example "JavaScript"',
        name: 'third'
    },
    {
        type: 'input',
        message: 'Please enter the description of the third key technology used. For example: "JavaScript can be used to add sophisticated features to HTML web pages"',
        name: 'description3'
    },

    {
        type: 'list',
        message: 'Please choose the pathway in your file for the license logo. The logos should be included in this app. Choose an option between no license, MIT License, GNU License, Creative Commons license, or FreeBSD',
        choices: ['no-license.png','MIT.png','GNU.png','CC.png','FreeBSD.png'],
        name: 'giforpic',
    },

    {
        /* TO DO:
        Make a list of creative commons license to pick: MIT/GNU/GPL/etc. *DONE* 
        */
        type: 'list',
        message: 'If this project falls under any licenses please choose one below -- if there is none please choose [None]. For example: "MIT License"',
        choices: ['None','MIT License','GNU License','Creative Commons License','FreeBSD License'],
        name: 'license'
    },
    {
        /* TO DO:
        Make a list links to creative commons license to pick: https://mit-license.org, https://www.gnu.org/licenses/#GPL, etc. *DONE*
        */ 
        type: 'list',
        message: 'If this project falls under any licenses please enter the links for them below -- if there is none please leave it empty. For example: "https://mit-license.org"',
        choices: ['None','https://mit-license.org','https://gnu.org/licenses/gpl.html','https://creativecommons.org/licenses/','https://freebsd.org/internal/software-license/'],
        name: 'licenselink'
    },
    {
        type:'input',
        message: 'Please type your github username. For example: calcomsci',
        name: 'githubname',
    },
    {
        type: 'input',
        message: 'Please type your e-mail address if you wish to be contacted about your software. For example: calcomsci@outlook.com',
        name: 'email'
    }



  ])
  .then((answers) => {
    const mdPageContent = generateMarkdown(answers);

    fs.writeFile('README.md', mdPageContent, (err) =>
      err ? console.log(err) : console.log('Success! The generated README.md should be created in the same directory as this application.')
    );

    fs.writeFile('README.txt', mdPageContent, (err) =>
    err ? console.log(err) : console.log('Success! The generated README.txt should be created in the same directory as this application.')
  );
  });

const generateMarkdown = (answers) =>


//The readme.md markdown starts here

`
## Table of Contents

[Table of Contents](#table-of-contents)

[Software License](#software-license)

[Description](#description)

[User Story](#user-story) 

[Acceptance Criteria](#acceptance-criteria)

[Key Technologies Used](#key-technologies-used)

[Installation](#installation) 

[Contact](#contact)

Welcome to the README-generator!
When you have properly set up Visual Studio Code, your Terminal should look like this and you can begin to use this app:
![README-generator](./assets/images/README-generator-splash.png)

If you do not have a Terminal tab open in Visual Studio Code, please see the screenshot below:
![README-generator](./assets/images/README-generator-open-terminal.png)

## Software License
Software license for this software:

![${answers.webname}](/assets/images/${answers.giforpic})



# ${answers.webname}

${answers.license}

${answers.licenselink}

  
## Description

${answers.description}


## User Story

AS A ${answers.asA} 

I WANT ${answers.iWant} 

SO THAT I ${answers.soThatI}


## Acceptance Criteria

${answers.acceptance}


You can view the software's web page at this link. [${answers.webname}](${answers.livelink})

## Key Technologies Used

${answers.first} 

What ${answers.first}  is used for:

${answers.description1}

${answers.second}

What ${answers.second} is used for:

${answers.description2}

${answers.third}

What ${answers.third} is used for:

${answers.description3}

## Installation

From Github, you can download the source code by clicking on the Code button and download the zip file here: https://www.github.com/${answers.githubname}

You will need a code editor to view the source code. You may try Visual Studio Code. You may download Visual Studio Code here: https://code.visualstudio.com/Download

You will probably need node.js to install packages from the source code. You may download node.js here: https://nodejs.org/en/download/


## Contact

If you wish to contribute to this open source software, please contact me, and/or fork this on Github

You can visit my Github profile (where you should have found out about this software) at: https://www.github.com/${answers.githubname}

You can write an e-mail to ${answers.email} `;
