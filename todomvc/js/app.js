(function (exports){
	'use strict';
	let filters={
		all(todos){
			return todos;
		},
		active(todos){
			return todos.filter((todo)=>{
				return !todo.completed;
			})
		},
		completed(todos){
			return todos.filter(function(todo){
				return todo.completed;
			})
		}
	}
	exports.app=new Vue({
		el:'.todoapp',
		data:{
			todos:todoStorage.fetch(),
			newTodo:'',
			editedTodo:null,
			visibility:'all'
		},
		methods:{
			addTodo(){
				if(this.newTodo.trim()){
					this.todos.push({title:this.newTodo.trim(),completed:false})
				}
				this.newTodo=''
			},
			removeTodo(todo){
				this.todos.$remove(todo);
			},
			editTodo(todo){
				// this.beforeEditCache=todo.title;
				this.editedTodo=todo;
			},
			doneEdit(todo){
				if(!this.editedTodo){
					return
				}
				this.editedTodo=null;
				tode.title=tode.title.trim();
				if(!todo.title){
					this.removeTodo(todo)
				}
			},
			cancelEdit(todo){
				this.editTodo=null;
				// todo.title = this.beforeEditCache;
			},
			removeCompleted(){
				this.todos=filters.active(this.todos);
			}

		},
		watch:{
			todos:{
				handler(todos){
					todoStorage.save(todos)
				},
				deep:true
			}
		},
		computed:{
			filteredTodos(){
				return filters[this.visibility](this.todos)
			},
			remaining(){
				return filters.active(this.todos).length;
			},
			allDone:{
				get(){
					return this.remaining===0
				},
				set(value){
					this.todos.forEach((todo)=>{
						todo.completed=value;
					})
				}
			}
		},
		directives:{
			'todo-focus':function(value){
				if(!value){
					return
				}
				var el=this.el;
				Vue.nextTick(function(){
					el.focus()
				})
			}
		}
	})
})(window);