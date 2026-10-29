
import express from "express";
import dotenv from "dotenv";
import chatRouter from "./routes/chat.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (!process.env.GEMINI_API_KEY) {
    throw new Error("GEMINI_API_KEY is missing from .env");
}

app.get("/", (req, res) => {
    res.send("Environment Chatbot API is running.");
});

app.use("/chat", chatRouter);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
