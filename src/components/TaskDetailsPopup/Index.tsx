import React, { useEffect, useRef } from 'react';
import type { TaskDetail } from '../../Types';
import { getStatusColor } from '../../utils';
import { format } from 'date-fns';
import { X } from 'lucide-react';
function Index({ toggle, setToggle, loading, data }: any) {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setToggle(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [toggle]);
  // console.log(data);
  return (
    <div
      className={`fixed inset-0 bg-black/70 z-10 flex justify-center items-center`}
    >
      <div
        className="w-full mx-5 lg:max-w-4xl bg-white rounded-[20px] overflow-auto  relative"
        ref={popupRef}
      >
        {/* <div className="absolute right-4 top-4">
            <X />
          </div> */}

        {loading ? (
          <p className="uppercase flex h-100 justify-center items-center">
            loading
          </p>
        ) : (
          data &&
          data.map((task: TaskDetail) => {
            let bgColor = getStatusColor(task.TaskStatus);
            return (
              <React.Fragment key={task.pyGUID}>
                <div className="flex gap-6 flex-col lg:flex-row relative">
                  <div className="p-8 flex-1">
                    <div>
                      <X
                        strokeWidth={1}
                        // color="#c09c5d"
                        className="absolute right-4 top-4 border border-(--gold-accent) text-(--gold-accent) w-8 h-8 p-1 rounded-full cursor-pointer hover:bg-(--gold-accent) hover:text-white"
                        onClick={() => setToggle(false)}
                      />
                    </div>
                    <div className="mb-6 border-b border-(--border-color) pb-4">
                      <h3 className="text-[20px] mb-1 font-semibold ">
                        {task.TaskName === null ? '-' : task.TaskName}
                      </h3>

                      <span
                        className={`px-2 py-0.5 ${bgColor} rounded-[20px] text-white text-[12px] `}
                      >
                        {task.TaskStatus === null ? '-' : task.TaskStatus}
                      </span>
                    </div>
                    <div className="mb-3 flex justify-between">
                      <div className="">
                        <p className="text-[14px]">Department Name</p>
                        <p className="font-semibold">
                          {' '}
                          {task.DepartmentName === null
                            ? '-'
                            : task.DepartmentName}
                        </p>
                      </div>
                      <div className="">
                        <p className="text-[14px]">Task SLA</p>
                        <p className="font-semibold  text-right">
                          {' '}
                          {task.TaskSLA === null ? '0' : task.TaskSLA} Days
                        </p>
                      </div>
                    </div>
                    <div className="mb-3 flex justify-between">
                      <div className="">
                        <p className="text-[14px]">Step No</p>
                        <p className="font-semibold ">
                          {task.StepNumber === null ? '-' : task.StepNumber}
                        </p>
                      </div>
                      <div className="">
                        <p className="text-[14px]">Task Start Date</p>
                        <p className="font-semibold  text-right">
                          {task.TaskStartDate === null
                            ? '-'
                            : `${format(new Date(task.TaskStartDate), 'yyyy-MM-dd')}`}
                        </p>
                      </div>
                    </div>
                    <div className="mb-3 flex justify-between">
                      <div className="">
                        <p className="text-[14px]">Task End Date</p>
                        <p className="font-semibold">
                          {task.TaskEndDate === null
                            ? '-'
                            : `${format(new Date(task.TaskEndDate), 'yyyy-MM-dd')}`}
                        </p>
                      </div>
                      <div className="">
                        <p className="text-[14px]">Task Due Date</p>
                        <p className="font-semibold  text-right">
                          {task.TaskDueDate === null
                            ? '-'
                            : `${format(new Date(task.TaskDueDate), 'yyyy-MM-dd')}`}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-8 flex-1 bg-(--page-background)">
                    <div className="mb-4 border-b border-(--border-color) pb-2">
                      <h4 className="text-[18px] mb-1 uppercase">
                        Dependencies
                      </h4>
                    </div>
                    <div className="border-l-3 border-dotted border-(--border-color) pl-4 ">
                      <div className=" bg-white rounded-[20px] mb-8 p-5  dependencies relative">
                        <p className="bg-(--border-color) px-3 py-0 text-[12px] absolute -top-1 left-0 rounded-[20px] ">
                          Step {task.StepNumber}
                        </p>
                        <p className="mb-1">{task.TaskName}</p>
                        <p>
                          <span
                            className={`px-2 py-0.5 ${bgColor} rounded-[20px] text-white text-[12px] `}
                          >
                            {task.TaskStatus === null ? '-' : task.TaskStatus}
                          </span>
                        </p>
                      </div>
                      <div className=" bg-white rounded-[20px]  p-5 dependencies relative">
                        <p className="bg-(--border-color) px-3 py-0 text-[12px] absolute -top-1 left-0 rounded-[20px] ">
                          Step {task.StepNumber}
                        </p>
                        <p className="mb-1">{task.TaskName}</p>
                        <p>
                          <span
                            className={`px-2 py-0.5 ${bgColor} rounded-[20px] text-white text-[12px] `}
                          >
                            {task.TaskStatus === null ? '-' : task.TaskStatus}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Index;
