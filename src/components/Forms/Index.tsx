import { type Dispatch, type SetStateAction } from 'react';
import Dropdown from './Dropdown/Index';
import type { formStateType } from '../../Types';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store';
import {
  getProjectNames,
  getTaskNames,
  getYears,
  getRegionNames,
} from '../../utils';

type formStateValues = {
  selected: formStateType;
  setSelected: Dispatch<SetStateAction<formStateType>>;
  handleApply: () => void;
  handleReset: () => void;
};

function Index({
  selected,
  setSelected,
  handleApply,
  handleReset,
}: formStateValues) {
  const { data } = useSelector((state: RootState) => state.calendarLaunch);

  const { years } = getYears();
  const projectNames = data ? getProjectNames(data, selected.Year) : [];
  const clusterNames = data ? getTaskNames(data, selected.ProjectType) : [];
  const clusterRegion = data ? getRegionNames(data) : [];

  const handleSelection = (field: string | number, value: string | number) => {
    setSelected((prev) => {
      switch (field) {
        case 'Year':
          return {
            Year: Number(value),
            ProjectType: 'All',
            ClusterType: 'All',
            ClusterRegion: 'All',
          };

        case 'ProjectType':
          return {
            ...prev,
            ProjectType: String(value),
            ClusterType: 'All',
            ClusterRegion: 'All',
          };

        case 'ClusterType':
          return {
            ...prev,
            ClusterType: String(value),
            ClusterRegion: 'All',
          };

        case 'ClusterRegion':
          return {
            ...prev,
            ClusterRegion: String(value),
          };

        default:
          return prev;
      }
    });
  };

  return (
    <>
      <div className="mb-9 flex rounded-[20px] md:gap-10 lg:40 p-8 bg-(--page-background) border border-(--border-color) flex-col items-center justify-between lg:flex-row  ">
        <div className="flex  w-full flex-1 items-center justify-between gap-2 mb-4 flex-col  lg:mb-0 lg:flex-row ">
          <Dropdown
            label={'Year'}
            field="Year"
            values={years}
            // setSelected={setSelected}
            selected={selected.Year}
            onSelect={handleSelection}
          />
          <Dropdown
            label={'Project'}
            field="ProjectType"
            values={['All', ...projectNames]}
            // setSelected={setSelected}
            selected={selected.ProjectType}
            onSelect={handleSelection}
          />
          <Dropdown
            label={'Cluster'}
            field="ClusterType"
            values={['All', ...clusterNames]}
            // setSelected={setSelected}
            selected={selected.ClusterType}
            onSelect={handleSelection}
          />
          <Dropdown
            label={'Country'}
            field="ClusterRegion"
            values={['All', ...clusterRegion]}
            // setSelected={setSelected}
            selected={selected.ClusterRegion}
            onSelect={handleSelection}
          />
        </div>
        <div className="flex gap-4 mt-auto">
          <button
            className="py-3 px-9 border border-(--gold-accent) uppercase text-(--gold-accent) text-base rounded hover:bg-(--gold-accent) hover:text-white cursor-pointer transition  "
            onClick={() => handleReset()}
          >
            Reset
          </button>
          <button
            className="py-3 px-9 border border-(--gold-accent) uppercase  bg-(--gold-accent) text-white text-base rounded hover: hover:opacity-90 cursor-pointer transition  "
            onClick={() => handleApply()}
          >
            Apply
          </button>
        </div>
      </div>
    </>
  );
}

export default Index;
