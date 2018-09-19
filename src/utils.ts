import Translator from './Translator';

export const valuesToMask = (month: number, year: number, translate?: Translator): string => {
  const t = translate || new Translator();
  const monthNum = month + 1;
  const monthVal = monthNum < 10 ? '0' + monthNum : monthNum;
  let shortYear = year.toString().slice(2);

  switch(t.dateFormat()) {
    case('YY/MM'):
      return shortYear + '/' + monthVal;
    case('MM/YYYY'):
      return monthVal + '/' + year;
    case('YYYY/MM'):
      return year + '/' + monthVal;
    case('MM/YY'):
    default:
      return monthVal + '/' + shortYear;
  }
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
