import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  missions: [],
};

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  const response = await axios.get(url);
  return response.data;
});

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, action) => ({
      ...state,
      missions: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.fulfilled, (state, action) => ({
      ...state,
      missions: action.payload.map((mission) => ({ ...mission, joined: false })),
    }));
  },
});

export const { joinMission } = missionsSlice.actions;

export default missionsSlice.reducer;
