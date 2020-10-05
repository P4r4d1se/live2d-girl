### 前言
以前一直用的[stevenjoezhang](https://github.com/stevenjoezhang/live2d-widget)的看板娘，但我不太喜欢里面2233娘和其他的几个模型，然后我就找到了看板娘的原作者的[Github仓库](https://github.com/fghrsh/live2d_demo)fork了一个，并把[API](https://github.com/fghrsh/live2d_api)整合到了一起。
### 改动
删掉了其他几个模型，只保留了Pio和Tio两个模型，并从[梦象](https://mx.paul.ren/)添加了一个血小板的模型，不过血小板只有一套衣服。
[![0YaysP.th.png](https://s1.ax1x.com/2020/10/05/0YaysP.th.png)](https://imgchr.com/i/0YaysP) [![0YasMt.th.png](https://s1.ax1x.com/2020/10/05/0YasMt.th.png)](https://imgchr.com/i/0YasMt) [![0YaDxI.th.png](https://s1.ax1x.com/2020/10/05/0YaDxI.th.png)](https://imgchr.com/i/0YaDxI)
### 使用
在网站根目录gitclone这个仓库，然后在主页面找个地方把这两句JS插进去就行

```javascript
<script src="/live2d-girl/assets/jquery.min.js?v=3.3.1"></script>
<script src="/live2d-girl/assets/autoload.js" type="text/javascript"></script>
```

如果不是根目录的话要去`/live2d-girl/assets/autoload.js`改一下路径
**注意：自建API需要PHP>=5.2并且安装了PHP的json扩展**
如果不想自建API需要在`/live2d-girl/assets/autoload.js`里把下面这句删掉就会使用原作者提供的API
`live2d_settings['modelAPI'] = '/live2d-girl/api/';   // 自建 API 修改这里`
其他自定义配置请阅读原作者的两个仓库的README：
https://github.com/fghrsh/live2d_demo
https://github.com/fghrsh/live2d_api
