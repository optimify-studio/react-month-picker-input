import React, { PureComponent } from 'react';

export interface IProps {
  month: null|number,
  year: null|number,
  onNext: () => any,
  onPrev: () => any,
}

class Head extends PureComponent<IProps> {
  selectedValue(): string|number {
    const { month, year } = this.props;

    if (year == null) {
      return '';
    } else if (month == null) {
      return year;
    } else {
      const monthVal = month < 10 ? '0' + month : month;
      const yearVal = year.toString().slice(2);
      return monthVal + '/' + yearVal;
    }
  };

  render(): JSX.Element {
    return (
      <div className="section_mp group_mp">
        <div className="col_mp span_1_of_3_mp arrows_mp"
          onClick={this.props.onPrev}>&lt;</div>

        <div className="col_mp span_1_of_3_mp selected_date_mp">
          {this.selectedValue()}
        </div>

        <div className="col_mp span_1_of_3_mp arrows_mp"
          onClick={this.props.onNext}>&gt;</div>
      </div>
    )
  }
}

export default Head;
