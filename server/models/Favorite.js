import mongoose from "mongoose";

const favoriteSchema = mongoose.Schema(
  {
    userFrom: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    movieId: {
      type: String,
    },
    movieTitle: {
      type: String,
    },
    moviePost: {
      type: String,
    },
    movieRunTime: {
      type: String,
    },
  },
  { timestamps: true }
);

const model = mongoose.model("Favorite", favoriteSchema);

export default model;
