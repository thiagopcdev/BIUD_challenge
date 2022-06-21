import React from 'react';
import PropTypes from 'prop-types';

function Textarea(props) {
  const {
    name,
    label,
    onChange,
    value,
    id,
    testId,
    holder,
    className,
    required,
  } = props;
  return (
    <>
      <label htmlFor={name}>
        { label }
      </label>
      <textarea
        name={name}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        id={id}
        data-testid={testId}
        placeholder={holder}
        className={className}
        required={required}
      />
    </>
  );
}

Textarea.propTypes = {
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
  className: PropTypes.string,
  required: PropTypes.string,
};

Textarea.defaultProps = {
  label: '',
  value: '',
  name: '',
  id: '',
  onChange: null,
  testId: '',
  holder: '',
  className: '',
  required: 'false',
};

export default Textarea;
