import React, { useEffect } from "react";
import { useProfileContext } from "../utils/GlobalState";
import SignupButton from "../components/SignupButton";
import LoginButton from "../components/LoginButton";
import SearchBar from "../components/SearchBar";
import SearchButton from "../components/SearchButton";
import LogoutButton from "../components/LogoutButton";
import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { GET_ME } from "../utils/queries";
import Footer from "../components/Footer";
import UserCard from "../components/UserCard";

// const searchUser = () => {
//   const [searchedUsers, setSearchedusers] = useState([]);
//   const [searchInput, setSearchInput] = useState("");
//   const [savedUserIds, setSavedUserIds] = useState(getSavedUserIds());

//   // Save Users to Favorites
//   useEffect(() => {
//     return () => savedUserIds(savedUserIds);
//   });

//   const [saveUser, { error }] = useMutation(SAVE_USER, {
//     update(cache, data, saveUser) {
//       try {
//         const { me } = cache.readQuery({ query: GET_ME });

//         cache.writeQuery({
//           query: GET_ME,
//           data: { me: saveUser },
//         });
//       } catch (e) {
//         console.error(e);
//       }
//     },
//   });
// };

// const handleFormSubmit = async (event) => {
//   event.preventDefault();

//   if (!searchInput) {
//     return false;
//   }

//   try {
//     const response = await
//   }
// }

const Home = () => {
  const [state, dispatch] = useProfileContext();

  const { loading, data } = useQuery(GET_ME);
  console.log(data);

  if (Auth.loggedIn()) {
    return (
      <div className="container">
        <SearchBar></SearchBar>
        <SearchButton></SearchButton>
        <div>
          Input the instrument or role you are looking for in the search bar!
          Click the button when you're ready to go looking for bandmates!
        </div>
        {/* <Footer></Footer> */}

        <div class="row">
          <div class="col-sm">
            <UserCard />
          </div>
          <div class="col-sm">
            <UserCard />
          </div>
          <div class="col-sm">
            <UserCard />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div>you are logged out, info to be added ..</div>
      </div>
    );
  }
};

export default Home;
