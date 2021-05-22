import React from 'react';
import scheme from './img/scheme.svg';
import SchemeSvg from './component/SchemeSvg';
import './style.scss';

const ElPage = () => {
  return (
    <div className="scheme">
      <img src={scheme} alt="План этажа" className="svg_img" />
      <SchemeSvg />
    </div>
  );
};

export default ElPage;
