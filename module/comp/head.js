define(function (require, exports, module) {
	var Vue = require("vue");
	Vue.component('Head', {
		props: ['selectAll','ipt'],
		template: '<div class="c addbox">\
				<label>\
					<input ref="cbox" type="checkbox" class="l db" @click="selectedAll" :checked="selectAll?true:false"> 全选\
				</label>\
				<input v-model="ipt" type="text" placeholder="输入需要添加的文字">\
				<button @click="addItem">添加</button>\
			</div>',
		methods: {
			addItem: function () {
				this.ipt && this.$emit("addItem", this.ipt) && (this.ipt = "");
			},
			selectedAll: function () {
				this.$emit('selectedAll', this.$refs.cbox.checked)
			}
		}
	})
});
