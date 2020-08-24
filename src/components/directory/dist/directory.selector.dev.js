"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectDirectorySection = void 0;

var _reselect = require("reselect");

var selectDirectory = function selectDirectory(state) {
  return state.selectDirectory;
};

var selectDirectorySection = (0, _reselect.createSelector)([selectDirectory], function (directory) {
  return directory.sections;
});
exports.selectDirectorySection = selectDirectorySection;