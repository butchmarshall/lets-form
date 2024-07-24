/* LetsForm Generator v0.9.4 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, B as _isDate, a as _isString, C as isValidDate, b as _extends, p as passRest } from './index-BcAAYKQJ.js';
import React, { useCallback } from 'react';
import { R as RSuiteGenericDate } from './index-D_jUogh_-9fyP6_JZ.js';
import 'react-hook-form';
import 'rsuite';
import './index-CR64ICt9.js';
import './index-DHcRgead.js';
import './cross-circle-CsoonplL.js';
import './index-Bo93bBQc.js';
import './index-BvswBXlW-Cn4uUKAN.js';
import './index-DcwatjKC-CczFj6ZO.js';

/* LetsForm react-rsuite5 v0.9.4 - ESM */
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
