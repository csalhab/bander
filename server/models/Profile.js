const { Schema, model } = require("mongoose");

const profileSchema = new Schema({
  available: {
    type: Boolean,
  },
  zip: {
    type: String,
  },
  instrument: [
    {
      type: String,
    },
  ],
  category: [
    {
      type: String,
    },
  ],
  description: {
    type: String,
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
  // reviews: {
  //   type: String,
  // },
  // user: {
  //   type: Schema.Types.ObjectId,
  //   ref: "User",
  // },
});

const Profile = model("Profile", profileSchema);

module.exports = Profile;
