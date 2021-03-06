import React from 'react';
import PropTypes from 'prop-types';

function Input(props) {
  const {
    type,
    name,
    label,
    onChange,
    value,
    id,
    testId,
    holder,
    checked,
    className,
    required,
    minLength,
  } = props;
  return (
    <>
      <label htmlFor={name}>
        { label }
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        id={id}
        data-testid={testId}
        placeholder={holder}
        checked={checked}
        className={className}
        required={required}
        minLength={minLength}
      />
    </>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  name: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
  testId: PropTypes.string,
  holder: PropTypes.string,
  checked: PropTypes.bool,
  className: PropTypes.string,
  required: PropTypes.string,
  minLength: PropTypes.string,
};

Input.defaultProps = {
  label: '',
  value: '',
  name: '',
  id: '',
  onChange: null,
  testId: '',
  holder: '',
  checked: false,
  className: '',
  required: 'false',
  minLength: '',
};

export default Input;
