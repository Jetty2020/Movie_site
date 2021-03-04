import express from "express";
import routes from "../routes";
import{
  favoriteNum,
  favorited,
  removeFavorite,
  addFavorite,
} from "../controllers/favoriteController"

const favoriteRouter = express.Router();

favoriteRouter.post(routes.favoriteNum, favoriteNum);
favoriteRouter.post(routes.favorited, favorited);
favoriteRouter.post(routes.removeFavorite, removeFavorite);
favoriteRouter.post(routes.addFavorite, addFavorite);

export default favoriteRouter;
