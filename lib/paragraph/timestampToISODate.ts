export function timestampToISODate(timestamp: string): string {
  return new Date(parseInt(timestamp, 10)).toISOString();
}
