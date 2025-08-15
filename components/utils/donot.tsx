import { ComputedDatum } from "@nivo/pie";
import { MyResponsivePie as ResponsivePie } from ".";
import { Range } from "@/types";
import Image from "next/image";
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
      color: "#F4F4F7",
    },
  ];

  return (
    <div className="relative size-full">
      <Image
        src="/media/icons/circle.svg"
        alt="circle"
        width={230}
        height={230}
        className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-full"
      />
      <ResponsivePie
        data={donotData}
        innerRadius={0.9}
        cornerRadius={26}
        enableArcLabels={false}
        enableArcLinkLabels={false}
        isInteractive={false}
      />
      <DonotContent>{children}</DonotContent>
    </div>
  );
}

function DonotContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[85%] max-h-[85%] flex items-center justify-center size-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      {children}
    </div>
  );
}
