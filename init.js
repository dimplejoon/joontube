import "./db";
import app from "./app"; //app js에서 app객체 가져오기
import dotenv from "dotenv";
dotenv.config();
import "./models/Video";
import "./models/Comment";

const PORT = process.env.PORT || 4000;

const handleListening = () =>
    console.log(`🏁Listen on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);

