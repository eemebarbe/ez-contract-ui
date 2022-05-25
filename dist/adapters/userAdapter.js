"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.promise.js");

var _promiseWrapper = _interopRequireDefault(require("./promiseWrapper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class UserAdapter {
  constructor() {
    _defineProperty(this, "editPrivateProfile", async (uid, email) => {});

    _defineProperty(this, "checkForNewSales", async (uid, snapshotLogic) => {});

    _defineProperty(this, "getReviews", async uid => {});

    _defineProperty(this, "addReview", async reviewData => {});

    _defineProperty(this, "getSales", async (uid, sales) => {});

    _defineProperty(this, "confirmUserEmail", async (email, href) => {});

    _defineProperty(this, "editProfile", async (uid, profileData) => {});

    _defineProperty(this, "filterUsers", async filters => {});

    _defineProperty(this, "monitorAuthState", authStateLogic => {});

    _defineProperty(this, "getAuthenticatedUser", () => {});

    _defineProperty(this, "signOut", async () => {});
  }

}

var _default = new UserAdapter();

exports.default = _default;