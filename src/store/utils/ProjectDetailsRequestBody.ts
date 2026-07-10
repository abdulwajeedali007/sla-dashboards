export const ProjectDetailsRequestBody = (id: string) => {
  console.log(id);
  return {
    query: {
      select: [
        {
          field: 'pyID',
        },
        {
          field: 'ProjectName',
        },
        {
          field: 'SLTBookingLaunchDate',
        },
        {
          field: 'SLTMarketingLaunchDate',
        },
        {
          field: 'SLTProposedNumberOfInventoryUnits',
        },
        {
          field: 'SLTClusterName',
        },
        {
          field: 'ClusterRegion',
        },
      ],
    },
    dataViewParameters: {
      CaseID: 'SLT-1806',
    },
    useExtendedTimeout: true,
    includeTotalCount: true,
    includeTotalCountLimit: 5000,
  };
};
