type WebSocketData = {
  createdAt: number;
  username: string;
}

const PORT_NUMBER = 8000;

const server = Bun.serve<WebSocketData>({
  port: PORT_NUMBER,
  fetch(req, server) {
    const url = new URL(req.url);
    const success = server.upgrade(req, { data: {
      createdAt: Date.now(),
      username: url.pathname.replace(/^\//, '').replace(/\/.*/, ''),
    }});
    return new Response("WebSocket upgrade failed :(", { status: 500 });
  },
  websocket: {
    open(ws) {
      const msg = `${ws.data.username} has entered the chat.`;
      ws.subscribe("the-gorup-chat");
      ws.publish("the-group-chat", msg);
    },
    message(ws, message) {
      ws.publish("the-group-chat", `${ws.data.username}: ${message}`);
    },
    close(ws, code, message) {
      const msg = `${ws.data.username} has left the cat`;
      ws.unsubscribe("the-group-chat");
      ws.publish("the-group-chat", msg);
    },
  },
});

console.log(`Listening on ${server.hostname}:${server.port}`);

