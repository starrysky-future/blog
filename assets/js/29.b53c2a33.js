(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{307:function(t,a,s){"use strict";s.r(a);var n=s(10),r=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_14-路径总和"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_14-路径总和"}},[t._v("#")]),t._v(" 14.路径总和")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://leetcode.cn/problems/path-sum/",target:"_blank",rel:"noopener noreferrer"}},[t._v("力扣题目链接"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"题目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[t._v("#")]),t._v(" 题目")]),t._v(" "),a("p",[t._v("给你二叉树的根节点 "),a("code",[t._v("root")]),t._v(" 和一个表示目标和的整数 "),a("code",[t._v("targetSum")]),t._v(" 。判断该树中是否存在 "),a("strong",[t._v("根节点到叶子节点")]),t._v(" 的路径，这条路径上所有节点值相加等于目标和 "),a("code",[t._v("targetSum")]),t._v(" 。如果存在，返回 "),a("code",[t._v("true")]),t._v(" ；否则，返回 "),a("code",[t._v("false")]),t._v(" 。")]),t._v(" "),a("p",[a("strong",[t._v("叶子节点")]),t._v(" 是指没有子节点的节点。")]),t._v(" "),a("p",[a("strong",[t._v("示例 1：")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://assets.leetcode.com/uploads/2021/01/18/pathsum1.jpg",alt:"img"}})]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("输入：root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22\n输出：true\n解释：等于目标和的根节点到叶节点路径如上图所示。\n")])])]),a("p",[a("strong",[t._v("示例 2：")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://assets.leetcode.com/uploads/2021/01/18/pathsum2.jpg",alt:"img"}})]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("输入：root = [1,2,3], targetSum = 5\n输出：false\n解释：树中存在两条根节点到叶子节点的路径：\n(1 --\x3e 2): 和为 3\n(1 --\x3e 3): 和为 4\n不存在 sum = 5 的根节点到叶子节点的路径。\n")])])]),a("p",[a("strong",[t._v("示例 3：")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("输入：root = [], targetSum = 0\n输出：false\n解释：由于树是空的，所以不存在根节点到叶子节点的路径。\n")])])]),a("p",[a("strong",[t._v("提示：")])]),t._v(" "),a("ul",[a("li",[t._v("树中节点的数目在范围 "),a("code",[t._v("[0, 5000]")]),t._v(" 内")]),t._v(" "),a("li",[a("code",[t._v("-1000 <= Node.val <= 1000")])]),t._v(" "),a("li",[a("code",[t._v("-1000 <= targetSum <= 1000")])])]),t._v(" "),a("h2",{attrs:{id:"思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[t._v("#")]),t._v(" 思路")]),t._v(" "),a("ol",[a("li",[t._v("确定递归函数的参数和返回值\n"),a("ul",[a("li",[t._v("参数：节点、目标值")]),t._v(" "),a("li",[t._v("返回值：布尔值")])])]),t._v(" "),a("li",[t._v("确定终止条件：当前节点不存在则返回false，节点不存在左右子节点，判断当前节点的值是否等于目标值")]),t._v(" "),a("li",[t._v("确定单层递归逻辑\n"),a("ol",[a("li",[t._v("递归计算左节点")]),t._v(" "),a("li",[t._v("递归计算右节点")])])])]),t._v(" "),a("h2",{attrs:{id:"代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[t._v("#")]),t._v(" 代码")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("hasPathSum")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" targetSum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" targetSum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasPathSum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" targetSum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasPathSum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" targetSum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);