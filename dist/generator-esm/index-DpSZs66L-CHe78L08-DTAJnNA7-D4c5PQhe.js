/* LetsForm Generator v0.9.4 - ESM */
import { s as styleInject, I as I18N, _ as _objectWithoutProperties, a as _isString, b as _extends, p as passRest, D as _objectSpread2, l as lfLog, k as _isArray, C as _isObject } from './index-mO_HhniH-DcmwUe2s-Chgrnzku.js';
import React, { useCallback } from 'react';
import { Form, Slider } from 'rsuite';
import { R as RequiredIcon } from './index-qCcFwkYg-V9-C5riE-DjMQWSV5-DgO1Ef0P.js';
import { R as RSuite5FieldControl } from './index-BWLHZfn1-LQm15E1Z-B7Ct_VJB-CXGta7uj.js';
import 'react-hook-form';
import './index-DpKM_8GA-C3gTjBsF.js';
import './index-BcAAYKQJ.js';
import './index-CPlHLHJ--7S9GFri9-CW8mSISb.js';
import './index-cDTTgCy6-D4x1bGkI-BtudXvI9.js';
import './index-BvswBXlW-Cn4uUKAN.js';
import './index-DcwatjKC-CczFj6ZO.js';
import './index-CR64ICt9.js';
import './index-DHcRgead.js';
import './cross-circle-CsoonplL.js';
import './index-Bo93bBQc.js';

/* LetsForm react-rsuite5 v0.9.4 - ESM */

/* LetsForm react-rsuite5 v0.9.3 - ESM */

/* LetsForm react-rsuite5 v0.9.1 - ESM */
var css_248z = ".lf-form-react-rsuite5 .lf-control-slider .rs-slider {\n  margin-bottom: 40px;\n}";
styleInject(css_248z);
var _excluded = ["name", "label", "hint", "value", "tooltip", "disabled", "readOnly", "required", "showTooltip", "error", "onChange", "onBlur", "marks"];
var validateMarks = function validateMarks(marks) {
  return _isArray(marks) && marks.every(function (mark) {
    return _isObject(mark) && mark.value && mark.label;
  });
};
var SliderRsuite = I18N(function (_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    value = _ref.value,
    _ref$tooltip = _ref.tooltip,
    tooltip = _ref$tooltip === void 0 ? false : _ref$tooltip,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$readOnly = _ref.readOnly,
    readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required,
    showTooltip = _ref.showTooltip,
    error = _ref.error,
    onChange = _ref.onChange,
    onBlur = _ref.onBlur,
    _ref$marks = _ref.marks,
    marks = _ref$marks === void 0 ? [] : _ref$marks,
    rest = _objectWithoutProperties(_ref, _excluded);
  var handleRenderMark = useCallback(function (number) {
    var found = marks.find(function (mark) {
      return mark && mark.value === number;
    });
    return found ? found.label : undefined;
  }, [marks]);
  return /*#__PURE__*/React.createElement(Form.Group, {
    controlId: name,
    className: "lf-control-slider"
  }, label && /*#__PURE__*/React.createElement(Form.ControlLabel, null, label, hint && tooltip && /*#__PURE__*/React.createElement(Form.HelpText, {
    tooltip: true
  }, hint), required && /*#__PURE__*/React.createElement(RequiredIcon, null)), /*#__PURE__*/React.createElement(RSuite5FieldControl, {
    errorMessage: _isString(error) ? error : undefined
  }, /*#__PURE__*/React.createElement(Slider, _extends({
    style: {
      marginTop: '15px',
      marginBottom: '8px'
    },
    name: name,
    value: value,
    onChange: onChange,
    readOnly: readOnly,
    onBlur: onBlur,
    renderMark: validateMarks(marks) ? handleRenderMark : undefined,
    errorMessage: _isString(error) ? error : undefined,
    disabled: disabled,
    tooltip: showTooltip
  }, passRest(rest)))), hint && !tooltip && /*#__PURE__*/React.createElement(Form.HelpText, null, hint));
}, ['label', 'hint', 'placeholder'], {
  marks: function marks(value, i18n) {
    return (Array.isArray(value) ? value : []).map(function (value) {
      return _objectSpread2(_objectSpread2({}, value), {}, {
        label: i18n(value.label)
      });
    });
  }
});
lfLog('Loaded RSuite5.Slider');

export { SliderRsuite as default };
