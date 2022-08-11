<template>
  <div>
    <ul>
      <li v-for="(todoitem, index) in todoitems" v-bind:key="todoitem.item " class="shadow">
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
   data:function(){
        return{
          todoitems:[]
        }
    },
    methods:{
    removeTodo:function(todoitem,index){
      // console.log(todoitem,index);
       this.todoitems.splice(index,1);
      // splice를 이용하여 화면에 있는 list를 지운다. splice(지울 번호, 1개)
      localStorage.removeItem(todoitem);
      // localStorage에 있는 item(data)를 지운다.
     
    },
    toggleComplete:function(todoitem){
     
      todoitem.completed= !todoitem.completed;
      //toggleComplete 의 false 부분을 바꾸는 거
      localStorage.removeItem(todoitem.item);
      localStorage.setItem(todoitem.item,JSON.stringify(todoitem));
      // 로직에서 변경을 하기 위해서  삭제->생성
    }
  },

  created:function(){
   
    if(localStorage.length>0){
      for(var i=0;i<localStorage.length ;i++)
      {
        // console.log(localStorage.key(i ));
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server ')
        // 현재는 key 와 value가 다르게 들어갈때 value에 값에 obj로 되어있다.
        this.todoitems.push(JSON.parse( localStorage.getItem(localStorage.key(i))))

        // this.todoitems.push(localStorage.key(i));  이떄는 key=value가 같을 때 
      }
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