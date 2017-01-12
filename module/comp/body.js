define(function (require, exports, module) {
	var Vue = require("vue");
	require("cop/item");
	
	Vue.component('Body', {
		props: ['todos','filter'],
		template: '<div class="c oh listbox">\
				<ul>\
                  <li is="todo-item" v-for="(todo, idx) in todos" :filter="filter" :todo="todo" :idx="idx" @selectIt="selectIt" @delIt="delIt" @updateIt="updateIt">\
                  </li>\
                </ul>\
			</div>',
		methods:{
		    delIt:function(idx){
			   this.$emit("delIt",idx);
			},
			updateIt:function(value,idx){
			   this.$emit("updateIt",value,idx);
			},
			selectIt:function(idx,checked){
				this.$emit("selectIt",idx,checked);
			}
	    }
	})
});
