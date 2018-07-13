import { DEFAULT_I18N, II18n, MonthFormat } from './i18n';

class Translator {
  public lang: string;
  public i18n: II18n;

  constructor(lang?: string, i18n?: II18n) {
    this.i18n = i18n || DEFAULT_I18N;
    this.lang = lang || 'default';
  }

  public dateFormat(): string {
    const dateFormat = this.i18n.dateFormat[this.lang];

    if (dateFormat) {
      return dateFormat;
    } else {
      console.warn(`Could not find date format for lang: ${this.lang}. Falling back to default config.`);
      return this.i18n.dateFormat['default'];
    }
  }

  public monthName(name: string): string {
    if (this.i18n.monthFormat === MonthFormat.SHORT) {
      return name.substring(0, 3);
    } else {
      return name;
    }
  }

  public monthNames(): string[] {
    const names = this.i18n.monthNames[this.lang];

    if (names) {
      return names;
    } else {
      console.warn(`Could not find month names array for lang: ${this.lang}. Falling back to default config.`);
      return this.i18n.monthNames['default'];
    }
  }
}

export default Translator;
