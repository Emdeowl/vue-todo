<template>
  <div class="inputBox shadow" >
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <span class="addContainer" v-on:click="addTodo">
      <i class="fa-solid fa-plus addBtn"></i>
    </span>

    <Modal v-if="showModal" @close="showModal = false">
        
      <h3 slot="header">경고
         <!-- showModal === false가 되면  v-if가 false가 되서 modal 창이 아예 닫히게 된다.  -->
        <i class="fa-solid fa-xmark clsoeModalBtn" @click="showModal=false" ></i>      <!--  X 아이콘 -->
        <!-- slot은 수정하기 어려운 다른 component의 template를 수정할수 있다.  -->
      </h3>
      <div slot="body">
        <h3> 아무것도 입력하지 않았습니다.</h3>
      </div> 
    </Modal>
  </div>
</template>

<script>
  import Modal from'./common/Modal-Common.vue'
export default {

  data(){
    return{
      newTodoItem:'',
      showModal: false
    }
  },
  components:{
        Modal
      } ,
  methods:{
    addTodo(){
      if(this.newTodoItem !== ''){   // newTodoItem에 값이 있을때 저장이 된다.
      // const text= this.newTodoItem.trim();
        this.$store.commit('addOneItem',this.newTodoItem);
        this.clearInput();
       
        } else{
            this.showModal = !this.showModal;
        }
      },  
      clearInput(){
          // add를 누fm 면 화면 input 비우기 
      this.newTodoItem="";
      }
  }
}
</script>

<style scoped>
 input:focus{
  outline: none;
 }
 .inputBox{
  background-color: white;
  height: 50px;
  line-height:50px;
  border-radius: 5px;
 }
 .inputBox input{
  border-style: none;
  font-size: 0.9rem;
 }
 .addContainer{
  float:right;
  background: linear-gradient(to right,#6478FB,#8763FB);
  display: black;
  width: 3rem;
  border-radius: 0 5px 5px 0;
 }
 .addBtn{
  color :white;
  vertical-align: middle;
 }
 .clsoeModalBtn{
  color:#42b983;
 }
</style> 