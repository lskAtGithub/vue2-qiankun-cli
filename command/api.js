const axios = require('axios')

// 拦截全局请求响应
axios.interceptors.response.use((res) => {
  return res.data
})

/**
 * 获取仓库列表
 * @returns Promise
 */
async function getLskCiaoRepos() {
  return axios.get('https://gitee.com/api/v5/users/lsk_ciao/repos')
}

/**
 * 获取仓库下的版本
 * @param {string} repo 模板名称
 * @returns Promise
 */
async function getTagsByRepo(repo) {
  return axios.get(`https://gitee.com/api/v5/repos/lsk_ciao/${repo}/tags`)
}

/**
 * 获取所有分支
 * @param {string} repo 模板名称
 * @returns Promise
 */
async function getBranchesByRepo(repo) {
  return axios.get(`https://gitee.com/api/v5/repos/lsk_ciao/${repo}/branches`)
}

module.exports = {
  getLskCiaoRepos,
  getTagsByRepo,
  getBranchesByRepo,
}
