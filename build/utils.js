var path = require('path')
var config = require('../config')

/**
 * @desc: 判断环境，返回一个配置的路径
 */
function assetsPath(_path) {
    var assetsSubDirectory = config.build.assetsSubDirectory
    return path.posix.join(assetsSubDirectory, _path)
}

/**
 * @desc: 处理css单独抽取功能代码
 */
function styleLoader(options) {
    var output = []

}

module.exports = {
    assetsPath: assetsPath,
    styleLoader: styleLoader
}