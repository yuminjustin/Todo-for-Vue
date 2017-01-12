//requirejs 配置
requirejs.config({
	baseUrl: './',
	paths: {
		vue: "module/lib/vue.min", //vue
		app: 'module/app', //入口
		cop: 'module/comp' //组件
	},
	shim: {
	}
});
