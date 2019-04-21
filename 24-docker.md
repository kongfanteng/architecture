1. docker课件：http://www.zhufengpeixun.cn/architecture/html/61.11.devops-docker.html
2. docker lnmp nginx php lnmp项目 node项目  java项目 jenkins安装和使用 pipeline 如何搭建php和java还有node开发环境。
3. docker network ls
   1. 宿主机（host) ->docker容器
   2. 宿主机（bridge）-> dockr容器独立ip
4. 自定义网络：财务部+研发部分离，各自子部分相通
5. 应用层http ftp;传递层tcp/udp 端口号位置 ; 网络层ip ; 物理层mac二进制信号;
6. 编排 服务治理 网络管理 访问控制
   1. 考虑选择哪些镜像和容器
   2. 安装合适的顺序启动这些容器
   3. 管理容器中的服务
   4. 服务宕机了，负责重启
   5. 服务器负载太大，动态扩容
   6. 程序更新，动态升级镜像、容器和服务
   7. k8s出现负责这些任务
7. compose 
   1. docker-compose.yml
8. 集群
   1. 域名后面会挂跟多个NGINX
   2. nginx后面会挂很多应用服务器
   3. 每个应用服务器后面会挂很多个数据库
   4. 主机 进程 服务 容器
9. Jenkins+docker+github 前端自动化工作流
10. rz/sz https://www.cnblogs.com/wangyuelang0526/p/5057154.html
### DevOps持续集成
1. Jenkins
   1. 非容器化CI/CD 开发-编译-部署到测试环境-测试-部署到生成环境
   2. 容器化CI/CD 开发-编译-打包镜像仓库-部署到任何环境-测试
2. 流程
   1. git服务器：github gitee gitlab
   2. jenkins服务器，相当于自己是一个老板
   3. 它会有自己的slave工作节点，负责工作
   4. webserver用于部署的服务器
3. jenkins安装

ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQD8vPl7nfJbBMZQBtN3E5553l0S/FAINLK3SW9xGd82i1W8tSBmUotoVhP5zVBh7qSQIfUBktJfQKZ53th0sLNeCEahXahS9o+2Wr0gfY0lrf0qLnYAJ8hNzqjKWNYC5vskrianpeljFu8fQdW+OD1V2ExVwNiEOoLMCWiJeJ61lvkNtgx85YIDJEKnkeUlMPfqNWfE9wTaC9gz0OHs4POpkjtl/tN+ywRB4OjuWmM9+QkZDl14LtcqMyUSEtM4cIcg/gvdPgziIThDznlf4XZZN2OZbx/NIXKYb5fIz/syyN2mm/fpBp1kbWoAfirbEzK5GQ1dTE3GD3ONMKBN3TtJ root@MiWiFi-R3L-srv