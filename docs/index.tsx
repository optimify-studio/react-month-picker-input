import React from 'react';
import ReactDOM from 'react-dom';

import MonthPickerInput from 'react-month-picker-input';

ReactDOM.render(
  (
    <div>
      <label htmlFor="ex-0">
        Without default value
        <MonthPickerInput inputProps={{id: "ex-0", name: "ex[0]"}} />
      </label>

      <label htmlFor="ex-1">
        With default value
        <MonthPickerInput
          value={new Date()}
          inputProps={{id: "ex-1", name: "ex[1]"}} />
      </label>
    </div>
  ),
  document.getElementById('examples')
);
