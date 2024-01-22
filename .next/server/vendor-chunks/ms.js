"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/ms";
exports.ids = ["vendor-chunks/ms"];
exports.modules = {

/***/ "(ssr)/../../../../node_modules/ms/index.js":
/*!********************************************!*\
  !*** ../../../../node_modules/ms/index.js ***!
  \********************************************/
/***/ ((module) => {

eval("/**\n * Helpers.\n */ \nvar s = 1000;\nvar m = s * 60;\nvar h = m * 60;\nvar d = h * 24;\nvar y = d * 365.25;\n/**\n * Parse or format the given `val`.\n *\n * Options:\n *\n *  - `long` verbose formatting [false]\n *\n * @param {String|Number} val\n * @param {Object} [options]\n * @throws {Error} throw an error if val is not a non-empty string or a number\n * @return {String|Number}\n * @api public\n */ module.exports = function(val, options) {\n    options = options || {};\n    var type = typeof val;\n    if (type === \"string\" && val.length > 0) {\n        return parse(val);\n    } else if (type === \"number\" && isNaN(val) === false) {\n        return options.long ? fmtLong(val) : fmtShort(val);\n    }\n    throw new Error(\"val is not a non-empty string or a valid number. val=\" + JSON.stringify(val));\n};\n/**\n * Parse the given `str` and return milliseconds.\n *\n * @param {String} str\n * @return {Number}\n * @api private\n */ function parse(str) {\n    str = String(str);\n    if (str.length > 100) {\n        return;\n    }\n    var match = /^((?:\\d+)?\\.?\\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);\n    if (!match) {\n        return;\n    }\n    var n = parseFloat(match[1]);\n    var type = (match[2] || \"ms\").toLowerCase();\n    switch(type){\n        case \"years\":\n        case \"year\":\n        case \"yrs\":\n        case \"yr\":\n        case \"y\":\n            return n * y;\n        case \"days\":\n        case \"day\":\n        case \"d\":\n            return n * d;\n        case \"hours\":\n        case \"hour\":\n        case \"hrs\":\n        case \"hr\":\n        case \"h\":\n            return n * h;\n        case \"minutes\":\n        case \"minute\":\n        case \"mins\":\n        case \"min\":\n        case \"m\":\n            return n * m;\n        case \"seconds\":\n        case \"second\":\n        case \"secs\":\n        case \"sec\":\n        case \"s\":\n            return n * s;\n        case \"milliseconds\":\n        case \"millisecond\":\n        case \"msecs\":\n        case \"msec\":\n        case \"ms\":\n            return n;\n        default:\n            return undefined;\n    }\n}\n/**\n * Short format for `ms`.\n *\n * @param {Number} ms\n * @return {String}\n * @api private\n */ function fmtShort(ms) {\n    if (ms >= d) {\n        return Math.round(ms / d) + \"d\";\n    }\n    if (ms >= h) {\n        return Math.round(ms / h) + \"h\";\n    }\n    if (ms >= m) {\n        return Math.round(ms / m) + \"m\";\n    }\n    if (ms >= s) {\n        return Math.round(ms / s) + \"s\";\n    }\n    return ms + \"ms\";\n}\n/**\n * Long format for `ms`.\n *\n * @param {Number} ms\n * @return {String}\n * @api private\n */ function fmtLong(ms) {\n    return plural(ms, d, \"day\") || plural(ms, h, \"hour\") || plural(ms, m, \"minute\") || plural(ms, s, \"second\") || ms + \" ms\";\n}\n/**\n * Pluralization helper.\n */ function plural(ms, n, name) {\n    if (ms < n) {\n        return;\n    }\n    if (ms < n * 1.5) {\n        return Math.floor(ms / n) + \" \" + name;\n    }\n    return Math.ceil(ms / n) + \" \" + name + \"s\";\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21zL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBOztDQUVDO0FBRUQsSUFBSUEsSUFBSTtBQUNSLElBQUlDLElBQUlELElBQUk7QUFDWixJQUFJRSxJQUFJRCxJQUFJO0FBQ1osSUFBSUUsSUFBSUQsSUFBSTtBQUNaLElBQUlFLElBQUlELElBQUk7QUFFWjs7Ozs7Ozs7Ozs7O0NBWUMsR0FFREUsT0FBT0MsT0FBTyxHQUFHLFNBQVNDLEdBQUcsRUFBRUMsT0FBTztJQUNwQ0EsVUFBVUEsV0FBVyxDQUFDO0lBQ3RCLElBQUlDLE9BQU8sT0FBT0Y7SUFDbEIsSUFBSUUsU0FBUyxZQUFZRixJQUFJRyxNQUFNLEdBQUcsR0FBRztRQUN2QyxPQUFPQyxNQUFNSjtJQUNmLE9BQU8sSUFBSUUsU0FBUyxZQUFZRyxNQUFNTCxTQUFTLE9BQU87UUFDcEQsT0FBT0MsUUFBUUssSUFBSSxHQUFHQyxRQUFRUCxPQUFPUSxTQUFTUjtJQUNoRDtJQUNBLE1BQU0sSUFBSVMsTUFDUiwwREFDRUMsS0FBS0MsU0FBUyxDQUFDWDtBQUVyQjtBQUVBOzs7Ozs7Q0FNQyxHQUVELFNBQVNJLE1BQU1RLEdBQUc7SUFDaEJBLE1BQU1DLE9BQU9EO0lBQ2IsSUFBSUEsSUFBSVQsTUFBTSxHQUFHLEtBQUs7UUFDcEI7SUFDRjtJQUNBLElBQUlXLFFBQVEsd0hBQXdIQyxJQUFJLENBQ3RJSDtJQUVGLElBQUksQ0FBQ0UsT0FBTztRQUNWO0lBQ0Y7SUFDQSxJQUFJRSxJQUFJQyxXQUFXSCxLQUFLLENBQUMsRUFBRTtJQUMzQixJQUFJWixPQUFPLENBQUNZLEtBQUssQ0FBQyxFQUFFLElBQUksSUFBRyxFQUFHSSxXQUFXO0lBQ3pDLE9BQVFoQjtRQUNOLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1lBQ0gsT0FBT2MsSUFBSW5CO1FBQ2IsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1lBQ0gsT0FBT21CLElBQUlwQjtRQUNiLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1lBQ0gsT0FBT29CLElBQUlyQjtRQUNiLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1lBQ0gsT0FBT3FCLElBQUl0QjtRQUNiLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1lBQ0gsT0FBT3NCLElBQUl2QjtRQUNiLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1lBQ0gsT0FBT3VCO1FBQ1Q7WUFDRSxPQUFPRztJQUNYO0FBQ0Y7QUFFQTs7Ozs7O0NBTUMsR0FFRCxTQUFTWCxTQUFTWSxFQUFFO0lBQ2xCLElBQUlBLE1BQU14QixHQUFHO1FBQ1gsT0FBT3lCLEtBQUtDLEtBQUssQ0FBQ0YsS0FBS3hCLEtBQUs7SUFDOUI7SUFDQSxJQUFJd0IsTUFBTXpCLEdBQUc7UUFDWCxPQUFPMEIsS0FBS0MsS0FBSyxDQUFDRixLQUFLekIsS0FBSztJQUM5QjtJQUNBLElBQUl5QixNQUFNMUIsR0FBRztRQUNYLE9BQU8yQixLQUFLQyxLQUFLLENBQUNGLEtBQUsxQixLQUFLO0lBQzlCO0lBQ0EsSUFBSTBCLE1BQU0zQixHQUFHO1FBQ1gsT0FBTzRCLEtBQUtDLEtBQUssQ0FBQ0YsS0FBSzNCLEtBQUs7SUFDOUI7SUFDQSxPQUFPMkIsS0FBSztBQUNkO0FBRUE7Ozs7OztDQU1DLEdBRUQsU0FBU2IsUUFBUWEsRUFBRTtJQUNqQixPQUFPRyxPQUFPSCxJQUFJeEIsR0FBRyxVQUNuQjJCLE9BQU9ILElBQUl6QixHQUFHLFdBQ2Q0QixPQUFPSCxJQUFJMUIsR0FBRyxhQUNkNkIsT0FBT0gsSUFBSTNCLEdBQUcsYUFDZDJCLEtBQUs7QUFDVDtBQUVBOztDQUVDLEdBRUQsU0FBU0csT0FBT0gsRUFBRSxFQUFFSixDQUFDLEVBQUVRLElBQUk7SUFDekIsSUFBSUosS0FBS0osR0FBRztRQUNWO0lBQ0Y7SUFDQSxJQUFJSSxLQUFLSixJQUFJLEtBQUs7UUFDaEIsT0FBT0ssS0FBS0ksS0FBSyxDQUFDTCxLQUFLSixLQUFLLE1BQU1RO0lBQ3BDO0lBQ0EsT0FBT0gsS0FBS0ssSUFBSSxDQUFDTixLQUFLSixLQUFLLE1BQU1RLE9BQU87QUFDMUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbXMvaW5kZXguanM/ZjhmNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEhlbHBlcnMuXG4gKi9cblxudmFyIHMgPSAxMDAwO1xudmFyIG0gPSBzICogNjA7XG52YXIgaCA9IG0gKiA2MDtcbnZhciBkID0gaCAqIDI0O1xudmFyIHkgPSBkICogMzY1LjI1O1xuXG4vKipcbiAqIFBhcnNlIG9yIGZvcm1hdCB0aGUgZ2l2ZW4gYHZhbGAuXG4gKlxuICogT3B0aW9uczpcbiAqXG4gKiAgLSBgbG9uZ2AgdmVyYm9zZSBmb3JtYXR0aW5nIFtmYWxzZV1cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xOdW1iZXJ9IHZhbFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHRocm93cyB7RXJyb3J9IHRocm93IGFuIGVycm9yIGlmIHZhbCBpcyBub3QgYSBub24tZW1wdHkgc3RyaW5nIG9yIGEgbnVtYmVyXG4gKiBAcmV0dXJuIHtTdHJpbmd8TnVtYmVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHZhbCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsO1xuICBpZiAodHlwZSA9PT0gJ3N0cmluZycgJiYgdmFsLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gcGFyc2UodmFsKTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnbnVtYmVyJyAmJiBpc05hTih2YWwpID09PSBmYWxzZSkge1xuICAgIHJldHVybiBvcHRpb25zLmxvbmcgPyBmbXRMb25nKHZhbCkgOiBmbXRTaG9ydCh2YWwpO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICAndmFsIGlzIG5vdCBhIG5vbi1lbXB0eSBzdHJpbmcgb3IgYSB2YWxpZCBudW1iZXIuIHZhbD0nICtcbiAgICAgIEpTT04uc3RyaW5naWZ5KHZhbClcbiAgKTtcbn07XG5cbi8qKlxuICogUGFyc2UgdGhlIGdpdmVuIGBzdHJgIGFuZCByZXR1cm4gbWlsbGlzZWNvbmRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBhcnNlKHN0cikge1xuICBzdHIgPSBTdHJpbmcoc3RyKTtcbiAgaWYgKHN0ci5sZW5ndGggPiAxMDApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG1hdGNoID0gL14oKD86XFxkKyk/XFwuP1xcZCspICoobWlsbGlzZWNvbmRzP3xtc2Vjcz98bXN8c2Vjb25kcz98c2Vjcz98c3xtaW51dGVzP3xtaW5zP3xtfGhvdXJzP3xocnM/fGh8ZGF5cz98ZHx5ZWFycz98eXJzP3x5KT8kL2kuZXhlYyhcbiAgICBzdHJcbiAgKTtcbiAgaWYgKCFtYXRjaCkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbiA9IHBhcnNlRmxvYXQobWF0Y2hbMV0pO1xuICB2YXIgdHlwZSA9IChtYXRjaFsyXSB8fCAnbXMnKS50b0xvd2VyQ2FzZSgpO1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICd5ZWFycyc6XG4gICAgY2FzZSAneWVhcic6XG4gICAgY2FzZSAneXJzJzpcbiAgICBjYXNlICd5cic6XG4gICAgY2FzZSAneSc6XG4gICAgICByZXR1cm4gbiAqIHk7XG4gICAgY2FzZSAnZGF5cyc6XG4gICAgY2FzZSAnZGF5JzpcbiAgICBjYXNlICdkJzpcbiAgICAgIHJldHVybiBuICogZDtcbiAgICBjYXNlICdob3Vycyc6XG4gICAgY2FzZSAnaG91cic6XG4gICAgY2FzZSAnaHJzJzpcbiAgICBjYXNlICdocic6XG4gICAgY2FzZSAnaCc6XG4gICAgICByZXR1cm4gbiAqIGg7XG4gICAgY2FzZSAnbWludXRlcyc6XG4gICAgY2FzZSAnbWludXRlJzpcbiAgICBjYXNlICdtaW5zJzpcbiAgICBjYXNlICdtaW4nOlxuICAgIGNhc2UgJ20nOlxuICAgICAgcmV0dXJuIG4gKiBtO1xuICAgIGNhc2UgJ3NlY29uZHMnOlxuICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgY2FzZSAnc2Vjcyc6XG4gICAgY2FzZSAnc2VjJzpcbiAgICBjYXNlICdzJzpcbiAgICAgIHJldHVybiBuICogcztcbiAgICBjYXNlICdtaWxsaXNlY29uZHMnOlxuICAgIGNhc2UgJ21pbGxpc2Vjb25kJzpcbiAgICBjYXNlICdtc2Vjcyc6XG4gICAgY2FzZSAnbXNlYyc6XG4gICAgY2FzZSAnbXMnOlxuICAgICAgcmV0dXJuIG47XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuLyoqXG4gKiBTaG9ydCBmb3JtYXQgZm9yIGBtc2AuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1zXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBmbXRTaG9ydChtcykge1xuICBpZiAobXMgPj0gZCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gZCkgKyAnZCc7XG4gIH1cbiAgaWYgKG1zID49IGgpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIGgpICsgJ2gnO1xuICB9XG4gIGlmIChtcyA+PSBtKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBtKSArICdtJztcbiAgfVxuICBpZiAobXMgPj0gcykge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gcykgKyAncyc7XG4gIH1cbiAgcmV0dXJuIG1zICsgJ21zJztcbn1cblxuLyoqXG4gKiBMb25nIGZvcm1hdCBmb3IgYG1zYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGZtdExvbmcobXMpIHtcbiAgcmV0dXJuIHBsdXJhbChtcywgZCwgJ2RheScpIHx8XG4gICAgcGx1cmFsKG1zLCBoLCAnaG91cicpIHx8XG4gICAgcGx1cmFsKG1zLCBtLCAnbWludXRlJykgfHxcbiAgICBwbHVyYWwobXMsIHMsICdzZWNvbmQnKSB8fFxuICAgIG1zICsgJyBtcyc7XG59XG5cbi8qKlxuICogUGx1cmFsaXphdGlvbiBoZWxwZXIuXG4gKi9cblxuZnVuY3Rpb24gcGx1cmFsKG1zLCBuLCBuYW1lKSB7XG4gIGlmIChtcyA8IG4pIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKG1zIDwgbiAqIDEuNSkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKG1zIC8gbikgKyAnICcgKyBuYW1lO1xuICB9XG4gIHJldHVybiBNYXRoLmNlaWwobXMgLyBuKSArICcgJyArIG5hbWUgKyAncyc7XG59XG4iXSwibmFtZXMiOlsicyIsIm0iLCJoIiwiZCIsInkiLCJtb2R1bGUiLCJleHBvcnRzIiwidmFsIiwib3B0aW9ucyIsInR5cGUiLCJsZW5ndGgiLCJwYXJzZSIsImlzTmFOIiwibG9uZyIsImZtdExvbmciLCJmbXRTaG9ydCIsIkVycm9yIiwiSlNPTiIsInN0cmluZ2lmeSIsInN0ciIsIlN0cmluZyIsIm1hdGNoIiwiZXhlYyIsIm4iLCJwYXJzZUZsb2F0IiwidG9Mb3dlckNhc2UiLCJ1bmRlZmluZWQiLCJtcyIsIk1hdGgiLCJyb3VuZCIsInBsdXJhbCIsIm5hbWUiLCJmbG9vciIsImNlaWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/../../../../node_modules/ms/index.js\n");

/***/ })

};
;