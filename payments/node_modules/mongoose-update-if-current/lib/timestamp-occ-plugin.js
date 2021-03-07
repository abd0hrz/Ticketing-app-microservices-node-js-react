"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timestampOCCPlugin = timestampOCCPlugin;

var _assert = _interopRequireDefault(require("assert"));

var _kareem = _interopRequireDefault(require("kareem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Implement optimistic concurrency control using a schema's timestamps.
 *
 * @param {mongoose.Schema} schema - A Mongoose schema to be plugged into.
 */
function timestampOCCPlugin(schema) {
  if (schema.$implicitlyCreated) {
    // Implicit creation mean that it's an internal model, aka subdocument.
    // In this case, we don't want to add hooks, because methods are not existing and it's not relevant.
    return;
  }

  (0, _assert["default"])(schema.$timestamps, 'schema must have timestamps enabled');
  var updatedAt = schema.$timestamps.updatedAt;
  (0, _assert["default"])(updatedAt, 'schema must have the updatedAt timestamp enabled'); // Add pre-save hook to check timestamp for concurrency control

  var hooks = new _kareem["default"]();
  hooks.pre('save', function (next) {
    // Condition the save on the updatedAt timestamps matching
    this.$where = _objectSpread({}, this.$where, _defineProperty({}, updatedAt, this[updatedAt])); // Invoke next hook

    next();
  }); // Merge plugin hooks with schema hooks to ensure that the OCC hook
  // is invoked before mongoose's built-in timestamp update hook

  schema.s.hooks = hooks.merge(schema.s.hooks);
}
//# sourceMappingURL=timestamp-occ-plugin.js.map