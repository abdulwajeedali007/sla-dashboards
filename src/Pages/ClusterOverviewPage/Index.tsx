import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch, type RootState } from '../../store';
import { fetchcalenderLaunch } from '../../store/ClusterCalenderLaunchSlice';

import ClusterOverview from '../../components/ClusterOverview/Index';
import InfoBlock from '../../components/InfoBlock/Index';
import FormFilter from '../../components/Forms/Index';
import Title from '../../components/Title/Index';

import {
  clusterOverviewDetails,
  getFilterFormOptions,
  getYears,
} from '../../utils';

import type { formStateType } from '../../Types';
import { Boxes, Building2, House, KeyRound } from 'lucide-react';

function Index() {
  const { currentYear } = getYears();
  const [selected, setSelected] = useState<formStateType>({
    Year: currentYear,
    ProjectType: 'All',
    ClusterType: 'All',
    ClusterRegion: 'United Arab Emirates',
  });

  const [appliedFilter, setAppliedFilter] = useState<formStateType>({
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
  const projectlevelDetails = clusterOverviewDetails((data && data) ?? []);
  console.log(projectlevelDetails);

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
  }, [dispatch]);

  if (loading) {
    return (
      <p className="flex h-screen justify-center items-center text-[28px] text-(--primary-color) font-extralight tracking-widest">
        LOADING
      </p>
    );
  }

  return (
    <div className="my-9">
      <Title heading={'Cluster Overview'} />
      <div className="mb-9 flex gap-6 flex-col lg:flex-row">
        <InfoBlock
          Icon={Building2}
          title="Projects"
          value={projectlevelDetails.totalProjects.size}
          IconColor="text-[#8e2157]"
          // border
          // colSpan={3}
        />
        <InfoBlock
          Icon={Boxes}
          title={'Clusters'}
          value={projectlevelDetails.clusters}
          IconColor="text-blue-700"
          // border
          // colSpan={3}
        />
        <InfoBlock
          Icon={House}
          title="Total Units"
          value={projectlevelDetails.totalUnits}
          IconColor="text-gray-600"
          // border
          // colSpan={3}
        />
        <InfoBlock
          Icon={KeyRound}
          title="Units Sold"
          value={projectlevelDetails.unitsSold}
          IconColor="text-green-600"
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
        {/* </div> */}
        {/* <div className="flex gap-4 justify-end items-center mb-4">
        <div className="flex items-center gap-2">
          <p className="bg-yellow-500  h-3 w-10 rounded"></p>
          <p className="text-xs sm:text-base">Marketing Ready</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="bg-green-700  h-3 w-10 rounded"></p>
          <p className="text-xs sm:text-base">Booking Ready</p>
        </div>
      </div> */}

        {timelineData && timelineData.length === 0 ? (
          <p className="flex h-screen justify-center items-start font-bold">
            No Data Found!
          </p>
        ) : (
          <>
            {/* <div className="mt-10 mb-2">
            <p className="flex items-center gap-2 text-gray-500 text-sm">
              Click! Get more details about cluster.
            </p>
          </div> */}
            <div className="">
              {data && <ClusterOverview timelineTasks={timelineData} />}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Index;
