const chalk = require("chalk");
const logSymbols = require('log-symbols');

const welcome =  chalk.hex("#ed7902").inverse.bold(" Hi there I'm Pasindu Kavishka ");
// const mail = chalk.hex("00a0dc").bold("Mail");
const header = `

${welcome}

${logSymbols.success}  E Mail: pasindukavishka5@gmail.com

${logSymbols.success}  Mobile: +94701475135`;

module.exports = header; 