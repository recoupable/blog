"use client";

import { format, parseISO } from "date-fns";

interface FormattedDateProps {
  dateString: string;
  formatString?: string;
}

export function FormattedDate({
  dateString,
  formatString = "MMMM dd, yyyy",
}: FormattedDateProps) {
  return (
    <time dateTime={dateString} suppressHydrationWarning>
      {format(parseISO(dateString), formatString)}
    </time>
  );
}
