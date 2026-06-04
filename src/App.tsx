import { Routes, Route, Navigate } from 'react-router';

import Layout from './Layout/Index';

import ExecutiveLaunchCalender from './Pages/ExecutiveLaunchCalender/Index';
import ClusterOverview from './Pages/ClusterOverview/Index';
import ClusterExecuationCommandCenter from './Pages/ClusterExecuationCommandCenter/Index';
import SlaReadiness from './Pages/SlaReadiness/Index'
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          index
          path="/launch-calender"
          element={<ExecutiveLaunchCalender />}
        />

        <Route path="/cluster-overview" element={<ClusterOverview />} />

        <Route
          path="/cluster-execution"
          element={<ClusterExecuationCommandCenter />}
        />
        <Route
          path="/sla-readiness"
          element={<SlaReadiness />}
        />
        {/* Default Route */}
        <Route path="*" element={<Navigate to="/launch-calender" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
