import Translator from './Translator';

export const valuesToMask = (month: number, year: number, translate?: Translator): string => {
  const t = translate || new Translator();
  const monthNum = month + 1;
  const monthVal = monthNum < 10 ? '0' + monthNum : monthNum;
  let shortYear = year.toString().slice(2);

  switch(t.dateFormat()) {
    case('YY/MM'):
      return shortYear + '/' + monthVal;
    case('MM/YY'):
      return monthVal + '/' + shortYear;
    case('YYYY/MM'):
      return year + '/' + monthVal;
    case('MM/YYYY'):
    default:
      return monthVal + '/' + year;
  }
};

export const valuesFromMask = (maskedValue: string, translate: Translator): [number, number] => {
  const t = translate;
  const [monthVal, yearVal] = (t.dateFormat()[0] == 'M') ? maskedValue.split('/') : maskedValue.split('/').reverse();
  const rawMonth = parseInt(monthVal);
  const monthNum = rawMonth > 12 ? 12 : (rawMonth == 0 ? 1 : rawMonth);
  const month = monthNum - 1;
  // TODO: make base dynamic
  const year = yearVal.length > 2 ? parseInt(yearVal) :2000 + parseInt(yearVal);
  return [month, year];
};
