"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectCollection = exports.selectCollectionsForPreview = exports.selectCollections = void 0;

var _reselect = require("reselect");

var _lodash = _interopRequireDefault(require("lodash.memoize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5
};

var selectShop = function selectShop(state) {
  return state.shop;
};

var selectCollections = (0, _reselect.createSelector)([selectShop], function (shop) {
  return shop.collections;
});
exports.selectCollections = selectCollections;
var selectCollectionsForPreview = (0, _reselect.createSelector)([selectCollections], function (collections) {
  return Object.keys(collections).map(function (key) {
    return collections[key];
  });
});
exports.selectCollectionsForPreview = selectCollectionsForPreview;

var selectCollection = function selectCollection(collectionUrlParam) {
  return (0, _reselect.createSelector)([selectCollections], function (collections) {
    return collections.find(function (collection) {
      return collection.id === COLLECTION_ID_MAP[collectionUrlParam];
    });
  });
};

exports.selectCollection = selectCollection;