const path = require('path')
const fs = require('fs')
const chalk = require('chalk')
const Creator = require('./creator')

module.exports = async function (projectName, cmd) {
  // 获取当前操作目录
  const cwd = process.cwd()
  const targetDir = path.join(cwd, projectName)

  if (fs.existsSync(targetDir)) {
    // 提示已有文件
    console.log(`${chalk.red('Error!!! The file already exists')}`)
    return
  }

  // 创建项目
  const creator = new Creator(projectName, targetDir);

  creator.create();
}
