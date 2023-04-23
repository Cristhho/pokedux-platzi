import { createSlice } from '@reduxjs/toolkit';

export interface UiState {
  loading: boolean
}

const initialState: UiState = {
  loading: false
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLoading: (state, actions) => {
      state.loading = actions.payload
    }
  }
});

export const { setLoading } = uiSlice.actions;

export default uiSlice.reducer;
