export const SET_USER = "SET_USER";
export const SET_PROFILES = "SET_PROFILES"; // Aggiunto
export const SET_SELECTED_USER = "SET_SELECTED_USER"; // Aggiunto

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njk0ZDEwNjE5NmQ3YjAwMTVkNmI1MjQiLCJpYXQiOjE3MjEwMjg4NzAsImV4cCI6MTcyMjIzODQ3MH0.lxTMuD2HxVncxLT71LT_2gTwR02C2dbSQrtfInlKotk'; // Token di autenticazione

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

// Aggiunta azione per cercare i profili utente
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
        // Filtra i profili in base alla query di ricerca
        const filteredProfiles = profiles.filter(profile =>
          `${profile.name.toLowerCase()} ${profile.surname.toLowerCase()}`.includes(query.toLowerCase())
        );
        dispatch({ type: SET_PROFILES, payload: filteredProfiles });
      } else {
        throw new Error("Errore nella ricerca dei profili");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// Aggiunta azione per impostare l'utente selezionato
export const setSelectedUser = (user) => {
  return {
    type: SET_SELECTED_USER,
    payload: user,
  };
};
