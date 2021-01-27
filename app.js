import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRoueter";
import videoRouter from "/routers/videoRouter";

// 디폴트해주지 않았던 것을 import할 때는 함수를 {} 안에 넣고 from 뒤에는 주소를 적어준다.

const app = express(); //1. index.js가 실행되고 그 다음에 app(application)이 route가 존재하는지 확인한다

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));
// express는 양파처럼 여러 layer가 있는데, middleware가 그 layer인 것이다.


//2. "/"이 route를 가리키는 것! home(/)을 가리키고 있으니까 home을 찾은 다음에 handlehome을 실행시킨다. 마지막응답인 handleHome 사이에 있는 함수들이 모두 middleware가 될 수 있다.

app.use("/user", userRouter);
app.use("/video", videoRouter);


export default app; // 의미는 누군가 내파일을 불러올 때(import) 내 app object를 주겠다는 의미 app object란 내가 위에서 설정해놓은 app 객체들 덩어리!