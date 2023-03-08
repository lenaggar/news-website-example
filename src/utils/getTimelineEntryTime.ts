export function getTimelineDateAndTime(timestamp: string) {
  const dateObj = new Date(timestamp);
  const locale = navigator.language || "en-EU";

  return dateObj.toLocaleString(locale, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}
