import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FavoritesState {
  favoriteEvents: { event_date_id: string }[];
}

const initialState: FavoritesState = {
  favoriteEvents: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<any>) => {
      const event = action.payload;
      const existingIndex = state.favoriteEvents.findIndex((fav) => fav?.event_date_id === event?.event_date_id);
      if (existingIndex !== -1) {
        state.favoriteEvents.splice(existingIndex, 1);
      } else {
        state.favoriteEvents.push(event);
      }
    },
    setFavorites: (state, action: PayloadAction<any[]>) => {
      state.favoriteEvents = action.payload;
    },
  },
});

export const { toggleFavorite, setFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
