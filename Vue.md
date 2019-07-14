## 接口使用

接口地址是http://rap2api.taobao.org/app/mock/7058 ，按照课程视频的要求使用: let host = 'http://rap2api.taobao.org/app/mock/7058'
接口完整地址为 host+路由， 如 http://rap2api.taobao.org/app/mock/7058/index/hotLists

## 关于Https接口

如果使用https接口，可把接口http://rap2api.taobao.org/app/mock/7058更改为 https://www.easy-mock.com/mock/5c9c3045d172204b3a07ecb0/youzan ，后面的路由都一样

## Tips

建议同学自己使用easymock根据rap2的文档创建接口，使用更真实的商品图片和商品标题，让你的项目看起来更生动





## 开发环境的配置

### 基础环境

- [node](https://nodejs.org/en/)
- [nrm](https://github.com/Pana/nrm) -- NPM registry manager, fast switch between different registries: npm, cnpm, nj, taobao
  \```
  $ npm install -g nrm

$ nrm use taobao //switch registry to taobao
\```

- [cnpm](http://npm.taobao.org/) -- 淘宝 NPM 镜像

### [npm](https://www.npmjs.com/)

- npm init --yes
- npm install [package]
- npm install -g [package]
- npm run [script]

### 开发工具

- [Sublime](http://www.sublimetext.com/3)、[VSCode](https://code.visualstudio.com/)、[Atom](https://atom.io/)、[WebStorm](http://www.jetbrains.com/webstorm/)
- [packagecontrol](https://packagecontrol.io/installation#st3)
- 基础插件：Terminal、SideBarEnhancements、MarkdownLight、OmniMarkdownPreviewer
- vue插件：Vue Syntax Highlight

### 浏览器

- chrome、qq浏览器
- 插件[Vue.js devtools](https://github.com/vuejs/vue-devtools)
- [chrome应用商店](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
- [qqbrowser应用中心](qqbrowser://extensions/search?key=vue)

### 接口管理平台

- [rap](http://rap.taobao.org/org/index.do)
- [视频教程](http://thx.github.io/RAP/study.html)
- [用户手册](https://github.com/thx/RAP/wiki/user_manual_cn)

### 模拟数据

- [mockjs](http://mockjs.com/)

### ES6

- let和const
- 函数参数的解构赋值
- 模板字符串
- 箭头函数
- Promise
- Class
- Module