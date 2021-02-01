import routes from "./routes";

export const localsMiddleware = (req, res, next) => {

    res.locals.siteName = "JoonTube";
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated: true,
        id: 10
    }
    next(); // main에서 미들웨어가 커넥션과 라우트들 사이에 위치해 있으니까!
}; // localsmiddelwares를 선언해서(만들어서) 전역 범위에 변수를 추가할 수 있게 했다. 템플릿 여기저기에 넣어줄 수 있고 따로 수정해주지 않고 이 코드만 수정하면 다른 템플릿들에도 다 적용될 것