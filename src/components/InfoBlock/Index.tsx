interface infoBoxTypes {
  Icon?: any;
  title?: string;
  value?: number | string;
  IconColor?: string;
  info?: string;
  IconBg?: string;
  titleColor?: string;
  ValueColor?: string;
}

function Index({
  Icon,
  title,
  titleColor,
  value,
  IconColor,
  IconBg,
  ValueColor,
  info,
  // border,
}: infoBoxTypes) {
  //   let updateValue = typeof value != 'number' ? `AED ${value}B` : value;
  return (
    <div
      className={`flex-1 flex flex-col gap-6 justify-between text-left rounded-[20px] p-5 bg-white border border-(--border-color)`}
    >
      <div className="flex items-center gap-4">
        <div className="bg-(--page-background) w-fit p-2 rounded-[20px]">
          {Icon && (
            <Icon
              className={`${IconColor && IconColor} ${IconBg && IconBg}`}
              size={32}
              strokeWidth={1}
            />
          )}
        </div>
        <h4 className={`text-base  ${titleColor ?? 'text-(--primary-color)'}`}>
          {title && title}
        </h4>
      </div>
      <div className="flex justify-between items-end gap-10">
        <div>
          <h2
            className={`text-[36px] font-medium leading-none ${ValueColor ?? 'text-(--primary-color)'}`}
          >
            {value && value}
          </h2>
          <p className={`text-xs ${info === undefined ? 'hidden' : 'block'}`}>
            {info && info}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Index;
