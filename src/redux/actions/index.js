export const SET_USER = "SET_USER";
export const SET_PROFILES = "SET_PROFILES";
export const SET_SELECTED_USER = "SET_SELECTED_USER";
export const SET_EXPERIENCES = "SET_EXPERIENCES";
export const ADD_EXPERIENCE_SUCCESS = "ADD_EXPERIENCE_SUCCESS";
export const ADD_EXPERIENCE_REQUEST = "ADD_EXPERIENCE_REQUEST";
export const ADD_EXPERIENCE_FAILURE = "ADD_EXPERIENCE_FAILURE";
export const UPDATE_EXPERIENCES_LIST = "UPDATE_EXPERIENCES_LIST";
export const GET_POSTS = "GET_POSTS";

const token = import.meta.env.VITE_API_KEY;

export const getUser = () => {
  return async (dispatch) => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      if (resp.ok) {
        const user = await resp.json();
        console.log("user", user);
        dispatch({ type: SET_USER, payload: user });
      } else {
        throw new Error("Errore nel recupero dell'utente");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const searchProfiles = (query) => {
  return async (dispatch) => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/profile/", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      if (resp.ok) {
        const profiles = await resp.json();
        console.log("profiles", profiles);
        const filteredProfiles = profiles.filter((profile) => `${profile.name.toLowerCase()} ${profile.surname.toLowerCase()}`.includes(query.toLowerCase()));
        dispatch({ type: SET_PROFILES, payload: filteredProfiles });
      } else {
        throw new Error("Errore nella ricerca dei profili");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const setSelectedUser = (user) => {
  return async (dispatch) => {
    try {
      dispatch({ type: SET_SELECTED_USER, payload: user });
      dispatch(fetchExperiences(user._id));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchExperiences = (userId) => {
  return async (dispatch) => {
    try {
      const resp = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      if (resp.ok) {
        const experiences = await resp.json();
        dispatch({ type: SET_EXPERIENCES, payload: experiences });
      } else {
        throw new Error("Errore nel recupero delle esperienze");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateProfilePicture = (userId, file) => {
  return async (dispatch) => {
    const formData = new FormData();
    formData.append("profile", file);
    try {
      const resp = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/picture`, {
        headers: {
          Authorization: "Bearer " + tokenMirko,
        },
        method: "POST",
        body: formData,
      });
      if (resp.ok) {
        console.log(resp);
        dispatch(getUser());
      } else {
        throw new Error("Errore nel caricamendo dei dati");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const addExperience = (userId, experience) => {
  return async (dispatch) => {
    try {
      const resp = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(experience),
      });

      if (resp.ok) {
        const newExperience = await resp.json();
        dispatch(fetchExperiences(userId));
        return newExperience;
      } else {
        const errorText = await resp.text();
        throw new Error(`Errore nella creazione dell'esperienza: ${errorText}`);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteExperience = (userId, experienceId) => {
  return async (dispatch) => {
    try {
      const resp = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${experienceId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (resp.ok) {
        dispatch(fetchExperiences(userId));
      } else {
        const errorText = await resp.text();
        throw new Error(`Errore nella cancellazione dell'esperienza: ${errorText}`);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const uploadProfilePicture = (userId, file) => {
  return async (dispatch) => {
    const formData = new FormData();
    formData.append("profile", file);

    try {
      const resp = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/picture`, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
        },
        body: formData,
      });

      if (resp.ok) {
        dispatch(getUser());
      } else {
        throw new Error("Errore nel caricamento dell'immagine del profilo");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const uploadExperiencePicture = (userId, experienceId, file) => {
  return async (dispatch) => {
    const formData = new FormData();
    formData.append("experience", file);

    try {
      const resp = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${experienceId}/picture`, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
        },
        body: formData,
      });

      if (resp.ok) {
        dispatch(fetchExperiences(userId));
      } else {
        throw new Error("Errore nel caricamento dell'immagine dell'esperienza");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getPosts = () => {
  return async (dispatch) => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      if (resp.ok) {
        const posts = await resp.json();
        // console.log("posts", posts);
        dispatch({ type: GET_POSTS, payload: posts });
      } else {
        throw new Error("Errore nel recupero dei post");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
