"use client";
import { ResponsivePie, MayHaveLabel, PieSvgProps } from "@nivo/pie";
import { ResponsiveProps, WithChartRef } from "@nivo/core";

export default function MyResponsivePie<RawDatum extends MayHaveLabel>(
  props: WithChartRef<ResponsiveProps<PieSvgProps<RawDatum>>, SVGSVGElement>
) {
  const { data, ...rest } = props;
  return <ResponsivePie {...rest} data={data} />;
}
