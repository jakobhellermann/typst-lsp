import { window, type ExtensionContext } from "vscode";

import {
  LanguageClient,
  type LanguageClientOptions,
  type ServerOptions,
} from "vscode-languageclient/node";
import TypstPreviewTab from "./TypstPreviewTab";

let client: LanguageClient | undefined = undefined;

async function activateLsp(): Promise<void> {
  const serverCommand = "typst-lsp";

  const serverOptions: ServerOptions = {
    run: { command: serverCommand },
    debug: { command: serverCommand },
  };

  const clientOptions: LanguageClientOptions = {
    documentSelector: [{ scheme: "file", language: "typst" }],
  };

  client = new LanguageClient(
    "typst-lsp",
    "Typst Language Server",
    serverOptions,
    clientOptions,
  );

  return client.start();
}

async function deactivateLsp(): Promise<void> {
  if (client === undefined) {
    return undefined;
  }
  return client.stop();
}

function activatePreviewTab(context: ExtensionContext): void {
  const provider = new TypstPreviewTab();
  const registration = window.registerCustomEditorProvider(TypstPreviewTab.VIEW_TYPE, provider);

  // Tell VS Code to handle cleanup
  context.subscriptions.push(registration);
}

export async function activate(context: ExtensionContext): Promise<void> {
  activatePreviewTab(context);
  await activateLsp();
}

export async function deactivate(): Promise<void> {
  await deactivateLsp();
}
