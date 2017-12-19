# Proxy0Net
heroku.com
## Heroku 部署方法：
1. 注册 [Heroku](https://heroku.com) 
2. Fork 本项目
3. 创建一个应用：在[创建应用页面](https://dashboard.heroku.com/new-app)创建一个应用
4. 在部署 (Deploy) 页面选择 GitHub，在Connect to GitHub 这一栏连接上你的 GitHub 帐号，搜索并连接本项目
6. 环境变量添加 `PERIOD` 字段，以控制网站内容更新周期（每访问 `PERIOD` 次重新爬取信息），`PERIOD` 建议设置为`用户数量 × 5`。
7. 选择一个分支并点击 `Deploy Branch`
8. 部署完毕后，将网页拉到最上面，并点击`Open app`打开你的网站。注意：网站访问第二次之后会进行爬取并检测帐号可用性，大概花费20分钟的时间。
