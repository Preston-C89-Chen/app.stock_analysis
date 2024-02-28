export type CommoditiesData = {
  date: string;
  close: number | string;
  volume: number | string;
  open?: number | string;
  high?: number | string;
  low?: number | string;
  adjClose?: number | string;
  unadjustedVolume?: number | string;
  change?: number | string;
  changePercent?: number | string;
  vwap?: number | string;
  label?: string;
  changeOverTime?: number | string;
}
