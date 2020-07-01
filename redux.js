const redux = require('redux');
const createStore= redux.createStore;

//inital state
initalState={
    counter : 0
}


//reducer
const reducer = (state = initalState, action) => {
    if (action.type=='INC_COUNTER') {
        return {
            ...state,
            counter: state.counter+1
        }
    }

    if (action.type=='ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }

    return state;
}


//store
const store = createStore(reducer);

//subscriber
store.subscribe(()=>{
    console.log('[subscribtion]', store.getState());
});

//action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value:10});
console.log(store.getState());
