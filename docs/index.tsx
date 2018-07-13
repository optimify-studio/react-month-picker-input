import React from 'react';
import ReactDOM from 'react-dom';
import jsxToString from 'jsx-to-string';

import MonthPickerInput from 'react-month-picker-input';
import { MonthFormat } from 'react-month-picker-input';

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
    </div>
  ),
  document.getElementById('examples')
);
