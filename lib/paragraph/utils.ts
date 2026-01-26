export function timestampToISODate(timestamp: string): string {
  return new Date(parseInt(timestamp, 10)).toISOString();
}

export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}
