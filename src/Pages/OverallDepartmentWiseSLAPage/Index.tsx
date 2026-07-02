import {
  CircleCheckBig,
  ClipboardList,
  Clock7,
  Tags,
  TriangleAlert,
  User2Icon,
} from 'lucide-react';

import TableSalesTracker from '../../components/TableSalesTracker/Index';
import InfoBlock from '../../components/InfoBlock/Index';
import Loader from '../../components/Loader/Index';
import Title from '../../components/Title/Index';

import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../store';
import { useEffect } from 'react';
import { fectchoverallDepartmentwisesla } from '../../store/overallDepartmentWiseSLASlice';
import { departmentWiseSLADetalis } from '../../utils';

function Index() {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading } = useSelector(
    (state: RootState) => state.overalldepartmentwiseSla,
  );

  const { data: drilldownDetails, loading: load } = useSelector(
    (state: RootState) => state.overalldepartmentwiseSlaDrilldown,
  );

  const { overallResultStatus, departmentWiseTableData } =
    departmentWiseSLADetalis(data ?? []);

  useEffect(() => {
    dispatch(fectchoverallDepartmentwisesla());
  }, [dispatch]);
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="my-9">
      <Title heading="Overall department wise SLA" />
      <div className=" mb-9 flex  gap-2 flex-col lg:flex-row md:flex-wrap sm:gap-5 sm:px-0">
        <InfoBlock
          Icon={Tags}
          title={'Total Departments'}
          ValueColor="text-black"
          value={departmentWiseTableData.length}
          info={'active departments'}
        />
        <InfoBlock
          Icon={ClipboardList}
          title="Total Steps"
          value={overallResultStatus.overallSteps}
          IconColor="text-blue-700"
          info="active steps"
        />
        <InfoBlock
          Icon={CircleCheckBig}
          title="Completed"
          value={overallResultStatus.Completed}
          IconColor="text-green-700"
          info={'Steps'}
        />
        <InfoBlock
          Icon={Clock7}
          title="In Progress"
          value={overallResultStatus['In progress']}
          IconColor="text-[#f59e0b]"
          info={'Steps'}
        />
        <InfoBlock
          Icon={User2Icon}
          title="New"
          value={overallResultStatus.New}
          IconColor="text-gray-700"
          info={'Steps'}
        />

        <InfoBlock
          Icon={TriangleAlert}
          title="SLA Breached"
          value={overallResultStatus.TaskSLABreachedDays}
          IconColor="text-red-500"
          // IconBg="bg-red-500"
          // ValueColor="text-red-500"
          info="Steps"
        />
      </div>

      <div className="bg-white p-3 lg:p-6 rounded-[20px] border border-(--border-color)">
        <TableSalesTracker
          tasks={departmentWiseTableData}
          departmentDetails={{ drilldownDetails, load }}
        />
      </div>
    </div>
  );
}

export default Index;
