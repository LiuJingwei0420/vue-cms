<template>
				<div class="mui-numbox" data-numbox-min='1' data-numbox-max='max'>
					<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
					<input id="test" class="mui-input-numbox" type="number" value="1" @change="countChanged" ref="numbox"/>
					<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
				</div>
</template>

<script>
import mui from '../../lib/mui/js/mui.js'
export default {
    mounted(){
		//初始化数字选择框组件
		mui('.mui-numbox').numbox();
	},
	methods:{
		countChanged(){
			// 每当 文本框的数据修改的时候，立即把 最新的数据，通过时间调用，传递给苏组件
			// console.log(this.$refs.numbox.value)
			this.$emit('getcount',parseInt(this.$refs.numbox.value))
		}
	},
	props:["max"],
	watch: {
		//属性监听
		'max': function(newVal,oldVal){
			mui(".mui-numbox").numbox().setOption('max',newVal);
		}
	}
}
</script>

<style lang="scss" scoped>

</style>