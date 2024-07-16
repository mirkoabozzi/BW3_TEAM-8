export const SET_USER = "SET_USER";
export const SET_PROFILES = "SET_PROFILES";
export const SET_SELECTED_USER = "SET_SELECTED_USER";
export const SET_EXPERIENCES = "SET_EXPERIENCES"; // Assicuriamoci che questa costante sia esportata

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njk0ZDEwNjE5NmQ3YjAwMTVkNmI1MjQiLCJpYXQiOjE3MjEwMjg4NzAsImV4cCI6MTcyMjIzODQ3MH0.lxTMuD2HxVncxLT71LT_2gTwR02C2dbSQrtfInlKotk";
const tokenMirko = import.meta.env.VITE_API_KEY_MIRKO;

export const getUser = () => {
  return async (dispatch) => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
        headers: {
          Authorization: "Bearer " + tokenMirko,
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
