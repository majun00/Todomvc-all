<template>
	<section class="todoapp">
		<todo-header @add-new="addNew"></todo-header>
		<todo-main :todos="todos" ></todo-main>
		<todo-footer
		:todos="todo" :visivility="visibility"
		@set-filter="setFilter"
		@remove-completed="removeCompleted"></todo-footer>
	</section>
</template>
<script>
	import TodoHeader from './TodoHeader.vue'
	import TodoMain from './TodoMain.vue'
	import TodoFooter from './TodoFooter.vue'

	export default{
		el:'#todomvc',
		data(){
			return{
				todos:[],
				editedTodo:null,
				visibility:'all'
			}
		},
		methods:{
			addNew(value){
				this.todos.push({title:value,completed:false})
			},
			removeTodo(todo){
				this.todos.$remove(todo)
			},
			// 组件传值
			setFilter(filter){
				this.visibility=filter
			},
			removeCompleted(){
				this.todos=this.todos.filter(todo=>!todo.completed)
			}
		},
		components:{
			TodoHeader,
			TodoMain,
			TodoFooter
		},
	}
</script>
<style lang="sass">
	html,
	body {
		margin: 0;
		padding: 0;
	}

	button {
		margin: 0;
		padding: 0;
		border: 0;
		background: none;
		font-size: 100%;
		vertical-align: baseline;
		font-family: inherit;
		font-weight: inherit;
		color: inherit;
		-webkit-appearance: none;
		appearance: none;
		-webkit-font-smoothing: antialiased;
		-moz-font-smoothing: antialiased;
		font-smoothing: antialiased;
	}

	body {
		font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
		line-height: 1.4em;
		background: #f5f5f5;
		color: #4d4d4d;
		min-width: 230px;
		max-width: 550px;
		margin: 0 auto;
		-webkit-font-smoothing: antialiased;
		-moz-font-smoothing: antialiased;
		font-smoothing: antialiased;
		font-weight: 300;
	}

	button,
	input[type="checkbox"] {
		outline: none;
	}

	.hidden {
		display: none;
	}

	.todoapp {
		background: #fff;
		margin: 130px 0 40px 0;
		position: relative;
		box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
		            0 25px 50px 0 rgba(0, 0, 0, 0.1);
	}

	.todoapp input::-webkit-input-placeholder {
		font-style: italic;
		font-weight: 300;
		color: #e6e6e6;
	}

	.todoapp input::-moz-placeholder {
		font-style: italic;
		font-weight: 300;
		color: #e6e6e6;
	}

	.todoapp input::input-placeholder {
		font-style: italic;
		font-weight: 300;
		color: #e6e6e6;
	}
	@media screen and (-webkit-min-device-pixel-ratio:0) {
		.toggle-all,
		.todo-list li .toggle {
			background: none;
		}

		.todo-list li .toggle {
			height: 40px;
		}

		.toggle-all {
			-webkit-transform: rotate(90deg);
			transform: rotate(90deg);
			-webkit-appearance: none;
			appearance: none;
		}
	}

	@media (max-width: 430px) {
		.footer {
			height: 50px;
		}

		.filters {
			bottom: 10px;
		}
	}
</style>