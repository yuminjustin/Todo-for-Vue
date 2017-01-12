define(function (require, exports, module) {
	var Vue = require("vue");
	Vue.component('Head', {
		props:['selectAll'],
		template: '<div class="c addbox">\
				<label>\
					<input ref="cbox" type="checkbox" class="l db" @click="selectedAll" :checked="selectAll?true:false"> 全选\
				</label>\
				<input ref="ipt" type="text" placeholder="输入需要添加的文字">\
				<button @click="addItem">添加</button>\
			</div>',
		methods:{
		    addItem:function(){
		        this.$refs.ipt.value&&this.$emit("addItem",this.$refs.ipt.value)&&(this.$refs.ipt.value="");
	        },
			selectedAll:function(){
		       this.$emit('selectedAll',this.$refs.cbox.checked)
	        }	  
	    }
	})
});
