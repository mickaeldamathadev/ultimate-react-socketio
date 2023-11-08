"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var DocKeys_1 = __importDefault(require("./DocKeys"));
var DocumentRow_1 = __importDefault(require("./DocumentRow"));
function useRenderDocumentElements() {
    var renderKeys = function (document, action) {
        return (0, jsx_runtime_1.jsx)(DocKeys_1.default, { action: action, document: document });
    };
    var renderDocumentValue = function (document, action) {
        return ((0, jsx_runtime_1.jsxs)("tr", { className: "document-list-row", children: [Object.keys(document).map(function (key, index) {
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
                    var value = document[key];
                    if (typeof value === "object" && value) {
                        return Object.keys(value).map(function (subDoc, subindex) {
                            return ((0, jsx_runtime_1.jsx)(DocumentRow_1.default, { value: value[key] }, document._id + key));
                        });
                    }
                    else if (value) {
                        return (0, jsx_runtime_1.jsx)(DocumentRow_1.default, { value: value }, document._id + key);
                    }
                }), action ? ((0, jsx_runtime_1.jsx)("td", { className: "actions", onClick: function () { return action(document._id); }, children: (0, jsx_runtime_1.jsx)("p", { style: { margin: "1rem" }, children: ">" }) })) : null] }, document._id));
    };
    return { renderKeys: renderKeys, renderDocumentValue: renderDocumentValue };
}
exports.default = useRenderDocumentElements;
