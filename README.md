# Mbo-ts-mobx

this is typescript web start,support hot-reload,react-reouter4,prettier,mobx,Code Splitting,css-modules

### 用法

### 目标

- 删除 tslint 规则，转而使用 eslint 的方式进行代码检测，原因是 tslint 作者已经宣布不维护，转而使用 eslint
- 使用 react16 版本之后的新特性去完成代码分割特性，不在引入 react-loadable 的包
- 降低代码包的体积，让初始化的代码包体积更友好，能够更快速的加载出来我们需要的代码
- 集成我的 UI 组件库，这个会在另一个仓库中做成一个优秀的插件库，然后能够快速集成进来
- 能给支持 webpack 配置的热更新，看看 turbo 的实现逻辑
- 优化 config 的配置，能够在本地开发和打包做一个区分
- 更好的支持 pwa 和 service-worker，开箱即用
- 优化 babel 的配置和使用和 webpack 的配置，使用更优秀的代码插件来进行开发
- 内置更多常用的代码块，并且做到实时更新

### 参考仓库脚手架
