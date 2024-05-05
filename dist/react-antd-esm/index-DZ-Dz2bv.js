/* LetsForm react-antd v0.7.10 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, b as _isDate, d as _isString, e as isValidDate, a as _extends } from './index-P7AFrBbC.js';
import React, { useCallback } from 'react';
import { A as AntdGenericDate } from './index-OSbZQ1H8.js';
import 'antd';

var _excluded = ["onChange", "value"];
var Datetime = I18N(function (_ref) {
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

  // send always date string in iso format
  var handleChange = useCallback(function (d) {
    if (isValidDate(d)) {
      onChange(d.toISOString());
    }
  }, [onChange]);
  return /*#__PURE__*/React.createElement(AntdGenericDate, _extends({
    value: currentValue,
    component: "datetime",
    onChange: handleChange
  }, rest, {
    showTime: true
  }));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded AntD.DateTime');

export { Datetime as default };
