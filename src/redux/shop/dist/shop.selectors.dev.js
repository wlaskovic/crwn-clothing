"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectCollection = exports.selectCollectionsForPreview = exports.selectCollections = void 0;

var _reselect = require("reselect");

var selectShop = function selectShop(state) {
  return state.shop;
};

var selectCollections = (0, _reselect.createSelector)([selectShop], function (shop) {
  return shop.collections;
});
exports.selectCollections = selectCollections;
var selectCollectionsForPreview = (0, _reselect.createSelector)([selectCollections], function (collections) {
  return collections ? Object.keys(collections).map(function (key) {
    return collections[key];
  }) : [];
});
exports.selectCollectionsForPreview = selectCollectionsForPreview;

var selectCollection = function selectCollection(collectionUrlParam) {
  return (0, _reselect.createSelector)([selectCollections], function (collections) {
    return collections ? collections[collectionUrlParam] : null;
  });
};

exports.selectCollection = selectCollection;