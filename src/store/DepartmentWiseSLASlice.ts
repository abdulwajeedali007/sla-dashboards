import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getAccessToken } from './utils/generateTokenService';
import { SLADepartmentSingleRequestBody } from './utils/SLADepartmentSignleCaseRequestBody';

import type { SingleDepartmentTypeApi } from '../Types';

const apiUrl = import.meta.env.VITE_PEGA_DEPARTMENT_WISE_API_URL;

const initialState: {
  data: SingleDepartmentTypeApi[] | null;
  loading: boolean;
  error: string | null;
} = {
  data: null,
  loading: false,
  error: null,
};

export const fetchdepartmentwisedetails = createAsyncThunk<
  SingleDepartmentTypeApi[],
  string,
  { rejectValue: { message: string } }
>('fetchdepartmentwisedetails', async (id = '', { rejectWithValue }) => {
  try {
    const getToken = await getAccessToken();
    const response = await axios.post(
      apiUrl,
      SLADepartmentSingleRequestBody(id),
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

const departmentwiseSlaSlice = createSlice({
  name: 'departmentwisesla',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchdepartmentwisedetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchdepartmentwisedetails.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchdepartmentwisedetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message ?? 'API Failed';
      });
  },
});

export default departmentwiseSlaSlice.reducer;
