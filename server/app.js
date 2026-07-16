const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    app: "ReplyFlow AI",
    status: "Running"
  });
});

app.post("/generate", (req, res) => {
  const { message } = req.body;

  res.json({
    reply: `Thank you for contacting us. We received your message: "${message}". Our team will assist you shortly.`
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`ReplyFlow AI server is running on port ${PORT}`);
});