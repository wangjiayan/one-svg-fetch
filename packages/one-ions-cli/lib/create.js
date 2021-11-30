const path = require('path')
const fs = require('fs-extra')
const inquirer = require('inquirer')
module.exports = async function (name, options) {
  // 执行创建命令
  const cwd = process.cwd()
  const targetAir = path.join(cwd,name)
  console.log('targetAir',targetAir)
  if (fs.existsSync(targetAir)){
    console.log('1')
    if (options.force){
      await fs.remove(targetAir)
    }else{
      console.log('2')
        // 询问用户是否确定要覆盖
        let { action } = await inquirer.prompt([
          {
            name: 'action',
            type: 'list',
            message: '文件夹已经存在:',
            choices: [
              {
                name: '覆盖',
                value: 'overwrite'
              },{
                name: '取消',
                value: false
              }
            ]
          }
        ])
        if (!action) {
          return;
        } else if (action === 'overwrite') {
          // 移除已存在的目录
          console.log(`\r\n正在删除...`)
          await fs.remove(targetAir)
        }
  
    }
  }
}