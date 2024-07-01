export type StatisticsResponse = {
  data: StatisticsKV[];
};

export type StatisticsKV = {
  metric: string;
  value: number;
};
