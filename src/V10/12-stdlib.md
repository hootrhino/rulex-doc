---
title: 12-RULEX 标准库
---

## 1. 消息转发
### 数据转MQTT Server
#### 函数定义
| 函数名     | 参数        | 返回值       | 说明                         |
| ---------- | ----------- | ------------ | ---------------------------- |
| DataToMqtt | data:string | error:string | 数据转发到另一个 MQTT Server |
#### 示例
首先新建好资源，然后编写脚本:
```lua
-- Success
function Success()
    print("success")
end
-- Failed
function Failed(error)
    print("failed:", error)
end

-- Actions
Actions = {
    function(data)
        rulexlib:DataToMqtt('UUID', data)
        return true, data
    end
}

```
### 数据转HTTP Server
#### 函数定义
| 函数名     | 参数        | 返回值       | 说明                         |
| ---------- | ----------- | ------------ | ---------------------------- |
| DataToHttp | data:string | error:string | 数据转发到另一个 HTTP Server |
#### 示例
首先新建好资源，然后编写脚本:
```lua
-- Success
function Success()
    print("success")
end
-- Failed
function Failed(error)
    print("failed:", error)
end

-- Actions
Actions = {
    function(data)
        rulexlib:DataToHttp('UUID', data)
        return true, data
    end
}
```

## 2. JQ处理

### JQ支持
#### 函数定义
| 函数名 | 参数        | 返回值       | 说明                                           |
| ------ | ----------- | ------------ | ---------------------------------------------- |
| JQ     | data:string | error:string | JQ筛选，语法请看:https://stedolan.github.io/jq |
#### 示例
首先新建好资源，然后编写脚本:
```lua
-- Success
function Success()
    print("success")
end
-- Failed
function Failed(error)
    print("failed:", error)
end

-- Actions
Actions = {
    function(data)
        rulexlib:JQ('.[]',data)
        return true, data
    end
}
```


## 3. 日志输出

### 向文件输出日志
#### 函数定义
| 函数名 | 参数        | 返回值       | 说明           |
| ------ | ----------- | ------------ | -------------- |
| log    | data:string | error:string | 打印日志到文件 |
#### 示例
首先新建好资源，然后编写脚本:
```lua
-- Success
function Success()
    print("success")
end
-- Failed
function Failed(error)
    print("failed:", error)
end

-- Actions
Actions = {
    function(data)
        rulexlib:log(data)
        return true, data
    end
}
```


## 4. 直达数据

### 输入到源
#### 函数定义
| 函数名        | 参数                     | 返回值       | 说明               |
| ------------- | ------------------------ | ------------ | ------------------ |
| WriteInStream | uuid:string, data:string | error:string | 数据直接写向某个源 |
#### 示例
首先新建好资源，然后编写脚本:
```lua
-- Success
function Success()
    print("success")
end
-- Failed
function Failed(error)
    print("failed:", error)
end

-- Actions
Actions = {
    function(data)
        rulexlib:WriteInStream('UUID', data)
        return true, data
    end
}
```

### 输入到目标
#### 函数定义
| 函数名         | 参数                     | 返回值       | 说明                 |
| -------------- | ------------------------ | ------------ | -------------------- |
| WriteOutStream | uuid:string, data:string | error:string | 数据直接写向某个目标 |
#### 示例
首先新建好资源，然后编写脚本:
```lua
-- Success
function Success()
    print("success")
end
-- Failed
function Failed(error)
    print("failed:", error)
end

-- Actions
Actions = {
    function(data)
        rulexlib:WriteOutStream('UUID', data)
        return true, data
    end
}
```

## 5. 二进制操作

### 数据转HTTP Server
#### 函数定义
| 函数名 | 参数                                                  | 返回值       | 说明           |
| ------ | ----------------------------------------------------- | ------------ | -------------- |
| MB     | expression:string, data:string, returnMore:bool(0\|1) | error:string | 解析二进制数据 |
#### 示例
首先新建好资源，然后编写脚本:
```lua
-- Success
function Success()
    print("success")
end
-- Failed
function Failed(error)
    print("failed:", error)
end

-- Actions
Actions = {
    function(data)
        rulexlib:MB('> a:8 b:16', data)
        return true, data
    end
}
```


