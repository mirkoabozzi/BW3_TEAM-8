export const SET_USER = "SET_USER";

export const getUser = () => {
  return async (dispatch) => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
        headers: {
          Authorization: "Bearer [INSERISCRE IL TOKEN NASCOSTO]",
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
