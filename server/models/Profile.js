const { Schema, model } = require("mongoose");

const profileSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  facts: {
    type: String,
  },
  bio: {
    type: String,
  },
  reviews: {
    type: String,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Profile = model("Profile", profileSchema);

module.exports = Profile;
