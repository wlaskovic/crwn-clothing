"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchCollectionsStartAsync = exports.fetchCollectionsFailure = exports.fetchCollectionsSuccess = exports.fetchCollectionsStart = void 0;

var _shop = _interopRequireDefault(require("./shop.types"));

var _firebase = require("../../firebase/firebase.utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var fetchCollectionsStart = function fetchCollectionsStart() {
  return {
    type: _shop["default"].FETCH_COLLECTIONS_START
  };
};

exports.fetchCollectionsStart = fetchCollectionsStart;

var fetchCollectionsSuccess = function fetchCollectionsSuccess(collectionsMap) {
  return {
    type: _shop["default"].FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
  };
};

exports.fetchCollectionsSuccess = fetchCollectionsSuccess;

var fetchCollectionsFailure = function fetchCollectionsFailure(errorMessage) {
  return {
    type: _shop["default"].FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
  };
};

exports.fetchCollectionsFailure = fetchCollectionsFailure;

var fetchCollectionsStartAsync = function fetchCollectionsStartAsync() {
  return function (dispatch) {
    var collectionRef = _firebase.firestore.collection('collections');

    dispatch(fetchCollectionsStart());
    collectionRef.get().then(function (snapshot) {
      var collectionsMap = (0, _firebase.convertedCollectionSnapshotToMap)(snapshot);
      dispatch(fetchCollectionsSuccess(collectionsMap));
    })["catch"](function (error) {
      return dispatch(fetchCollectionsFailure(error.message));
    });
  };
};

exports.fetchCollectionsStartAsync = fetchCollectionsStartAsync;