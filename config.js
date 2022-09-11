// 配置文件

const basic = { // 基础设置
    favicon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👻</text></svg>', // 页面图标
    title: '(～￣▽￣)～', // 页面标题
    avatar: 'http://q1.qlogo.cn/g?b=qq&nk=1744793737&s=640', // 头像 URL
    name: '这里是小邓QwQ', // 头像下的昵称
    sign: '经费不足，给点钱QwQ ( •̀ ω •́ )✧', // 个性签名或提示文字，可使用 HTML 格式
    user_page: 'https://thisisxd.top', // 点击头像或名字时跳转的链接，留空或删除则不跳转
    footer: 'Copyright © 2022 这里是小邓QwQ', // 页脚文字，可使用 HTML 格式
    uri_redirect: false // 若收款码 URL 是网址，是否直接跳转而不显示二维码
}

const theme = { // 主题设置
    page_bg: 'https://www.dmoe.cc/random.php',// '#c3d7df', // 网页背景（十六进制，或图片 URL）
    card_bg: '#ffffffcc', // 卡片背景色（十六进制，可带透明度，不能是 URL）
    qrcode_bg: '#eaeffde6', // 二维码背景色（十六进制，可带透明度，不能是 URL）
    qrcode_fg: '#335eea' // 二维码颜色（十六进制，可带透明度，不能是 URL）
}

const tools = { // 右上角小工具设置
    dl_btn: true, // 二维码下载
    badge_generator: true // 徽章生成器
}

const urls = [
    {
        name: '微信',
        ua: 'MicroMessenger\/',
        addr: 'wxp://f2f0roSJotR_Zd6bknSVaeUN49T-utpBcl56Jm7AC2YkgpU'
    },
    {
        name: 'QQ', 
        ua: 'QQ\/',
        addr: 'https://i.qianbao.qq.com/wallet/sqrcode.htm?m=tenpay&f=wallet&a=1&ac=CAEQieH9vwYY9tnMlQZCIDRkNjY3MWYwMDRkZTk4Y2Q0YTMxZTgxZDQxMTg4NWE5_xxx_sign&u=1744793737&n=%E8%BF%99%E9%87%8C%E6%98%AF%E5%B0%8F%E9%82%93+%E2%98%AD'
    }
]
