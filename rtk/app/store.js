const counterReducer = require("../../redux/counter/reducer");
const configureStore = require("@reduxjs/toolkit").configureStore;

// configure store
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
module.exports = store;