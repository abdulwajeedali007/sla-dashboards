import { getYear, addYears, subYears, format } from 'date-fns';
import type {
  CalenderClusterData,
  DepartmentReducerResult,
  formStateType,
  SingleDepartmentTypeApi,
  SlaTask,
} from '../Types';
export function mileStone(data: SlaTask[], mileStoneName: string) {
  const readinessMileStonesData =
    data &&
    data
      .filter((milestone) => {
        return (
          milestone.Milestones !== undefined &&
          milestone.Milestones.toLowerCase() === mileStoneName.toLowerCase()
        );
      })
      .sort((a, b) =>
        a.StepNumber.localeCompare(b.StepNumber, undefined, {
          numeric: true,
          sensitivity: 'base',
        }),
      );

  const lengthOfTotalMileStone =
    readinessMileStonesData && readinessMileStonesData.length;

  const completedMileStones =
    readinessMileStonesData &&
    readinessMileStonesData.filter(
      (milestone) => milestone.TaskStatus === 'Completed',
    );
  const lengthOfCompletedMileStones =
    completedMileStones && completedMileStones.length;
  const percentageOfmilesStones = parseInt(
    ((lengthOfCompletedMileStones / lengthOfTotalMileStone) * 100).toFixed(2),
  );

  return { readinessMileStonesData, percentageOfmilesStones, mileStoneName };
}

// GET YEARS

export function getYears() {
  const currentYear = getYear(new Date());

  const years = [
    getYear(subYears(new Date(), 2)),
    getYear(subYears(new Date(), 1)),
    currentYear, // current
    getYear(addYears(new Date(), 1)),
    getYear(addYears(new Date(), 2)),
  ];
  return { years, currentYear };
}

// GET PROJECT NAMES
export function getProjectNames(data: CalenderClusterData[], Year: number) {
  const selecteYearProjects = data
    .filter((item) => item.SLTProjectName)
    .filter(
      (item) =>
        parseInt(item.SLTMarketingLaunchDate?.split('-')[0] ?? '0') === Year &&
        parseInt(item.SLTBookingLaunchDate?.split('-')[0] ?? '0') === Year,
    );
  // const projectNames = selecteYearProjects.reduce<string[]>((acc, item) => {
  //   if (item.SLTProjectName && !acc.includes(item.SLTProjectName)) {
  //     acc.push(item.SLTProjectName);
  //   }
  //   return acc;
  // }, []);
  return [...new Set(selecteYearProjects.map((item) => item.SLTProjectName))];
  // return projectNames;
}

// GET TASKS NAMES
export function getTaskNames(
  data: CalenderClusterData[],
  selectedProjectName: string,
) {
  const selectedProject = data.filter(
    (item) => item.SLTProjectName === selectedProjectName,
  );
  const taskNames = selectedProject.reduce<string[]>((acc, item) => {
    if (item.SLTProjectName && !acc.includes(item.SLTClusterName)) {
      acc.push(item.SLTClusterName);
    }
    return acc;
  }, []);
  return taskNames;
}

// GET REGION NAMES
export function getRegionNames(data: CalenderClusterData[]) {
  const selectedProject = data.filter(
    (item) =>
      item.SLTProjectName != null &&
      item.SLTClusterName != null &&
      item.ClusterRegion != null,
  );
  const taskNames = selectedProject.reduce<string[]>((acc, item) => {
    if (item.SLTProjectName && !acc.includes(item.ClusterRegion)) {
      acc.push(item.ClusterRegion);
    }
    return acc;
  }, []);
  return taskNames;
}

// CLUSTER OVERVIEW PROJECT & CLUSTER DETAILS
export function clusterOverviewDetails(data: CalenderClusterData[]) {
  const totalProjects = new Set<string>();

  const projectDetails =
    data &&
    data?.reduce(
      (acc, item) => {
        if (
          item.SLTProjectName != null &&
          item.SLTProjectName != undefined &&
          item.SLTClusterName != null &&
          item.SLTClusterName != undefined &&
          !totalProjects.has(item.SLTProjectName)
        ) {
          totalProjects.add(item.SLTProjectName);
        }
        if (
          item.SLTProjectName != null &&
          item.SLTProjectName != undefined &&
          item.SLTClusterName != null &&
          item.SLTClusterName != undefined
        ) {
          acc['clusters'] += 1;
        }
        if (
          item.SLTProjectName != null &&
          item.SLTProjectName != undefined &&
          item.SLTClusterName != null &&
          item.SLTClusterName != undefined &&
          item.SLTProposedNumberOfInventoryUnits != null &&
          item.SLTProposedNumberOfInventoryUnits != undefined
        ) {
          acc['totalUnits'] += item.SLTProposedNumberOfInventoryUnits;
        }
        return acc;
      },
      {
        clusters: 0,
        totalUnits: 0,
        unitsSold: 0,
      },
    );
  return { ...projectDetails, totalProjects };
}

