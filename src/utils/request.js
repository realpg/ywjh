import Fly from 'flyio/dist/npm/wx'
const fly = new Fly()
// const host = 'https://deruidong.isart.me/api'
const host = 'http://localhost/ywjhServer/public/api/'
// 添加请求拦截器
fly.interceptors.request.use((request) => {
    wx.showLoading({
        title: '加载中',
        mask: true
    })
    console.log(JSON.stringify(request))
    request.headers = {
        'X-Tag': 'flyio',
        'content-type': 'application/json'
    }
    return request
})
// 添加响应拦截器
fly.interceptors.response.use(
    (response) => {
        wx.hideLoading()
        console.log("----", JSON.stringify(response))
        return response.data // 请求成功之后将返回值返回
    },
    (err) => {
        // 请求出错，根据返回状态码判断出错原因
        console.log(JSON.stringify(err))
        wx.hideLoading()
        if (err) {
            return '请求失败'
        };
    }
)
fly.config.baseURL = host
export default fly