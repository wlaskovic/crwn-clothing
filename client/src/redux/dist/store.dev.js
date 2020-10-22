"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.persistor = exports.store = void 0;

var _redux = require("redux");

var _reduxPersist = require("redux-persist");

var _reduxLogger = _interopRequireDefault(require("redux-logger"));

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _rootReducer = _interopRequireDefault(require("./root-reducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var middlewares = [_reduxThunk["default"]];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(_reduxLogger["default"]);
}

var store = (0, _redux.createStore)(_rootReducer["default"], _redux.applyMiddleware.apply(void 0, middlewares));
exports.store = store;
var persistor = (0, _reduxPersist.persistStore)(store);
exports.persistor = persistor;
var _default = {
  store: store,
  persistor: persistor
};
exports["default"] = _default;