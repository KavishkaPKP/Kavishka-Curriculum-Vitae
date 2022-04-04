const chalk = require("chalk");
const Table = require('cli-table');
const project =  chalk.hex("#ed7902").inverse.bold(" RECENT PROJECTS ");

// instantiate
const table = new Table({

    head: ['#', 'Projects', 'Technologies'],
    style: { 'head': ["green"]}
});
table.push(
    ['1', 'Student Management System', 'Node js / React JS'],
    ['2', 'Employee Management System', 'java / servlat'],
    ['3', 'Train Reservation System', 'PHP / HTML'],
    ['4', 'Taxi Management System ', 'C#'],
    ['5', 'Warehouse Management System', 'android'],
);
const pro = `
${project}

${table.toString()}`;

module.exports = pro ;