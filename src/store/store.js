import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const storage={
    fetch() {
        const arr=[];
            if(localStorage.length>0){
              for(let i=0;i<localStorage.length ;i++) //var -> let으로 변환, 반복문은 const로 하면 돌아가지 않음 재 할당이 안되기 떄문이다.
              {
                // console.log(localStorage.key(i ));
                if(localStorage.key(i) !== 'loglevel:webpack-dev-server ')
                // 현재는 key 와 value가 다르게 들어갈때 value에 값에 obj로 되어있다.
                arr.todoitems.push(JSON.parse( localStorage.getItem(localStorage.key(i))))
                // this.todoitems.push(localStorage.key(i));  이떄는 key=value가 같을 때 
              }
            }
        return arr;
    }
}

export const store = new Vuex.Store({
    state:{
        // headerText:'TODO it!'
        todoitems:storage.fetch()   // App.vue의 todoitems 여기서 사용할거야
    },
    getters:{
         storedTodoItems(state){
            return state.todoitems;
         }
    },
    mutations:{
        addOneItem(state,todoItem ){
            const obj={completed:false, item:todoItem};  //completed를 통하여 상태 부여
            localStorage.setItem(todoItem,JSON.stringify(obj));  // JSON.stringify는 obj라는 객체값을 문자열로 바꿔준다.
            state.todoitems.push(obj); 
        },
        removeOneItem(state,payload){
            state.todoitems.splice(payload.index,1); // 선택한 index의 배열의 index에서 splice를 통하여 삭제한다. 
            localStorage.removeItem(payload.todoitems.item); // 로직에 있는 obj안 item을 제거
        },
        toggleOneItem(state,payload){
            state.todoitems[payload.index].completed = !state.todoitems[payload.index].completed
            //toggleComplete 의 false 부분을 바꾸는 거
            localStorage.removeItem(payload.todoitems.item);
            localStorage.setItem(payload.todoitems.item,JSON.stringify(payload.todoItem));
            // 로직에서 변경을 하기 위해서  삭제->생성
        },
        clearAllItem(state){
            localStorage.clear();
            state.todoitems=[];
        }
    }
});