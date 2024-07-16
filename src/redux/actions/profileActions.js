import { setProfile, setProfiles } from '../reducers/profileReducer';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njk0ZDEwNjE5NmQ3YjAwMTVkNmI1MjQiLCJpYXQiOjE3MjEwMjg4NzAsImV4cCI6MTcyMjIzODQ3MH0.lxTMuD2HxVncxLT71LT_2gTwR02C2dbSQrtfInlKotk';

export const fetchProfile = () => async (dispatch) => {
  try {
    const response = await fetch('https://striveschool-api.herokuapp.com/api/profile/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    dispatch(setProfile(data));
  } catch (error) {
    console.error('Error fetching profile:', error);
  }
};

export const searchProfiles = (query) => async (dispatch) => {
  try {
    const response = await fetch('https://striveschool-api.herokuapp.com/api/profile/', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    const profile = data.find(profile => 
      `${profile.name.toLowerCase()} ${profile.surname.toLowerCase()}`.includes(query.toLowerCase())
    );
    if (profile) {
      dispatch(setProfile(profile));
    } else {
      dispatch(setProfiles([]));
    }
  } catch (error) {
    console.error('Error searching profiles:', error);
  }
};

export const fetchProfileById = (userId) => async (dispatch) => {
  try {
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    dispatch(setProfile(data));
  } catch (error) {
    console.error('Error fetching profile by ID:', error);
  }
};
