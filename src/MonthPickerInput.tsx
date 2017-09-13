import React, { Component } from 'react';
import InputMask from 'react-input-mask';

const DATE_FORMAT = 'MM/YY';

import MonthCalendar from './calendar';

import './styles/index.css';

type OnChange = (maskedValue: string, year: number, month: number) => any;

export interface IProps {
  value?: void|string|Date,
  inputProps?: {
    name?: string,
    id?: string,
  },
  onChange?: OnChange,
}

export interface IState {
  year: null|number,
  month: null|number,
  inputValue: string,
  showCalendar: boolean,
}

class MonthPickerInput extends Component<IProps, IState> {
  wrapper: HTMLDivElement;
  input: { input: Element };

  public static defaultProps: Partial<IProps> = {
    value: undefined,
    inputProps: {}
  }

  constructor(props) {
    super(props);
    const { value } = this.props;
    let inputValue = '', year: null|number = null, month: null|number = null;

    if (value) {
      const date = typeof value === 'string' ? new Date(value) : value;
      year = date.getFullYear();
      month = date.getMonth();
      inputValue = this.maskedInputValue(year, month + 1);
    }

    this.state = {
      year,
      month,
      inputValue,
      showCalendar: false
    }
  }

  onCalendarChange = (year, month): void => {
    const inputValue = this.maskedInputValue(year, month + 1);
    this.setState({ inputValue, year, month });
    this.onChange(inputValue, year, month);
  }

  maskedInputValue = (year, month): string => {
    const monthVal = month < 10 ? '0' + month : month;
    const yearVal = year.toString().slice(2);
    return monthVal + '/' + yearVal;
  }

  onInputChange = (e: { target: { value: string }}): void => {
    const inputValue = e.target.value;

    if (inputValue.length && inputValue.indexOf('_') === -1) {
      const [monthVal, yearVal] = inputValue.split('/');
      const month = parseInt(monthVal) - 1;
      const year = parseInt(yearVal);
      this.setState({ year, month, inputValue });
      this.onChange(inputValue, year, month);
    } else this.setState({ inputValue });
  };

  onChange = (inputValue, year, month) => {
    if (this.props.onChange) {
      this.props.onChange(inputValue, year, month);
    }
  }

  onInputBlur = (e): void => {
    if (!this.wrapper.contains(e.target)) {
      this.setState({ showCalendar: false })
    }
  }

  onInputFocus = (e): void => {
    if (this.wrapper.contains(e.target)) {
      this.setState({ showCalendar: true });
    }
  }

  onCalendarOutsideClick = (e): void => {
    this.setState({ showCalendar: this.input.input == e.target });
  };

  calendar = (): JSX.Element => {
    const { year, month } = this.state;
    return (
      <div style={{ position: 'relative' }}>
        <MonthCalendar
          year={year}
          month={month}
          onChange={this.onCalendarChange}
          onOutsideClick={this.onCalendarOutsideClick}
        />
      </div>
    )
  }

  inputProps = (): object => {
    return Object.assign({}, {
      ref: input => { if(input) this.input = input; },
      mask: "99/99",
      placeholder: DATE_FORMAT,
      type: 'text',
      onBlur: this.onInputBlur,
      onFocus: this.onInputFocus,
      onChange: this.onInputChange,
    }, this.props.inputProps)
  }

  render() {
    const { inputValue, showCalendar } = this.state;

    return (
      <div ref={wrap => { if(wrap) this.wrapper = wrap; }}>
        <InputMask
          value={inputValue}
          {...this.inputProps()}
        />

        { showCalendar && this.calendar() }
      </div>
    );
  }
};

export default MonthPickerInput;
