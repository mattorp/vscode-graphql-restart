import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	const uriHandler = vscode.window.registerUriHandler({
		async handleUri(): Promise<void> {
			const cmd = 'vscode-graphql.restart';
			try {
				await vscode.commands.executeCommand(cmd);
			} catch (error: any) {
				const message = `Error executing command "${cmd}": ${error.message}`;
				vscode.window.showErrorMessage(
					message,
				);
				
				vscode.window.createOutputChannel(
					'vscode-graphql-restart'
				).appendLine(
					message
				);
			}
		},
	});

	context.subscriptions.push(uriHandler);
}

export function deactivate() { }
