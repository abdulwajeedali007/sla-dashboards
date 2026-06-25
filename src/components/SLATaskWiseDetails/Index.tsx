import React from 'react';
import type { DepartmentWiseDrillDownTypeAPI } from '../../Types';
import { format } from 'date-fns';

function Index({
  departmentDetails = [],
  // loading,
}: {
  departmentDetails: DepartmentWiseDrillDownTypeAPI[];
  // loading: boolean;
}) {
  const taskID = departmentDetails.find(
    (item: DepartmentWiseDrillDownTypeAPI) => item.CaseID,
  );  

  return (
    <div className="border border-gray-200 overflow-hidden rounded-[20px]">
      <table className="w-full border-gray-200">
        <thead className="bg-gray-700 h-10 text-white text-[12px] font-extralight  ">
          <tr>
            <th className="text-left px-4">Task Name</th>
            {taskID && <th>Case ID</th>}
            <th>Start Date</th>
            <th>End Date</th>
            <th>Last Updated By</th>
          </tr>
        </thead>
        <tbody>
          {departmentDetails.map(
            (task: DepartmentWiseDrillDownTypeAPI, index) => (
              <React.Fragment key={index}>
                <tr className="text-center h-13 text-sm border-b border-gray-200">
                  <td className="text-left px-4">{task.TaskName}</td>
                  {taskID && <td>{task.CaseID}</td>}
                  <td>
                    {(task.TaskEndDate &&
                      format(new Date(task.TaskStartDate), 'yyyy-MM-dd')) ??
                      '-'}
                  </td>
                  <td>
                    {(task.TaskEndDate &&
                      format(new Date(task.TaskEndDate), 'yyyy-MM-dd')) ??
                      '-'}
                  </td>
                  <td>{task.LastUpdatedBy ?? '-'}</td>
                </tr>
              </React.Fragment>
            ),
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Index;
