---
title: 14-RULEX 内建资源
---
## 内建资源
目前RULEX框架直接支持了数十种资源，开箱即用。为了理解这块，请大家再认真研究下架构图：
<img src="/assets/structure.png" style="box-shadow: 20px 20px 50px grey;border-radius: 10px;"></img>

### 设备

| 名称            | 版本 | 简介                        |
| --------------- | ---- | --------------------------- |
| modbus          | 1.0  | modbus Master               |
| rtu_485_ther    | 1.0  | 485温湿度传感器             |
| tss200          | 1.0  | 多指标环境参数传感器        |
| yk08            | 1.0  | 国产8口继电器控制器         |
| raw_uart_driver | 1.0  | 通用串口数据透传驱动        |
| s1200           | 1.0  | 西门子S1200系列的DB读写驱动 |

### 入口
| 名称 | 版本 | 简介            |
| ---- | ---- | --------------- |
| MQTT | 1.0  | MQTT数据桥接    |
| HTTP | 1.0  | MQTT数据桥接    |
| COAP | 1.0  | COAP数据桥接    |
| UDP  | 1.0  | UDP协议数据桥接 |


### 出口
| 名称     | 版本 | 简介                 |
| -------- | ---- | -------------------- |
| Mongodb  | 1.0  | 数据持久化到Mongodb  |
| MQTT     | 1.0  | 数据转发到MQTT服务器 |
| HTTP     | 1.0  | 数据转发到HTTP服务器 |
| Nats     | 1.0  | 数据转发到NATS服务器 |
| Tdengine | 1.0  | 数据持久化到Tdengine |

