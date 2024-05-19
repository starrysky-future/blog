(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{426:function(t,s,a){"use strict";a.r(s);var n=a(10),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"第四章-控制器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第四章-控制器"}},[t._v("#")]),t._v(" 第四章 控制器")]),t._v(" "),s("h2",{attrs:{id:"路由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#路由"}},[t._v("#")]),t._v(" 路由")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Controller"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Get"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Post"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Patch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Delete "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@nestjs/common"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("table",[s("thead",[s("tr",[s("th",[t._v("@Get()")]),t._v(" "),s("th",[t._v("获取数据")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("@Post()")]),t._v(" "),s("td",[t._v("创建数据")])]),t._v(" "),s("tr",[s("td",[t._v("@Patch()")]),t._v(" "),s("td",[t._v("更新数据")])]),t._v(" "),s("tr",[s("td",[t._v("@Delete()")]),t._v(" "),s("td",[t._v("删除数据")])])])]),t._v(" "),s("h2",{attrs:{id:"request"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[t._v("#")]),t._v(" Request")]),t._v(" "),s("p",[t._v("从@nestjs/common 包获取")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("@Request()，@Req()")]),t._v(" "),s("th",[t._v("req")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("@Response()，@Res()")]),t._v(" "),s("td",[t._v("res")])]),t._v(" "),s("tr",[s("td",[t._v("@Next()")]),t._v(" "),s("td",[t._v("next")])]),t._v(" "),s("tr",[s("td",[t._v("@Session()")]),t._v(" "),s("td",[t._v("req.session")])]),t._v(" "),s("tr",[s("td",[t._v("@Param(key?: string)")]),t._v(" "),s("td",[t._v("req.params"),s("code",[t._v("/")]),t._v("req.params[key]")])]),t._v(" "),s("tr",[s("td",[t._v("@Body(key?: string)")]),t._v(" "),s("td",[t._v("req.body"),s("code",[t._v("/")]),t._v("req.body[key]")])]),t._v(" "),s("tr",[s("td",[t._v("@Query(key?: string)")]),t._v(" "),s("td",[t._v("req.query"),s("code",[t._v("/")]),t._v("req.query[key]")])]),t._v(" "),s("tr",[s("td",[t._v("@Headers(name?: string)")]),t._v(" "),s("td",[t._v("req.headers"),s("code",[t._v("/")]),t._v("req.headers[name]")])]),t._v(" "),s("tr",[s("td",[t._v("@HttpCode")]),t._v(" "),s("td")])])]),t._v(" "),s("h3",{attrs:{id:"_1-获取-get-请求传参"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-获取-get-请求传参"}},[t._v("#")]),t._v(" 1.获取 get 请求传参")]),t._v(" "),s("p",[t._v("可以通过 Request 装饰器或 Query 装饰器")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Controller"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Get"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Post"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Patch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Param"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Delete"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Version"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Query"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Ip"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Header"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Headers "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@nestjs/common'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token decorator"}},[s("span",{pre:!0,attrs:{class:"token at operator"}},[t._v("@")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("findOne")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token decorator"}},[s("span",{pre:!0,attrs:{class:"token at operator"}},[t._v("@")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Req")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token decorator"}},[s("span",{pre:!0,attrs:{class:"token at operator"}},[t._v("@")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("findOne")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token decorator"}},[s("span",{pre:!0,attrs:{class:"token at operator"}},[t._v("@")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Query")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" query"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("query"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"_2-获取-post-请求传参"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-获取-post-请求传参"}},[t._v("#")]),t._v(" 2.获取 post 请求传参")]),t._v(" "),s("p",[t._v("可以通过 Request 装饰器或 Body 装饰器")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Controller"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Get"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Post"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Patch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Param"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Delete"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Version"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Query"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Ip"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Header"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Headers "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@nestjs/common'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token decorator"}},[s("span",{pre:!0,attrs:{class:"token at operator"}},[t._v("@")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Post")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token decorator"}},[s("span",{pre:!0,attrs:{class:"token at operator"}},[t._v("@")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Req")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token decorator"}},[s("span",{pre:!0,attrs:{class:"token at operator"}},[t._v("@")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Post")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token decorator"}},[s("span",{pre:!0,attrs:{class:"token at operator"}},[t._v("@")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Body")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("可以直接读取 key")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Controller"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Get"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Post"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Patch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Param"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Delete"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Version"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Query"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Ip"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Header"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Headers "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@nestjs/common'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token decorator"}},[s("span",{pre:!0,attrs:{class:"token at operator"}},[t._v("@")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Post")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token decorator"}},[s("span",{pre:!0,attrs:{class:"token at operator"}},[t._v("@")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Body")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"_3-动态路由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-动态路由"}},[t._v("#")]),t._v(" 3.动态路由")]),t._v(" "),s("p",[t._v("可以通过 Request 装饰器或 Param 装饰器")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Controller"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Get"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Post"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Patch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Param"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Delete"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Version"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Query"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Ip"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Header"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Headers "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@nestjs/common'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token decorator"}},[s("span",{pre:!0,attrs:{class:"token at operator"}},[t._v("@")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("':id'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("findOne")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token decorator"}},[s("span",{pre:!0,attrs:{class:"token at operator"}},[t._v("@")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Req")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token decorator"}},[s("span",{pre:!0,attrs:{class:"token at operator"}},[t._v("@")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("':id'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("findOne")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token decorator"}},[s("span",{pre:!0,attrs:{class:"token at operator"}},[t._v("@")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Param")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" param"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("param"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"_4-header-信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-header-信息"}},[t._v("#")]),t._v(" 4.header 信息")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Controller"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Get"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Post"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Patch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Param"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Delete"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Version"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Query"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Ip"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Header"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Headers "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@nestjs/common'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token decorator"}},[s("span",{pre:!0,attrs:{class:"token at operator"}},[t._v("@")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("':id'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("findOne")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token decorator"}},[s("span",{pre:!0,attrs:{class:"token at operator"}},[t._v("@")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Headers")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" header"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("header"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"_5-状态码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-状态码"}},[t._v("#")]),t._v(" 5.状态码")]),t._v(" "),s("p",[t._v("使用 HttpCode 装饰器 控制接口返回的状态码")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Controller"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Get"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Post"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Patch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Param"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Delete"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Version"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Query"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Ip"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Header"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Headers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" HttpCode "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@nestjs/common'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token decorator"}},[s("span",{pre:!0,attrs:{class:"token at operator"}},[t._v("@")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("':id'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token decorator"}},[s("span",{pre:!0,attrs:{class:"token at operator"}},[t._v("@")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("HttpCode")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("findOne")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token decorator"}},[s("span",{pre:!0,attrs:{class:"token at operator"}},[t._v("@")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Headers")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" header"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \tcode"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);