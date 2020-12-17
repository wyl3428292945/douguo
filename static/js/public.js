// const { title } = Require("process");

new Vue({
    el: '#nav',
    data: {
        ctip: 0,
        healthy: 0,
        imublo: {
            hot: ['精选', '最新', '菜单',],
            title: ['常见菜式', '中国菜系', '外国食谱', '各地小吃', '烘焙大全',],
            concent: [
                ['家常菜', '热菜', '凉菜', '主食', '汤', '早餐', '午餐', '海鲜', '孕妇', '甜品', '粥', '宝宝食谱', '糕点', '微波炉',],
                ['川菜', '粤菜', '东北菜', '湘菜', '鲁菜', '浙菜', '湖北菜', '清真菜',],
                ['韩国', '日本料理', '法国', '意大利餐', '',],
                ['四川小吃', '广东小吃', '北京小吃', '陕西小吃',],
                ['蛋糕', '面包', '饼干', '披萨', '甜品',]
            ],
        },

        cblok: {
            hot: [],
            title: ['饮食健康', '功能性调理', '人群膳食', '疾病调理', '功效营养',],
            concent: [
                ['饮食新闻', '美容瘦身', '饮食小常识', '养生秘方',],
                ['清热去火', '减肥', '祛痰', '乌发', '滋阴壮阳', '健脾养胃',],
                ['孕妇', '老人', '产妇', '哺乳期',],
                ['疾病调理', '糖尿病', '高血压', '痛风',],
                ['补钙', '贫血', '提高免疫力', '养胃', '防雾霾', '润肺止咳', '养颜', '失眠', '抗癌',],
            ]

        }

    },
    methods: {

    }
})

//     < div class="cblok clearfix" >
// <div class="citem clearfix">
//     <span>常见菜式</span>
//     <div class="imublo clearfix">
//         <a href="/caipu/家常菜" target="_blank">家常菜</a>
//         <a href="/caipu/热菜" target="_blank">热菜</a>
//         <a href="/caipu/凉菜" target="_blank">凉菜</a>
//         <a href="/caipu/主食" target="_blank">主食</a>
//         <a href="/caipu/汤" target="_blank">汤</a>
//         <a href="/caipu/早餐" target="_blank">早餐</a>
//         <a href="/caipu/午餐" target="_blank">午餐</a>
//         <a href="/caipu/海鲜" target="_blank">海鲜</a>
//         <a href="/caipu/孕妇" target="_blank">孕妇</a>
//         <a href="/caipu/甜品" target="_blank">甜品</a>
//         <a href="/caipu/粥" target="_blank">粥</a>
//         <a href="/caipu/宝宝食谱" target="_blank">宝宝食谱</a>
//         <a href="/caipu/糕点" target="_blank">糕点</a>
//         <a href="/caipu/微波炉" target="_blank">微波炉</a>
//     </div>
// </div>
// <div class="citem clearfix">
//     <span>中国菜系</span>
//     <div class="imublo clearfix">
//         <a href="/caipu/川菜" target="_blank">川菜</a>
//         <a href="/caipu/粤菜" target="_blank">粤菜</a>
//         <a href="/caipu/东北菜" target="_blank">东北菜</a>
//         <a href="/caipu/湘菜" target="_blank">湘菜</a>
//         <a href="/caipu/鲁菜" target="_blank">鲁菜</a>
//         <a href="/caipu/浙菜" target="_blank">浙菜</a>
//         <a href="/caipu/湖北菜" target="_blank">湖北菜</a>
//         <a href="/caipu/清真菜" target="_blank">清真菜</a>
//     </div>
// </div>
// <div class="citem clearfix">
//     <span>外国食谱</span>
//     <div class="imublo clearfix">
//         <a href="/caipu/韩国" target="_blank">韩国</a>
//         <a href="/caipu/日本料理" target="_blank">日本料理</a>
//         <a href="/caipu/法国" target="_blank">法国</a>
//         <a href="/caipu/意大利餐" target="_blank">意大利餐</a>
//     </div>
// </div>
// <div class="citem clearfix">
//     <span>各地小吃</span>
//     <div class="imublo clearfix">
//         <a href="/caipu/四川小吃" target="_blank">四川小吃</a>
//         <a href="/caipu/广东小吃" target="_blank">广东小吃</a>
//         <a href="/caipu/北京小吃" target="_blank">北京小吃</a>
//         <a href="/caipu/陕西小吃" target="_blank">陕西小吃</a>
//     </div>
// </div>
// <div class="citem clearfix">
//     <span>烘焙大全</span>
//     <div class="imublo clearfix">
//         <a href="/caipu/蛋糕" target="_blank">蛋糕</a>
//         <a href="/caipu/面包" target="_blank">面包</a>
//         <a href="/caipu/饼干" target="_blank">饼干</a>
//         <a href="/caipu/披萨" target="_blank">披萨</a>
//         <a href="/caipu/甜品" target="_blank">甜品</a>
//     </div>
// </div>
// </div >
