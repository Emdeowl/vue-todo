<template>
  <div id="app">
    <Todo-Header></Todo-Header>
    <Todo-Input v-on:addTodoItem="addOneItem"></Todo-Input>
    <Todo-List v-bind:propsdata="todoitems" v-on:removeItem="removeOneItem" v-on:toggleItem="toggleOneItem"></Todo-List>
    <Todo-Footer v-on:clearAll="clearAllItem"></Todo-Footer>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  data(){
    return{
      todoitems:[]  // 할 일 데이터
    }
  },
  methods:{
    addOneItem(todoItem){
         const obj={completed:false, item:todoItem};  //completed를 통하여 상태 부여
        localStorage.setItem(todoItem,JSON.stringify(obj));  // JSON.stringify는 obj라는 객체값을 문자열로 바꿔준다.
        this.todoitems.push(obj); 
    },
    removeOneItem(todoitem,index){
       this.todoitems.splice(index,1); // 선택한 index의 배열의 index에서 splice를 통하여 삭제한다. 
      localStorage.removeItem(todoitem.item); // 로직에 있는 obj안 item을 제거
    },
    toggleOneItem(todoItem,index){
      //  todoItem.completed= !todoItem.completed;
        this.todoitems[index].completed = !this.todoitems[index].completed
        
      //toggleComplete 의 false 부분을 바꾸는 거
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item,JSON.stringify(todoItem));
      // 로직에서 변경을 하기 위해서  삭제->생성
    },
    clearAllItem(){
       localStorage.clear();
       this.todoitems=[];
    }
  },
  

  components:{
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter 
  }
}
</script>

<style>
body{
  text-align: center;
  background-color: #F6F6F6;
}
input{
  border-style : groove;
  width: 200px;
}

button{
  border-style: groove;
}
.shadow{
  box-shadow: 5px 10px 10px rgba(0,0,0,0.03);
}
</style>