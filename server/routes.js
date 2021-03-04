// Admin

const ADMIN = "/admin";

// USER

const USERS = "/api/users";
const REGISTER = "/register";
const AUTH = "/auth";
const LOGIN = "/login";
const LOGOUT = "/logout";

// FAVORITES with favorites
const FAVORITES = "/api/favorite";
const FAVORITENUM = "/favoriteNumber";
const FAVORITED = "/favorited";
const REMOVEFAVORITE = "/removeFromFavorite";
const ADDFAVORITE = "/addToFavorite";



// API


const routes = {
  
  //ADMIN
  
  admin: ADMIN,

  // USER

  register: REGISTER,
  auth: AUTH,
  login: LOGIN,
  logout: LOGOUT,
  users: USERS,

  // FAVORITES with favorites

  favorites: FAVORITES,
  favoriteNum: FAVORITENUM,
  favorited: FAVORITED,
  removeFavorite: REMOVEFAVORITE,
  addFavorite: ADDFAVORITE,
};

export default routes;