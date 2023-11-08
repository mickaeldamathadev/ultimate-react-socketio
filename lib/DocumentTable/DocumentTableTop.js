"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var useRenderDocumentElements_1 = __importDefault(require("./useRenderDocumentElements"));
function DocumentTableTop(_a) {
    var documents = _a.documents, action = _a.action;
    var renderKeys = (0, useRenderDocumentElements_1.default)().renderKeys;
    if (!documents || documents === undefined) {
        return null;
    }
    return (0, jsx_runtime_1.jsx)("thead", { children: renderKeys(documents[0], action) });
}
exports.default = DocumentTableTop;
