function Index() {
  return (
    <>
      <div className="flex justify-start gap-4 items-center mb-4 px-4  ">
        {/* <div className="md:flex md:gap-4"> */}
        <div
          className={`group flex items-center gap-3 mb-2  md:mb-0 border  px-3 py-1 rounded-full`}
        >
          <div className="h-10 w-10 border border-gray-400 rounded-full p-1">
            <div className="h-full w-full rounded-full bg-(--success-color)"></div>
          </div>
          <p className="text-xl font-bold">Completed</p>
        </div>
        <div
          className={`group flex items-center gap-3  border  px-3 py-1.5 rounded-full`}
        >
          <div className="h-10 w-10 border border-gray-400 rounded-full p-1">
            <div className="h-full w-full rounded-full bg-(--warning-color)"></div>
          </div>
          <p className="text-xl font-bold">In Progress</p>
        </div>
        {/* </div> */}
        {/* <div className="md:flex md:gap-4"> */}
        <div
          className={`group flex items-center gap-3 mb-2  md:mb-0 border  px-3 py-1 rounded-full `}
        >
          <div className="h-10 w-10 border border-gray-400 rounded-full p-1">
            <div className="h-full w-full rounded-full bg-gray-400"></div>
          </div>
          <p className="text-xl font-bold">New</p>
        </div>
        <div
          className={`group flex items-center gap-3  border  px-3 py-1.5 rounded-full`}
        >
          <div className="h-10 w-10 border border-gray-400 rounded-full p-1">
            <div className="h-full w-full rounded-full bg-(--danger-color)"></div>
          </div>
          <p className="text-xl font-bold">Skipped</p>
        </div>
        {/* </div> */}
      </div>
    </>
  );
}

export default Index;
