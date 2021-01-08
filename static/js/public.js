

Vue.component('top', {
    data() {
        return {
            act: 0,
            ctip: 0,
            healthy: 0,
            pubt: 0,
            myinfo: 0,
            perinfo: 1,
            imublo: {
                hot: [{
                    txt: '精选',
                    img: "https://cp1.douguo.com/static/nweb/images/jx3.png"
                },
                {
                    txt: '最新',
                    img: "https://cp1.douguo.com/static/nweb/images/menu3.png"
                },

                {
                    txt: '菜单',
                    img: "https://i1.douguo.com/upload/banner/1585648022.png"
                },
                ],

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

            },
        }
    },
    template: `
    <nav id="header">
    <div class="header clearfix">
        <a class="logo left" href="./public.html"><img src="https://cp1.douguo.com/static/nweb/images/logo3.png?20191218"
                alt=""></a>
        <ul class="nav" id="nav">
            <li :class="[act==0?'act':'']" @click="acts(0)"><a href="./public.html">首页</a></li>
            <li :class="[act==1?'act':'']" @click="acts(1)" class="relative " @mouseover="ctip=1" @mouseout="ctip=0">
                <a href="./cookbook.html">菜谱 <span class="naww"></span></a>
                <div class="ctip" v-show="ctip">

                    <span class="arwwj"> </span>
                    <div class="ctab clearfix">
                        <a href="./cookbook.html" v-for="(item,index) in imublo.hot" :key="index"><img :src="item.img"
                                alt="">{{item.txt}}
                        </a>
                    </div>
                    <div class="citem clearfix" v-for="(item,index) in imublo.title" :key="index">
                        <span>{{item}}</span>
                        <div class="imublo clearfix"><a href="./cookbook.html" v-for="(val,index) in imublo.concent[index]"
                                :key="index">{{val}}</a>
                        </div>
                    </div>
                    <div class="cmore">
                        <a href="./cookbook.html">查看全部分类 <img src="https://cp1.douguo.com/static/nweb/images/more2.png"
                                alt=""></a>
                    </div>
                </div>
            </li>
            <li class="relative " :class="[act==2?'act':'']" @click="acts(2)" @mouseover="healthy=1" @mouseout="healthy=0">
                <a href="./healthy-list.html">饮食健康<span class="naww"></span></a>
                <div class="healthy" v-show="healthy">
                    <span class="arwwj"> </span>
                    <div class="diet clearfix" v-for="(item,index) in cblok.title" :key="index">
                        <span>{{item}}</span>
                        <div class="imublo clearfix">
                            <a href="./healthy-list.html" v-for="(val,index) in cblok.concent[index]" :key="index">{{val}}</a>

                        </div>
                    </div>
                </div>
            </li>
            <li :class="[act==3?'act':'']" @click="acts(3)"><a href="./note.html">笔记</a></li>
            <li :class="[act==4?'act':'']" @click="acts(4)"><a href="./shopping-mall.html">商城</a></li>
            <li :class="[act==5?'act':'']" @click="acts(5)"><a href="./carton.html">动漫</a></li>
        </ul>
        <form class="search br4 left" method="POST">
            <input type="text" class="sput" name="keywords" placeholder="搜索菜谱、菜单、食材、用户" value="">
            <input type="submit" value=" " class="lib">
        </form>
        <div class="pubt" @mouseover="pubt=1" @mouseout="pubt=0">
            <a class="btn-pubt" href="javascript:void(0);">发布</a>
            <div class="pubt-box br8" v-show="pubt"> <span class="arwwj"> </span> <a
                    href="./upfood.html">发布菜谱</a>
                <a href="./create">创建菜单</a>
            </div>
        </div>
        <div class="perinfo" v-if="perinfo==0"> 
            <a class="login" href="./login.html"> 登录 </a> |
            <a class="register" href="./registered.html">注册</a>
         </div>
        <div class="myinfo relative" v-else @mouseover="myinfo=1" @mouseout="myinfo=0"> 
            <a class="headicon" href="./mine.html"> 
                <img class="wb100 br50" src="https://tx1.douguo.com/upload/photo/1/1/1/70_6a99cb588b890f75d8fd8b385347c2b5.png" alt=""> 
            </a> 
            <div class="myedit br8"  v-show="myinfo">
            <span class="arwwj"> </span>
                <a class="relative" href="./mine.html;">消息提醒 </a> 
                <a href="./mine.html;">我的收藏</a> <a href="./mine.html;">草稿箱</a> 
                <a href="./mine.html;" >账号设置</a> <a href="javascript:void(0);" @click="perinfos(0)">退出</a>
            </div> 
        </div> 
    </div>
</nav>

    `,
    methods: {
        acts(i) {
            localStorage.act = i
            this.act = i
        },
        perinfos(i) {
            localStorage.perinfo = i
            this.perinfo = i
        }
    },
    mounted() {
        //高亮显示
        if (localStorage.act) {
            this.act = localStorage.act
        }
        //登陆状态
        if (localStorage.perinfo) {
            this.perinfo = localStorage.perinfo
        }

    }

})

