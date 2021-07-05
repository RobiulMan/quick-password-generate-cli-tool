#!/usr/bin/env node  
/*
 * Title: Quick Password Generator CLI Tool
 * Description: This JS file has all the JS functions necessary to control the Quick Password Generator CLI Tool application
 * Author: Robiul
 * Date: 6/7/2021
 *
 */
 
const program = require('commander');
const chalk = require('chalk');
const clipboardy = require('clipboardy');

const passwordMaker = require('./utils/passwordMaker');
const savePassword = require('./utils/savePassword');

const log = console.log;

program.version('1.0.0').description('quick password generator cli tool');
program
  .option('-l, --length <number>', 'length of password', '8')
  .option('-s, --save ', 'save password to password.txt')
  .option('-nn, --no-number ', 'remove numbers')
  .option('-ns, --no-symbols ', 'remove symbols')
  .parse();

const { length, save, number, symbols } = program.opts();

//get generated password
const generatedPassword = passwordMaker(length, number, symbols);

//Copy to clipboardy
clipboardy.writeSync(generatedPassword);

//Output generated password
log(chalk.blue('Generated Passowrd: ') + chalk.blue(generatedPassword));
log(chalk.yellow('Password copied to clipboard'));

//Save to file
if (save) {
  savePassword(generatedPassword);
}
