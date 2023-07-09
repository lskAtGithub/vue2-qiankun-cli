const package = require('./package.json')
const program = require('commander')

program
  .command('create <project-name>') // add create
  .description('create a new project') // desc
  .action((projectName, cmd) => {
    require('./command/create')(projectName, cmd)
  })

program.name(package.name).usage(`<commander>[option]`).version(package.version)
// 解析用户输入的参数
program.parse(process.argv)