// FORM FILTERS
export function getFilterFormOptions(
  data: CalenderClusterData[],
  appliedFilter: formStateType,
  currentYear: number,
) {
  return (
    data &&
    data
      .filter((item) => item.SLTProjectName)
      .filter((item) => {
        const yearMatch =
          appliedFilter.Year === currentYear ||
          (parseInt(item.SLTMarketingLaunchDate?.split('-')[0] ?? '0') ===
            Number(appliedFilter.Year) &&
            parseInt(item.SLTBookingLaunchDate?.split('-')[0] ?? '0') ===
              Number(appliedFilter.Year));

        const projectMatch =
          appliedFilter.ProjectType === 'All' ||
          item.SLTProjectName === appliedFilter.ProjectType;

        const clusterMatch =
          appliedFilter.ClusterType === 'All' ||
          item.SLTClusterName === appliedFilter.ClusterType;

        const clusterRegionMatch =
          appliedFilter.ClusterRegion === 'All' ||
          item.ClusterRegion === appliedFilter.ClusterRegion;

        return yearMatch && projectMatch && clusterMatch && clusterRegionMatch;
      })
  );
}

// CURRENT DATE
// const now = new Date();
export const currentDate = format(new Date(), 'yyyy-MM-dd ');

// Departmentwise SLA

export const departmentWiseSLADetalis = (data: SingleDepartmentTypeApi[]) => {
  const result = data.reduce<DepartmentReducerResult>(
    (acc, item) => {
      // ---------------------
      // Overall status counts
      // ---------------------

      acc.statusData[item.TaskStatus] =
        (acc.statusData[item.TaskStatus] || 0) + 1;

      if (Number(item.TaskSLABreachedDays) > 0) {
        acc.statusData.TaskSLABreachedDays += 1;
      }

      // ---------------------
      // Department lookup
      // ---------------------

      let depObj = acc.departmentMap[item.DepartmentName];

      if (!depObj) {
        depObj = {
          DepartmentName: item.DepartmentName,
          totalSteps: 0,
          Completed: 0,
          InProgress: 0,
          New: 0,
          // Skipped: 0,
          TaskSLABreachedDays: 0,
          caseId: item.CaseID,
        };

        acc.departmentMap[item.DepartmentName] = depObj;

        // acc.totalSteps += 1;
      }

      // ---------------------
      // Department totals
      // ---------------------

      depObj.totalSteps += 1;
      // acc.totalSteps += depObj.totalSteps;

      switch (item.TaskStatus) {
        case 'Completed':
          depObj.Completed += 1;
          break;

        case 'In progress':
          depObj.InProgress += 1;
          break;

        case 'New':
          depObj.New += 1;
          break;
        // case 'Skipped':
        //   depObj.Skipped += 1;
        //   break;
      }

      if (Number(item.TaskSLABreachedDays) > 0) {
        depObj.TaskSLABreachedDays += 1;
      }
      // overall deparment stepcounts

      acc.statusData.overallSteps += 1;

      return acc;
    },
    {
      statusData: {
        Completed: 0,
        'In progress': 0,
        New: 0,
        TaskSLABreachedDays: 0,
        overallSteps: 0,
      },
      // overallSteps: 0,

      departmentMap: {},
    },
  );

  return {
    overallResultStatus: result.statusData,

    // overallSteps: result.overallSteps,

    departmentWiseTableData: Object.values(result.departmentMap),
  };
};

// STATUS BG COLOR
export let getStatusColor = (taskStatus: string) => {
  return taskStatus === 'Completed'
    ? 'bg-(--success-color)'
    : taskStatus === 'In progress'
      ? 'bg-(--warning-color)'
      : taskStatus === 'Skipped'
        ? 'bg-(--danger-color)'
        : 'bg-gray-400';
};
