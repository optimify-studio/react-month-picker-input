import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import jsxToString from 'jsx-to-string';

import MonthPickerInput, { DEFAULT_I18N, MonthFormat } from 'react-month-picker-input';

interface IExample6State {
  year: number,
  month: number
}

class Example6 extends Component<{}, IExample6State> {
  i18n: any;

  constructor(props) {
    super(props);

    this.state = {
      year: 2018,
      month: 5
    }

    this.i18n = DEFAULT_I18N;
    this.i18n.dateFormat.default = 'MM/YYYY';
  }

  render() {
    return (
      <div>
        <input placeholder="Year" id="ex-5-year" type="number"
          onChange={(e) => this.setState({ year: parseInt(e.target.value) || 2018 })} />
        <input placeholder="Month" id="ex-5-month" type="number"
          onChange={(e) => this.setState({ month: parseInt(e.target.value) || 5 })} />

        <MonthPickerInput
          year={this.state.year}
          month={this.state.month - 1}
          i18n={this.i18n}
          inputProps={{id: "ex-5", name: "ex-5"}} />
      </div>
    );
  }
}

ReactDOM.render(
  (
    <div>
      <div className="example">
        <h2>Without props</h2>

        <pre>{ jsxToString(<MonthPickerInput />) }</pre>

        <MonthPickerInput inputProps={{id: "ex-0", name: "ex-0"}} />
      </div>

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
          inputProps={{id: "ex-1", name: "ex-1"}} />
      </div>

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
          inputProps={{id: "ex-2", name: "ex-2"}} />
      </div>


      <div className="example">
        <h2>Close on month select</h2>

        <pre>
          { jsxToString(<MonthPickerInput closeOnSelect={true} />) }
        </pre>

        <MonthPickerInput
          closeOnSelect={true}
          inputProps={{id: "ex-3", name: "ex-3"}} />
      </div>

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
          inputProps={{id: "ex-4", name: "ex-4"}} />
      </div>

      <div className="example">
        <h2>Assign new year and month</h2>

        <Example6 />
      </div>
    </div>
  ),
  document.getElementById('examples')
);
