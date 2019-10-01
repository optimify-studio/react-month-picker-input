import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import jsxToString from 'jsx-to-string';
import shortid from 'shortid';

import MonthPickerInput, { MonthFormat, Mode } from 'react-month-picker-input';

const Example0 = () => {
  const id = `ex-${shortid.generate()}`;

  return (
    <div className="example">
      <h2>Without props</h2>

      <pre>{ jsxToString(<MonthPickerInput />) }</pre>

      <MonthPickerInput inputProps={{id: id, name: id, className: "form__input"}} />
    </div>
  )
};

const Example01 = () => {
  const id = `ex-${shortid.generate()}`;
  const inputProps = { id: id, name: id, className: "form__input", required: true, size: 6, maxLength: 6 };

  return (
    <div className="example">
      <h2>Input props (all optional)</h2>

      <ul>
        <li>id</li>
        <li>name</li>
        <li>className</li>
        <li>size</li>
        <li>maxLength</li>
        <li>required</li>
      </ul>

      <pre>{
        jsxToString(<MonthPickerInput inputProps={inputProps} />)
      }</pre>

      <MonthPickerInput inputProps={inputProps} />
    </div>
  )
};

const Example1 = () => {
  const id = `ex-${shortid.generate()}`;

  return (
    <div className="example">
      <h2>Read only mode</h2>

      <pre>{ jsxToString(<MonthPickerInput year={2015} month={1} mode={Mode.READ_ONLY} />) }</pre>

      <MonthPickerInput year={2015} month={1} mode={Mode.READ_ONLY} inputProps={{id, name: id}} />
    </div>
  );
}

const Example2 = () => {
  const id = `ex-${shortid.generate()}`;

  return (
    <div className="example">
      <h2>Calendar only mode</h2>

      <pre>{ jsxToString(<MonthPickerInput year={2015} month={1} mode={Mode.CALENDAR_ONLY} />) }</pre>

      <MonthPickerInput year={2015} month={1} mode={Mode.CALENDAR_ONLY} inputProps={{id, name: id}} />
    </div>
  );
}

const Example4 = () => {
  const id = `ex-${shortid.generate()}`;

  return (
    <div className="example">
      <h2>With only default year</h2>

      <pre>
        {
          jsxToString(
            <MonthPickerInput
              year={new Date().getFullYear()} />
          )
        }
      </pre>

      <MonthPickerInput
        year={new Date().getFullYear()}
        inputProps={{id, name}} />
    </div>
  );
}

const Example5 = () => {
  const id = `ex-${shortid.generate()}`;

  return (
    <div className="example">
      <h2>With default year and month</h2>

      <pre>
        {
          jsxToString(
            <MonthPickerInput
              year={new Date().getFullYear()}
              month={new Date().getMonth()} />
          )
        }
      </pre>

      <MonthPickerInput
        year={new Date().getFullYear()}
        month={new Date().getMonth()}
        inputProps={{id, name: id}} />
    </div>
  );
}

const Example6 = () => {
  const id = `ex-${shortid.generate()}`;

  return (
    <div className="example">
      <h2>Close on month select</h2>

      <pre>
        { jsxToString(<MonthPickerInput closeOnSelect={true} />) }
      </pre>
      <label htmlFor={id}>
        Choose a Date
      </label>
      <MonthPickerInput
        closeOnSelect={true}
        inputProps={{id, name: id}} />
    </div>
  );
}

const Example7 = () => {
  const id = `ex-${shortid.generate()}`;

  return (
    <div className="example">
      <h2>Custom translations</h2>

      <pre>
      {
        jsxToString(
          <MonthPickerInput
            lang='hu'
            i18n={{
              monthFormat: MonthFormat.LONG,
              dateFormat: {
                hu: 'MM/YY'
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
            }} />
        )
      }</pre>

      <MonthPickerInput
        lang="hu"
        i18n={{
          monthFormat: MonthFormat.LONG,
          dateFormat: {
            hu: 'MM/YY'
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
        }}
        inputProps={{id, name: id}} />
    </div>
  );
}

interface IExample8State {
  year: number,
  month: number
}

class Example8 extends Component<{}, IExample8State> {
  constructor(props) {
    super(props);

    this.state = {
      year: 2018,
      month: 5
    };
  }

  render() {
    const id = `ex-${shortid.generate()}`;

    return (
      <div className="example">
        <h2>Assign new year and month</h2>

        <div>
          <input placeholder="Year" id={`ex-${id}-year`} type="number"
            onChange={(e) => this.setState({ year: parseInt(e.target.value) || 2018 })} />
          <input placeholder="Month" id={`ex-${id}-month`} type="number"
            onChange={(e) => this.setState({ month: parseInt(e.target.value) || 5 })} />

          <MonthPickerInput
            year={this.state.year}
            month={this.state.month - 1}
            i18n={{ dateFormat: { default: 'YYYY/MM' } }}
            inputProps={{id: id, name: id}} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  (
    <div>
      <Example0 />
      <Example01 />
      <Example1 />
      <Example2 />
      <Example4 />
      <Example5 />
      <Example6 />
      <Example7 />
      <Example8 />
    </div>
  ),
  document.getElementById('examples')
);
