<template>
  <div>
    <ul>
      <li v-for="(todoitem, index) in propsdata" v-bind:key="todoitem.item " class="shadow">
        <i class="checkBtn fa-solid fa-check" v-bind:class="{checkBtnCompleted:todoitem.completed}" v-on:click="toggleComplete(todoitem,index)"></i>
          <span v-bind:class="{textCompleted:todoitem.completed}"> {{ todoitem.item }}</span>
          <span claas="removeBtn" v-on:click="removeTodo(todoitem,index)">
            <i class="fa-regular fa-trash-can"></i>
         </span>
      </li>
    </ul>
  </div>
</template> 

<script>
export default {
   props:['propsdata'],

    methods:{
    removeTodo:function(todoitem,index){
      this.$emit('removeItem',todoitem,index);
    },
    toggleComplete:function(todoitem,index){
      this.$emit('toggleItem',todoitem,index)
    }
  },

 
  
}
</script>

<style scoped>
ul{
  list-style-type: none;
  /* list의 점 없애기 */
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li{
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn{
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.removeBtn{
  margin-left: auto;
  color:#de4343
}
.checkBtnCompleted{
  color:#b3adad;
}
.textCompleted{
  text-decoration: line-through;
  color:#b3adad;
}

</style>