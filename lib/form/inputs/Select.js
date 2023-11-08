"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_hook_form_1 = require("react-hook-form");
function Select(_a) {
    var name = _a.name, options = _a.options, placeholder = _a.placeholder, props = __rest(_a, ["name", "options", "placeholder"]);
    var register = (0, react_hook_form_1.useFormContext)().register;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("label", { children: placeholder }), (0, jsx_runtime_1.jsxs)("select", __assign({}, props, (name && register(name)), { children: [(0, jsx_runtime_1.jsx)("option", { value: "", disabled: true, children: 'Selectionner' }), options &&
                        options.map(function (option) { return ((0, jsx_runtime_1.jsx)("option", { value: option.value.toString(), children: option.title }, option.value.toString())); })] }))] }));
}
exports.default = Select;
