<template>
    <div>
         <mt-swipe :auto="4000">
            <!-- 在组件中，使用v-for循环的话，一定要使用 key-->
            <!-- 将来 ，谁使用此轮播图组件 谁为我们传递 lunbotuList -->
            <!-- 此时 lunbotuList  应该是 父组件向子组件传旨-->
        <mt-swipe-item v-for="(item,id) in lunbotuList" :key="id">
            <img :src="item.img" alt="" :class="{'full' : isfull}">
        </mt-swipe-item>
        </mt-swipe>

    </div>
</template>
<script>
export default {
    props:["lunbotuList", "isfull"]
}
</script>

<style lang="scss" scoped>
.mint-swipe{
    text-align: center;
    height: 200px;
    .mint-swipe-item {
        &:nth-child(1){
            // background-color: red
        }
        &:nth-child(2){
            background-color: blue
        }
        &:nth-child(3){
            background-color: cyan
        }

        img{
            // width: 100%;
            height: 100% ;
        }
    }
.full{
    width: 100%
}
   
}
</style>