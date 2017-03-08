import React from 'react';
import classnames from 'classnames';
import './button.style.scss';

function Button({ title, className }) {
  return (
    <div className={classnames('button', className)}>
      <p className="buttonTitle">{title}</p>
    </div>
  );
}

export default Button;
