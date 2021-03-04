import Favorite from "../models/Favorite";

// favoriteNum
export const favoriteNum = async (req, res) => {
  try {
    //mongoDB에서   favorite 숫자를 가져오기
    const num = await Favorite.find({ movieId: req.body.movieId });
    // 그다음에   프론트에  다시   숫자 정보를 보내주기
    res.status(200).json({ success: true, favoriteNumber: num.length });
  } catch (error) {
    console.log("favoriteNum");
    console.log(error);
    return res.status(400).send(error);
  }
};

// favorited
export const favorited = async (req, res) => {
  try {
    const num = await Favorite.find({
      movieId: req.body.movieId,
      userFrom: req.body.userFrom,
    });
    let result = false;
    if (num.length !== 0) {
      result = true;
    }

    res.status(200).json({ success: true, favorited: result });
  } catch (error) {
    console.log("favorited");
    console.log(error);
    return res.status(400).send(error);
  }
};

// removeFavorite
export const removeFavorite = async (req, res) => {
  try {
    const remove = await Favorite.findOneAndDelete({
      movieId: req.body.movieId,
      userFrom: req.body.userFrom,
    });
    res.status(200).json({ success: true, remove });
  } catch (error) {
    console.log("removeFavorite");
    console.log(error);
    return res.status(400).send(error);
  }
};

// addFavorite
export const addFavorite = async (req, res) => {
  try {
    const favorite = new Favorite(req.body);

    favorite.save((err, doc) => {
      return res.status(200).json({ success: true });
    });
  } catch (error) {
    console.log("addFavorite");
    console.log(error);
    return res.status(400).send(error);
  }
};
