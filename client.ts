import { deferred } from "https://deno.land/std@0.177.0/async/deferred.ts";

const socket = new WebSocket("ws://localhost:8000");

const socketReady = deferred();

socket.onopen = () => {
  socketReady.resolve();
};

socket.onerror = (err) => {
  console.log(err);
};

await socketReady;

const TO_SEND = 1000;

for (let i = 0; i < TO_SEND; i++) {
  socket.send(`${i}`);
}

console.log("Sent", TO_SEND, "messages");

socket.close();
