import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import slaTasksSlice from './TaskWiseDetailsSlice';
import calenderLaunch from './ClusterCalenderLaunchSlice';
import taskDetailsSlice from './SingleTaskDetailsSlice';
import departmentwiseSlaSlice from './DepartmentWiseSLASlice';
import departmentwiseSlaDrilldownSlice from './DepartmentWiseSLADrillDownSlice';
import overalldepartmentwiseSlaSlice from './overallDepartmentWiseSLASlice';
import overalldepartmentwiseSlaDrilldownSlice from './OverallDepartmentWiseSLADrillDownSlice';
const store = configureStore({
  reducer: {
    slaTasks: slaTasksSlice,
    calenderLaunch: calenderLaunch,
    taskDetails: taskDetailsSlice,
    departmentwiseSla: departmentwiseSlaSlice,
    departmentwiseSlaDrilldown: departmentwiseSlaDrilldownSlice,
    overalldepartmentwiseSla: overalldepartmentwiseSlaSlice,
    overalldepartmentwiseSlaDrilldown: overalldepartmentwiseSlaDrilldownSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export default store;
