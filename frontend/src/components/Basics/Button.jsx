import React from 'react';
import { Link } from 'react-router-dom';
import {
  string, func, bool, objectOf,
} from 'prop-types';

function Button(props) {
  const {
    link, testId, name, children, title, onClick, disabled, style, className,
  } = props;
  if (link !== '') {
    return (
      <div>
        <Link to={link}>
          <button
            type="button"
            data-testid={testId}
            onClick={onClick}
            disabled={disabled}
            style={style}
            className={className}
            title={title}
          >
            { name || children }
          </button>
        </Link>
      </div>
    );
  }
  return (
    <div>
      <button
        type="button"
        data-testid={testId}
        onClick={onClick}
        disabled={disabled}
        style={style}
        className={className}
        title={title}
      >
        { name || children }
      </button>
    </div>
  );
}

Button.propTypes = {
  link: string,
  testId: string,
  name: string,
  children: string,
  onClick: func,
  disabled: bool,
  style: objectOf(string),
  className: string,
  title: string,
};

Button.defaultProps = {
  link: '',
  testId: '',
  onClick: null,
  style: {},
  disabled: false,
  className: '',
  title: '',
  name: '',
  children: '',
};

export default Button;
