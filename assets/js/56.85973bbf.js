(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{337:function(t,_,r){"use strict";r.r(_);var v=r(10),o=Object(v.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"_13-完全背包理论基础"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_13-完全背包理论基础"}},[t._v("#")]),t._v(" 13.完全背包理论基础")]),t._v(" "),_("p",[_("strong",[t._v("完全背包和 01 背包问题唯一不同的地方就是，每种物品有无限件")]),t._v("。")]),t._v(" "),_("p",[t._v("01 背包内嵌的循环是从大到小遍历，为了保证每个物品仅被添加一次。")]),t._v(" "),_("p",[t._v("而完全背包的物品是可以添加多次的，所以要从小到大去遍历。")]),t._v(" "),_("p",[_("strong",[t._v("其实还有一个很重要的问题，为什么遍历物品在外层循环，遍历背包容量在内层循环？")])]),t._v(" "),_("p",[_("strong",[t._v("在完全背包中，对于一维 dp 数组来说，其实两个 for 循环嵌套顺序是无所谓的！")])]),t._v(" "),_("p",[t._v("因为 dp[j] 是根据 下标 j 之前所对应的 dp[j]计算出来的。 只要保证下标 j 之前的 dp[j]都是经过计算的就可以了。")]),t._v(" "),_("p",[_("strong",[t._v("如果求组合数就是外层 for 循环遍历物品，内层 for 遍历背包")]),t._v("。")]),t._v(" "),_("p",[_("strong",[t._v("如果求排列数就是外层 for 遍历背包，内层 for 循环遍历物品")]),t._v("。")]),t._v(" "),_("p",[_("strong",[t._v("对于纯完全背包问题，其 for 循环的先后循环是可以颠倒的！")])]),t._v(" "),_("p",[t._v("但如果题目稍稍有点变化，就会体现在遍历顺序上。")]),t._v(" "),_("p",[t._v("如果问装满背包有几种方式的话？ 那么两个 for 循环的先后顺序就有很大区别了，而 leetcode 上的题目都是这种稍有变化的类型。")])])}),[],!1,null,null,null);_.default=o.exports}}]);