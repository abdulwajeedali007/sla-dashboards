import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAccessToken } from './utils/generateTokenService';
import { ProjectDetailsRequestBody } from './utils/ProjectDetailsRequestBody';

import type { ProjectDetailsType } from '../Types';

const apiUrl = import.meta.env.VITE_PEGA_PROJECT_DETAILS_API_URL;

const initialState: {
  data: ProjectDetailsType[] | null;
  loading: boolean;
  error: string | null;
} = {
  data: null,
  loading: false,
  error: null,
};

export const fetchProjectDetails = createAsyncThunk<
  ProjectDetailsType[],
  string,
  { rejectValue: { message: string } }
>('fetchProjectDetails', async (id = '', { rejectWithValue }) => {
  try {
    const getToken = await getAccessToken();
    const response = await axios.post(apiUrl, ProjectDetailsRequestBody(id), {
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

const projectDetailsSlice = createSlice({
  name: 'taskDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjectDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProjectDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchProjectDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message ?? 'API Failed';
      });
  },
});

export default projectDetailsSlice.reducer;
