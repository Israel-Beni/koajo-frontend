import { ComputedDatum } from "@nivo/pie";
import { MyResponsivePie as ResponsivePie } from ".";
import { Range } from "@/types";
type DonutData<
  RawDatum = {
    id: string;
    label: string;
    value: number;
    color: string;
    fill: string;
    hidden?: boolean;
  }
> = Pick<ComputedDatum<RawDatum>, "id" | "label" | "color" | "fill"> & {
  value: Range<0, 100>;
  hidden?: boolean;
};



interface DonotProps {
  data: DonutData;
  children: React.ReactNode;
}

export default function Donot({ data, children }: DonotProps) {
  const donotData: [DonutData, DonutData] = [
    { ...data },
    {
      id: "remaining",
      label: "remaining",
      value: (100 - data.value) as Range<0, 100>,
      color: "#EBEBEB",
      // hidden: true
    },
  ];

  return (
    <div className="relative size-full">
      {/* <div className="absolute inset-0 size-full"> */}
      <ResponsivePie
        data={donotData}
        innerRadius={0.7}
        cornerRadius={26}
        enableArcLabels={false}
        enableArcLinkLabels={false}
        isInteractive={false}
      />
      <DonotContent>
        {children}
      </DonotContent>
    </div>
  );
}

function DonotContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[70%] max-h-[70%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      {children}
    </div>
  );
}
