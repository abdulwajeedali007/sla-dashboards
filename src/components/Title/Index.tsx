import { currentDate } from '../../utils';

function Index({ heading }: { heading: string }) {
  return (
    <div className="mb-9 flex flex-col justify-between  sm:flex-row sm:px-0 sm:flex-center sm:items-center">
      <div className="flex items-center gap-1 sm:gap-2 sm:flex-row">
        <h2 className="text-(--primary-color)  tracking-tight text-[28px] lg:text-[36px] capitalize font-semibold">
          {heading}
        </h2>
      </div>
      <p className="text-base tracking-wider text-gray-400">{`Last Updated: ${currentDate}`}</p>
    </div>
  );
}

export default Index;
