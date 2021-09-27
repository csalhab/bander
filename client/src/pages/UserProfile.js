import React, { useState, useEffect } from "react";
import { useProfileContext } from "../utils/GlobalState";
import { UPDATE_PROFILE } from "../utils/actions";
import { useMutation, useQuery } from "@apollo/client";

import { ADD_PROFILE } from "../utils/mutations";
import { QUERY_PROFILE, GET_ME } from "../utils/queries";

const UserProfile = () => {
  const [formState, setFormState] = useState({
    available: false,
    zip: "",
    instrument: "",
    category: "",
    description: "",
    image: "",
    facts: "",
    bio: "",
  });

  const [state, dispatch] = useProfileContext();

  const { loading, data } = useQuery(GET_ME);
  console.log(data);
  useEffect(() => {
    if (data) {
      dispatch({ type: UPDATE_PROFILE, payload: data.me });
      setFormState(data.me);
    }
  }, [data]);

  const [addProfile, { error }] = useMutation(ADD_PROFILE, {
    update(cache, { data: { addProfile } }) {
      try {
        const profile = cache.readQuery({ query: QUERY_PROFILE });
        cache.writeQuery({
          query: QUERY_PROFILE,
          data: { profile: [addProfile, profile] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await addProfile({
        variables: { ...formState },
      });
      console.log("insdie try submit data:", data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({ ...formState, [name]: value });
  };

  return (
    <div className="container">
      <p>This is the user profile page.</p>
      <div class="row">
        <div class="col">
          <img src="" alt="Profile" />
        </div>
        <div class="col">
          <div>
            <h2>My username: {state.me.username}</h2>
            <p>Description: {state.me.description}</p>
          </div>
        </div>
        <div class="col">
          <p>Email: {state.me.email}</p>
          <p>Facts: {state.me.facts}</p>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <p>My Bio: {state.me.bio}</p>
        </div>
      </div>
      <div>
        <h3>Add/Edit information to your profile:</h3>
        <form
          className="flex-row justify-center justify-space-between-md align-center"
          onSubmit={handleFormSubmit}
        >
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="available"
              onChange={handleChange}
            />
            <label className="form-check-label" for="available">
              Available
            </label>
          </div>
          <div className="col-12 col-lg-9">
            <input
              name="zip"
              placeholder="Add a zip.."
              value={formState.zip}
              className="form-input w-100"
              onChange={handleChange}
            />
          </div>
          <div className="col-12">
            <textarea
              name="instrument"
              placeholder="Add an instrument .."
              value={formState.instrument}
              className="form-input w-100"
              style={{ lineHeight: "1.5" }}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="col-12 col-lg-9">
            <input
              name="category"
              placeholder="Add a category.."
              value={formState.category}
              className="form-input w-100"
              onChange={handleChange}
            />
          </div>
          <div className="col-12 col-lg-9">
            <input
              name="description"
              placeholder="Add a description.."
              value={formState.description}
              className="form-input w-100"
              onChange={handleChange}
            />
          </div>
          <div className="col-12 col-lg-9">
            <input
              name="image"
              placeholder="Add an image.."
              value={formState.image}
              className="form-input w-100"
              onChange={handleChange}
            />
          </div>
          <div className="col-12 col-lg-9">
            <input
              name="facts"
              placeholder="Add facts.."
              value={formState.facts}
              className="form-input w-100"
              onChange={handleChange}
            />
          </div>
          <div className="col-12">
            <textarea
              name="bio"
              placeholder="Add your bio .."
              value={formState.bio}
              className="form-input w-100"
              style={{ lineHeight: "1.5" }}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="col-12 col-lg-3">
            <button className="btn btn-primary btn-block py-3" type="submit">
              Add Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
