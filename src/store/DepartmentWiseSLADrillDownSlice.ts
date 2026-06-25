import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getAccessToken } from './utils/generateTokenService';
import { departmentWiseSLADrillDownRequestBody } from './utils/DepartmentWiseSLADrillDownRequestBody';

import type { DepartmentWiseDrillDownTypeAPI } from '../Types';

const apiUrl = import.meta.env.VITE_PEGA_DEPARTMENT_WISE_DRILL_DOWN_API_URL;

const initialState: {
  data: DepartmentWiseDrillDownTypeAPI[] | null;
  loading: boolean;
  error: string | null;
} = {
  data: null,
  loading: false,
  error: null,
};

export const fetchdepartmentwiseDrilldown = createAsyncThunk<
  DepartmentWiseDrillDownTypeAPI[],
  { id: string; name: string },
  { rejectValue: { message: string } }
>('fetchdepartmentwiseDrilldown', async ({ id, name }, { rejectWithValue }) => {
  try {
    const getToken = await getAccessToken();
    const response = await axios.post(
      apiUrl,
      departmentWiseSLADrillDownRequestBody({ id, name }),
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

const departmentwiseSlaDrilldownSlice = createSlice({
  name: 'departmentwisedrilldown',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchdepartmentwiseDrilldown.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchdepartmentwiseDrilldown.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchdepartmentwiseDrilldown.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message ?? 'API Failed';
      });
  },
});

export default departmentwiseSlaDrilldownSlice.reducer;
