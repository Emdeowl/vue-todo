const addOneItem= (state,todoItem )=> {
    const obj={completed:false, item:todoItem};  //completed를 통하여 상태 부여
    localStorage.setItem(todoItem,JSON.stringify(obj));  // JSON.stringify는 obj라는 객체값을 문자열로 바꿔준다.
    state.todoitems.push(obj); 
}
const removeOneItem=(state,payload)=>{
    state.todoitems.splice(payload.index,1); // 선택한 index의 배열의 index에서 splice를 통하여 삭제한다. 
    localStorage.removeItem(payload.todoitems.item); // 로직에 있는 obj안 item을 제거
}
const toggleOneItem = (state,payload) =>{
    state.todoitems[payload.index].completed = !state.todoitems[payload.index].completed
    //toggleComplete 의 false 부분을 바꾸는 거
    localStorage.removeItem(payload.todoitems.item);
    localStorage.setItem(payload.todoitems.item,JSON.stringify(payload.todoItem));
    // 로직에서 변경을 하기 위해서  삭제->생성
}
const clearAllItem= (state)=> {
    localStorage.clear();
    state.todoitems=[];
}

export {addOneItem,removeOneItem, toggleOneItem,clearAllItem}