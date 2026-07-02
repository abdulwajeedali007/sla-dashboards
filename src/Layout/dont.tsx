import {
  BarChart3,
  CalendarDays,
  ListOrderedIcon,
  MenuIcon,
  Table,
  X,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { NavLink, Outlet } from 'react-router';

function Index() {
  const [show, setShow] = useState(false);

  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setShow(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [show]);

  const navClass = ({ isActive }: { isActive: boolean }) =>
    ` ${isActive ? 'text-white px-10 py-4 flex gap-3 font-bold bg-(--gold-accent) items-center' : 'text-(--primary-color) px-10 py-4 hover:text-blue-800 flex gap-3 font-bold items-center'}`;

  return (
    <>
      <div className="container mx-auto px-3 md:px-0">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <div
              className="fixed left-4 top-4 cursor-pointer"
              onClick={() => setShow(true)}
            >
              <MenuIcon size={30} />
            </div>
            <Outlet />
          </div>
        </div>
      </div>
      <nav
        className={`bg-white text-white text-xs sm:text-base fixed flex flex-col bg-red left-0 top-0 h-full  transition-all ${show ? 'translate-0' : '-translate-x-96'}`}
        ref={popupRef}
      >
        <div className="mt-32">
          <div
            className="absolute right-4 top-4"
            onClick={() => setShow(false)}
          >
            <X
              color="#c09c5d"
              size={30}
              strokeWidth={1}
              className="cursor-pointer"
            />
          </div>
          <NavLink
            to="/cluster-launch-calender"
            className={navClass}
            onClick={() => setShow(false)}
          >
            <CalendarDays size={30} strokeWidth={1} />
            <p className="m-0">Cluster Launch Calender</p>
          </NavLink>{' '}
          <NavLink
            to="/cluster-overview"
            className={navClass}
            onClick={() => setShow(false)}
          >
            <Table size={30} strokeWidth={1} />
            <p>Cluster Overview</p>
          </NavLink>{' '}
          <NavLink
            to="/task-wise-details"
            className={navClass}
            onClick={() => setShow(false)}
          >
            <BarChart3 size={30} strokeWidth={1} />
            <p>Task Wise Details</p>
          </NavLink>
          <NavLink
            to="/department-wise-sla"
            className={navClass}
            onClick={() => setShow(false)}
          >
            <ListOrderedIcon size={30} strokeWidth={1} />
            <p>Department Wise SLA</p>
          </NavLink>
          <NavLink
            to="/overall-department-wise-sla"
            className={navClass}
            onClick={() => setShow(false)}
          >
            <ListOrderedIcon size={30} strokeWidth={1} />
            <p>Overall Department Wise SLA</p>
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default Index;
