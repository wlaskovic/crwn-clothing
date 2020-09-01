"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateCollections = void 0;

var _shop = _interopRequireDefault(require("./shop.types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var updateCollections = function updateCollections(collectionsMap) {
  return {
    type: _shop["default"].UPDATE_COLLECTIONS,
    payload: collectionsMap
  };
};

exports.updateCollections = updateCollections;