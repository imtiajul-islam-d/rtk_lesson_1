const store = require("./app/store");
const {counterActions} = require("./features/counter/counterSlice");
const { dynamicCounterAction } = require("./features/dynamicCounter/dynamicCounterSlice");

// initial state
// console.log(`Initial State: ${JSON.stringify(store.getState())}`);
// subscribe to state changes
store.subscribe(() => {
    // console.log(store.getState());
});


// disptach actions
store.dispatch(counterActions.increment());

// store.dispatch(counterActions.increment());

// store.dispatch(counterActions.decrement());

// store.dispatch(dynamicCounterAction.increment(3));

// store.dispatch(dynamicCounterAction.increment(4));

// store.dispatch(dynamicCounterAction.decrement(2));
