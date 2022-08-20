<template>
  <div> 
    <transition-group name="list" tag="ul"> <!-- name이  css와 연결되는거임 -->
      <li v-for="(todoitem, index) in  this.$store.state.todoitems" v-bind:key="todoitem.item " class="shadow" >
        <i class="checkBtn fa-solid fa-check" v-bind:class="{checkBtnCompleted:todoitem.completed}" v-on:click="toggleComplete(todoitem,index)"></i>
          <span v-bind:class="{textCompleted:todoitem.completed}"> {{ todoitem.item }}</span>
          <span class="removeBtn" v-on:click="removeTodo(todoitem,index)">
            <i class="fa-regular fa-trash-can "></i>
         </span>
      </li>
    </transition-group>
  </div>
</template> 

<script>
export default {
   

    methods:{
    removeTodo(todoitem,index){
      this.$emit('removeItem',todoitem,index);
      this.$store.commit('removeOneItem',);
    },
    toggleComplete(todoitem,index){
      const obj={
        todoitem,
        index
      }
      this.$emit('toggleItem',obj)
      // 이런 형태도 가능함.
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
/* 리스트 아이템  트랜잭션 효과  - 부드럽게 들어오며 부드럽게 빠져  나간다. */
.list-enter-active, .list-leave-active {
  transition: all 1s; /* 효과 시속 시간 */ 
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;  /* 불투명도 */ 
  transform: translateY(30px);  /* Y축으로 30px 움직임 */
}

</style>