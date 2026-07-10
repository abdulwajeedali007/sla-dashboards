import BaseLayout from './BaseLayout';
import { Outlet } from 'react-router';
// import BaseLayout from './BaseLayout';

function FullWidthLayout() {
  return (
    <BaseLayout>
      <div className="lg:mx-12 mx-2">
        <Outlet />
      </div>
    </BaseLayout>
  );
}

export default FullWidthLayout;
