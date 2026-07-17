import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAccessToken } from './utils/generateTokenService';

import type { CalendarClusterData } from '../Types';

const apiUrl = import.meta.env.VITE_PEGA_CALENDAR_LAUNCH_API_URL;

const initialState: {
  data: CalendarClusterData[] | null;
  loading: boolean;
  error: string | null;
} = {
  data: null,
  loading: false,
  error: null,
};

export const fetchcalendarLaunch = createAsyncThunk<
  CalendarClusterData[],
  void,
  { rejectValue: { message: string } }
>('fetchcalendarLaunch', async (_, { rejectWithValue }) => {
  try {
    const getToken = await getAccessToken();
    const response = await axios.post(apiUrl, _, {
      headers: { Authorization: `Bearer ${getToken}` },
    });
    return response.data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue({
        message: error.response?.data?.message || 'Something went wrong',
      });
    }

    return rejectWithValue({
      message: 'Something went wrong',
    });
  }
});

const calendarlaunchSlice = createSlice({
  name: 'calendarlaunch',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchcalendarLaunch.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchcalendarLaunch.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchcalendarLaunch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message ?? 'API Failed';
      });
  },
});

export default calendarlaunchSlice.reducer;
