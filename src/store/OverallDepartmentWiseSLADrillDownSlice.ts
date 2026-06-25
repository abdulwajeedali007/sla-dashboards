import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getAccessToken } from './utils/generateTokenService';
import { overalldepartmentWiseSLADrillDownRequestBody } from './utils/OverallDepartmentWiseSLADrillDownRequestBody';

import type { DepartmentWiseDrillDownTypeAPI } from '../Types';

const apiUrl = import.meta.env
  .VITE_PEGA_OVERALL_DEPARTMENT_WISE_DRILL_DOWN_API_URL;

const initialState: {
  data: DepartmentWiseDrillDownTypeAPI[] | null;
  loading: boolean;
  error: string | null;
} = {
  data: null,
  loading: false,
  error: null,
};

export const fetchoveralldepartmentwiseDrilldown = createAsyncThunk<
  DepartmentWiseDrillDownTypeAPI[],
  string,
  { rejectValue: { message: string } }
>(
  'fetchoveralldepartmentwiseDrilldown',
  async (name: string, { rejectWithValue }) => {
    try {
      const getToken = await getAccessToken();
      const response = await axios.post(
        apiUrl,
        overalldepartmentWiseSLADrillDownRequestBody(name),
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
  },
);

const overalldepartmentwiseSlaDrilldownSlice = createSlice({
  name: 'overalldepartmentwisedrilldown',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchoveralldepartmentwiseDrilldown.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchoveralldepartmentwiseDrilldown.fulfilled,
        (state, action) => {
          state.loading = false;
          state.data = action.payload;
        },
      )
      .addCase(
        fetchoveralldepartmentwiseDrilldown.rejected,
        (state, action) => {
          state.loading = false;
          state.error = action.payload?.message ?? 'API Failed';
        },
      );
  },
});

export default overalldepartmentwiseSlaDrilldownSlice.reducer;