## 6. URL处理

### 数据转HTTP Server
#### 函数定义
| 函数名     | 参数        | 返回值       | 说明                         |
| ---------- | ----------- | ------------ | ---------------------------- |
| DataToHttp | data:string | error:string | 数据转发到另一个 HTTP Server |
#### 示例
首先新建好资源，然后编写脚本:
```lua
-- Success
function Success()
    print("success")
end
-- Failed
function Failed(error)
    print("failed:", error)
end

-- Actions
Actions = {
    function(data)
        rulexlib:DataToHttp('UUID', data)
        return true, data
    end
}
```


## 7. 数据持久化

### 数据转HTTP Server
#### 函数定义
| 函数名     | 参数        | 返回值       | 说明                         |
| ---------- | ----------- | ------------ | ---------------------------- |
| DataToHttp | data:string | error:string | 数据转发到另一个 HTTP Server |
#### 示例
首先新建好资源，然后编写脚本:
```lua
-- Success
function Success()
    print("success")
end
-- Failed
function Failed(error)
    print("failed:", error)
end

-- Actions
Actions = {
    function(data)
        rulexlib:DataToHttp('UUID', data)
        return true, data
    end
}
```


## 8. 时间操作

### 数据转HTTP Server
#### 函数定义
| 函数名     | 参数        | 返回值       | 说明                         |
| ---------- | ----------- | ------------ | ---------------------------- |
| DataToHttp | data:string | error:string | 数据转发到另一个 HTTP Server |
#### 示例
首先新建好资源，然后编写脚本:
```lua
-- Success
function Success()
    print("success")
end
-- Failed
function Failed(error)
    print("failed:", error)
end

-- Actions
Actions = {
    function(data)
        rulexlib:DataToHttp('UUID', data)
        return true, data
    end
}
```


## 9. 缓存器库

### 数据转HTTP Server
#### 函数定义
| 函数名     | 参数        | 返回值       | 说明                         |
| ---------- | ----------- | ------------ | ---------------------------- |
| DataToHttp | data:string | error:string | 数据转发到另一个 HTTP Server |
#### 示例
首先新建好资源，然后编写脚本:
```lua
-- Success
function Success()
    print("success")
end
-- Failed
function Failed(error)
    print("failed:", error)
end

-- Actions
Actions = {
    function(data)
        rulexlib:DataToHttp('UUID', data)
        return true, data
    end
}
```


## 10. JSON编解码

### 数据转HTTP Server
#### 函数定义
| 函数名     | 参数        | 返回值       | 说明                         |
| ---------- | ----------- | ------------ | ---------------------------- |
| DataToHttp | data:string | error:string | 数据转发到另一个 HTTP Server |
#### 示例
首先新建好资源，然后编写脚本:
```lua
-- Success
function Success()
    print("success")
end
-- Failed
function Failed(error)
    print("failed:", error)
end

-- Actions
Actions = {
    function(data)
        rulexlib:DataToHttp('UUID', data)
        return true, data
    end
}
```


## 11. RPC编解码

### 数据转HTTP Server
#### 函数定义
| 函数名     | 参数        | 返回值       | 说明                         |
| ---------- | ----------- | ------------ | ---------------------------- |
| DataToHttp | data:string | error:string | 数据转发到另一个 HTTP Server |
#### 示例
首先新建好资源，然后编写脚本:
```lua
-- Success
function Success()
    print("success")
end
-- Failed
function Failed(error)
    print("failed:", error)
end

-- Actions
Actions = {
    function(data)
        rulexlib:DataToHttp('UUID', data)
        return true, data
    end
}
```


## 12. 辅助类库

### 数据转HTTP Server
#### 函数定义
| 函数名     | 参数        | 返回值       | 说明                         |
| ---------- | ----------- | ------------ | ---------------------------- |
| DataToHttp | data:string | error:string | 数据转发到另一个 HTTP Server |
#### 示例
首先新建好资源，然后编写脚本:
```lua
-- Success
function Success()
    print("success")
end
-- Failed
function Failed(error)
    print("failed:", error)
end

-- Actions
Actions = {
    function(data)
        rulexlib:DataToHttp('UUID', data)
        return true, data
    end
}
```

