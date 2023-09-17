import { v4 as uuidv4 } from 'uuid';

type Data = {
  username: string,
  createdAt: number,
}

const server = Bun.serve<Data>({
  fetch(req, server) {
    const cookies = req.headers.get("cookie");
    const success = server.upgrade(req, { 
      data: {
        username: uuidv4(),
        createdAt: Date.now(),
      }
    });
    if (success) return undefined;

    return new Response("Hello world");
  },
  websocket: {
    open(ws) {
      const msg = `${ws.data.username} has entered the chat`;
      console.log(msg);
      ws.subscribe("the-group-chat");
      ws.publish("the-group-chat", msg);
      // ws.send(msg);
    },
    message(ws, message) {
      console.log(message);
      ws.publish("the-group-chat", `${ws.data.username}: ${message}`);
      // ws.send(message);
    },
    close(ws) {
      const msg = `${ws.data.username} has left the chat`;
      console.log(msg);
      ws.publish("the-group-chat", msg);
      ws.unsubscribe("the-group-chat");
      // ws.send(msg);
    },
  },
});

console.log(`Listening on ${server.hostname}:${server.port}`);

