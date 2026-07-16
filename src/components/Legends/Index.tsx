type LegendTypes = {
  getStatusFilterData: (status: string) => void;
  setStatus?: React.Dispatch<React.SetStateAction<string>>;
  status: string;
  controlPanel?: string;
};

function Index({
  getStatusFilterData,
  setStatus,
  status,
  controlPanel,
}: LegendTypes) {
  return (
    <>
      <div className="flex justify-start flex-wrap items-center mb-4  text-wrap">
        {/* <div className="md:flex md:gap-4"> */}
        <div
          className={`relative group flex items-center justify-center gap-1 ${controlPanel ? 'px-2 py-3' : 'px-3 py-4'}  mb-2 md:w-auto md:mb-0  border-b-1 border-(--border-color) hover:cursor-pointer hover:border-gray-800 ${status === 'Completed' ? 'border-b-gray-800' : ''}`}
          onClick={() => getStatusFilterData('Completed')}
        >
          <div
            className={`${controlPanel ? 'h-3 w-3' : 'h-5 w-5 mr-1'} rounded-full border border-green-600  p-[1px]`}
          >
            <div className="h-full w-full rounded-full bg-(--success-color)"></div>
          </div>
          <p
            className={` group-hover:text-gray-800  ${controlPanel ? 'text-xs ' : 'text-base'}  ${status === 'Completed' ? 'text-gray-800' : 'text-gray-500'}`}
          >
            Completed
          </p>
          {/* <span className="absolute bg-black text-white w-4 h-4 text-xs rounded-full leading-4 text-center right-0 -top-1">
            {' '}
            10
          </span> */}
        </div>
        <div
          className={`group flex items-center gap-1 md:w-auto border-(--border-color) border-b-1 ${controlPanel ? 'px-2 py-3' : 'px-3 py-4'}  hover:cursor-pointer hover:border-b-gray-800   ${status === 'In Progress' ? 'border-b-gray-800' : ''}`}
          onClick={() => getStatusFilterData('In Progress')}
        >
          <div
            className={`${controlPanel ? 'h-3 w-3' : 'h-5 w-5 mr-1'} rounded-full border border-(--warning-color)  p-[1px]`}
          >
            <div className="h-full w-full rounded-full bg-(--warning-color)"></div>
          </div>
          <p
            className={`group-hover:text-gray-800  ${controlPanel ? 'text-xs ' : 'text-base'}  ${status === 'In Progress' ? 'text-gray-800' : 'text-gray-500 '}`}
          >
            In Progress
          </p>
        </div>
        {/* </div> */}
        {/* <div className="md:flex md:gap-4"> */}
        <div
          className={`group flex items-center gap-1 mb-2 md:w-auto md:mb-0 border-b-1 border-(--border-color) ${controlPanel ? 'px-2 py-3' : 'px-3 py-4'}  hover:cursor-pointer hover:border-gray-700 ${status === 'New' ? 'border-gray-700' : ''}`}
          onClick={() => getStatusFilterData('New')}
        >
          <div
            className={`${controlPanel ? 'h-3 w-3' : 'h-5 w-5 mr-1'} rounded-full border border-gray-500  p-[1px]`}
          >
            <div className="h-full w-full rounded-full bg-gray-500"></div>
          </div>
          <p
            className={` group-hover:text-gray-800  ${controlPanel ? 'text-xs ' : 'text-base'}  ${status === 'New' ? 'text-gray-800' : 'text-gray-500'}`}
          >
            New
          </p>
        </div>
        <div
          className={`group flex items-center gap-1 md:w-auto border-b-1 border-(--border-color) ${controlPanel ? 'px-2 py-3' : 'px-3 py-4'}  hover:cursor-pointer  hover:border-b-gray-800 ${status === 'Skipped' ? 'border-b-gray-800' : ''}`}
          onClick={() => getStatusFilterData('Skipped')}
        >
          <div
            className={`${controlPanel ? 'h-3 w-3' : 'h-5 w-5 mr-1'} rounded-full border border-(--danger-color)  p-[1px]`}
          >
            <div className="h-full w-full rounded-full bg-(--danger-color)"></div>
          </div>
          <p
            className={`group-hover:text-gray-800 ${controlPanel ? 'text-xs' : 'text-base'} ${status === 'Skipped' ? 'text-gray-800' : 'text-gray-500 '}`}
          >
            Skipped
          </p>
        </div>
        {/* </div> */}
        {setStatus && (
          // <div className="md:flex ">
          <div
            className={`flex items-center gap-1 mb-2 md:w-auto md:mb-0 border-b-1 border-(--border-color) ${controlPanel ? 'px-2 py-3' : 'px-3 py-4 mr-1'}  hover:cursor-pointer hover:border-b-gray-800`}
            onClick={() => setStatus('')}
          >
            {/* <div className="h-6 w-6 border border-gray-400 rounded-full p-[2px]">
              <div className="h-full w-full rounded-full bg-gray-500"></div>
            </div> */}
            <p
              className={`text-gray-500 hover:text-gray-800  ${controlPanel ? 'text-xs' : 'text-base'}`}
            >
              Reset
            </p>
          </div>
          // </div>
        )}
      </div>
    </>
  );
}

export default Index;
