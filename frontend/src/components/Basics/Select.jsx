import React from 'react';
import PropTypes from 'prop-types';

function Select(props) {
  const {
    label,
    name,
    onChange,
    value,
    id,
    defaultOption,
    defaultValue,
    options,
    testId,
    required,
  } = props;

  return (
    <>
      <label htmlFor={name}>
        { label }
      </label>
      <select
        name={name}
        id={id}
        required={required}
        onChange={(event) => onChange(event.target.value)}
        value={value}
        data-testid={testId}
      >
        <option value={defaultValue}>{ defaultOption }</option>
        {
          options.map(({ id: objId, description }) => (
            <option value={objId} key={objId}>{ description }</option>
          ))
        }
      </select>
    </>
  );
}

Select.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  defaultValue: PropTypes.string.isRequired,
  defaultOption: PropTypes.string.isRequired,
  testId: PropTypes.string,
  required: PropTypes.string,
};

Select.defaultProps = {
  onChange: null,
  value: '',
  label: '',
  testId: '',
  required: 'false',
};

export default Select;
