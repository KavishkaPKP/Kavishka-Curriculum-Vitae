const boxen = require("boxen");
const chalk = require("chalk");

const intro=`
${boxen("I am an undergraduate at the Sri Lanka Institute of Information Technology (SLIIT).I Like Working with the Web technologies.over the past years i have Alrady develope Desktop and Web Applications with Node JS, React JS, C#, HTML, PHP, JAVA, JAVA Script and mobile application developed by using java and Android Studio.",{
    borderStyle: 'double',
    padding: 1,
   
    title: chalk.bold.yellowBright(" Who Am I "),
    textAlignment:"center", 
    titleAlignment:"center"})}`;
module.exports = intro;