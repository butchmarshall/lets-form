/* LetsForm react-bootstrap v0.7.10 - ESM */
import React__default from 'react';
import { l as lfLog } from './index-CB1ACAly.js';

var PlaceholderImage = function PlaceholderImage(_ref) {
  var url = _ref.url,
    label = _ref.label,
    name = _ref.name,
    maxWidth = _ref.maxWidth,
    maxHeight = _ref.maxHeight,
    marginTop = _ref.marginTop,
    marginBottom = _ref.marginBottom,
    align = _ref.align;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "lf-control-placeholder-image",
    "data-lf-field-name": name,
    style: {
      textAlign: align ? align : undefined
    }
  }, url && /*#__PURE__*/React__default.createElement("img", {
    src: url,
    alt: label || name,
    style: {
      marginTop: marginTop ? marginTop : undefined,
      marginBottom: marginBottom ? marginBottom : undefined,
      maxWidth: maxWidth ? maxWidth : undefined,
      maxHeight: maxHeight ? maxHeight : undefined,
      textAlign: align ? align : undefined
    }
  }));
};

lfLog('Loaded ReactBootrap.PlaceholderImage');

export { PlaceholderImage as default };
