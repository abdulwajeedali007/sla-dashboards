import { useSelector } from 'react-redux';
import type { RootState } from '../../store';

function Index() {
  const { loading, data } = useSelector(
    (state: RootState) => state.projectDetails,
  );
  return (
    <>
      {data && (
        <div className="w-full bg-white rounded-[20px] mb-9 px-6 lg:py-3 py-6 border border-(--border-color) flex flex-col justify-between lg:flex-row ">
          <div className="flex lg:flex-col items-start lg:border-r-2 border-gray-200 lg:justify-center mb-3 justify-between lg:mb-0 flex-1">
            <p className="font-base text-gray-400 m-0 p-0">Project</p>
            <h3 className="font-semibold lg:tracking-wide">
              {data[0].ProjectName ?? '-'}
            </h3>
          </div>
          <div className="flex  lg:flex-col lg:border-r-2 border-gray-200  lg:justify-center lg:mb-0 mb-3 items-center flex-1">
            <div className="flex lg:flex-col flex-row justify-between lg:text-left lg:w-auto w-full">
              <p className="font-base text-gray-400">Cluster</p>
              <h3 className="font-semibold lg:tracking-wide">
                {data[0].SLTClusterName ?? '-'}
              </h3>
            </div>
          </div>
          <div className="flex  lg:flex-col lg:border-r-2 border-gray-200 lg:justify-center  lg:mb-0  mb-3 items-center flex-1">
            <div className=" flex  lg:flex-col flex-row justify-between lg:text-left lg:w-auto w-full">
              <p className="font-base text-gray-400">Country</p>
              <h3 className="font-semibold lg:tracking-wide">
                {data[0].ClusterRegion ?? '-'}
              </h3>
            </div>
          </div>
          <div className="flex lg:flex-col flex-row lg:border-r-2 border-gray-200  lg:justify-center justify-between lg:mb-0 mb-3 items-center flex-1">
            <div className=" flex  lg:flex-col flex-row justify-between lg:text-left lg:w-auto w-full">
              <p className="font-base text-gray-400">Marketing Launch Date</p>
              <h3 className="font-semibold lg:tracking-wide">
                {data[0].SLTMarketingLaunchDate ?? '-'}
              </h3>
            </div>
          </div>
          <div className="flex  lg:flex-col  mb-4 lg:justify-center lg:mb-0 justify-between items-end flex-1 ">
            <p className="font-base text-gray-400">Booking Launch Date</p>
            <h3 className="font-semibold lg:tracking-wide">
              {data[0].SLTBookingLaunchDate ?? '-'}
            </h3>
          </div>
        </div>
      )}
    </>
  );
}

export default Index;
