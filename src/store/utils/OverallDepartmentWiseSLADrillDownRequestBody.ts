export const overalldepartmentWiseSLADrillDownRequestBody = (name: string) => {
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
      DepartmentName: name,
    },
    useExtendedTimeout: true,
    includeTotalCount: true,
    includeTotalCountLimit: 5000,
  };
};
