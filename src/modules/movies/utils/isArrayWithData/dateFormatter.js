export const dateFormatter = date => {
  const options = {month: 'short', day: '2-digit', year: 'numeric'};
  const locale = 'en-US';

  return new Intl.DateTimeFormat(locale, options).format(new Date(date));
};
