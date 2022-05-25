"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.promise.js");

const promiseWrapper = logic => {
  return new Promise(async (resolve, reject) => {
    const result = await logic();

    try {
      resolve(result);
    } catch (err) {
      reject(err);
    }
  });
};

var _default = promiseWrapper;
exports.default = _default;