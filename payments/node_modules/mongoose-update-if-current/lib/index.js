"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateIfCurrentPlugin = updateIfCurrentPlugin;

require("core-js/stable");

require("regenerator-runtime/runtime");

var _assert = _interopRequireDefault(require("assert"));

var _versionOccPlugin = require("./version-occ-plugin");

var _timestampOccPlugin = require("./timestamp-occ-plugin");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Implement optimistic concurrency control on a Mongoose schema.
 *
 * @param {mongoose.Schema} schema - A Mongoose schema to be plugged into.
 * @param {object} options - A Mongoose schema to be plugged into.
 */
function updateIfCurrentPlugin(schema, options) {
  // Default to using the version field for concurrency control
  var strategy = options && options.strategy || 'version'; // Apply plugin based on strategy

  if (strategy === 'version') {
    schema.plugin(_versionOccPlugin.versionOCCPlugin);
  } else if (strategy === 'timestamp') {
    schema.plugin(_timestampOccPlugin.timestampOCCPlugin);
  } else {
    (0, _assert["default"])(false, 'concurrency control strategy must be one of "version" or "timestamp"');
  }
}
//# sourceMappingURL=index.js.map