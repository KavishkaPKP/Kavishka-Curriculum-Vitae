const chalk = require("chalk");

const soci =  chalk.hex("#ed7902").inverse.bold(" SOCIAL MEADIA ");
const Linkedin  = chalk.hex("00a0dc").bold.underline("Linkedin");
const github  = chalk.hex("bd2c00").bold.underline("Github");
const social = `

${soci}

${Linkedin} : linkedin.com/in/kavishkapkp

${github}   : github.com/KavishkaPKP
`;

module.exports = social;