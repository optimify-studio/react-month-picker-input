import React, { Component } from 'react';

import OutsideClickWrapper from '../OutsideClickWrapper';

import Head from './Head';
import { VIEW_MONTHS, VIEW_YEARS } from './constants';

import Translator from '../Translator';

export interface IProps {
  year: void|number,
  month: void|number,
  startYear?: number,
  onChange: (selectedYear: number, selectedMonth: number) => any,
  onOutsideClick: (e: any) => any,
  translator: Translator
}

export interface IState {
  years: Array<number>,
  selectedYear: void|number,
  selectedMonth: void|number,
  currentView: string,
}

class MonthCalendar extends Component<IProps, IState> {
  private t: Translator;

  constructor(props: IProps){
    super(props);

    const { year, month } = this.props;

    const startYear = this.props.startYear || new Date().getFullYear() - 6;

    this.t = this.props.translator;

    this.state = {
      years: Array.from({length: 12}, (v, k) => k + startYear),
      selectedYear: year,
      selectedMonth: month,
      currentView: year ? VIEW_MONTHS : VIEW_YEARS,
    };
  }

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
    this.setState({ selectedYear, currentView: VIEW_MONTHS });
    this.onChange(selectedYear, this.state.selectedMonth);
  };

  selectMonth = (selectedMonth: number): void => {
    this.setState({ selectedMonth });
    this.onChange(this.state.selectedYear, selectedMonth);
  };

  previous = (): void => {
    const startYear = this.state.years[0] - 12;
    this.updateYears(startYear);
  }

  next = (): void => {
    const startYear = this.state.years[11] + 1;
    this.updateYears(startYear);
  }

  updateYears = (startYear: number): void => {
    const years = Array.from({length: 12}, (v, k) => k + startYear);

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
      const selectedKlass = selectedYear === year ? 'selected_cell' : '';

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

    return (
      <OutsideClickWrapper
        onOutsideClick={this.props.onOutsideClick}
        className="calendar-container"
      >
        <Head
          year={selectedYear}
          month={selectedMonth ? selectedMonth + 1 : undefined}
          lang={this.t.lang}
          onValueClick={() => this.setState({ currentView: VIEW_YEARS })}
          onPrev={this.previous}
          onNext={this.next} />

        {this.isYears() ? this.renderYears() : this.renderMonths()}
      </OutsideClickWrapper>
    );
  }
};

export default MonthCalendar;
