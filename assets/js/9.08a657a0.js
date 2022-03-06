(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{425:function(t,s,n){"use strict";n.r(s);var a=n(17),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"目标概念"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#目标概念"}},[t._v("#")]),t._v(" 目标概念")]),t._v(" "),n("p",[t._v("当数据从某个源进来经过我们处理以后，需要流出到某个目的地，这个目的地我们称之为“目标”，即Target。")]),t._v(" "),n("h2",{attrs:{id:"编程接口"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#编程接口"}},[t._v("#")]),t._v(" 编程接口")]),t._v(" "),n("p",[t._v("自定义源只需要实现 XTarget 接口即可：")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Stream from source and to target")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" XTarget "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 测试资源是否可用")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Test")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("outEndId "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用来初始化传递资源配置")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Init")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("outEndId "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cfg "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("map")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 启动资源")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Start")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CCTX"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 资源是否被启用")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Enabled")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 重载: 比如可以在重启的时候把某些数据保存起来")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Reload")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 挂起资源, 用来做暂停资源使用")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Pause")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取资源状态")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Status")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SourceState\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取资源绑定的的详情")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Details")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("OutEnd\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Configs")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("XConfig\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 数据出口")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("To")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不经过规则引擎处理的直达数据")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("OnStreamApproached")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 停止资源, 用来释放资源")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Stop")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),n("h2",{attrs:{id:"案例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#案例"}},[t._v("#")]),t._v(" 案例")]),t._v(" "),n("p",[t._v("下面以一个 HTTP Post 中转源作为案例：")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" target\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"net/http"')]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rulex/core"')]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rulex/typex"')]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rulex/utils"')]),t._v("\n\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/ngaut/log"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" httpConfig "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tUrl     "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("            "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"url"`')]),t._v("\n\tHeaders "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("map")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"headers"`')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" HTTPTarget "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\ttypex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("XStatus\n\turl     "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n\theaders "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("map")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n\tclient  http"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Client\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewHTTPTarget")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e typex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RuleX"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" typex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("XTarget "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tht "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("new")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HTTPTarget"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tht"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RuleEngine "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ht\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ht "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("HTTPTarget"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Register")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("outEndId "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tht"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PointId "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" outEndId\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ht "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("HTTPTarget"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Init")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("outEndId "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cfg "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("map")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tht"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PointId "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" outEndId\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ht "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("HTTPTarget"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Start")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cctx typex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CCTX"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tht"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Ctx "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Ctx\n\tht"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CancelCTX "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CancelCTX\n\tconfig "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" ht"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RuleEngine"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetOutEnd")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ht"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PointId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Config\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" mainConfig httpConfig\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" utils"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("BindSourceConfig")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("mainConfig"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" err "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" err\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\tht"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mainConfig"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Url\n\tht"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("headers "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mainConfig"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Headers\n\tht"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("client "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" http"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Client"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\tlog"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Info")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HTTPTarget started"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ht "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("HTTPTarget"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("OnStreamApproached")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("_")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" utils"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Post")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ht"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("client"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ht"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ht"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("headers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" err\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ht "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("HTTPTarget"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Test")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("outEndId "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ht "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("HTTPTarget"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Enabled")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ht"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Enable\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ht "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("HTTPTarget"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Reload")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ht "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("HTTPTarget"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Pause")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ht "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("HTTPTarget"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Status")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" typex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SourceState "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" typex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UP\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ht "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("HTTPTarget"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("To")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" utils"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Post")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ht"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("client"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ht"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ht"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("headers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" r"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ht "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("HTTPTarget"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Stop")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tht"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("CancelCTX")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ht "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("HTTPTarget"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Details")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("typex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("OutEnd "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ht"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RuleEngine"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetOutEnd")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ht"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PointId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n*\n* 配置\n*\n */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("HTTPTarget"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Configs")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("typex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("XConfig "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" core"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("GenOutConfig")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("typex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("HTTP_TARGET"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HTTP_TARGET"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" httpConfig"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);