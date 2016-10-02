angular.module('angularPractiseApp').controller('TodoListController', function(){
  var todoList = this;
//  todoList.totalTodos = 100;
  todoList.todos = [
      {text:'learn angular', done:false},
      {text:'build an angular app', done:false}
    ];

    todoList.getTotalTodos=function(){
      return todoList.todos.length;
    }
    todoList.addTodo=function(){
      todoList.todos.push({text:todoList.formTodoText,done:false});
      todoList.formTodoText='';
    }
    todoList.clearCompleted=function(){
      var oldTodos=todoList.todos;
      todoList.todos=[];
      angular.forEach(oldTodos,function(x){
        if(!x.done){
          todoList.todos.push(x);
        }
      });
    }
  });
