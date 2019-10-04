import { valuesToMask, valuesFromMask } from '../src/utils';
import { expect } from 'chai';
import Translator from '../src/Translator';
import { DEFAULT_I18N } from '../src/i18n';

describe('valuesToMask', () => {
  it('returns masked value', () => {
    const result = valuesToMask(11, 2012);
    expect(result).to.equal('12/2012');
  });

  it('returns masked value', () => {
    const result = valuesToMask(1, 2012);
    expect(result).to.equal('02/2012');
  });

  it('returns ja format value', () => {
    const result = valuesToMask(0, 2018, new Translator('ja'));
    expect(result).to.equal('18/01');
  });

  it('returns date in long format', () => {
    const result = valuesToMask(0, 2018, new Translator('en', { dateFormat: { default: 'YYYY/MM' } }));
    expect(result).to.equal('2018/01');
  });
});

describe('valuesFromMask', () => {
  describe('when month is more than 12', () => {
    it('changes month to 11', () => {
      const result = valuesFromMask('14/2014',  new Translator('en', { dateFormat: { default: 'MM/YYYY' } }), [12, 1], [1, 9999]);
      expect(result).to.eql([11, 2014]);
    });
  });

  describe('when month is zero', () => {
    it('keeps month 0', () => {
      const result = valuesFromMask('00/14',  new Translator('default', { dateFormat: { default: 'MM/YY' } }), [12, 1], [1, 9999]);
      expect(result).to.eql([0, 2014]);
    });
  });

  describe('when format YY/MM', () => {
    it('swap side', () => {
      const result = valuesFromMask('66/14',  new Translator('default', { dateFormat: { default: 'YY/MM' } }), [12, 1], [1, 9999]);
      expect(result).to.eql([11, 2066]);
    });
  });


  describe('when date less than minDate', () => {
    it('changes date to minDate', () => {
      const result = valuesFromMask('1/1966',  new Translator('default', { dateFormat: { default: 'MM/YYYY' } }), [4, 1978], [10, 2020]);
      expect(result).to.eql([3, 1978]);
    });
  });

  describe('when date more than maxDate', () => {
    it('changes date to maxDate', () => {
      const result = valuesFromMask('9/2024',  new Translator('default', { dateFormat: { default: 'MM/YYYY' } }), [1, 1978], [6, 2020]);
      expect(result).to.eql([5, 2020]);
    });
  });
});
