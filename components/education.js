const chalk = require("chalk");
const figures = require('figures');

const edu =  chalk.hex("#ed7902").inverse.bold(" EDUCATION ");

const School  = chalk.hex("1877f2").bold("School");
const University  = chalk.hex("1877f2").bold("University");
const Institutes  = chalk.hex("1877f2").bold("Institutes");

const education = `

${edu}

${figures.bullet} ${School}    : WP/KE/Biyagama Central College

${figures.bullet} ${University}: Sri Lanka Institute of Information Technology (SLIIT) - Malabe

${figures.bullet} ${Institutes}: Esoft Metro Campus(Gampaha & Kiribathgoda)`;

module.exports = education ;