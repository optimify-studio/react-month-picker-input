import React, { Component } from 'react';

import OutsideClickWrapper from '../OutsideClickWrapper';

import Head from './Head';
import { VIEW_MONTHS, VIEW_YEARS } from './constants';
import { validationOfDate } from '../utils';

import Translator from '../Translator';

export interface IProps {
  year: void|number,
  month: void|number,
  startYear?: number,
  maxYear?: number,
  minDate?: [number, number],
  maxDate?: [number, number],
  onChange: (selectedYear: number, selectedMonth: number) => any,
  onOutsideClick: (e: any) => any,
  translator: Translator,
  readOnly?: boolean
}

export interface IState {
  years: Array<number>,
  selectedYear: void|number,
  selectedMonth: void|number,
  currentView: string,
}

class MonthCalendar extends Component<IProps, IState> {
  private t: Translator;

  public static defaultProps: Partial<IProps> = {
    readOnly: false
  };

  constructor(props: IProps){
    super(props);

    const { year, month } = this.props;

    let startYear = this.getNormalizedStartYear(this.props.startYear);

    this.t = this.props.translator;

    this.state = {
      years: Array.from({length: 12}, (v, k) => k + startYear),
      selectedYear: year,
      selectedMonth: month,
      currentView: year ? VIEW_MONTHS : VIEW_YEARS,
    };
  }

  minMaxDate = (): any => {
    return validationOfDate(this.props.minDate, this.props.maxDate, this.props.maxYear)
  };

  componentWillReceiveProps(nextProps) {
    const { year, month } = nextProps;
    const { selectedYear, selectedMonth } = this.state;

    if (typeof year == 'number' &&
      typeof month == 'number' &&
      (year !== selectedYear || month !== selectedMonth)
    ) {
      this.setState({
        selectedYear: year,
        selectedMonth: month,
        currentView: VIEW_MONTHS
      });
    }
  }

  onChange = (selectedYear, selectedMonth): void => {
    if (typeof selectedYear == 'number' && typeof selectedMonth == 'number') {
      this.props.onChange(selectedYear, selectedMonth);
    }
  }

  selectYear = (selectedYear: number): void => {
    if (this.props.readOnly) return;
    const minDateYear = this.minMaxDate()[0][1];
    selectedYear = selectedYear < minDateYear ? minDateYear : selectedYear;
    this.setState({ selectedYear, currentView: VIEW_MONTHS });
    this.onChange(selectedYear, this.state.selectedMonth);
  };

  selectMonth = (selectedMonth: number): void => {
    const [[minDateMonth, minDateYear], [maxDateMonth, maxDateYear]] = this.minMaxDate();
    if (this.props.readOnly) return;
    if (maxDateYear == this.state.selectedYear) {
      selectedMonth = selectedMonth > maxDateMonth ? maxDateMonth : selectedMonth;
    };
    if (minDateYear == this.state.selectedYear) {
      selectedMonth = selectedMonth < minDateMonth ? minDateMonth : selectedMonth;
    };
    this.setState({ selectedMonth });
    this.onChange(this.state.selectedYear, selectedMonth);
  };

  previous = (): void => {
    if (this.props.readOnly) return;

    const startYear = this.state.years[0] - 12;
    this.updateYears(startYear);
  }

  next = (): void => {
    if (this.props.readOnly) return;

    const maxDateYear = this.minMaxDate()[1][1];
    const nextStartYear = this.state.years[11] + 1;
    const startYear = nextStartYear + 11 > maxDateYear ? maxDateYear - 11 : nextStartYear;

    this.updateYears(startYear);
  }

  onYearClick = (): void => {
    if (this.props.readOnly) return;

    this.setState({ currentView: VIEW_YEARS });
  }

  getNormalizedStartYear = (startYear: number | undefined): number => {
    const minDateYear = this.minMaxDate()[0][1];
    startYear = startYear || this.props.year || new Date().getFullYear() - 6;

    return startYear < minDateYear ? minDateYear : startYear;;
  }

  updateYears = (startYear: number): void => {
    const years = Array.from({length: 12}, (v, k) => k + this.getNormalizedStartYear(startYear));

    this.setState({ years, currentView: VIEW_YEARS });
  }

  isYears = (): boolean => {
    return this.state.currentView === VIEW_YEARS;
  }

  renderMonths = (): JSX.Element[] => {
    const { selectedMonth } = this.state;

    return this.t.monthNames().map((monthName, index) => {
      const selectedKlass = selectedMonth === index ? 'selected_cell' : '';

      return (
        <div
          key={index}
          onClick={() => this.selectMonth(index)}
          className={`col_mp span_1_of_3_mp ${selectedKlass}`}
        >{this.t.monthName(monthName)}</div>
      )
    });
  };

  renderYears = (): JSX.Element[] => {
    const { selectedYear } = this.state;

    return this.state.years.map((year, i) => {
      const maxDateYear = this.minMaxDate()[1][1];
      const disable = year > maxDateYear;
      const selectedKlass = selectedYear === year ? 'selected_cell' : '';

      if (disable) return <div key={i} />;

      return (
        <div
          key={i}
          onClick={() => this.selectYear(year)}
          className={`col_mp span_1_of_3_mp ${selectedKlass}`}
        >{year}</div>
      );
    });
  }

  render(): JSX.Element {
    const { selectedYear, selectedMonth } = this.state;
    const containerClass = `calendar-container ${this.props.readOnly ? 'readonly' : ''}`;

    return (
      <OutsideClickWrapper
        onOutsideClick={this.props.onOutsideClick}
        className={containerClass}
      >
        <Head
          year={selectedYear}
          month={+selectedMonth + 1 || 1}
          lang={this.t.lang}
          onValueClick={this.onYearClick}
          onPrev={this.previous}
          onNext={this.next} />

        {this.isYears() ? this.renderYears() : this.renderMonths()}
      </OutsideClickWrapper>
    );
  }
};

export default MonthCalendar;