Vue.component('but', {
    data() {
        return {
            clink: ["关于豆果", "在豆果工作", "意见反馈", "菜谱大全"],
            threbl: [
                {
                    txt: "豆果美食", img: 'https://cp1.douguo.com//static/nweb/images/qrcode.png'
                },
                {
                    txt: "微信扫一扫", img: 'https://cp1.douguo.com//static/nweb/images/qrcode.png'
                },
                {
                    txt: "豆果公众号", img: 'https://cp1.douguo.com//static/nweb/images/qrcode.png'
                },

            ],
            smask1: 0,
            smask2: 0,

        }
    },
    template: `
    <div id="footer">
    <div class="dginfo">
        <div class="dgintro">
            <div class="logo2">
                <img class="wb100" src="https://cp1.douguo.com//static/nweb/images/logo3.png?20191218"
                    alt="豆果美食logo">
            </div>
            <div class="datainfo">
                <p><span>500万+</span>美食菜谱；<span>2000万+</span>互动内容；<span>3000+</span>美食课堂；<span>5000万+</span>用户每天都有新分享
                </p>
            </div>
            <div class="threbl">
                <h3>扫二维码，下载豆果手机应用：</h3>
                <ul>
                    <li v-for="(item,index) in threbl" :key="index">
                        <a href="javascript:void(0);" class="emdgms">
                            <img width="92" height="92" :src="item.img" alt="豆果美食">
                        </a>{{item.txt}}
                    </li>

                </ul>
            </div>
        </div>
    </div>
    <div class="foot">
        <div class="clink relative">
            <a href="#" rel="nofollow" v-for="(item,index) in clink"> {{item}}
                &nbsp; </a>
        </div>
        <div class="cght" style="text-align: center;">

            <a href="https://www.douguo.com">北京豆果信息技术有限公司</a>
            <span>京ICP证111032号</span>
            <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502038268">
                <img src="https://i1.douguo.com//upload/banner/1564469142.png" lazysrc="" style="width:20px">
                京公网安备 11010502038268号
            </a>
            <a href="http://beian.miit.gov.cn">
                京ICP备09012748号
            </a>
            <p style="margin:5px 0;cursor: pointer;" @click="smask1=1">
                互联网药品信息服务资格证书</p>
            <a href="http://sq.ccm.gov.cn/ccnt/sczr/doLogin">
                <img src="https://i1.douguo.com//upload/banner/1522057799.png"
                    style="margin-bottom: -3px;width:20px">
                京网文【2017】6954-770号
            </a> 食品流通许可证SP1101061510252413
            <a href="javascript:void(0);" style="display:block;text-align:center;margin-top:5px;"
                @click="smask2=1">广播电视节目制作经营许可证（京）字第11624号</a>


            <div class="smask2" v-show="smask1||smask2"> </div>

            <div class="tvbox" v-show="smask1">
                <img src="https://i1.douguo.com//upload/banner/1551092008.jpg" alt="">
                <img style="position: absolute;top:15px;right:15px;cursor: pointer;"
                    src="https://cp1.douguo.com/static/nweb/images/close.png" alt="" @click="smask1=0">
            </div>
            <div class="medicinal_box" v-show="smask2">
                <img style="width:700px;" src="https://i1.douguo.com//upload/banner/1577185524.jpg" alt="">
                <img style="position: absolute;top:15px;right:15px;cursor: pointer;"
                    src="https://cp1.douguo.com/static/nweb/images/close.png" alt="" @click="smask2=0">
            </div>
        </div>


        <div class="botfans" style="padding: 15px 0 20px;text-align: center;">
            <a style="margin-left: 12px;" href="#">
                <img src="./imgs/wb.png" style="height: 22px">
            </a>
            <a style="margin-left: 12px;" href="#">
                <img src="https://i1.douguo.com/upload/banner/1528470330.png" style="height: 22px">
            </a>

        </div>
    </div>
</div>

    `,
    methods: {

    }
})


new Vue({
    el: '#wrap',
    data: {

    },
    methods: {

    }
})
