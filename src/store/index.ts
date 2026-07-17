import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import slaTasksSlice from './TaskWiseDetailsSlice';
import calendarLaunch from './ClusterCalendarLaunchSlice';
import taskDetailsSlice from './SingleTaskDetailsPopupSlice';
import departmentwiseSlaSlice from './DepartmentWiseSLASlice';
import departmentwiseSlaDrilldownSlice from './DepartmentWiseSLADrillDownSlice';
import overalldepartmentwiseSlaSlice from './overallDepartmentWiseSLASlice';
import overalldepartmentwiseSlaDrilldownSlice from './OverallDepartmentWiseSLADrillDownSlice';
import projectDetailsSlice from './ProjectDetailsSlice';
const store = configureStore({
  reducer: {
    slaTasks: slaTasksSlice,
    calendarLaunch: calendarLaunch,
    taskDetails: taskDetailsSlice,
    departmentwiseSla: departmentwiseSlaSlice,
    departmentwiseSlaDrilldown: departmentwiseSlaDrilldownSlice,
    overalldepartmentwiseSla: overalldepartmentwiseSlaSlice,
    overalldepartmentwiseSlaDrilldown: overalldepartmentwiseSlaDrilldownSlice,
    projectDetails: projectDetailsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export default store;
