module.exports = {
    title: 'CN-Privacy',
    description: '中国人不愿意用隐私换取便利。',
    base: '/',
    head: [],
    plugins: [],
    themeConfig: {
        sidebar: [],
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Why', link: '/why/' },
            { text: 'How', link: '/how/' },
            { text: 'About', link: '/about/' },
          ],
        smoothScroll: true
    },
    plugins: {
        "vuepress-plugin-auto-sidebar": {
            titleMode: "titlecase",
        },
    }
}
