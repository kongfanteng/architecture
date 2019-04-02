### linux文档: http://www.zhufengpeixun.cn/architecture/html/61.1.devops-linux.html
1. 压缩
   1. `$ zip 1.txt.zip 1.txt` 压缩1.txt文件
   2. `$ unzip 1.txt.zip` 解压1.txt.zip
   3. `$ rm -rf 1.txt` 删除1.txt
   4. `$ zip -r book.zip book` 压缩文件夹
   5. `$ gzip ...` 高压
   6. `$ gzip -d ...` 解压
   7. `$ gzip -c text.txt > test.txt.gz` 保留源文件高压 
   8. `$ gunzip` 解压
   9. `$ bzip2 test.txt` 压缩更强 
   10. gzip bzip2不能压缩目录
   11. tar只打包不压缩
   12. `$ tar -cvf book.tar book` 打包 c创建create v日志冗余 f指定
   13. `$ tar -xvf book.tar` 解包
   14. `$ gzip book.tar` gzip压缩tar文件
   15. `$ tar -zcvf book.tar.gz book` 打包压缩
   16. `$ tar -zxcf book.tar.gz` 解压
   17. `$ tar -jcvf book.tar.bz2 book` bz2压缩
   18. `$ tar -jxvf book.tar.bz2` 
2.  磁盘管理
    1. df -l -a -a -H -T -t -x 查看磁盘情况
    2. du -b -k -m -h -H -s 统计文件大小
3. linux 一切皆为文件
算法题 https://www.weavinghorse.com/
umark 掩码 按位的相减 默认022 自己有读写权限，所有组掩掉写权限，其他人掩掉写权限

1. virtualbox
2. 

