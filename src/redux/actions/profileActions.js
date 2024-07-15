export const fetchProfile = (token) => async (dispatch) => {
    try {
      const response = await fetch('https://striveschool-api.herokuapp.com/api/profile/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      dispatch({ type: 'SET_PROFILE', payload: data });
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };
  