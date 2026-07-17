import { Routes, Route, Navigate } from 'react-router';

import ContainerLayout from './Layout/ContainerLayout';
import FullWidthLayout from './Layout/FullWidthLayout';

import ClusterLaunchCalendarPage from './Pages/ClusterLaunchCalendarPage/Index';
import ClusterOverviewPage from './Pages/ClusterOverviewPage/Index';
import TaskWiseDetailsPage from './Pages/TaskWiseDetailsPage/Index';
import DepartmentWiseSLAPage from './Pages/DepartmentWiseSLAPage/Index';
import OverallDepartmentWiseSLAPage from './Pages/OverallDepartmentWiseSLAPage/Index';
// import ControlRoomPage from './Pages/ControlRoomPage/Index';

function App() {
  return (
    <Routes>
      {/* Container Pages */}
      <Route element={<ContainerLayout />}>
        <Route
          path="/cluster-launch-calendar"
          element={<ClusterLaunchCalendarPage />}
        />

        <Route path="/cluster-overview" element={<ClusterOverviewPage />} />

        <Route
          path="/department-wise-sla"
          element={<DepartmentWiseSLAPage />}
        />

        <Route
          path="/overall-department-wise-sla"
          element={<OverallDepartmentWiseSLAPage />}
        />
      </Route>

      {/* Full Width Pages */}
      <Route element={<FullWidthLayout />}>
        {/* <Route path="/control-room" element={<ControlRoomPage />} /> */}
        <Route
          path="/task-wise-details/:id"
          element={<TaskWiseDetailsPage />}
        />
      </Route>

      {/* Default Route */}
      <Route
        path="*"
        element={<Navigate to="/cluster-launch-calendar" replace />}
      />
    </Routes>
  );
}

export default App;
