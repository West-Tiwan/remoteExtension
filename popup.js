const terminal = new Terminal();
import { IP_ADD } from './CONST.js';

terminal.open(document.getElementById('terminal'));

const ws = new WebSocket(`ws://${IP_ADD}:8080`);

ws.onmessage = function (event) {
    terminal.write(event.data);
};

terminal.onData(data => {
    ws.send(data);
});
