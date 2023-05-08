# Deno Websocket dropped message reproduction

There is a bug in the Deno's WebSocket implementation which causes messages to
be dropped.

This doesn't happen in particular circumstances, but when many messages are sent
in quick succession.

1. Run the server with `deno run -A server.ts`
2. Run the client with `deno run -A client.ts`
3. Notice that the client sent 1000 messages, and the server received some
   amount less than that.
