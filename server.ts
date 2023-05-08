import { serve } from "https://deno.land/std@0.171.0/http/mod.ts";

serve((req) => {
  const { socket, response } = Deno.upgradeWebSocket(req);

  let messagesReceived = 0;

  socket.onerror = (err) => {
    console.log(err);
  };

  socket.onmessage = () => {
    messagesReceived += 1;
  };

  socket.onclose = () => {
    console.log("Received", messagesReceived, "messages");
  };

  return response;
});
