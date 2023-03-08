import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v4/rockets';

const initialState = {
  rockets: [],
  status: false,
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
      const rockets = state.rockets.map((rocket) => {
        if (rocket.id === payload) return { ...rocket, reserved: !rocket.reserved };
        return rocket;
      });

      return { ...state, rockets };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchRockets.pending, (state) => ({ ...state, status: true }))
      .addCase(fetchRockets.fulfilled, (state, action) => ({
        ...state,
        rockets: action.payload,
      }));
  },
});

export const { reserveRocket } = rocketsSlice.actions;

export default rocketsSlice.reducer;
