"use strict";
import * as path from "path";
import { spawn } from "child_process";
import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "extension.showOpenProjects",
    () => {
      // source
      var command = "./node_modules/.bin/electron";
      var cwd = path.join(__dirname, "../");

      command = command.replace(/\//g, path.sep);
      cwd = cwd.replace(/\//g, path.sep);

      var spawn_env = JSON.parse(JSON.stringify(process.env));

      // remove those env vars
      delete spawn_env.ATOM_SHELL_INTERNAL_RUN_AS_NODE;
      delete spawn_env.ELECTRON_RUN_AS_NODE;

      var sp = spawn(command, ["./src/ui/index.html"], {
        cwd: cwd,
        env: spawn_env
      });
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
