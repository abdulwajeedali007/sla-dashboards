import { useMemo, useState } from 'react';

import { fetchcalenderLaunch } from '../../store/ClusterCalenderLaunchSlice';

import Timeline from '../../components/Timeline/Index';
import InfoBlock from '../../components/InfoBlock/Index';
import FormFilter from '../../components/Forms/Index';
import Title from '../../components/Title/Index';

import {
  CalculatorIcon,
  CheckSquare,
  Globe,
  TriangleAlert,
} from 'lucide-react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, type RootState } from '../../store';
import type { formStateType } from '../../Types';
import { Link } from 'react-router';
import { getYears, getFilterFormOptions } from '../../utils';

function Index() {
  const { currentYear } = getYears();
  const [selected, setSelected] = useState<formStateType>({
    Year: currentYear,
    ProjectType: 'All',
    ClusterType: 'All',
    ClusterRegion: 'United Arab Emirates',
  });

  const [appliedFilter, setAppliedFilter] = useState({
    Year: currentYear,
    ProjectType: 'All',
    ClusterType: 'All',
    ClusterRegion: 'United Arab Emirates',
  });
  const dispatch = useAppDispatch();
  const { data, loading } = useSelector(
    (state: RootState) => state.calenderLaunch,
  );
  function handleApplyClickButton() {
    setAppliedFilter(selected);
  }

  const timelineData = useMemo(() => {
    if (!data) return [];
    return data ? getFilterFormOptions(data, appliedFilter, currentYear) : [];
  }, [data, appliedFilter]);

  function handleResetClickButton() {
    const defaultFilter = {
      Year: currentYear,
      ProjectType: 'All',
      ClusterType: 'All',
      ClusterRegion: 'All',
    };

    setSelected(defaultFilter);
    setAppliedFilter(defaultFilter);
  }

  useEffect(() => {
    dispatch(fetchcalenderLaunch());
  }, []);

  if (loading) {
    return (
      <p className="flex h-screen justify-center items-center text-[28px] text-(--primary-color) font-extralight tracking-widest">
        LOADING
      </p>
    );
  }

  return (
    <div className="my-9">
      <Title heading={'Cluster launch calender'} />
      <div className="mb-9 flex gap-6 flex-col lg:flex-row">
        {/* <div className="col-span-3"></div> */}
        <InfoBlock
          Icon={Globe}
          title="Overall Clusters Getting Launched"
          value={42}
          IconColor="text-[#8e2157]"
          // border
          // colSpan={3}
        />
        <InfoBlock
          Icon={CalculatorIcon}
          title={'Upcoming Launches'}
          value={23}
          IconColor="text-blue-700"
          // border
          // colSpan={3}
        />
        <InfoBlock
          Icon={CheckSquare}
          title="Ready To Accept Bookings"
          value={10}
          IconColor="text-green-700"
          // border
          // colSpan={3}
        />
        <InfoBlock
          Icon={TriangleAlert}
          title="Delayed Clusters"
          value={2}
          IconColor="text-red-700"
          // border
          // colSpan={3}
        />
      </div>
      <div className="bg-white rounded-[20px] lg:p-6 p-3 border border-(--border-color)">
        <FormFilter
          selected={selected}
          setSelected={setSelected}
          handleApply={handleApplyClickButton}
          handleReset={handleResetClickButton}
        />

        <div>
          {timelineData && timelineData.length === 0 ? (
            <p className="flex h-screen justify-center items-start font-bold">
              No Data Found!
            </p>
          ) : (
            <>
              <div className="flex items-center flex-col justify-between mb-6  md:flex-col lg:flex-row ">
                <div className="flex items-center gap-2 ">
                  <h3 className="text-[22px]  tracking-tight capitalize mb-3 sm:mb-0">
                    Project & Cluster Launch Timeline
                  </h3>
                  {/* <Info className="cursor-pointer" /> */}
                </div>
                <div className="flex gap-4 items-center">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 border border-gray-400 rounded-full p-[2px]">
                      <div className="h-full w-full rounded-full bg-[#3b82f6]"></div>
                    </div>
                    <p className="lg:text-base  text-sm">
                      Marketing Launch Ready
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 border border-gray-400 rounded-full p-[2px]">
                      <div className="h-full w-full rounded-full bg-[#14b8a6]"></div>
                    </div>
                    <p className="lg:text-base  text-sm">
                      Booking Launch Ready
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-(--page-background) px-3  lg:pl-6 py-10 rounded-[20px] mb-6 border border-(--border-color)">
                {data && <Timeline timelineTasks={timelineData} />}
              </div>
            </>
          )}
        </div>
        <div className="flex gap-2 items-center tracking-wide">
          {/* <InfoIcon color="blue" /> */}
          <div>
            <Link to={'/cluster-overview'} className="text-blue-700 underline">
              Click Here{' '}
            </Link>
            <p className="inline">
              to know more about project wise cluster details{' '}
            </p>
          </div>
        </div>
      </div>
      {/* <div className="mt-6 "></div> */}
    </div>
  );
}

export default Index;
