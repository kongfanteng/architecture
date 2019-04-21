// 1.fs：
// fs path __dirname readFile writeFile 
// 读内存在写内存
// 流边读边写，控制读取的速率 基于事件
let fs = require('fs');
let path = require('path');
fs.readFile(path.resolve(__dirname,'./name.txt'),(err,data)=>{
  if(err)return;
  fs.writeFile(path.resolve(__dirname,'./name1.txt'),data,(err)=>{
    console.log('写入成功');
  })
})

// 2.events.js
// EventEmiter new on 吃饭 米饭 肉 emit
let EventEmiter = require('events');
let e = new EventEmiter();
e.on('吃饭',function(){
  console.log('吃米饭');
})
e.on('吃饭',function(){
  console.log('吃肉');
})
e.emit('吃饭');
// EventEmiter constructor _events on eventName,callback push [callback] emit forEach fn() off filter fn!=callback 
class EventEmiter{
  constructor(){
    this._events = {};
  }
  on(eventName,callback){
    if(this._events[eventName]){
      this._events[eventName].push(callback);
    }else{
      this._events[eventName] = [callback]
    }
  }
  emit(eventName){
    this._events[eventName].forEach(fn=>{
      fn();
    })
  }
  off(eventName,callback){
    this._events[eventName] = this._events[eventName].filter((fn)=>{
      return fn != callback
    })
  }
}
let e = new EventEmiter();
let fn = function(){
  console.log('吃米饭');
}
e.on('吃饭',fn)
e.on('吃饭',function(){
  console.log('吃肉');
})
e.off('吃饭',fn)
e.emit('吃饭');
// 3.stream.js
// fs path createReadStream flags r/w highWaterMark encoding autoClose start end 
// on 'data' 'end' arr concat toString 
// rs.pause rs.resume 'error' 
let fs = require('fs');
let path = require('path');
let r = fs.createReadStream(path.resolve(__dirname,'./name.txt'),{
  flags: 'r', // r,w
  highWaterMark: 3,
  encoding: null,
  autoClose: true,
  start: 0,
  end: 5
})
let arr = [];
r.on('data',function(chunk){
  arr.push(chunk);
  // r.pause();
})
r.on('end',function(){
  console.log(Buffer.concat(arr).toString())
})
r.on('error',function(e){
  console.log(e);
})
// setInterval(()=>{
//   r.resume();
// },1000)

// 4.writeStream.js
// fs path ws createWriteStream flags encoding highWaterMark autoClose start .write flag 
// readLine 
let fs = require('fs');
let path = require('path');
// 可写流两个方法 write end

let w = fs.createWriteStream(path.resolve(__dirname,'./name1.txt'),{
  flags: 'w', // 文件不存在会创建一个文件 如果有内容会清空内容
  encoding: 'utf8',
  highWaterMark: 5, // 每次我预计写入多少个 16k
  autoClose: true,
  start: 0
})
// 我们写入的内容必须是Buffer/字符串
let flag = w.write('123ddddddddd'+'',function(err){
  console.log('写入成功');
})// 可读流+可写流 每次读十个->去写文件->先别读取了
console.log(flag)
// 当我写入后，再继续写入其他的 on('drain')
// 处理异步，内部创建了空间 [123,'结束']
w.end('结束');
w.write('2222222'); // write after end 已经结束了，不能再写入了

// 5.read+write.js
// fs path createReadStream createWriteStream r.'data' w.'drain' r.'end' write flag pause() resume()
//  64k一下readFile 
// pipe r,w r.pipe(w) node的流是最复杂的
let fs = require('fs');
let path = require('path');
let r = fs.createReadStream(path.resolve(__dirname,'./name.txt'),{
  highWaterMark: 3
})
let w = fs.createWriteStream(path.resolve(__dirname,'./name1.txt'),{
  highWaterMark: 1
})
r.pipe(w);
// function pipe(r,w){
//   r.on('data',function(data){
//     let flag = w.write(data);
//     if(!flag)r.pause();
//   });
//   w.on('drain',function(){
//     console.log('抽干');
//     r.resume();
//   })
//   r.on('end',function(){
//     console.log('文件读取完毕');
//     w.end('结束');
//   })
// }
// pipe(r,w);

// 6.http.js
// 01-浏览器 监听 监听特定的ip和端口 不用3000一下 request存放的内容 response响应的内容 post方法 请求分为三部分 1请求行 方法 路径 协议 2 请求头 浏览器信息 3 请求体 request可读流 response 可写流 请求体需要.on 'data'获取数据 相依也分为三部分 1 响应行 状态码 200 204 206（范围请求） 301(永久重定向) 302（临时重定向） 304 (缓存) 401无权限 403无法访问 404 500服务器挂了 2 响应头 3 响应行
// 02-http server .createServer request response .listen 'localhost' .on 'request' .url .method .httpVersion .headers .write .end arr .on 'data' 'end' .replace /([^=&]*)=(^=&*)/g .stringfy 'querystring' ('&','=') .stateCode .setHeader 
// 03-$ curl -v www.baidu.com 
// $ curl -v -X POST -d "username=123&password=456" http://localhost:3000
// $ curl -v --header  "Range: bytes=200-299" https://www.baidu.com/
// 206 Range
let http = require('http');
let querystring = require('querystring');
let server = http.createServer(function(request,response){
  // console.log(request.method);
  // console.log(request.url);
  // console.log(request.httpVersion);
  // console.log(request.headers);
  let arr = [];
  request.on('data',function(data){
    arr.push(data);
    console.log(data);
  })
  request.on('end',function(){
    // let obj = {};
    let str = Buffer.concat(arr).toString();
    // str.replace(/([^=&]*)=([^=&]*)/g,function(){
    //   obj[arguments[1]] = arguments[2];
    // })
    // console.log(obj);
    let obj = querystring.parse(str,'&','=');
    response.statusCode = 200;
    response.setHeader('a','1'); 
    response.end(JSON.stringify(obj));
  })
  // response.end('hello');
})
server.listen(3000,function(){
  console.log('start 3000')
})