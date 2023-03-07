import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v4/rockets';

const initialState = {
  rocketLists: [],
  isLoading: false,
};

export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  const response = await axios.get(url);
  return response.data;
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchRockets.pending, (state) => ({ ...state, isLoading: true }))
      .addCase(fetchRockets.fulfilled, (state, action) => {
        console.log(action.payload);
        return { rocketLists: action.payload, isLoading: true };
      });
  },
});

export const selectRockets = (state) => state.rockets.rocketLists;
export const getStatus = (state) => state.rockets.isLoading;

export default rocketsSlice.reducer;
