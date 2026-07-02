import { useEffect, useState } from 'react';
import {
  CalendarCheck2,
  CircleCheckBig,
  CircleDot,
  CircleOff,
  ClipboardList,
  Clock3,
  Construction,
  FileCheck,
  Megaphone,
  Package,
  Wallet,
} from 'lucide-react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import type { AppDispatch, RootState } from '../../store';
import { fetchSlaTasks } from '../../store/TaskWiseDetailsSlice';

import InfoBlock from '../../components/InfoBlock/Index';
import ProjectDetails from '../../components/ProjectDetails/Index';
import MileStoneWorkFlow from '../../components/MileStoneWorkFlow/Index';
import Loader from '../../components/Loader/Index';
import Title from '../../components/Title/Index';

import { mileStone } from '../../utils';
import type { TaskStatusCount } from '../../Types';

function Index() {
  const [status, setStatus] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();

  const { loading, data } = useSelector((state: RootState) => state.slaTasks);
  function getStatusFilterData(value: string) {
    setStatus(value);
  }
  const {
    filterMilestones: initialTrackerData,
    percentageOfmilesStones: percentageOfInitialTracker,
    mileStoneName: initialTracker,
  } = mileStone(data ?? [], 'Initiate Tracker', status);
  const {
    filterMilestones: inventoryPricingData,
    percentageOfmilesStones: percentageOfInventoryPricing,
    mileStoneName: inventoryPricing,
  } = mileStone(data ?? [], 'Inventory & Pricing Readiness', status);
  const {
    filterMilestones: marketingReadinessData,
    percentageOfmilesStones: percentageOfMarketReadiness,
    mileStoneName: marketingReadiness,
  } = mileStone(data ?? [], 'Marketing Readiness', status);

  const {
    filterMilestones: financialReadinessData,
    percentageOfmilesStones: percentageOfFinancialReadiness,
    mileStoneName: financialReadiness,
  } = mileStone(data ?? [], 'Financial Readiness', status);

  const {
    filterMilestones: spaReadinessData,
    percentageOfmilesStones: percentageOfspaReadiness,
    mileStoneName: spaReadiness,
  } = mileStone(data ?? [], 'SPA Readiness', status);

  const {
    filterMilestones: testBookingReadinessData,
    percentageOfmilesStones: percentageOfTestBookingReadiness,
    mileStoneName: testBookingReadiness,
  } = mileStone(data ?? [], 'Test Booking Readiness', status);

  const taskStatus = data?.reduce<TaskStatusCount>(
    (acc, item) => {
      acc[item.TaskStatus] = (acc[item.TaskStatus] || 0) + 1;
      return acc;
    },
    { Completed: 0, 'In progress': 0, New: 0, Skipped: 0 },
  ) ?? { Completed: 0, 'In progress': 0, New: 0, Skipped: 0 };

  const clusterPercentage = (taskStatus.Completed / 42) * 100;

  // console.log(clusterPercentage, 'percentage');

  useEffect(() => {
    if (id) {
      dispatch(fetchSlaTasks(id));
    }
  }, [dispatch]);
  if (loading) {
    return <Loader />;
  }

  return (
    <div className="my-9">
      <Title heading={'Task Wise Details'} />
      <ProjectDetails />
      <div className="mb-9 flex gap-6 flex-col lg:flex-row md:flex-wrap">
        <InfoBlock
          Icon={CircleCheckBig}
          title={'Cluster Readiness'}
          value={`${clusterPercentage.toFixed(2)}% `}
          IconColor="text-blue-700"
          info={'On Track'}
        />
        <InfoBlock
          Icon={ClipboardList}
          title="Completed Steps"
          value={`${taskStatus.Completed}/42`}
          IconColor="text-green-700"
        />
        <InfoBlock
          Icon={Clock3}
          title="In Progess"
          value={taskStatus['In progress']}
          IconColor="text-[#f59e0b]"
          info={'Steps'}
        />
        <InfoBlock
          Icon={CircleDot}
          title="New"
          value={taskStatus.New}
          IconColor="text-gray-500"
          info={'Steps'}
        />

        <InfoBlock
          Icon={CircleOff}
          title="Skipped"
          value={taskStatus.Skipped}
          IconColor="text-red-500"
          info={'Steps'}
        />
      </div>
      <div className="flex justify-start gap-4 items-center mb-4 px-4 text-wrap ">
        <div className="md:flex md:gap-4">
          <div
            className={`group flex items-center gap-3 mb-2 md:w-auto md:mb-0 border border-(--gold-accent) px-2 py-1 rounded-[20px] hover:cursor-pointer hover:text-white hover:bg-(--gold-accent) ${status === 'Completed' ? 'bg-(--gold-accent) text-white' : ''}`}
            onClick={() => getStatusFilterData('Completed')}
          >
            <div className="h-6 w-6 border border-gray-400 rounded-full p-[2px] group-hover:border-white">
              <div className="h-full w-full rounded-full bg-(--success-color)"></div>
            </div>
            <p className="text-base lg:text-base">Completed</p>
          </div>
          <div
            className={`group flex items-center gap-3 md:w-auto border border-(--gold-accent) px-2 py-1 rounded-[20px] hover:cursor-pointer hover:text-white hover:bg-(--gold-accent) ${status === 'In progress' ? 'bg-(--gold-accent) text-white' : ''}`}
            onClick={() => getStatusFilterData('In progress')}
          >
            <div className="h-6 w-6 border border-gray-400 rounded-full p-[2px] group-hover:border-white">
              <div className="h-full w-full rounded-full bg-(--warning-color)"></div>
            </div>
            <p className="text-base lg:text-base">In Progress</p>
          </div>
        </div>
        <div className="md:flex md:gap-4">
          <div
            className={`group flex items-center gap-3 mb-2 md:w-auto md:mb-0 border border-(--gold-accent) px-2 py-1 rounded-[20px] hover:cursor-pointer hover:text-white hover:bg-(--gold-accent) ${status === 'New' ? 'bg-(--gold-accent) text-white' : ''}`}
            onClick={() => getStatusFilterData('New')}
          >
            <div className="h-6 w-6 border border-gray-400 rounded-full p-[2px] group-hover:border-white">
              <div className="h-full w-full rounded-full bg-gray-500"></div>
            </div>
            <p className="text-base lg:text-base">New</p>
          </div>
          <div
            className={`group flex items-center gap-3 md:w-auto border border-(--gold-accent) px-2 py-1 rounded-[20px] hover:cursor-pointer hover:text-white hover:bg-(--gold-accent) ${status === 'Skipped' ? 'bg-(--gold-accent) text-white' : ''}`}
            onClick={() => getStatusFilterData('Skipped')}
          >
            <div className="h-6 w-6 border border-gray-400 rounded-full p-[2px] group-hover:border-white">
              <div className="h-full w-full rounded-full bg-(--danger-color)"></div>
            </div>
            <p className="text-base lg:text-base">Skipped</p>
          </div>
        </div>
        <div className="md:flex md:gap-4">
          <div
            className="flex items-center gap-3 mb-2 md:w-auto md:mb-0 border border-(--gold-accent) px-3 py-1 rounded-[20px] hover:text-white hover:cursor-pointer hover:bg-(--gold-accent)"
            onClick={() => setStatus('')}
          >
            {/* <div className="h-6 w-6 border border-gray-400 rounded-full p-[2px]">
              <div className="h-full w-full rounded-full bg-gray-500"></div>
            </div> */}
            <p className="text-base lg:text-base">Reset</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-9">
          <div className="">
            <MileStoneWorkFlow
              title={initialTracker}
              percentage={percentageOfInitialTracker}
              steps={initialTrackerData}
              Icon={ClipboardList}
              // textColor="text-gray-600"
              // bgColor="bg-gray-600"
              // bgLightColor="bg-gray-200"
              // tagColor="bg-gray-100"
              // borderColor="border-gray-700"
              // mileStoneNo={1}
            />
            <MileStoneWorkFlow
              title={inventoryPricing}
              percentage={percentageOfInventoryPricing}
              steps={inventoryPricingData}
              Icon={Package}
            />
            <MileStoneWorkFlow
              title={marketingReadiness}
              percentage={percentageOfMarketReadiness}
              steps={marketingReadinessData}
              Icon={Megaphone}
            />
            <MileStoneWorkFlow
              title={financialReadiness}
              percentage={percentageOfFinancialReadiness}
              steps={financialReadinessData}
              Icon={Wallet}
            />
            <MileStoneWorkFlow
              title={spaReadiness}
              percentage={percentageOfspaReadiness}
              steps={spaReadinessData}
              Icon={FileCheck}
            />
            <MileStoneWorkFlow
              title={testBookingReadiness}
              percentage={percentageOfTestBookingReadiness}
              steps={testBookingReadinessData}
              Icon={CalendarCheck2}
            />
          </div>
        </div>
        <div className="col-span-12 mb-6 lg:col-span-3 md:mb-0">
          <div className="h-96  rounded-[20px] flex flex-col justify-center items-center bg-white border border-(--border-color)">
            <Construction
              color="#212121"
              size={60}
              strokeWidth={1}
              className="mb-4"
            />
            <p className="text-(--primary-color)">
              AI Integration is in progress
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
