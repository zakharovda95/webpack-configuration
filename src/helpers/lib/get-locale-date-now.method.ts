export const getLocaleDateNow = (locale: string): string => {
  const date: Date = new Date();
  return new Intl.DateTimeFormat(locale).format(date);
};
