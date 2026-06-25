import { ChevronRight } from 'lucide-react';
import type { SingleDepartmentType } from '../../../Types';
import ProgressBar from '../../ProgressBar/Index';

import SLATaskDetails from '../../SLATaskWiseDetails/Index';

type TableRowTypes = {
  task: SingleDepartmentType;
  isOpen: boolean;
  onToggle: (id: string, name: string) => void;
  departmentDetails: any;
  // percentage: number;
  // departmentDetails: any;
};
const TableRow = ({
  task,
  isOpen,
  onToggle,
  departmentDetails,
}: TableRowTypes) => {
  const percentage =
    ((task.totalSteps - task.TaskSLABreachedDays) / task.totalSteps) * 100;

  return (
    <>
      <tr
        className={`border-b border-(--border-color) last:border-b-0 text-center lg:text-base text-sm hover:bg-gray-50 cursor-pointer ${isOpen ? 'bg-gray-700 text-white hover:bg-gray-600' : ''}`}
        onClick={() => onToggle(task.caseId, task.DepartmentName)}
      >
        {/* Department Name */}
        <td className="px-4 py-4 flex items-center gap-2  text-wrap lg:w-80 text-left">
          <ChevronRight
            size={18}
            className={`inline-block transition-transform duration-300 ${
              isOpen ? 'rotate-90' : ''
            }`}
          />{' '}
          <span>{task.DepartmentName}</span>
        </td>

        <td className="px-2 py-4  text-wrap ">{task.totalSteps}</td>
        <td className="px-1 py-4">{task.Completed}</td>
        <td className="px-1 py-4 ">{task.InProgress}</td>
        <td className="px-1 py-4 text-center ">{task.New}</td>
        {/* Status */}

        <td className="px-1 py-4">{task.TaskSLABreachedDays}</td>
        {/* Progress */}
        <td className="px-2 py-4">
          <ProgressBar progress={percentage} />
        </td>
        {/* Dates */}
        {/* <td className="px-2 py-4 ">{task.startDate}</td> */}
        {/* <td className="px-2 py-4 border border-gray-100 ">
        {task.endDate}
      </td> */}

        {/* Updated By */}
        {/* <td className="px-1 py-4 text-left">{task.updatedBy}</td> */}
      </tr>
      {isOpen && (
        <tr>
          <td colSpan={7} className="p-4 bg-gray-50">
            {departmentDetails && departmentDetails?.load ? (
              <p>Loading</p>
            ) : (
              <SLATaskDetails
                departmentDetails={departmentDetails?.drilldownDetails}
                // loading={loading}
              />
            )}
          </td>
        </tr>
      )}
    </>
  );
};
export default TableRow;
