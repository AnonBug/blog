# Mac 使用指南

## 1. 软件安装

### 1.1 Brew

```sh
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"
# 根据提示选择源，亲测「清华源」可靠有效

# 重启终端，验证安装效果
brew --version
```

### 1.2 Node

推荐[使用 nvm 安装 node](https://www.runoob.com/w3cnote/nvm-manager-node-versions.html)，可以进行多版本管理。

```sh
# 安装 nvm
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash

# 查看可以安装的 node 版本
nvm ls-remote

# 安装指定版本的 node
nvm install 4.2.2
nvm install 12.2

# 查看已安装的 node 版本
nvm ls

# 切换当前使用的版本
nvm use 4.2.2

# 查看某版本的 node 路径
nvm which 4.2.2
```

## 2. 日常命令行

### 2.1 文件操作

#### 查看文件内容

```sh
cat 文件名
```

### 2.2 vim 编辑器

- 打开文件：`vim 文件名`
- 编辑文件：`i`
- 退出编辑模式：`ESC 按键`
- 保存编辑内容：`:w`
- 退出文件：`:q`
- 未做更改时的退出：`:q!`

## 3. 阿里云

### 3.1 连接与断开

```sh
# 连接服务器
ssh root@www.zhaoyuchun.life
# 根据提示输入密码

# 断开服务器
exit
```

### 3.2 **nginx 服务器**

#### 启动与关闭
```sh
# 启动与验证
/usr/local/nginx/sbin/nginx
# 验证
curl http://localhost

# 关闭
# 查看 nginx 的主进程号
ps -ef|grep nginx
# root       24044       1  0  2021 ?        00:00:00 nginx: master process ./nginx
# root       40359   24044  0 1月06 ?       00:00:00 nginx: worker process
# root       45841   45769  0 11:50 pts/1    00:00:00 grep --color=auto nginx

# 停止指定进程
sudo kill -QUIT 24044
```

在公网环境访问 ip ：`http://121.40.18.171`（需要配置阿里云安全组规则，开发http协议访问）

#### 配置单域名代理多端口

### 3.3 文件传输

```sh
scp
```