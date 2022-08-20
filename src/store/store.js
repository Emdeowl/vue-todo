import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);
//use는 플러그인임 

export const store =new Vuex.store({
    state:{
        headerText:'TODO it!',


    }
});