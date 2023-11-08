import React from "react";
import { DocumentType } from "./documentTypes";
export default function useRenderDocumentElements<T>(): {
    renderKeys: (document: DocumentType<T>, action?: (data: any) => void) => React.ReactNode;
    renderDocumentValue: (document: DocumentType<T>, action?: (data: any) => void) => React.ReactNode;
};
