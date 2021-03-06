const { defaultTheme } = require("vuepress");
const { seoPlugin } = require("vuepress-plugin-seo2");
const { sitemapPlugin } = require("vuepress-plugin-sitemap2");
const { googleAnalyticsPlugin } = require('@vuepress/plugin-google-analytics');
const { searchPlugin } = require('@vuepress/plugin-search')

module.exports = {
    base: "/wiki/",
    lang: "en-US",
    title: "FGO Wiki",
    description: "FGO Lore Wiki",
    head: [
        ["meta", { name: "theme-color", content: "#3eaf7c" }],
        ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
        [
            "meta",
            { name: "apple-mobile-web-app-status-bar-style", content: "black" },
        ],
		['link', { rel: 'icon', href: 'https://i.imgur.com/kDHyJX2.png' }],
    ],
    theme: defaultTheme({
        smoothScroll: true,
        repo: "https://github.com/r-grandorder/wiki",
        editLinks: true,
        docsDir: "src",
        editLinkText: "Help us improve this page!",
        lastUpdated: true,
        navbar: [
            {
                text: "Main FGO Scenario",
                children: [
                    {
                        text: "Main Story",
                        link: "/story",
                    },
                    {
                        text: "Events",
                        link: "/events",
                    },
                    {
                        text: "Servants",
                        link: "/servants",
                    },
                ],
            },
            {
                text: "Meta Lore",
                children: [
                    {
                        text: "Bamboo Broom Diary",
                        link: "/bamboo",
                    },
                    {
                        text: "Interviews",
                        link: "/interviews",
                    },
                    {
                        text: "Articles",
                        link: "/articles",
                    },
                ],
            },
            {
                text: "About",
                link: "/about",
            },
            {
                text: "Feedback",
                link: "/feedback",
            },
        ],
        sidebar: 'auto'
    }),
    plugins: [
        seoPlugin({
            hostname: "https://r-grandorder.github.io",
            fallBackImage: "https://i.imgur.com/kDHyJX2.png",
            isArticle: () => false,
        }),
        sitemapPlugin({
            hostname: "https://r-grandorder.github.io",
            changefreq: "monthly",
        }),
        googleAnalyticsPlugin({
            id: 'G-19VNBHS02E'
        }),
        searchPlugin(),
    ],
};
