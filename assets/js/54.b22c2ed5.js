(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{332:function(t,s,a){"use strict";a.r(s);var n=a(10),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_6-链表相交"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-链表相交"}},[t._v("#")]),t._v(" 6.链表相交")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://leetcode.cn/problems/intersection-of-two-linked-lists-lcci/",target:"_blank",rel:"noopener noreferrer"}},[t._v("力扣题目链接"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"题目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[t._v("#")]),t._v(" 题目")]),t._v(" "),s("p",[t._v("给你两个单链表的头节点 "),s("code",[t._v("headA")]),t._v(" 和 "),s("code",[t._v("headB")]),t._v(" ，请你找出并返回两个单链表相交的起始节点。如果两个链表没有交点，返回 "),s("code",[t._v("null")]),t._v(" 。")]),t._v(" "),s("p",[t._v("图示两个链表在节点 "),s("code",[t._v("c1")]),t._v(" 开始相交**：**")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/14/160_statement.png",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/14/160_statement.png",alt:"img"}}),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("题目数据 "),s("strong",[t._v("保证")]),t._v(" 整个链式结构中不存在环。")]),t._v(" "),s("p",[s("strong",[t._v("注意")]),t._v("，函数返回结果后，链表必须 "),s("strong",[t._v("保持其原始结构")]),t._v(" 。")]),t._v(" "),s("p",[s("strong",[t._v("示例 1：")])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://assets.leetcode.com/uploads/2018/12/13/160_example_1.png",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/14/160_example_1.png",alt:"img"}}),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3\n输出：Intersected at '8'\n解释：相交节点的值为 8 （注意，如果两个链表相交则不能为 0）。\n从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,0,1,8,4,5]。\n在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。\n")])])]),s("p",[s("strong",[t._v("示例 2：")])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://assets.leetcode.com/uploads/2018/12/13/160_example_2.png",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/14/160_example_2.png",alt:"img"}}),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("输入：intersectVal = 2, listA = [0,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1\n输出：Intersected at '2'\n解释：相交节点的值为 2 （注意，如果两个链表相交则不能为 0）。\n从各自的表头开始算起，链表 A 为 [0,9,1,2,4]，链表 B 为 [3,2,4]。\n在 A 中，相交节点前有 3 个节点；在 B 中，相交节点前有 1 个节点。\n")])])]),s("p",[s("strong",[t._v("示例 3：")])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://assets.leetcode.com/uploads/2018/12/13/160_example_3.png",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/14/160_example_3.png",alt:"img"}}),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("输入：intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2\n输出：null\n解释：从各自的表头开始算起，链表 A 为 [2,6,4]，链表 B 为 [1,5]。\n由于这两个链表不相交，所以 intersectVal 必须为 0，而 skipA 和 skipB 可以是任意值。\n这两个链表不相交，因此返回 null 。\n")])])]),s("p",[s("strong",[t._v("提示：")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("listA")]),t._v(" 中节点数目为 "),s("code",[t._v("m")])]),t._v(" "),s("li",[s("code",[t._v("listB")]),t._v(" 中节点数目为 "),s("code",[t._v("n")])]),t._v(" "),s("li",[s("code",[t._v("0 <= m, n <= 3 * 104")])]),t._v(" "),s("li",[s("code",[t._v("1 <= Node.val <= 105")])]),t._v(" "),s("li",[s("code",[t._v("0 <= skipA <= m")])]),t._v(" "),s("li",[s("code",[t._v("0 <= skipB <= n")])]),t._v(" "),s("li",[t._v("如果 "),s("code",[t._v("listA")]),t._v(" 和 "),s("code",[t._v("listB")]),t._v(" 没有交点，"),s("code",[t._v("intersectVal")]),t._v(" 为 "),s("code",[t._v("0")])]),t._v(" "),s("li",[t._v("如果 "),s("code",[t._v("listA")]),t._v(" 和 "),s("code",[t._v("listB")]),t._v(" 有交点，"),s("code",[t._v("intersectVal == listA[skipA + 1] == listB[skipB + 1]")])])]),t._v(" "),s("h2",{attrs:{id:"思路"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[t._v("#")]),t._v(" 思路")]),t._v(" "),s("p",[t._v("计算出两个链表的长度，得出两个链表长度的差值，长的链表先把差值跳过，使两个链表处于同一起跑线上，那么到达的第一个相等点就是链表的相交点。")]),t._v(" "),s("h2",{attrs:{id:"代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[t._v("#")]),t._v(" 代码")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("getIntersectionNode")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("headA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" headB")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" nA "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("listN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("headA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" nB "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("listN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("headB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" step "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("abs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nA "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" nB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nA "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" nB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("step"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      headA "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" headA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("step"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      headB "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" headB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("headA "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" headB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("headA "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" headB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" headA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    headA "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" headA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    headB "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" headB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("listN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" node "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    node "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);