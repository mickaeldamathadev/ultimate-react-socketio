"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_hook_form_1 = require("react-hook-form");
function ConditonnalRenderer(_a) {
    var dependOn = _a.dependOn, children = _a.children, condition = _a.condition;
    var watch = (0, react_hook_form_1.useFormContext)().watch;
    //useEffect(() => {}, [watch(dependOn)]);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (!condition && watch(dependOn)) ||
            (condition && watch(dependOn) && condition(watch(dependOn)) === true)
            ? children
            : null }));
}
exports.default = ConditonnalRenderer;
