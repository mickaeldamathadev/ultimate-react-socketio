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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormFrame = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_2 = require("react");
var react_hook_form_1 = require("react-hook-form");
var Input_1 = __importDefault(require("./inputs/Input"));
var Select_1 = __importDefault(require("./inputs/Select"));
var Submit_1 = __importDefault(require("./inputs/Submit"));
function Form(props) {
    var formHandler = (0, react_hook_form_1.useForm)();
    return ((0, jsx_runtime_1.jsx)(react_hook_form_1.FormProvider, __assign({}, formHandler, { children: (0, jsx_runtime_1.jsxs)(FormFrame, { onSubmission: props.onSubmission, onChange: props.onChange, children: [(props.formData &&
                    props.formData.map(function (_a, index) {
                        var select = _a.select, options = _a.options, input = __rest(_a, ["select", "options"]);
                        return (select && ((0, react_1.createElement)(Select_1.default, __assign({}, input, { key: input.name, options: options })))) || (0, react_1.createElement)(Input_1.default, __assign({}, input, { key: input.name }));
                    })) ||
                    null, props.children, (props.submitTitle && (0, jsx_runtime_1.jsx)(Submit_1.default, { title: props.submitTitle })) ||
                    null, props.bottom] }) })));
}
exports.default = Form;
function FormFrame(props) {
    var _a = (0, react_hook_form_1.useFormContext)(), handleSubmit = _a.handleSubmit, control = _a.control, watch = _a.watch;
    (0, react_2.useEffect)(function () {
        var subscription = watch(function (value, _a) {
            var name = _a.name, type = _a.type;
            if (props.onChange)
                props.onChange(__assign({}, value));
        });
        return function () { return subscription.unsubscribe(); };
    }, [watch]);
    return ((0, jsx_runtime_1.jsx)("form", { className: "flex items-stretch justify-evenly flex-col", onSubmit: handleSubmit(props.onSubmission), children: props.children }));
}
exports.FormFrame = FormFrame;
