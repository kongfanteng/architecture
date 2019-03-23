- 单功 单向通信;
- 半双功 单双向通信
- 双功 全双向通信
#### 双向通信
1. 轮询(polling):前端定时请求后台
2. 长轮询(long-polling) ：前端请求成功后再请求，后端定时返回
3. iframe流(streaming)：前端引用iframe,函数；后台定时发送，res.write
4. eventsource 
```
## express 
## setInterval 
## 
xhr = new XMLHttpRequest;-
xhr.open('GET','/clock',true);
xhr.onreadystatechange = function(){
  if(xhr.readyState == 4 && xhr.status == 200){
    clock.innerHTML = xhr.responseText;
  }
}
xhr.send();
document.querySelector('#clock);
##
```
> \n newline 换行； \r carriage 回车
#### websocket
```
let express = require('express');
const path = require('path');
let app = express();
let server = require('http').createServer(app);
app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});
app.listen(3000,function(){
  // console.log('链接成功');
});

let WebSocketServer = require('ws').Server;
let wsServer = new WebSocketServer({ port: 8888 });
wsServer.on('connection', function (socket) {
    console.log('连接成功');
    socket.on('message', function (message) {
        console.log('接收到客户端消息:' + message);
        socket.send('服务器回应:' + message);
    });
});
```
