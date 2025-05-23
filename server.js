const express = require("express");
const { WebSocketServer } = require("ws");
const http = require("http");
const path = require("path");

const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server });

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

wss.on("connection", (ws) => {
  console.log("New client connected");

  ws.on("message", (message) => {
    console.log(`Received: ${message}`);

    // Broadcast the message to all clients
    wss.clients.forEach((client) => {
      if (client.readyState === ws.OPEN) {
        client.send(message);
      }
    });
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

// Start the server
// Run server using "node server.js" command
//Then, open multiple index.html or ttp://localhost:8080 in a browser and test sending messages!
server.listen(8003, () => {
  console.log("Server running on http://localhost:8003");
});
