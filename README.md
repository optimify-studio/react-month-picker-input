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
| lang | string | en | One of: `en`, `ja`, `es`, `fr`, `ru`, `ua`, `hu` |
| i18n | i18n object (optional) | see i18n schema below | i18n object. For now date formats must be either `MM/YY` or `YY/MM` |

### I18n config

| Name | Types | Default | Description |
|---|---|---|---|
| monthFormat | string | 'short' | One of: `short`, `long`. Display short or long format of month name (E.g. `Jan` or `January`) |
| dateFormat | { lang: string } | see `src/i18n.js` | Object where langs are keys and values can either be `YY/MM` or `MM/YY` |
| monthNames | { lang: string[] } | see `src/i18n.js` | Object where langs are keys and values are arrays of month names |

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
