- 单功 单向通信;
- 半双功 单双向通信
- 双功 全双向通信
#### 双向通信
> 轮询(polling) 长轮询(long-polling) iframe流(streaming)

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