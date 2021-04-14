#### 介绍
react-lesson。 gitee page: http://citos.gitee.io/react-lesson/ 

![capture1](https://user-images.githubusercontent.com/79709400/114721199-4cc56b00-9d6b-11eb-838c-017492dbc684.PNG)


![capture](https://user-images.githubusercontent.com/79709400/114722582-80ed5b80-9d6c-11eb-8b02-a7c4a250d57a.png)
#搜索

![capture2](https://user-images.githubusercontent.com/79709400/114721243-58189680-9d6b-11eb-9906-78107e93fc4c.PNG)
#dismiss不显示
![capture3](https://user-images.githubusercontent.com/79709400/114721283-5fd83b00-9d6b-11eb-8dc3-87fe78aed681.PNG)

#### 从脚手架工程做起
npm install -g create-react-app
cd C:\Project\gitee  
create-react-app react-lesson   

#### 从git工程做起

- 下载git工程
C:\Project\gitee  
git clone git@gitee.com:citos/react-lesson.git  

- 安装  
cd react-lesson  
npm install  

- 启动  
在.env文件指定端口，例如：PORT=9000  
npm start 

- 打包  
npm run build  
生成文件位于C:\Project\gitee\react-lesson\build  

#### 创建gh-pages分支  
在gitee页面[https://gitee.com/citos/react-lesson/branches](https://gitee.com/citos/react-lesson/branches)新建分支gh-pages 
或命令行  
cd C:\Project\gitee\react-lesson  
git branch gh-pages  
git checkout gh-pages  
git push origin gh-pages   

#### 提交gh-pages分支  
C:\Project\gitee\react-lesson\build  
git init  
git add -A  
git commit -m "deploy pages"  
git push -f git@gitee.com:citos/react-lesson.git master:gh-pages  

#### 设置Gitee Pages服务 
在git页面[https://gitee.com/citos/react-lesson/pages](http://gitee.com/citos/react-lesson/pages)选择部署分支gh-pages  
访问地址： http://citos.gitee.io/react-lesson   

