import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import routes from "./routes";
import userRouter from "./routers/userRouter";
import favoriteRouter from "./routers/favoriteRouter";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(routes.users, userRouter);
app.use(routes.favorites, favoriteRouter);

export default app;