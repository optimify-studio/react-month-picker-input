import Translator from '../src/Translator';
import { MonthFormat } from '../src/i18n';
import { expect } from 'chai';

let translator;

describe('with defaults', () => {
  beforeEach(() => {
    translator = new Translator();
  });

  it('sets lang as "default"', () => {
    expect(translator.lang).to.equal('default');
  });

  it('returns dateFormat', () => {
    expect(translator.dateFormat()).to.equal('MM/YY');
  });

  it('returns default months', () => {
    expect(translator.monthNames()).to.eql([
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ]);
  });

  it('returns month name in short format', () => {
    expect(translator.monthName('January')).to.equal('Jan');
  });
});

describe('customized', () => {
  const i18n = {
    monthFormat: MonthFormat.LONG,
    dateFormat: {
      hu: 'YY/MM'
    },
    monthNames: {
      hu: [
        'Január',
        'Február',
        'Március',
        'Aprilis',
        'Május',
        'Junius',
        'Julius',
        'Augusztus',
        'Szeptember',
        'Október',
        'November',
        'December'
      ]
    }
  };

  beforeEach(() => {
    translator = new Translator('hu', i18n);
  });

  it('sets lang as "hu"', () => {
    expect(translator.lang).to.equal('hu');
  });

  it('returns dateFormat', () => {
    expect(translator.dateFormat()).to.equal('YY/MM');
  });

  it('returns hungarian months', () => {
    expect(translator.monthNames()).to.eql([
      'Január',
      'Február',
      'Március',
      'Aprilis',
      'Május',
      'Junius',
      'Julius',
      'Augusztus',
      'Szeptember',
      'Október',
      'November',
      'December'
    ]);
  });

  it('returns month name in long format', () => {
    expect(translator.monthName('Március')).to.equal('Március');
  });
});

describe('with non-existent config', () => {
  beforeEach(() => {
    translator = new Translator('foo');
  });

  it('sets lang as "foo"', () => {
    expect(translator.lang).to.equal('foo');
  });

  it('returns dateFormat', () => {
    expect(translator.dateFormat()).to.equal('MM/YY');
  });

  it('returns default months', () => {
    expect(translator.monthNames()).to.eql([
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ]);
  });

  it('returns month name in short format', () => {
    expect(translator.monthName('January')).to.equal('Jan');
  });
});
