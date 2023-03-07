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
  reducers: {
    reserveRocket: (state, { payload }) => {
      const rockets = state.rocketLists.map((rocket) => {
        if (rocket.id === payload) return { ...rocket, reserved: !rocket.reserved };
        return rocket;
      });

      return { ...state, rocketLists: rockets };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchRockets.pending, (state) => ({ ...state, isLoading: true }))
      .addCase(fetchRockets.fulfilled, (state, action) => ({
        rocketLists: action.payload,
        isLoading: true,
      }));
  },
});

export const selectRockets = (state) => state.rockets.rocketLists;
export const getStatus = (state) => state.rockets.isLoading;

export const { reserveRocket } = rocketsSlice.actions;

export default rocketsSlice.reducer;
