import storage from '../storage.js'

export default {
	state:{
		todos:storage.fetch(),
		editedTodos:null,
		visibility:'all'
	},
	filters:{
		all(todos){
			return todos
		},
		active(todos){
			return todos.filter(todo=>!todo.completed) 
		},
		completed(todos){
			return todos.filter(todo=>todo.completed)
		}
	}
	addTodo(value){
		this.state.todos.push({title:value,completed:false})
	},
	removeTode(todo,index){
		this.state.todos=this.state.todos.filter((todo,id)=>{id!=index})
	},
	removeCompletedTodos(){
		this.state.todos=this.filters.active(this.state.todos)
	}
}