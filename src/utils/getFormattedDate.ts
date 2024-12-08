

export function getFormattedDate(language: string) {
  return () => {
    const date = new Date();
    const formatter = new Intl.DateTimeFormat(language, { month: 'short' });
    const month = formatter.format(date);
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };
}
