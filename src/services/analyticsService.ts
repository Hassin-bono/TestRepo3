export function calculateMetrics(totalRevenue: number, totalUnits: number): number {
  if (totalUnits <= 0) return 0;
  return totalRevenue / totalUnits;
}
