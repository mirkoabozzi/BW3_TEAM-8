import { SET_USER } from "../actions";

const initialState = {
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
};

const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        state: action.payload,
      };

    default:
      return state;
  }
};

export default MainReducer;
