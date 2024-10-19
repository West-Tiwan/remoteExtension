const terminal = new Terminal();
import { IP_ADD } from './CONST.js';

terminal.write('Welcome to the remote terminal!\r\n');

terminal.open(document.getElementById('terminal'));

const ws = new WebSocket(`ws://${IP_ADD}:8080`);

ws.onopen = function () {
    terminal.write('Connected to the server...\r\n');
};

ws.onopen = function () {
    console.log("WebSocket connection established");
};

ws.onerror = function (error) {
    console.error("WebSocket error: ", error);
};

ws.onclose = function () {
    console.log("WebSocket connection closed");
};


ws.onmessage = function (event) {
    terminal.write(event.data);
};

terminal.onData(data => {
    ws.send(data);
});
