import { EarningsReportData, EarningsReportItem } from './earnings.types';


export function sortByRev(data: EarningsReportData) {
  if (data.length) {
    data.sort((a,b) => b.revenue - a.revenue)
  }
  return data;
}

export function groupByWeek(data: EarningsReportData): any[] {
  const weeks = [];
  let week = [];
  let dailyEarnings = data.reduce((memo,item: EarningsReportItem) => {
    if (!(memo[item?.date])) {
      memo[item?.date] = []
    };
    memo[item?.date].push(item);
    return memo;
  },{});

  Object.keys(dailyEarnings).forEach((dateKey, index) => {
    if (index % 7 === 0 && index !== 0) {
      weeks.push(week);
      week = [];
    }

    week.push(sortByRev(dailyEarnings[dateKey]));
    //week.push(dailyEarnings[dateKey]);
  });

  // Add the last week if it has any days
  if (week.length > 0) {
    weeks.push(week);
  }

  return weeks;
};


