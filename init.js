import app from "./app"; //app js에서 app객체 가져오기

const PORT = 4000;

const handleListening = () =>
    console.log(`🏁Listen on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);

