<template>
    <div class="goodsinfo-container"> 

        <transition
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter">
            <div class="ball" v-show="ballFlag" ref="ball"></div>
        </transition>
        <!-- 商品轮播图区域 -->  
            <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
                        <swiper :lunbotuList="lunbotu" :isfull="false"></swiper>
					</div>
				</div>
			</div> 

            <!-- 商品购买区域 -->
              <div class="mui-card">
				<div class="mui-card-header">{{ goodsinfo.title }}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
                        <P class="price">
                        市场价：<del>{{ goodsinfo.market_price}}</del> &nbsp;&nbsp;销售价：<span class="now_price">
                            {{goodsinfo.sell_price}}
                        </span>
                        </P>
                        <p>购买数量:<numbox @getcount="getSelectedCount" :max="goodsinfo.stock_quantity"></numbox></p>
                        
                            <div class="goodsinfo_btn">
                                <p>
                            <mt-button type="primary" size="small">立即购买</mt-button>
                            <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
                                </p>
                            </div>
                        

					</div>
				</div>
			</div>
			 
			 <!-- 参数区域 -->
             	<div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
                        <p>商品货号：{{ goodsinfo.goods_no }}</p>
                        <p>库存情况：{{ goodsinfo.stock_quantity }}件</p>
                        <p>上架时间：{{ goodsinfo.add_time | dateFormat }}</p>


					</div>
				</div>
				<div class="mui-card-footer">
                        <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
                        <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>

                </div>
			</div>
			
           
     </div>
</template>

<script>
import swiper from '../subcomponents/swiper.vue';
import numbox from '../subcomponents/goodsinfo_numbox.vue'
export default {
    data(){
        return {
           id: this.$route.params.id,
           lunbotu: [],// 轮播图的数据
           goodsinfo:{}, // 获取到的商品信息
           ballFlag: false,
           selectedCount: 1 //保存用户选中的商品数量，默认，认为用户买1个
     }
    },
    created(){
        this.getLunbotu();
        this.getGoodsInfo();
    },
    methods:{
        getLunbotu(){
            this.$http.get('api/getthumimages/' + this.id).then(result => {
                if(result.body.status === 0 ){

                    //先循环 轮播图数组的 每一项，为itm 添加 img 属性 ，因为轮播图组件中，只认识
                    // item.img 不认识 Item.src
                    result.body.message.forEach(item => { 
                        item.img = item.src
                    })
                    this.lunbotu = result.body.message;

                }
            })
        },
        getGoodsInfo(){
            this.$http.get('api/goods/getinfo/' + this.id).then(result => {
                if(result.body.status === 0){
                    this.goodsinfo = result.body.message[0]
                }
            })
        },
        goDesc(id){
            // 点击使用变成屎导航 跳转到图文介绍揭秘啊
            this.$router.push({name: "/home/goodsdesc", params: { id }})
        },
        goComment(id){
            // 点击跳转到 评论页面
            this.$router.push({name: "/home/goodscomment", params: { id }})

        },
        addToShopCar(){
            this.ballFlag = !this.ballFlag
        },
        beforeEnter(el){
            el.style.transform = "translate(0,0)"
        },
        enter(el,done){
            el.offsetWidth;

            const ballPostion = this.$refs.ball.getBoundingClientRect();
            const badgePosition = document.getElementById('badge').getBoundingClientRect();

            const xDist = badgePosition.left - ballPostion.left;
            const yDist = badgePosition.top - ballPostion.top;

            el.style.transform = `translate(${xDist}px, ${yDist}px)`;
            el.style.transition = "all 0.5s cubic-bezier(.4,-0.3,1,.68";
            done()
        },
        afterEnter(el){
            this.ballFlag = !this.ballFlag;
        },
        getSelectedCount(count){
        this.selectedCount = count;
                    console.log('父：', this.selectedCount)

    }
    },
   
    components:{
        swiper,numbox
    }
}
</script>

<style lang="scss" scoped>
.goodsinfo-container{
    background-color: #eee;
    overflow: hidden;
    
    .now_price{
        color: red;
        font-size: 16px;
        font-weight:bold;
    }
    .mui-card-footer{
        display: block;
        button{
            margin:15px
        }
    }
    .goodsinfo_btn{
        padding: 10px 10px;
    }

    .ball{
        width:15px;
        height: 15px;
        border-radius:50%;
        background-color: red;
        position: absolute;
        z-index: 99;
        top: 390px;
        left: 146px;
    }
}
</style>