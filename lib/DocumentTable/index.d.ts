import { DocumentListProps } from './documentTypes';
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
export default function DocumentTable<T>({ documents, action, }: DocumentListProps<T>): import("react/jsx-runtime").JSX.Element;
