(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{308:function(t,a,s){"use strict";s.r(a);var n=s(10),r=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_18-二叉树搜索树中的搜索"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_18-二叉树搜索树中的搜索"}},[t._v("#")]),t._v(" 18.二叉树搜索树中的搜索")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://leetcode.cn/problems/search-in-a-binary-search-tree/",target:"_blank",rel:"noopener noreferrer"}},[t._v("力扣题目地址"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"题目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[t._v("#")]),t._v(" 题目")]),t._v(" "),a("p",[t._v("给定二叉搜索树（BST）的根节点 "),a("code",[t._v("root")]),t._v(" 和一个整数值 "),a("code",[t._v("val")]),t._v("。")]),t._v(" "),a("p",[t._v("你需要在 BST 中找到节点值等于 "),a("code",[t._v("val")]),t._v(" 的节点。 返回以该节点为根的子树。 如果节点不存在，则返回 "),a("code",[t._v("null")]),t._v(" 。")]),t._v(" "),a("p",[a("strong",[t._v("示例 1:")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://assets.leetcode.com/uploads/2021/01/12/tree1.jpg",alt:"img"}})]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("输入：root = [4,2,7,1,3], val = 2\n输出：[2,1,3]\n")])])]),a("p",[a("strong",[t._v("示例 2:")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://assets.leetcode.com/uploads/2021/01/12/tree2.jpg",alt:"img"}})]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("输入：root = [4,2,7,1,3], val = 5\n输出：[]\n")])])]),a("p",[a("strong",[t._v("提示：")])]),t._v(" "),a("ul",[a("li",[t._v("数中节点数在 "),a("code",[t._v("[1, 5000]")]),t._v(" 范围内")]),t._v(" "),a("li",[a("code",[t._v("1 <= Node.val <= 107")])]),t._v(" "),a("li",[a("code",[t._v("root")]),t._v(" 是二叉搜索树")]),t._v(" "),a("li",[a("code",[t._v("1 <= val <= 107")])])]),t._v(" "),a("h2",{attrs:{id:"思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[t._v("#")]),t._v(" 思路")]),t._v(" "),a("p",[t._v("二叉树搜索树是根节点的值大于左子树所有值，小于右子树所有值的二叉树")]),t._v(" "),a("ol",[a("li",[t._v("确定递归函数的参数和返回值\n"),a("ul",[a("li",[t._v("参数：传入的二叉搜索树")]),t._v(" "),a("li",[t._v("返回值：目标值的节点或则null")])])]),t._v(" "),a("li",[t._v("确定终止条件：当节点不能存在或节点的值等于目标值，返回当前节点")]),t._v(" "),a("li",[t._v("确定单层递归逻辑\n"),a("ul",[a("li",[t._v("当前节点的值大于目标值，则递归去左子树寻找")]),t._v(" "),a("li",[t._v("当前节点的值小于目标值，则递归去右子树寻找")]),t._v(" "),a("li",[t._v("当目标值即不大于当前节点的值，也不小于当前节点的值，则说明该二叉搜索树不存在目标值的节点，立即返回null")])])])]),t._v(" "),a("h2",{attrs:{id:"代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[t._v("#")]),t._v(" 代码")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("searchBST")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" val")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("root "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("searchBST")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("searchBST")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);