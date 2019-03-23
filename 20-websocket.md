- 单功 单向通信;
- 半双功 单双向通信
- 双功 全双向通信
#### 双向通信
> 轮询(polling):前端定时请求后台
>  
> 长轮询(long-polling) ：前端请求成功后再请求，后端定时返回
> 
> iframe流(streaming)：前端引用iframe,函数；后台定时发送，res.write

```
## express 
## setInterval 
## 
xhr = new XMLHttpRequest;
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
