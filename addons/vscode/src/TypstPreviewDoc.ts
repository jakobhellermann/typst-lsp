import { CustomDocument, Uri } from "vscode";

/**
 * For now, this is just a PDF on the filesystem. However, this may change. For
 * example, we could instead, or additionally:
 *  - render to an image
 *  - render to a PDF and send bytes over the LSP, so it does not appear on the
 *      filesystem
 *  - render to HTML
 *  - want to handle all of several compilation targets
 */
export default class TypstPreviewDoc implements CustomDocument {
  public uri: Uri;

  public constructor(uri: Uri) {
    this.uri = uri;
  }

  public dispose(): void {}
}
