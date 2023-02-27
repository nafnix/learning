export default {
    title: '标题',
    description: 'Just playing around.',
    cleanUrls: true,

    themeConfig: {
        sidebar: [
            {
                text: '前端',
                items: [
                    { text: 'HTML', link: '/item-c' },
                    { text: 'CSS', link: '/item-d' },
                    { text: 'JavaScript', link: '/' }
                ]
            },
            {
                text: '后端',
                items: [
                    { text: 'Item A', link: '/item-a' },
                    { text: 'Item B', link: '/item-b', },
                    {
                        text: 'Level 3',
                        items: [{ text: 'Item B', link: '/item-b', }
                        ]
                    }
                ],
            },
        ],
        nav: [
            { text: 'Guide', link: '/233' },
            { text: 'Config', link: '/config' },
            { text: 'Changelog', link: 'https://github.com/...' }
        ]
    }
}
