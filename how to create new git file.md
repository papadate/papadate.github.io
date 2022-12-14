# 如何创建git文件

```bash
git add . // 添加所有目录内文件
```

* `.gitignore`
  - `*.exe` 不要上传 通配（几个文件夹内的） exe后缀文件
  - `**/folder_name` 不要上传通配 （几个文件夹内的）同名字文件夹
```
eg. MainFolder
    |
    |--folder1
    |   |--somefiles
    |   |--src  (这个不上传)
    |
    |--folder2
        |--somefiles
        |--src  (这个不上传)
```
```bash
git commit -m "your comment about this upload" # 上传时的留言
git branch -M <branch name> #文件所在分支
    eg. git branch -M master
git remote add origin + "git reporsitory's https address" #远程添加git origin
    eg.  https://github.com/papadate/gostudy.git
git push -u origin <your branch name>
    eg. git push -u origin master
```