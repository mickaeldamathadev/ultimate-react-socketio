"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
function Checkbox(props) {
    var methods = (0, react_hook_form_1.useFormContext)();
    var _a = (0, react_1.useState)(false), value = _a[0], setValue = _a[1];
    return ((0, jsx_runtime_1.jsx)(react_hook_form_1.Controller, { name: props.name, control: methods.control, render: function (_a) {
            var onChange = _a.field.onChange;
            return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("input", { type: "hidden", value: value ? 'true' : 'false' }), (0, jsx_runtime_1.jsxs)("div", { className: "flex-start-row", children: [(0, jsx_runtime_1.jsx)("input", { type: "checkbox", checked: value, onChange: function (event) {
                                    onChange(event);
                                    setValue(function (value) { return !value; });
                                } }), (0, jsx_runtime_1.jsx)("label", { children: props.placeholder })] })] }));
        } }));
}
exports.default = Checkbox;
