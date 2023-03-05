const counterReducer = require("./../features/counter/counterSlice");
const dynamicCounterReducer = require("./../features/dynamicCounter/dynamicCounterSlice");
const configureStore = require("@reduxjs/toolkit").configureStore;
const { createLogger } = require("redux-logger");
const logger = createLogger();

// configure store
const store = configureStore({
  reducer: {
    counter: counterReducer,
    dynamicCounter: dynamicCounterReducer,
  },
  middleware: (defaultMiddlewares) => defaultMiddlewares().concat(logger),
});
module.exports = store;
