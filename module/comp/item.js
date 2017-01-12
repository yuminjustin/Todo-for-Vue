define(function (require, exports, module) {
	var Vue = require("vue");

	Vue.component('todo-item', {
		props: ['todo', "idx", "filter"],
		template: '<li v-show="isShow()" :class="todo.selected?\'selected\' : \'\'">\
		           <input ref="cbox" type="checkbox" class="l db" @click="selectIt(idx)" :checked="todo.selected?true:false">\
		           <span class="db l ellipsis" v-show="!isEdit" @dblclick="editIt">{{todo.value}}</span>\
				   <input ref="ipt" type="text" class="l db" v-show="isEdit" :placeholder="todo.value">\
				   <div class="operate r">\
				       <button style="margin-right: 8px;" @click="delIt(idx)">删除</button>\
				       <button v-show="isEdit" style="margin-right: 8px;" @click="updateIt(idx)">修改</button>\
				       <button v-show="isEdit" @click="cancelIt">取消</button>\
			       </div>\
                </li>',
		data: function () {
			return {
				isEdit: 0
			}
		},
		methods: {
			editIt: function () {
				this.isEdit = 1;
			},
			delIt: function (idx) {
				this.$emit("delIt", idx);
			},
			updateIt: function (idx) {
				this.$refs.ipt.value && this.$emit("updateIt", this.$refs.ipt.value, idx);
				this.$refs.ipt.value = "";
				this.isEdit = 0;
			},
			cancelIt: function () {
				this.isEdit = 0;
				this.$refs.ipt.value = "";
			},
			selectIt: function (idx) {
				this.$emit("selectIt", idx, this.$refs.cbox.checked);
			},
			isShow: function () {
				var s = 0;
				switch (Number(this.filter)) {
					case 0:
						s = 1;
						break;
					case 1:
						s = this.todo.selected ? 0 : 1;
						break;
					case 2:
						s = this.todo.selected ? 1 : 0;
						break;
				}
				return s;
			}	
		}
	})
});
