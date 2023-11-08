"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var DocumentList_1 = __importDefault(require("./DocumentList"));
var DocumentTableTop_1 = __importDefault(require("./DocumentTableTop"));
/**
 *
 * CSS classes
 *
 * table => document-list-table
 * header => document-list-top
 *  keys => document-list-key
 *  actions => actions
 * body => document-list-body
 *  rows => document-list-row
 *  actions => actions
 */
function DocumentTable(_a) {
    var documents = _a.documents, action = _a.action;
    return documents.length === 0 ? null : ((0, jsx_runtime_1.jsxs)("table", { className: "document-list-table", children: [(0, jsx_runtime_1.jsx)(DocumentTableTop_1.default, { action: action, documents: documents }), (0, jsx_runtime_1.jsx)(DocumentList_1.default, { action: action, documents: documents })] }));
}
exports.default = DocumentTable;
