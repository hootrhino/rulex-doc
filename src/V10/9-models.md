---
title: 9-数据模型
---
## 数据模型概述
数据模型其实就是对该资源能提供的数据的一个规范约束。例如我新建的这个 MODBUS 数据源，能给我提供 电压、电流等数据，则我的数据模型则为电压和电流这两个量的描述。可以理解为数据的元数据，类似SQL来表述表的过程。

## 编程接口
在 XSource 接口里面有这么一个函数，就是用来生成数据模型的：
```go
func DataModels() []typex.XDataModel {
	return nil
}
```
其中 XDataModel 结构如下：
```go
type ModelType int

// 'T' means Type
const (
	T_INT32  ModelType = iota // int32
	T_FLOAT                   // float
	T_DOUBLE                  // double
	T_TEXT                    // pure text
	T_BOOL                    // boolean
	T_JSON                    // json
	T_BIN                     // byte
)

type XDataModel struct {
	Name      string      `json:"name"`      // 字段名
	Tag       string      `json:"tag"`       // 标签
	ValueType ModelType   `json:"valueType"` // 值类型
	Value     interface{} `json:"value"`     // 具体的值
}

```
## 案例展示
例如某个Modbus电表可以支持读取电流/C 和电压/V参数:
```json
[
    {
        "name":"current",
        "tag":"current",
        "valueType":"float",
        "value":5.0
    },
    {
        "name":"voltage",
        "tag":"voltage",
        "valueType":"float",
        "value":220.0
    }
]

```
对应到我们的资源回调则是:
```go
func DataModels() []typex.XDataModel {
	return []typex.XDataModel{
                {
                    Name:"voltage",
                    Tag:"voltage",
                    ValueType:"float",
                    Value:220.0
                },
                {
                    Name:"current",
                    Tag:"current",
                    ValueType:"float",
                    Value:5.0
                },
    }
}
```