const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 }, () => {
  console.log('WebSocket сервер запущен на ws://localhost:8080');
});

wss.on('connection', (ws) => {
  console.log('Клиент подключился');

  ws.on('message', (message) => {
    console.log('Получено сообщение:', message.toString());
    ws.send(`Сервер получил: ${message}`);
  });

  ws.on('close', () => {
    console.log('Клиент отключился');
  });
});
