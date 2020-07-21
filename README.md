# blog

## 本项目已有以下依赖

- animejs
- better-scroll
- core-js,
- vue-router
- vuetify
- vuex

## 想法

### 1.页面结构

主页

    登录注册
        注册完自动登录；
        登录完跳到首页；

    博客
        内容
        登录按钮（登陆后可上传博客）
        编辑器（暂未定）

    学习打卡
        if{
            登录了？
            是，跳转学习打卡；
            否，跳转登录注册；
        }
        if{
            管理员账号，管理员界面（多一个新建任务）
            非管理员账号，普通页面（类似todo清单）
        }

    源码链接
        github

（进入登录注册会判断从哪里来，最后回到相同地方）

### 2.具体页面

#### 主页

一行 onecho
下面四个可点击

#### 登录注册

就一个框 😅，难度在于功能的实现

#### 博客

分页列表 右上一个登录，登陆后多一个上传，
搜索功能？（大概也不会有多少篇，不确定做不做

##### 博客内容

长条，加个 BetterScroll(如果组件不支持)左边目录，手机端消失，支持切换总目录和文件目录，处理主要后端实现

##### 博客上传区

上传完可预览再发布（服务器自带图床）

#### 学习打卡

##### 打卡区

列表（有时间但不限制

##### 已完成

列表

##### 管理区

发布任务，查看完成情况，记录完成情况

列表
