<template>
  <div id="app">
    <Todo-Header></Todo-Header>
    <Todo-Input></Todo-Input>
    <Todo-List></Todo-List>
    <Todo-Footer></Todo-Footer>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'
export default {
  components:{
    'Todo-Header':TodoHeader,
    'Todo-Input':TodoInput,
    'Todo-List':TodoList,
    'Todo-Footer':TodoFooter 
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