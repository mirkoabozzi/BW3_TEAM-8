import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    profile: {},
    profiles: [],
  },
  reducers: {
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
    setProfiles: (state, action) => {
      state.profiles = action.payload;
    },
  },
});

export const { setProfile, setProfiles } = profileSlice.actions;
export default profileSlice.reducer;
