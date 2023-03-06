const counterReducer = require("./../features/counter/counterSlice");
const dynamicCounterReducer = require("./../features/dynamicCounter/dynamicCounterSlice");
const postReducer = require("./../features/post/postSlice.js");
const configureStore = require("@reduxjs/toolkit").configureStore;
const { createLogger } = require("redux-logger");
const logger = createLogger();

// configure store
const store = configureStore({
  reducer: {
    counter: counterReducer,
    dynamicCounter: dynamicCounterReducer,
    posts: postReducer,
  },
  middleware: (defaultMiddlewares) => defaultMiddlewares().concat(logger),
});
module.exports = store;
