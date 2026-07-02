import BaseLayout from './BaseLayout';
import { Outlet } from 'react-router';
// import BaseLayout from './BaseLayout';

function FullWidthLayout() {
  return (
    <BaseLayout>
      <div className="mx-8">
        <Outlet />
      </div>
    </BaseLayout>
  );
}

export default FullWidthLayout;
