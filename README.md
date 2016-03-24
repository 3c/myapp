# Nodejs 入门

实现了数据录入，以列表形式显示

![](http://7xpfmh.com1.z0.glb.clouddn.com/16-3-24/18441444.jpg)

![](http://7xpfmh.com1.z0.glb.clouddn.com/16-3-24/90747695.jpg)

## 运行步骤
1. 确保nodejs,mongodb已安装，具体安装步骤在后面
2. cd 进工程目录
3. npm install express --save
  
	npm install mongoose
	
	npm install
4. npm start
5. 浏览器打开 <a>http://127.0.0.1:3000/</a>


## nodejs安装

官网 ： [nodejs](https://nodejs.org)

[下载地址](https://nodejs.org/en/download/)
### windows
	download file and double click
### mac os
	brew install node
### ubuntu
	curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash -
	sudo apt-get install -y nodejs	
	
	sudo apt-get install npm
### other linux
	download ***.tar.gz , make install
	
## mongoDB
### windows
download file and double click     <a>http://www.mongodb.org/</a>

	> cd C:\Program Files\mongodb\bin
	> C:\Program Files\mongodb\bin>mongod -dbpath "C:\Program Files\mongodb\data\db"

### ubuntu
	https://docs.mongodb.org/master/tutorial/install-mongodb-on-ubuntu/?_ga=1.49695202.534451744.1453280087

### mac
	brew install mongodb 
	启动：
	mongod --config /usr/local/etc/mongod.conf

[可视化工具robomongo](http://app.robomongo.org/download.html)