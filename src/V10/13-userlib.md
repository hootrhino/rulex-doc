---
title: 13-RULEX 用户脚本
---
除了通过go来扩展LUA函数库意外，也可以通过lua代码来实现。
## 指南
首先在 ini 主配置里面配置lua脚本的路径：
```ini
#-----------------------------------------------------
# External Lua Script
#-----------------------------------------------------
[extlibs]
luafile=./extlualibs/hello.lua
```
下面是以一个简单的例子来展示：
```lua
-- 非常简单的测试函数
function Hello()
    print('Congratulations! Hello From Extlib')
end

```
配置好即可启动RULEX，然后就可以在每一个RULE中使用这些lua函数了：
```lua
Actions = {
	function(data)
		Hello()
		return true, data
	end
}
```

::: warning
注意：不要和标准库里面的变量冲突了; 脚本内的变量、函数等默认加载到 `_G` 环境里
:::