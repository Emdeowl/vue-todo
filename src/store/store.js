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
        TodoItems:storage.fetch()   // App.vue의 TodoItems를 여기서 사용할거야
    }
});