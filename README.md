React-Month-Picker-Input
====================

A month picker input and calendar for [React](http://facebook.github.io/react/index.html).

## Demo

Live demo: [slavakisel.github.io/react-month-picker-input](https://slavakisel.github.io/react-month-picker-input/)

## API

| Name | Types | Default | Description |
|---|---|---|---|
| year | number | void | Preselect year in calendar |
| month | number (0..11) | void | Preselect month in calendar. If both year and month are specified then input field will be also prepopulated |
| inputProps | object | empty object | Input field props, only `id` and `name` are supported |
| onChange | Function: (maskedValue: string, year: number, month: number) => any | - | onChange callback, receives `maskedValue`, `year` and `month` (begins with 0) as arguments |
| closeOnSelect | boolean | false | Close calendar on month select |

## Installation

```
npm install react-month-picker-input --save
```

## Usage

React-Month-Picker-Input generates an input field and year/month calendar opened on field focus.

```js
var MonthPickerInput = require('react-month-picker-input');
require('react-month-picker-input/dist/react-month-picker-input.css');

<MonthPickerInput
  value={new Date()}
  onChange={function(selectedYear, selectedMonth) {
    console.log(selectedYear, selectedMonth);
  }}
/>
```

## License

Copyright (c) 2017 Viacheslav Kysil. [MIT](LICENSE) License.
