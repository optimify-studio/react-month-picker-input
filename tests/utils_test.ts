import { valuesToMask, valuesFromMask } from '../src/utils';
import { expect } from 'chai';
import Translator from '../src/Translator';
import { DEFAULT_I18N } from '../src/i18n';

describe('valuesToMask', () => {
  it('returns masked value', () => {
    const result = valuesToMask(11, 2012);
    expect(result).to.equal('12/12');
  });

  it('returns masked value', () => {
    const result = valuesToMask(1, 2012);
    expect(result).to.equal('02/12');
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
      const result = valuesFromMask('14/14');
      expect(result).to.eql([11, 2014]);
    });
  });

  describe('when month is zero', () => {
    it('keeps month 0', () => {
      const result = valuesFromMask('00/14');
      expect(result).to.eql([0, 2014]);
    });
  });
});
