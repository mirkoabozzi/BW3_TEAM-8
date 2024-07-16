import { SET_USER, SET_PROFILES, SET_SELECTED_USER } from "../actions";

const initialState = {
  user: {
    _id: "6694d5f8196d7b0015d6b525",
    name: "Mirko",
    surname: "Abozzi",
    email: "mirko.abozzi@gmail.com",
    username: "mirkoabozzi",
    title: "Full Stack Web Developer",
    bio: "About me",
    area: "Sedini, Sardegna, Italia",
    image: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
    createdAt: "2024-07-15T07:55:36.771Z",
    updatedAt: "2024-07-15T07:55:36.771Z",
  },
  profiles: [], // Lista dei profili trovati
  selectedUser: null, // Utente selezionato
};

const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };

    case SET_PROFILES:
      return {
        ...state,
        profiles: action.payload,
      };

    case SET_SELECTED_USER:
      return {
        ...state,
        user: action.payload,
        profiles: [], // Svuota la lista dei risultati dopo aver selezionato un utente
      };

    default:
      return state;
  }
};

export default MainReducer;
