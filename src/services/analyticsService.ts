export function calculateMetrics(totalRevenue: number, totalUnits: number): number {
  if (totalUnits <= 0) return 0;
  return totalRevenue / totalUnits;
}
export function calculatePricePerSqFt(price: number, sqft: number): number {
  return price / sqft; // Missing sqft !== 0 check!
}
