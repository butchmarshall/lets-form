import React, { useCallback } from 'react';
import _ from 'lodash';

import Form from 'react-bootstrap/Form';


const Checkbox = ({
  name,
  label,
  hint,
  value,
  placeholder,
  plaintext,
  tooltip = false,
  disabled = false,
  readOnly = false,
  required = false,
  error,
  onChange,
  onBlur,
  appearance,
  locale,
  format,
  ...rest
}) => {

  const handleChange = useCallback(
    e => {
      onChange(e.target.checked);
    },
    [onChange]
  );

  return (
    <Form.Group
      className="lf-control-checkbox mb-3"
    >
      <Form.Check type="checkbox">
        <Form.Check.Input
          onChange={handleChange}
          onBlur={onBlur}
          disabled={disabled}
          isInvalid={error != null}
          checked={value}
        />
        {label && <Form.Check.Label>{label}</Form.Check.Label>}
        {_.isString(error) && !_.isEmpty(error) && (
          <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
        )}
      </Form.Check>
      {hint && <Form.Text>{hint}</Form.Text>}
    </Form.Group>
  );
};

export { Checkbox };
