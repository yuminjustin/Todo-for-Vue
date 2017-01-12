define(function (require, exports, module) {
	var Vue = require("vue");
	require("cop/head");
	require("cop/body");
	require("cop/foot");

	Vue.component('app', {
		template: '\
               <div class="mainbox m oh">\
                 <h1>{{title}}</h1>\
                 <Head @addItem="addItem" :selectAll="selectAll" @selectedAll="selectedAll"></Head>\
                 <Body :todos="todos" :filter="filter" @selectIt="selectIt" @delIt="delIt" @updateIt="updateIt"></Body>\
                 <Foot :unsNum="unsNum" :sNum="sNum" :filter="filter" @all="all" @unSelected="unSelected" @isSelected="isSelected" @del="del"></Foot>\
               </div>\
            ',
		data: function () {
			return {
				title: "Vue todo",
				todos: [],
				unsNum: 0,
		        sNum: 0,
		        filter:0,
		        selectAll:0
			}
		},
		methods: {
			addItem: function (todo) {
				this.todos.push({
					id: this.todos.length,
					value: todo,
					selected: 0
				})
				this.unSelectedNum();
			},
			delIt: function (idx) {
				this.todos.splice(idx, 1);
				this.unSelectedNum();
			},
			updateIt: function (value, idx) {
				this.todos[idx].value = value;
			},
			selectIt: function (idx,checked) {
				this.todos[idx].selected = checked?1:0;
				this.unSelectedNum();
			},
			all:function(){
				this.filter = 0;
			},
			unSelectedNum:function(){
				var n = 0;
				this.todos.map(function (todo) {
					!todo.selected && (n += 1);
				});
				this.unsNum = n;
				this.sNum = this.todos.length - n;
				this.selectAll = !n&&this.todos.length?1:0;
			},
			unSelected:function(){
				this.filter = 1;
			},
			isSelected:function(){
				this.filter = 2;
			},
			del:function(){
				var arr = [];
				this.todos.map(function (todo,idx) {
					!todo.selected && arr.push(todo);
				});
				this.todos = arr;
				this.unSelectedNum();
			},
			selectedAll:function(checked){
				this.todos.map(function (todo,idx) {
					todo.selected = checked;
				});
				this.unSelectedNum();
			}	
		}
	})


	var app = new Vue({
		el: '#body'
	})
});
