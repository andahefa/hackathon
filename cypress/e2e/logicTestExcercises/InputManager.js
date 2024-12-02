class InputManager {
    constructor() {
        this.rl = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    askUser(promptMessage) {
        return new Promise((resolve) => {
            this.rl.question(promptMessage, (response) => {
                resolve(response);
            });
        });
    }

    close() {
        this.rl.close();
    }
}

module.exports = InputManager;
