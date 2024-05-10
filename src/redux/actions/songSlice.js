import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedSong: null,
  likedSongs: [],
};

const songSlice = createSlice({
  name: 'song',
  initialState,
  reducers: {
    selectSong(state, action) {
      state.selectedSong = action.payload;
    },
    toggleLike(state, action) {
      const { songId } = action.payload;
      const index = state.likedSongs.indexOf(songId);
      if (index !== -1) {
        state.likedSongs.splice(index, 1);
      } else {
        state.likedSongs.push(songId);
      }
    },
  },
});

export const { selectSong, toggleLike } = songSlice.actions;
export default songSlice.reducer;
