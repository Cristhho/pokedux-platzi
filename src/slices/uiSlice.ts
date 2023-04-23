import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface UiState {
  loading: boolean,
  searchText: string
}

const initialState: UiState = {
  loading: false,
  searchText: ''
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLoading: (state, actions: PayloadAction<boolean>) => {
      state.loading = actions.payload
    },
    setSearchText: (state, actions: PayloadAction<string>) => {
      state.searchText = actions.payload
    }
  }
});

export const { setLoading, setSearchText } = uiSlice.actions;

export default uiSlice.reducer;
