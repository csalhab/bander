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
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

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
//     const response = await searchUsers(searchInput);

//     if (!response.ok) {
//       throw new Error("something went wrong!");
//     }

//     const { items } = await response.json();

//     const userData = items.map((user) => ({
//       userName: user.username,
//       email: user.email,
//       description: user.description,
//       instrument: user.instrument,
//     }));

//     setSearchedUsers("userData");
//     setSearchInput("");
//   } catch (err) {
//     console.error(err);
//   }
// };

const Home = () => {
  const [state, dispatch] = useProfileContext();

  const { loading, data } = useQuery(GET_ME);
  console.log(data);

  if (Auth.loggedIn()) {
    return (
      <div className="overlay container text-center text-white bg-dark">
        <SearchBar></SearchBar>
        <SearchButton></SearchButton>
        <div>
          Input the instrument or role you are looking for in the search bar!
          Click the button when you're ready to go looking for bandmates!
        </div>
        {/* <Footer></Footer> */}

        <div class="row text-center">
          <div class="col-sm">
            <Card
              id="red-border"
              className="bg-dark text-white"
              style={{ width: "18rem" }}
            >
              <Card.Body>
                <Card.Title className="name">John Petrucci</Card.Title>
                <Card.Text className="userShortBio">300 BPM or bust.</Card.Text>
                <Card.Text className="userInstrument">Guitar </Card.Text>
                <Card.Text className="userContact">
                  noodles@dreamtheater.com
                </Card.Text>
                <Button className="bg-dark" id="favorite-btn" variant="primary">
                  Favorite
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div class="col-sm">
            <Card
              id="red-border"
              className="bg-dark text-white"
              style={{ width: "18rem" }}
            >
              <Card.Body>
                <Card.Title className="name">Adam Jones</Card.Title>
                <Card.Text className="userShortBio">
                  If you've played in 4/4 in the last 7 years, don't bother.
                </Card.Text>
                <Card.Text className="userInstrument">Guitar </Card.Text>
                <Card.Text className="userContact">
                  adamjones@tool.net
                </Card.Text>
                <Button className="bg-dark" id="favorite-btn" variant="primary">
                  Favorite
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div class="col-sm">
            <Card
              id="red-border"
              className="bg-dark text-white"
              style={{ width: "18rem" }}
            >
              <Card.Body>
                <Card.Title className="name">Mikael Akerfeldt</Card.Title>
                <Card.Text className="userShortBio">
                  Sorrow! I only write songs about sorrow!
                </Card.Text>
                <Card.Text className="userInstrument">Guitar </Card.Text>
                <Card.Text className="userContact">mikael@opeth.com</Card.Text>
                <Button className="bg-dark" id="favorite-btn" variant="primary">
                  Favorite
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container loggedout-container text-white bg-dark">
        <div>you are logged out, info to be added ..</div>
      </div>
    );
  }
};

export default Home;
