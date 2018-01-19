// @flow
import React from 'react';
import PropTypes from 'prop-types'

interface IProps {
  onOutsideClick: (e: any) => any,
  className?: string,
  children: JSX.Element
};

const OutsideClickWrapper = ({ onOutsideClick, className = '', children }) => {
  let wrapperContainer;

  const handleOutsideClick = (e) => {
    if (wrapperContainer && !wrapperContainer.contains(e.target)) {
      onOutsideClick(e);
    }
  };

  const wrapperMounted = (container) => {
    wrapperContainer = container;

    if (wrapperContainer) {
      window.addEventListener('click', handleOutsideClick, false);
    } else {
      window.removeEventListener('click', handleOutsideClick, false);
    }
  };

  return (
    <div ref={wrapperMounted} className={className}>{children}</div>
  );
}

export default OutsideClickWrapper;
