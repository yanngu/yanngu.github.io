const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    loop: 'all',
    volume: 0.5,
    listFolded: true,
    listMaxHeight: 60,
    audio: [
        {
            name: '旅行',
            artist: '许巍',
            url: 'https://cdn.jsdelivr.net/gh/yanngu/cdn/audio/lvxing.mp3',
            cover: 'https://cdn.jsdelivr.net/gh/yanngu/cdn/img/bg/default.png',
        },
        {
            name: '曾经的你',
            artist: '许巍',
            url: 'https://cdn.jsdelivr.net/gh/yanngu/cdn/audio/cengjingdeni.mp3',
            cover: 'https://cdn.jsdelivr.net/gh/yanngu/cdn/img/bg/default.png',
        },
        {
            name: '蓝莲花',
            artist: '许巍',
            url: 'https://cdn.jsdelivr.net/gh/yanngu/cdn/audio/lanlianhua.mp3',
            cover: 'https://cdn.jsdelivr.net/gh/yanngu/cdn/img/bg/default.png',
        },
        {
            name: '年少有为',
            artist: '李荣浩',
            url: 'https://cdn.jsdelivr.net/gh/yanngu/cdn/audio/nianshaoyouwei.mp3',
            cover: 'https://cdn.jsdelivr.net/gh/yanngu/cdn/img/bg/default.png',
        }
    ]
});