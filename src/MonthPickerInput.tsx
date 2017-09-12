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
  value: null|Date,
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
    let date: null|Date = null, inputValue = '';

    if (value) {
      date = typeof value === 'string' ? new Date(value) : value;
      inputValue = this.maskedInputValue(date.getFullYear(), date.getMonth() + 1);
    }

    this.state = {
      value: date,
      inputValue,
      showCalendar: false
    }
  }

  onCalendarChange = (year, month): void => {
    const inputValue = this.maskedInputValue(year, month);
    this.setState({ inputValue });
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
      const [month, year] = inputValue.split('/');
      const monthVal = parseInt(month) - 1;
      const yearVal = parseInt(year);
      const value = new Date(yearVal, monthVal, 1);
      this.setState({ value, inputValue });
      this.onChange(inputValue, yearVal, monthVal);
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
    return (
      <div style={{ position: 'relative' }}>
        <MonthCalendar
          value={this.state.value}
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
