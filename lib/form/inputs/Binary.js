"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_hook_form_1 = require("react-hook-form");
function Binary(props) {
    var methods = (0, react_hook_form_1.useFormContext)();
    return ((0, jsx_runtime_1.jsx)(react_hook_form_1.Controller, { name: props.name, control: methods.control, render: function (_a) {
            var _b = _a.field, onChange = _b.onChange, onBlur = _b.onBlur, value = _b.value, ref = _b.ref;
            return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("input", { type: "hidden", value: value || "" }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { children: props.placeholder }), (0, jsx_runtime_1.jsx)("div", { className: "flex-start-start", children: props.options.map(function (choice) { return ((0, jsx_runtime_1.jsxs)("div", { className: "flex-start-center-row choice", children: [(0, jsx_runtime_1.jsx)("input", { type: "checkbox", checked: choice.value === value, value: choice.value, onChange: function (event) {
                                                onChange(choice.value);
                                            } }), (0, jsx_runtime_1.jsx)("p", { children: choice.title })] })); }) })] })] }));
        } }));
}
exports.default = Binary;
