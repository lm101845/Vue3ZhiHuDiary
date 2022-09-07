import axios from './http'

export default {
    //获取今日新闻
    queryNewsLatest() {
        return axios.get('/api/news/latest');
    },
    //获取往日新闻
    //你传哪个日期，我就获取这个日期之前的新闻
    queryNewsBefore(time) {
        return axios.get('/api/news/before',{
            params: {
                time
            }
        })
    }
}