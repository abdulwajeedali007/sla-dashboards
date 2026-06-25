import { useState } from 'react';
import type { SingleDepartmentType } from '../../Types';
import TableRow from './TableRow/Index';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../store';
import { fetchdepartmentwiseDrilldown } from '../../store/DepartmentWiseSLADrillDownSlice';
import { fetchoveralldepartmentwiseDrilldown } from '../../store/OverallDepartmentWiseSLADrillDownSlice';
type Props = {
  tasks: SingleDepartmentType[];
  departmentDetails: any;
};

const Index = ({ tasks, departmentDetails }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const [openDepartment, setOpenDepartment] = useState<string | null>(null);

  function handleToggle(id?: string, name?: string) {
    if (openDepartment === name) {
      setOpenDepartment(null);
      return;
    }
    setOpenDepartment(name as string);
    if (id && name) {
      dispatch(fetchdepartmentwiseDrilldown({ id, name }));
    } else {
      dispatch(fetchoveralldepartmentwiseDrilldown(name as string));
    }
  }
  return (
    <div>
      <h3 className="text-[22px] tracking-tight capitalize mb-3 sm:mb-3">
        Department Readiness
      </h3>
      <div className="w-full overflow-x-auto rounded-[20px] bg-(--page-background) border border-(--border-color)">
        <table className="w-full border-collapse">
          {/* Header */}
          <thead className="bg-gray-800 text-white text-center h-16">
            <tr>
              <th className="px-4 font-normal lg:text-base text-sm py-4 text-left border border-[#f6f3f41a]">
                Department
              </th>
              <th className="px-4 font-normal lg:text-base text-sm py-4 border border-[#f6f3f41a] ">
                Total Steps
              </th>
              <th className="px-4 font-normal lg:text-base text-sm py-4 border border-[#f6f3f41a] ">
                Completed
              </th>
              <th className="px-4 font-normal lg:text-base text-sm py-4 border border-[#f6f3f41a] ">
                In Progress
              </th>
              <th className="px-4 font-normal lg:text-base text-sm py-4 border border-[#f6f3f41a] ">
                New
              </th>

              <th className="px-4 font-normal lg:text-base text-sm py-4  border border-[#f6f3f41a] ">
                SLA Breached
              </th>

              <th className="px-4 font-normal lg:text-base text-sm py-4  border border-[#f6f3f41a]">
                SLA Adherence %
              </th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {tasks.map((task: SingleDepartmentType) => {
              return (
                <TableRow
                  key={task.DepartmentName}
                  task={task}
                  isOpen={openDepartment === task.DepartmentName}
                  onToggle={handleToggle}
                  departmentDetails={departmentDetails}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Index;
