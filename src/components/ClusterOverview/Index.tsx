// import { useMemo } from 'react';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Tooltip,
//   Legend,
//   TimeScale,
// } from 'chart.js';
// import { Bar } from 'react-chartjs-2';
// import 'chartjs-adapter-date-fns';
import { format } from 'date-fns';
// import { getTimelineOptions } from '../Timeline/TImelineConfig';
// import { xAxisBackgroundPlugin } from '../Timeline/TimelinePlugin';
import {
  // flattenTimelineData,
  groupVisibleTaskDetails,
} from '../Timeline/TimelineUtil';
// import TimelineChart from '../Timeline/TimelineChart';
import { Link } from 'react-router';
import type {
  CalendarClusterData,
  TimelineCluster,
  TimelinePhase,
  TimelineProject,
} from '../../Types';
import React from 'react';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Tooltip,
//   Legend,
//   TimeScale,
// );

// const ROW_HEIGHT = 90;

export default function Index({
  timelineTasks,
}: {
  timelineTasks: CalendarClusterData[];
}) {
  // Group the tasks as per the requirement data
  const groupVisibleTasks: TimelineProject[] =
    groupVisibleTaskDetails(timelineTasks);

  // Flatten data as per chart dataset requirment
  // const visibleTasks = useMemo(
  //   () => flattenTimelineData(groupVisibleTasks),
  //   [groupVisibleTasks],
  // );

  // const isMobile = window.innerWidth < 768;
  // const chartHeight = groupVisibleTasks.length * ROW_HEIGHT;

  // const data = {
  //   datasets: [
  //     {
  //       label: 'Timeline',

  //       data: visibleTasks.map((task: any) => ({
  //         x: [new Date(task.startDate), new Date(task.endDate)],

  //         // SAME CLUSTER ROW
  //         y: `${task.projectName}__${task.cluster}`,

  //         phase: task.phase,
  //         statusDate: task.statusDate,
  //       })),

  //       backgroundColor: visibleTasks.map((task: any) =>
  //         task.phase.toLowerCase().includes('booking') ? '#166534' : '#ffc038',
  //       ),

  //       borderRadius: 8,
  //       borderSkipped: false,
  //       barThickness: 12,

  //       grouped: false,
  //     },
  //   ],
  // };

  // ---------------- OPTIONS ----------------
  // const options = getTimelineOptions({
  //   minDate: '2026-01-01',
  //   maxDate: '2026-08-01',
  //   xTicksPadding: 24,
  //   xAxisOffset: true,
  //   isMobile,
  //   tooltipLabel: (context) => {
  //     const raw = context.raw;

  //     return `${raw.phase}: ${format(
  //       raw.x[0],
  //       'dd MMM yyyy',
  //     )} → ${format(raw.x[1], 'dd MMM yyyy')}`;
  //   },
  // });

  return (
    <>
      <div className="rounded-[20px]  bg-white overflow-x-auto border border-(--border-color) custom-scrollbar">
        {/* min-w-[1400px] */}
        <div className="grid grid-cols-12 min-w-[1400px]  w-full max-h-[800px] md:grid md:grid-cols-12 ">
          {/* LEFT TABLE */}
          <table className="w-full col-span-12 border-collapse">
            <thead>
              <tr className="h-[65px] text-center  bg-(--primary-color) text-white text-base ">
                <th className="text-left px-4 font-normal lg:text-base text-sm capitalize boder border-[#f6f3f41a]  w-60">
                  Project / Cluster
                </th>
                <th className="font-normal lg:text-base text-sm capitalize border border-[#f6f3f41a]  px-4">
                  No of Units
                </th>
                <th className="font-normal lg:text-base text-sm capitalize border border-[#f6f3f41a]  px-4">
                  Marketing Launch Dates
                </th>
                <th className="font-normal lg:text-base text-sm capitalize border border-[#f6f3f41a]  px-4">
                  Booking Launch Dates
                </th>
                <th className="font-normal lg:text-base text-sm capitalize border border-[#f6f3f41a]  px-4">
                  Country
                </th>
                <th className="font-normal lg:text-base text-sm capitalize border border-[#f6f3f41a]  px-4">
                  No of Units Sold
                </th>
                <th className="font-normal lg:text-base text-sm capitalize border border-[#f6f3f41a]  px-4">
                  No of Units Remaining
                </th>
                <th className="font-normal lg:text-base text-sm capitalize border border-[#f6f3f41a]  px-4">
                  Price in AED
                </th>
              </tr>
            </thead>

            <tbody>
              {groupVisibleTasks.map((project: TimelineProject) => (
                <React.Fragment key={`project-${project.projectName}`}>
                  {/* Project Header Row */}
                  <tr>
                    <td
                      colSpan={8}
                      className="mb-0 px-4 py-3 font-medium lg:text-base text-sm p-0.5 capitalize bg-(--page-background) text-(--primary-color) tracking-tight "
                    >
                      {project.projectName}
                    </td>
                  </tr>

                  {/* Cluster Rows */}
                  {project.clusters.map((cluster: TimelineCluster) => {
                    const noofunitssold = cluster.clusterUnits
                      ? Math.ceil(Math.random() * 10)
                      : 0;
                    const price =
                      Math.floor(Math.random() * (800 - 500 + 1)) + 500;
                    const noofunitsremaining = cluster.clusterUnits
                      ? Number(cluster?.clusterUnits) - noofunitssold
                      : 0;

                    const marketingPhase = cluster.phases.find(
                      (p: TimelinePhase) => p.phase === 'Marketing Launch Date',
                    );

                    const bookingPhase = cluster.phases.find(
                      (p: TimelinePhase) => p.phase === 'Booking Launch Date',
                    );

                    return (
                      <tr
                        key={cluster.clusterId}
                        className="h-[50px] text-center border border-(--border-color) px-4  text-sm "
                      >
                        <td className="text-left px-6">
                          <Link
                            to={`/task-wise-details/${cluster.clusterCode}`}
                            className="pl-1 text-blue-600 font-base tracking-wider underline"
                          >
                            {cluster.clusterName}
                          </Link>
                        </td>

                        <td>
                          {cluster.clusterUnits ? cluster.clusterUnits : 0}
                        </td>

                        <td>
                          {marketingPhase?.startDate
                            ? format(
                                new Date(marketingPhase.startDate),
                                'dd MMM yyyy',
                              )
                            : '-'}
                        </td>

                        <td>
                          {bookingPhase?.startDate
                            ? format(
                                new Date(bookingPhase.startDate),
                                'dd MMM yyyy',
                              )
                            : '-'}
                        </td>

                        <td>{cluster.clusterRegion}</td>

                        <td>{noofunitssold}</td>

                        <td>{noofunitsremaining}</td>

                        <td>{price} M</td>
                      </tr>
                    );
                  })}
                </React.Fragment>
              ))}
            </tbody>
          </table>

          {/* RIGHT TIMELINE */}
          {/* <div className="w-full bg-white md:col-span-6">
            <TimelineChart
              data={data}
              options={options}
              plugins={[xAxisBackgroundPlugin]}
              height={chartHeight + 110}
            />
          </div> */}
        </div>
      </div>
    </>
  );
}
