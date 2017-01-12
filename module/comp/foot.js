define(function (require, exports, module) {
	var Vue = require("vue");
	
	Vue.component('Foot', {
		props: ['unsNum','sNum','filter'],
		template: '<div class="last_info">\
				<p class="l info">{{unsNum}}项未选择</p>\
				<p class="l choose_btn">\
					<span :class="{active:filter==0}" @click="$emit(\'all\')">所有</span>\
					<span :class="{active:filter==1}" @click="$emit(\'unSelected\')">未选</span>\
					<span :class="{active:filter==2}" @click="$emit(\'isSelected\')">已选</span>\
				</p>\
				<button class="del r" v-show="sNum>0&&filter!=1" @click="$emit(\'del\')">删除选中项</button>\
			</div>'
	})
});
