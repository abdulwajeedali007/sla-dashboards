import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAccessToken } from './utils/generateTokenService';

import type { TaskDetail } from '../Types';

const apiUrl = import.meta.env.VITE_PEGA_TASK_DETAILS_API_URL;

const initialState: {
  data: TaskDetail[] | null;
  loading: boolean;
  error: string | null;
} = {
  data: null,
  loading: false,
  error: null,
};

export const fetchTaskDetails = createAsyncThunk<
  TaskDetail[],
  string,
  { rejectValue: { message: string } }
>('fetchTaskDetails', async (id = '', { rejectWithValue }) => {
  try {
    const getToken = await getAccessToken();
    const response = await axios.post(
      apiUrl,
      {
        dataViewParameters: {
          pyGUID: id,
        },
      },
      {
        headers: { Authorization: `Bearer ${getToken}` },
      },
    );

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

const taskDetailsSlice = createSlice({
  name: 'taskDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTaskDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTaskDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchTaskDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message ?? 'API Failed';
      });
  },
});

export default taskDetailsSlice.reducer;
