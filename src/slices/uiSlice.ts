import { createSlice } from '@reduxjs/toolkit'

const initialState = {
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
