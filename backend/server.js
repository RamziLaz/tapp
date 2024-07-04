const express = require("express");
const axios = require("axios");
const path = require("path");
const crypto = require("crypto");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Telegram Game!");
});

// Middleware to check if the user is authenticated
const authenticateUser = (req, res, next) => {
  const telegramUser = req.headers["x-telegram-user"];
  if (!telegramUser) {
    return res.status(401).send("Unauthorized");
  }
  req.telegramUser = telegramUser; // Add the user to the request object
  next();
};

// Webhook endpoint for Telegram bot
app.post("/webhook", (req, res) => {
  const { message } = req.body;

  if (message.text === "/play") {
    const chatId = message.chat.id;
    const username = message.from.username;
    const gameUrl = `http://your-server-url.com/game?username=${username}`;

    axios
      .post(`https://api.telegram.org/bot<Your_Bot_Token>/sendMessage`, {
        chat_id: chatId,
        text: `Click [here](${gameUrl}) to play the game!`,
        parse_mode: "Markdown",
      })
      .then((response) => {
        res.send("Message posted");
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        res.send(error);
      });
  } else {
    res.send("Unknown command");
  }
});

// Serve the game HTML file with authentication middleware
app.get("/game", authenticateUser, (req, res) => {
  res.sendFile(path.join(__dirname, "game.html"));
});

// Endpoint to validate Telegram Web App data
app.post("/login", (req, res) => {
  const { hash, ...data } = req.body;
  const secret = crypto
    .createHash("sha256")
    .update("<Your_Bot_Token>")
    .digest(); // Replace with your bot token

  const checkString = Object.keys(data)
    .sort()
    .map((key) => `${key}=${data[key]}`)
    .join("\n");

  const hmac = crypto
    .createHmac("sha256", secret)
    .update(checkString)
    .digest("hex");

  if (hmac !== hash) {
    return res.status(401).send("Unauthorized");
  }

  res.json({ success: true, user: data });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
