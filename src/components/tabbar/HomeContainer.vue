<template>
    <div>

        <!-- 轮播图区域 -->
       <swiper :lunbotuList="lunbotuList" :isfull="true"></swiper>
      
        <!-- 六宫格 -->

         <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
                            <img :src="imgUrl1" width="50%" height="50%">
		                    <div class="mui-media-body">新闻咨询</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist">
		                    <img :src="imgUrl2" width="50%" height="50%"><span class="mui-badge">5</span>
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodslist">
                            <img :src="imgUrl3" width="50%" height="50%">
		                    <div class="mui-media-body">商品购买</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img :src="imgUrl4" width="50%" height="50%">
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img :src="imgUrl5" width="50%" height="50%">
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img :src="imgUrl6" width="50%" height="50%">
		                    <div class="mui-media-body">联系我们</div></a></li>
		            
		        </ul> 

    </div>
</template>

<script>
import {Toast} from 'mint-ui'
import swiper from '../subcomponents/swiper.vue'


export default{
    data(){
        return {
            lunbotuList:[], //保存轮播图的数组
            imgUrl1:'../../images/menu1.png',
            imgUrl2:'../../images/menu2.png',
            imgUrl3:'../../images/menu3.png',
            imgUrl4:'../../images/menu4.png',
            imgUrl5:'../../images/menu5.png',
            imgUrl6:'../../images/menu6.png',
        }
    },
    created(){
        this.getLunbotu()
    },
    methods: {
        getLunbotu(){ //获取轮播图数据的方法
            this.$http.get("api/getlunbo").then(result => {
                // console.log(result.body);
                if(result.body.status === 0) {

                    this.lunbotuList = result.body.message;
                } else {
                    Toast("加载轮播图失败。。。")
                }
            })

        }
    },
    components:{
        swiper
    }
}

</script>

<style lang="scss" scoped>


.mui-grid-view.mui-grid-9 {
        background-color: #fff;
        border: none;
        img{
            width: 60px;
            height: 60px;
        }
    }
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border: 0;
    }
.mui-media-body{
    font-size: 13px
}
</style>