module.exports = {
  base: "/blog/",
  title: "小草屋",
  description: "藏点书",
  themeConfig: {
    logo: "/logo.jpg",
    nav: [
      { text: "主页", link: "/" },
      {
        text: "前端",
        items: [
          { text: "html", link: "/web/html/" },
          { text: "css", link: "/web/css/" },
          { text: "js", link: "/web/js/" },
        ],
      },
      { text: "node", link: "/node/" },
      { text: "算法", link: "/arithmetic/" },
      { text: "MD", link: "/markDown/" },
    ],
    sidebar: {
      "/web/html/": [
        ["", "第一个"],
        ["one", "第二个"],
        ["two", "第三个"],
      ],
      "/markDown/": "auto",
    },
    search: true,
    searchMaxSuggestions: 10,
  },
};
