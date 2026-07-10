import MilestoneNode from './MilestoneNode/Index';
import TaskDetailsPopup from '../../TaskDetailsPopup/Index';
import ProgressBar from '../../ProgressBar/Index';
import type { SlaTask } from '../../../Types';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../store';

import { useState } from 'react';

function Index({
  title,
  steps,
  percentage,
  Icon,
  // mileStoneNo,
}: {
  title: string;
  steps: SlaTask[];
  percentage: number;
  Icon: any;
  // textColor: string;
  // bgColor: string;
  // tagColor: string;
  // bgLightColor: string;
  // borderColor: string;

  // mileStoneNo: number;
}) {
  const segmentWidth = steps.length > 1 ? 100 / (steps.length - 1) : 100;
  const shouldScroll = steps.length > 6;

  const timelineWidth = shouldScroll ? `${steps.length * 220}px` : '100%';
  const { data, loading } = useSelector(
    (state: RootState) => state.taskDetails,
  );
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="overflow-hidden rounded-[20px] bg-white mb-9 last:mb-0 border border-(--border-color)">
        <div
          className={`flex items-center justify-between gap-6 bg-(--primary-color)  p-2 mb-6  sm:p-4`}
        >
          <div className="flex gap-2 items-center">
            {Icon && <Icon color="white" size={30} />}
            <h3 className={`text-white text-base tracking-wide`}>{title}</h3>
          </div>

          <div
            className={`rounded-[20px] text-xs text-white py-2 px-2  sm:px-3 sm:text-sm`}
          >
            {/* Completed {percentage}% */}
            <ProgressBar progress={percentage} />
          </div>
        </div>
        <div className="px-6">
          <div className="overflow-x-auto custom-scrollbar">
            {steps.length > 0 && (
              <div className="pt-10 pb-24 sm:pb-24 sm:pt-8">
                {/* min-w-[960px] */}
                <div
                  className={`relative min-w-[960px] w-full h-[2px]  custom-scrollbar ${steps.length === 0 ? 'bg-white' : 'bg-gray-400'}`}
                  style={{ width: timelineWidth }}
                >
                  {steps.map((step: SlaTask, index: number) => (
                    <MilestoneNode
                      key={step.pyGUID}
                      step={step}
                      index={index}
                      stepNo={step.StepNumber}
                      segmentWidth={segmentWidth}
                      totalSteps={steps.length}
                      toggle={toggle}
                      setToggle={setToggle}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {toggle && (
        <TaskDetailsPopup
          toggle={toggle}
          setToggle={setToggle}
          data={data}
          loading={loading}
        />
      )}
    </>
  );
}
export default Index;
