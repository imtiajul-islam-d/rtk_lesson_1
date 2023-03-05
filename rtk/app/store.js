const counterReducer = require("./../features/counter/counterSlice");
const dynamicCounterReducer = require("./../features/dynamicCounter/dynamicCounterSlice");
const configureStore = require("@reduxjs/toolkit").configureStore;

// configure store
const store = configureStore({
  reducer: {
    counter: counterReducer,
    dynamicCounter: dynamicCounterReducer,
  },
});
module.exports = store;
