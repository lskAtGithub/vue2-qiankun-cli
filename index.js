const package = require('./package.json')
const program = require('commander')
const chalk = require('chalk')
const figlet = require('figlet')
const Inquirer = require('inquirer')

program.name(package.name).usage(`<commander>[option]`).version(package.version)
program.parse(process.argv)

new Inquirer.prompt({
  name: 'Vue',
  type: 'checkbox',
  message: '请选择您要添加的工程',
  choices: [{ name: 'Babel' }, { name: 'TS' }],
}).then((data) => {
  console.log(data)
})

console.log("/r/n" + figlet.textSync("create over",{
  font: 'Ghost',
  horizontalLayout: 'default',
  verticalLayout: 'default',
  width: 120,
  whitespaceBreak: true
}))
