"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.signInWithGoogle = exports.firestore = exports.auth = exports.convertedCollectionSnapshotToMap = exports.addCollectionAndDocuments = exports.createUserProfileDocument = void 0;

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/firestore");

require("firebase/auth");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var config = {
  apiKey: "AIzaSyCXpiIWrYsQd28ysfCxWkEHK3Rk4yPAjvA",
  authDomain: "crwn-db-4d14b.firebaseapp.com",
  databaseURL: "https://crwn-db-4d14b.firebaseio.com",
  projectId: "crwn-db-4d14b",
  storageBucket: "crwn-db-4d14b.appspot.com",
  messagingSenderId: "318587799620",
  appId: "1:318587799620:web:54c9322a0056960ae89411"
};

var createUserProfileDocument = function createUserProfileDocument(userAuth, additionalData) {
  var userRef, snapShot, displayName, email, createdAt;
  return regeneratorRuntime.async(function createUserProfileDocument$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (userAuth) {
            _context.next = 2;
            break;
          }

          return _context.abrupt("return");

        case 2:
          userRef = firestore.doc("users/".concat(userAuth.uid));
          _context.next = 5;
          return regeneratorRuntime.awrap(userRef.get());

        case 5:
          snapShot = _context.sent;

          if (snapShot.exists) {
            _context.next = 17;
            break;
          }

          displayName = userAuth.displayName, email = userAuth.email;
          createdAt = new Date();
          _context.prev = 9;
          _context.next = 12;
          return regeneratorRuntime.awrap(userRef.set(_objectSpread({
            displayName: displayName,
            email: email,
            createdAt: createdAt
          }, additionalData)));

        case 12:
          _context.next = 17;
          break;

        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](9);
          console.log('error creating user', _context.t0.message);

        case 17:
          return _context.abrupt("return", userRef);

        case 18:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[9, 14]]);
};

exports.createUserProfileDocument = createUserProfileDocument;

_app["default"].initializeApp(config); // this function was just to upload the elements from collections to firestore


var addCollectionAndDocuments = function addCollectionAndDocuments(collectionKey, objectsToAdd) {
  var collectionRef, batch;
  return regeneratorRuntime.async(function addCollectionAndDocuments$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          collectionRef = firestore.collection(collectionKey);
          batch = firestore.batch();
          objectsToAdd.forEach(function (obj) {
            var newDocRef = collectionRef.doc();
            batch.set(newDocRef, obj);
          }); // returns promise, so we can call .then after, wow

          _context2.next = 5;
          return regeneratorRuntime.awrap(batch.commit());

        case 5:
          return _context2.abrupt("return", _context2.sent);

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.addCollectionAndDocuments = addCollectionAndDocuments;

var convertedCollectionSnapshotToMap = function convertedCollectionSnapshotToMap(collections) {
  var transformedCollection = collections.docs.map(function (doc) {
    var _doc$data = doc.data(),
        title = _doc$data.title,
        items = _doc$data.items;

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title: title,
      items: items
    };
  });
  return transformedCollection.reduce(function (accumulator, collection) {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

exports.convertedCollectionSnapshotToMap = convertedCollectionSnapshotToMap;

var auth = _app["default"].auth();

exports.auth = auth;

var firestore = _app["default"].firestore();

exports.firestore = firestore;
var provider = new _app["default"].auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});

var signInWithGoogle = function signInWithGoogle() {
  return auth.signInWithPopup(provider);
};

exports.signInWithGoogle = signInWithGoogle;
var _default = _app["default"];
exports["default"] = _default;