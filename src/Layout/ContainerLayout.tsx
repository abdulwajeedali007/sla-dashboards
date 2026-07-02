// import { MenuIcon } from 'lucide-react';
import { Outlet } from 'react-router';
import BaseLayout from './BaseLayout';

function ContainerLayout() {
  return (
    <BaseLayout>
      <div className="container mx-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            {/* <div
            className="fixed left-4 top-4 cursor-pointer"
            onClick={() => setShow(true)}
          >
            <MenuIcon size={30} />
          </div> */}
            <Outlet />
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
export default ContainerLayout;
