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
import ProjectDetails from '../../components/ProjectDetails/Index';
import Loader from '../../components/Loader/Index';
import Title from '../../components/Title/Index';

import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../store';
import { departmentWiseSLADetalis } from '../../utils';
import { useEffect } from 'react';
import { fetchdepartmentwisedetails } from '../../store/DepartmentWiseSLASlice';

function Index() {
  const dispatch = useDispatch<AppDispatch>();

  const { data, loading } = useSelector(
    (state: RootState) => state.departmentwiseSla,
  );

  const { data: drilldownDetails, loading: load } = useSelector(
    (state: RootState) => state.departmentwiseSlaDrilldown,
  );

  const { overallResultStatus, departmentWiseTableData } =
    departmentWiseSLADetalis(data ?? []);

  useEffect(() => {
    dispatch(fetchdepartmentwisedetails('SLT-1199'));
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="my-9">
      <Title heading="Department wise SLA" />
      <ProjectDetails />
      <div className="mb-9 flex gap-6 flex-col lg:flex-row md:flex-wrap">
        <InfoBlock
          Icon={Tags}
          title={'Total Departments'}
          ValueColor="text-black"
          value={Number(departmentWiseTableData.length)}
          IconColor="text-black"
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
          // colSpan={2}
        />
      </div>
      {/* <div className="flex justify-start gap-5 items-center mb-6 px-4 flex-wrap md:flex-nowrap ">
        <div className="md:flex md:gap-4 ">
          <div className="flex items-center gap-2 mb-2 md:w-auto md:mb-0">
            <div className="h-6 w-6 border border-gray-400 rounded-full p-[2px]">
              <div className="h-full w-full rounded-full bg-gray-500"></div>
            </div>
            <p className="text-base">New</p>
          </div>
          <div className="flex items-center gap-2 md:w-auto">
            <div className="h-6 w-6 border border-gray-400 rounded-full p-[2px]">
              <div className="h-full w-full rounded-full bg-green-700"></div>
            </div>
            <p className="text-base">Completed</p>
          </div>
        </div>
        <div className="md:flex md:gap-4">
          <div className="flex items-center gap-2 mb-2 md:w-auto md:mb-0">
            <div className="h-6 w-6 border border-gray-400 rounded-full p-[2px]">
              <div className="h-full w-full rounded-full bg-yellow-500"></div>
            </div>
            <p className="text-base">In Progress</p>
          </div>
          <div className="flex items-center gap-3  md:w-auto">
          <p className="h-3 w-8 rounded bg-yellow-600"></p>
          <p className="text-base">SLA Delayed</p>
        </div> 
          <div className="flex items-center gap-2 md:w-auto">
            <div className="h-6 w-6 border border-gray-400 rounded-full p-[2px]">
              <div className="h-full w-full rounded-full bg-red-500"></div>
            </div>
            <p className="text-base">SLA Breached</p>
          </div>
        </div>

        <div className="flex items-center gap-3 w-1/2 md:w-auto">
          <p className="h-3 w-8 rounded bg-blue-500"></p>
          <p className="text-base">Auto Complete</p>
        </div> 
      </div> */}
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
