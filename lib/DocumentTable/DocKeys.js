"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var DocumentKey_1 = __importDefault(require("./DocumentKey"));
var DocumentRowLoop_1 = __importDefault(require("./DocumentRowLoop"));
function DocKeys(_a) {
    var document = _a.document, action = _a.action;
    if (!document)
        return null;
    return ((0, jsx_runtime_1.jsxs)("tr", { className: "document-list-top", children: [Object.keys(document).map(function (key, index) {
                var k = Object.values(key)[0];
                if ([
                    "_id",
                    "created_at",
                    "updated_at",
                    "created_by",
                    "__v",
                    "",
                    "logged_in",
                    "external",
                ].includes(key)) {
                    return;
                }
                if (typeof key === "object" && key) {
                    return (0, jsx_runtime_1.jsx)(DocumentRowLoop_1.default, { values: key }, document._id + key);
                }
                return (0, jsx_runtime_1.jsx)(DocumentKey_1.default, { value: key }, document._id + key);
            }), action ? ((0, jsx_runtime_1.jsx)("td", { className: "actions", style: { margin: "1rem", color: "transparent" }, children: ">" })) : null] }, document._id));
}
exports.default = DocKeys;
