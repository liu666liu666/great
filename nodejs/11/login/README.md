#使用方式

>确保nodejs在9.0版本以上

```bash

cd <project>

npm start

```

#项目结构

|--bin                  //项目启动相关文件
|--mock                 //模拟接口
|  |--data              //使用json文件进行数据存储
|     |--students.json  
|  |--index.js          //配置接口地址
|--src                  //静态文件服务
|  |--page
|     |--article.html
|  |--css
|     |--article.css
|  |--js
|     |--article.js
|--package.json         //项目配置文件