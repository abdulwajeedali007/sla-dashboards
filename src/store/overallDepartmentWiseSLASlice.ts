import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getAccessToken } from './utils/generateTokenService';
import type { SingleDepartmentTypeApi } from '../Types';

const apiUrl = import.meta.env.VITE_PEGA_OVERALL_DEPARTMENT_WISE_API_URL;

const initialState: {
  data: SingleDepartmentTypeApi[] | null;
  loading: boolean;
  error: string | null;
} = {
  data: null,
  loading: false,
  error: null,
};

export const fectchoverallDepartmentwisesla = createAsyncThunk<
  //   string,
  SingleDepartmentTypeApi[],
  void,
  { rejectValue: { message: string } }
>('fectchoverallDepartmentwisesla', async (_, { rejectWithValue }) => {
  try {
    const getToken = await getAccessToken();
    const response = await axios.post(
      apiUrl,
      {},
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

const overalldepartmentwiseSlaSlice = createSlice({
  name: 'ovealldepartmentwisesla',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fectchoverallDepartmentwisesla.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fectchoverallDepartmentwisesla.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fectchoverallDepartmentwisesla.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message ?? 'API Failed';
      });
  },
});

export default overalldepartmentwiseSlaSlice.reducer;
