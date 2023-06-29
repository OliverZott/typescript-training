"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Command {
    execute() {
        console.log('Executing: ', this.commandLine());
    }
}
class GitResetCommand extends Command {
    commandLine() {
        return 'git fetch --all';
    }
}
new GitResetCommand().execute();
