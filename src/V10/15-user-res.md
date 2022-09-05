---
title: 14-RULEX 用户资源
---
## 用户资源
该部分面向高级开发者，主要是用来增强RULEX的功能，而不破坏RULEX的核心代码。
### 接口
设备
```go
/*
* 从0.4.0开始, 可支持用户加载设备
* 加载用户设备， 第一个参数为Worker, 第二个参数为设备原始信息，实际上就是元数据
*
 */
func (e *RuleEngine) LoadUserDevice(abstractDevice typex.XDevice, deviceInfo *typex.Device) error {
	return startDevices(abstractDevice, deviceInfo, e)
}
```
入口
```go
/*
*
* 加载用户资源
*
 */
func (e *RuleEngine) LoadUserInEnd(source typex.XSource, in *typex.InEnd) error {
	return startSources(source, in, e)
}

```
出口
```go

/*
*
* 加载用户自定义输出资源
*
 */
func (e *RuleEngine) LoadUserOutEnd(target typex.XTarget, out *typex.OutEnd) error {
	return startTarget(target, out, e)
}

```

这部分是属于开发者使用，如果对此不了解可进一步社区讨论。