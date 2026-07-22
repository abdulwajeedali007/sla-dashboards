export const SLADepartmentSingleRequestBody = (id: string) => {
  console.log(id);
  return {
    query: {
      select: [
        {
          field: 'CaseID',
        },
        {
          field: 'DepartmentName',
        },
        {
          field: 'TaskStatus',
        },
        {
          field: 'TaskDueDate',
        },
        {
          field: 'TaskEndDate',
        },
        {
          field: 'TaskSLABreachedDays',
        },
        {
          field: 'pyGUID',
        },
      ],
    },
    dataViewParameters: {
      CaseID: id,
    },
    useExtendedTimeout: true,
    includeTotalCount: true,
    includeTotalCountLimit: 5000,
  };
};
