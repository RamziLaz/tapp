const express = require("express"); // Importing the Express library to create a server
const axios = require("axios"); // Importing the Axios library to make HTTP requests
const path = require("path"); // Importing the path module to handle and transform file paths
const app = express(); // Creating an Express application
const PORT = process.env.PORT || 3000; // Setting the port for the server to listen on, using environment variable or defaulting to 3000

app.use(express.json()); // Middleware to parse JSON bodies in incoming requests

// Root endpoint for testing
app.get("/", (req, res) => {
  res.send("Welcome to the Telegram Game!"); // Sending a simple response for the root URL
});

// Webhook endpoint for Telegram bot
app.post("/webhook", (req, res) => {
  const { message } = req.body; // Extracting the message object from the request body

  if (message.text === "/play") {
    // Checking if the received message text is '/play'
    const chatId = message.chat.id; // Getting the chat ID to respond to the user
    const username = message.from.username; // Getting the Telegram username of the user
    const gameUrl = `http://your-server-url.com/game?username=${username}`; // Constructing the game URL with the user's Telegram username

    // Sending a message back to the user with the game URL
    axios
      .post(`https://api.telegram.org/bot<Your_Bot_Token>/sendMessage`, {
        chat_id: chatId, // The chat ID to which the message should be sent
        text: `Click [here](${gameUrl}) to play the game!`, // The message text containing the game URL
        parse_mode: "Markdown", // Ensuring the URL is formatted correctly
      })
      .then((response) => {
        res.send("Message posted"); // Sending a response back to Telegram confirming the message was posted
      })
      .catch((error) => {
        console.error("Error sending message:", error); // Logging any errors that occur
        res.send(error); // Sending the error back in the response
      });
  } else {
    res.send("Unknown command"); // Handling unknown commands
  }
});

// Serve the game HTML file
app.get("/game", (req, res) => {
  res.sendFile(path.join(__dirname, "game.html")); // Sending the game.html file when /game endpoint is accessed
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); // Logging that the server has started
});
