"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var useRenderDocumentElements_1 = __importDefault(require("./useRenderDocumentElements"));
function DocumentList(_a) {
    var documents = _a.documents, action = _a.action;
    var renderDocumentValue = (0, useRenderDocumentElements_1.default)().renderDocumentValue;
    if (!documents || documents === undefined || !action) {
        return null;
    }
    return ((0, jsx_runtime_1.jsx)("tbody", { className: "document-list-body", children: documents.map(function (document, index) {
            return renderDocumentValue(document, action);
        }) }));
}
exports.default = DocumentList;
