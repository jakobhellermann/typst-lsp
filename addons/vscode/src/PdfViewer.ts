import { WebviewPanel } from "vscode";

export default class PdfViewer {
  private webviewPanel: WebviewPanel;

  public static initializeInWebview(webviewPanel: WebviewPanel): PdfViewer {
    const pdfViewer = new PdfViewer(webviewPanel);

    pdfViewer.webviewPanel.webview.html = "hello, world!";

    return pdfViewer;
  }

  private constructor(webviewPanel: WebviewPanel) {
    this.webviewPanel = webviewPanel;
  }
}
