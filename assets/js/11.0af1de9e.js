(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{430:function(t,s,n){"use strict";n.r(s);var a=n(17),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"插件概述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#插件概述"}},[t._v("#")]),t._v(" 插件概述")]),t._v(" "),n("p",[t._v("插件是用来扩展RULEX本身不具备的功能的，比如你可以外挂一个MQTT服务器，此时RULEX框架本来没有MQTT功能，但是经过插件加持，就可以支持MQTT设备接入。")]),t._v(" "),n("h2",{attrs:{id:"编程接口"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#编程接口"}},[t._v("#")]),t._v(" 编程接口")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" XPlugin "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Init")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("ini"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Section"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Start")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Stop")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("PluginMetaInfo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" XPluginMetaInfo\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" XPluginMetaInfo "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tName     "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"name"`')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 插件名称")]),t._v("\n\tVersion  "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"version"`')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 插件版本")]),t._v("\n\tHomepage "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"homepage"`')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 插件主页")]),t._v("\n\tHelpLink "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"helpLink"`')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 插件帮助文档")]),t._v("\n\tAuthor   "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"author"`')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 插件作者")]),t._v("\n\tEmail    "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"email"`')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 插件Email")]),t._v("\n\tLicense  "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"license"`')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 插件协议")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),n("p",[t._v("其中 "),n("code",[t._v("XPluginMetaInfo")]),t._v(" 是插件的元数据。")]),t._v(" "),n("h2",{attrs:{id:"案例展示"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#案例展示"}},[t._v("#")]),t._v(" 案例展示")]),t._v(" "),n("p",[t._v("下面这个插件是个非常简单的 "),n("code",[t._v("MQTT Broker")]),t._v("：")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" mqttserver\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gopkg.in/ini.v1"')]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rulex/utils"')]),t._v("\n\n\tmqttServer "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/mochi-co/mqtt/server"')]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/mochi-co/mqtt/server/events"')]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/mochi-co/mqtt/server/listeners"')]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/ngaut/log"')]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rulex/typex"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\tdefaultTransport "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tcp"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" _serverConfig "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tEnable "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`ini:"enable"`')]),t._v("\n\tHost   "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`ini:"host"`')]),t._v("\n\tPort   "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`ini:"port"`')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" MqttServer "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tEnable     "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v("\n\tHost       "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n\tPort       "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("\n\tmqttServer "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("mqttServer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Server\n\tclients    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("map")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("events"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Client\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewMqttServer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" typex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("XPlugin "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("MqttServer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tclients"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("map")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("events"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Client"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("MqttServer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Init")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("ini"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Section"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" mainConfig _serverConfig\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" utils"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("InIMapToStruct")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("mainConfig"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" err "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" err\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\ts"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Host "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mainConfig"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Host\n\ts"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Port "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mainConfig"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Port\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("MqttServer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Start")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tserver "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" mqttServer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("New")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ttcpPort "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" listeners"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewTCP")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("defaultTransport"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Sprintf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('":%v"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Port"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" server"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddListener")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tcpPort"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("listeners"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" err "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" err\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" server"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Serve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" err "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" err\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\ts"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mqttServer "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" server\n\ts"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mqttServer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Events"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("OnConnect "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("client events"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Client"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" packet events"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Packet"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\ts"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clients"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("client"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ID"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("client\n\t\tlog"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Infof")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Client connected:%s"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" client"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ID"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\ts"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mqttServer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Events"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("OnDisconnect "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("client events"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Client"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clients"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("client"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ID"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("delete")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clients"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" client"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ID"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\tlog"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Warnf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Client disconnected:%s"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" client"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ID"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\tlog"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Infof")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MqttServer start at [0.0.0.0:%v] successfully"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Port"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("MqttServer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Stop")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mqttServer "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mqttServer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Close")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("MqttServer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("PluginMetaInfo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" typex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("XPluginMetaInfo "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" typex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("XPluginMetaInfo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("     "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Light Weight MqttServer"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tVersion"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.0.1"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tHomepage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"www.ezlinker.cn"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tHelpLink"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"www.ezlinker.cn"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tAuthor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wwhai"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tEmail"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cnwwhai@gmail.com"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tLicense"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MIT"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);