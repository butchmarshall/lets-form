/* LetsForm react-rsuite5 v0.7.10 - ESM */
import { I as I18N, l as lfLog, a as _objectWithoutProperties, z as _isDate, _ as _isString, A as isValidDate, b as _extends, p as passRest } from './index-CN7S9eQn.js';
import React, { useCallback } from 'react';
import { R as RSuiteGenericDate } from './index-DQ2nybwa.js';
import 'rsuite/Form';
import 'rsuite/DatePicker';
import './index-CZPPdDWK.js';
import './index-BP62a5cr.js';
import 'rsuite/Whisper';
import 'rsuite/Popover';

var _excluded = ["onChange", "value"];
var SelectDate = I18N(function (_ref) {
  var onChange = _ref.onChange,
    value = _ref.value,
    rest = _objectWithoutProperties(_ref, _excluded);
  // also accepts string dates
  var currentValue;
  if (_isDate(value)) {
    currentValue = value;
  } else if (_isString(value)) {
    var d = new Date(value);
    if (isValidDate(d)) {
      currentValue = d;
    }
  }

  // send always date string in format yyyy-mm-dd
  var handleChange = useCallback(function (d) {
    if (isValidDate(d)) {
      onChange(d.toISOString().split('T')[0]);
    }
  }, [onChange]);
  return /*#__PURE__*/React.createElement(RSuiteGenericDate, _extends({
    value: currentValue,
    onChange: handleChange
  }, passRest(rest)));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded RSuite5.SelectDate');

export { SelectDate as default };
