export const valuesToMask = (month: number, year: number, lang?: string): string => {
  const monthNum = month + 1;
  const monthVal = monthNum < 10 ? '0' + monthNum : monthNum;
  const yearVal = year.toString().slice(2);
  if (lang == 'ja') {
    return yearVal + '/' + monthVal;
  }
  return monthVal + '/' + yearVal;
};

export const valuesFromMask = (maskedValue: string): [number, number] => {
  const [monthVal, yearVal] = maskedValue.split('/');

  const rawMonth = parseInt(monthVal);
  const monthNum = rawMonth > 12 ? 12 : (rawMonth == 0 ? 1 : rawMonth);
  const month = monthNum - 1;

  // TODO: make base dynamic
  const year = 2000 + parseInt(yearVal);

  return [month, year];
};
