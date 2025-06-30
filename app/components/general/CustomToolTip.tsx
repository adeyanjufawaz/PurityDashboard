
type RechartsTooltipEntry = {
  name: string;
  value: number | string;
  color: string;
};


const CustomTooltip = (props: any) => {
  const {payload, label } = props;
  return (
    <div className="rounded-md border border-gray-200 bg-gray-600 text-white shadow-md">
      <div className="bg-black/70 text-white px-3 py-1 rounded-t-md font-semibold text-sm">
        {label}
      </div>
      
      <div className="p-2 space-y-1 bg-black/25 capitalize text-white">
        {payload.map((entry: RechartsTooltipEntry, index: number) => {
            
          return (
            <div
              key={index}
              className="flex items-center gap-2 text-sm "
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: entry.color }}
              />
              <span className="text-white">{entry.name}:</span>
              <span className="font-bold text-white capitalize">{entry.value}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomTooltip;
