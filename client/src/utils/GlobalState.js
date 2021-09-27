import React, { createContext, useContext } from "react";
import { useProfileReducer } from "./reducers";

const ProfileContext = createContext();
const { Provider } = ProfileContext;

const ProfileProvider = ({...props }) => {
  const [state, dispatch] = useProfileReducer({
    me: {
      _id: "",
      username: "",
      email: "",
      available: false,
      instrument: [],
      category: [],
      description: "",
      image: "",
      facts: "",
      bio: "",
    },
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useProfileContext = () => {
  return useContext(ProfileContext);
};

export { ProfileProvider, useProfileContext };
