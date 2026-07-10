import { useDispatch } from 'react-redux';
import type { SlaTask } from '../../../../Types';
import type { AppDispatch } from '../../../../store';
import { fetchTaskDetails } from '../../../../store/SingleTaskDetailsPopupSlice';
import { getStatusColor } from '../../../../utils';

function Index({
  step,
  segmentWidth,
  index,
  stepNo,
  totalSteps,
  toggle,
  setToggle,
}: {
  step: SlaTask;
  index: number;
  stepNo: string;
  segmentWidth: number;
  totalSteps: number;
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const dispatch = useDispatch<AppDispatch>();

  // let bgColor =
  //   step.TaskStatus === 'Completed'
  //     ? 'bg-green-500'
  //     : step.TaskStatus === 'In progress'
  //       ? 'bg-yellow-500'
  //       : 'bg-gray-500';
  let bgColor = getStatusColor(step.TaskStatus);
  // if (totalSteps > 6) {
  //   segmentWidth = segmentWidth + 10;
  // }
  const width =
    index === 0 || index === totalSteps - 1 ? segmentWidth / 2 : segmentWidth;

  const left = index === 0 ? 0 : segmentWidth / 2 + (index - 1) * segmentWidth;

  return (
    <>
      <div
        style={{ left: `${left}%`, width: `${width}%` }}
        className={`absolute h-[2px]   flex flex-col ${
          index === 0
            ? 'items-start'
            : index === totalSteps - 1
              ? 'items-end'
              : 'items-center'
        } ${bgColor}`}
      >
        <div className="absolute top-1/2 -translate-y-1/2 flex flex-col items-center">
          <div
            className={`h-6 w-6 rounded-full text-xs  text-white flex justify-center items-center ${bgColor} hover: cursor-pointer hover:bg-gray-800`}
            onClick={() => {
              dispatch(fetchTaskDetails(step.pyGUID));
              setToggle(!toggle);
            }}
          >
            {stepNo}
          </div>
          {/* ${index % 2 === 0 ? '-top-12' : 'top-8'}  */}
          <p
            className={`absolute text-xs font-semibold w-36 text-center left-1/2 -translate-x-1/2 top-8 
            
            ${index === 0 ? 'left-0 -translate-x-3 text-left' : index === totalSteps - 1 ? '-translate-x-11/12 text-right' : 'm-0 '}`}
          >
            {step.TaskName}
          </p>
        </div>
      </div>
    </>
  );
}

export default Index;
