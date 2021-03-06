const { User, Profile } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (_, args, context) => {
      console.log(await User.findById(context.user._id));
      return await User.findById(context.user._id);
    },
    getProfile: async () => {
      console.log("inside resolvers, getProfile!");
      return Profile.find();
    },
  },

  Mutation: {
    login: async (parent, { username, email, password }) => {
      console.log("in resolver.js login!");
      const user = await User.findOne({ email });
      console.log("in resolver.js login user: ", user);

      if (!user) {
        throw new AuthenticationError("No user with this email found!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(user);
      return { token, user };
    },
    addUser: async (parent, { username, email, password }) => {
      console.log("inside resolver addUser!");
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },
    updateUserProfile: async (
      parent,
      args,
      // { zip, instrument, category, description, image, facts, bio, reviews },
      context
    ) => {
      console.log("inside resolver addProfile!");
      console.log("args: ", args);
      const user = await User.findById(context.user._id);
      if (user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          // {
          //   zip,
          //   instrument,
          //   category,
          //   description,
          //   image,
          //   facts,
          //   bio,
          // },
          { $addToSet: { user: args } },
          { new: true }
        );
        return updatedUser;
      } else {
        throw new AuthenticationError("You must be logged in.");
      }
    },
  },
};

module.exports = resolvers;
