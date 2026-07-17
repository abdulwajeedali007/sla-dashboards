import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch, type RootState } from '../../store';
import { fetchcalendarLaunch } from '../../store/ClusterCalendarLaunchSlice';

import ClusterOverview from '../../components/ClusterOverview/Index';
import InfoBlock from '../../components/InfoBlock/Index';
import FormFilter from '../../components/Forms/Index';
import Loader from '../../components/Loader/Index';
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
    (state: RootState) => state.calendarLaunch,
  );

  function handleApplyClickButton() {
    setAppliedFilter(selected);
  }
  const projectlevelDetails = clusterOverviewDetails((data && data) ?? []);

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
    dispatch(fetchcalendarLaunch());
  }, [dispatch]);

  if (loading) {
    return <Loader />;
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
        />
        <InfoBlock
          Icon={Boxes}
          title={'Clusters'}
          value={projectlevelDetails.clusters}
          IconColor="text-blue-700"
        />
        <InfoBlock
          Icon={House}
          title="Total Units"
          value={projectlevelDetails.totalUnits}
          IconColor="text-gray-600"
        />
        <InfoBlock
          Icon={KeyRound}
          title="Units Sold"
          value={projectlevelDetails.unitsSold}
          IconColor="text-green-600"
        />
      </div>
      <div className="bg-white rounded-[20px] lg:p-6 p-3 border border-(--border-color)">
        <FormFilter
          selected={selected}
          setSelected={setSelected}
          handleApply={handleApplyClickButton}
          handleReset={handleResetClickButton}
        />

        {timelineData && timelineData.length === 0 ? (
          <p className="flex h-screen justify-center items-start font-bold">
            No Data Found!
          </p>
        ) : (
          <>
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
