import {
  type CancellationToken,
  type CustomDocumentOpenContext,
  type CustomReadonlyEditorProvider,
  type Uri,
  type WebviewPanel,
} from "vscode";

import PdfViewer from "./PdfViewer";
import TypstPreviewDoc from "./TypstPreviewDoc";

export default class TypstPreviewTab implements CustomReadonlyEditorProvider<TypstPreviewDoc> {
  // Should match the `viewType` in `package.json`
  public static readonly VIEW_TYPE: string = "typst-lsp-typst-preview";

  public openCustomDocument(
    uri: Uri,
    _openContext: CustomDocumentOpenContext,
    _token: CancellationToken,
  ): TypstPreviewDoc {
    return new TypstPreviewDoc(uri);
  }

  public resolveCustomEditor(
    _document: TypstPreviewDoc,
    webviewPanel: WebviewPanel,
    _token: CancellationToken,
  ): void {
    PdfViewer.initializeInWebview(webviewPanel);
  }
}
