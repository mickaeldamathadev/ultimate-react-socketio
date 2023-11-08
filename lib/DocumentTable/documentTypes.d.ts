export type DocumentKeys<T> = {
    [K in keyof T]: string | DocumentKeys<T[K]>;
};
export type DocumentType<T> = {
    _id: string;
} & T;
export type DocumentListProps<T> = {
    documents: DocumentType<T>[];
    action?: (data: any) => void;
};
export interface IDocList<T> {
    documents: DocumentType<T>[];
    action?: (data: any) => void;
}
export interface IDocKeys<T> {
    document: DocumentType<T>;
    action?: (data: any) => void;
}
export interface IDocumentRow {
    value: string;
    action?: (data: any) => void;
}
export interface IDocumentRowLoop {
    values: any;
    action?: (data: any) => void;
}
export interface ITableTop<T> {
    documents: any[];
    action?: (data: any) => void;
}
