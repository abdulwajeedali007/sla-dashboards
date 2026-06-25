export const departmentWiseSLADrillDownRequestBody = ({
  id,
  name,
}: {
  id: string;
  name: string;
}) => {
  return {
    query: {
      select: [
        {
          field: 'TaskName',
        },
        {
          field: 'CaseID',
        },
        {
          field: 'TaskStartDate',
        },
        {
          field: 'TaskEndDate',
        },
        {
          field: 'LastUpdatedBy',
        },
      ],
    },
    dataViewParameters: {
      //   CaseID: 'SLT-1127',
      //   DepartmentName: 'Development and Concepts',
      CaseID: id,
      DepartmentName: name,
    },
    useExtendedTimeout: true,
    includeTotalCount: true,
    includeTotalCountLimit: 5000,
  };
};
