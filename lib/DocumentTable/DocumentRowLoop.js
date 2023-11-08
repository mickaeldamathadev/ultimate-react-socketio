"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var DocumentRow_1 = __importDefault(require("./DocumentRow"));
function DocumentRowLoop(_a) {
    var values = _a.values, action = _a.action;
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: Object.keys(values).map(function (subDoc, subindex) {
            return ((0, jsx_runtime_1.jsx)(DocumentRow_1.default, { value: subDoc, action: action }, "subDocLoop" + subindex));
        }) }));
}
exports.default = DocumentRowLoop;
