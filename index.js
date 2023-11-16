import { GenerateGenerator } from './generator';

import { Fields as FieldsReactRsuite5, Forms as FormsReactRsuite5 } from './react-rsuite5/index';
import { Fields as FieldsReactMaterialUI, Forms as FormsReactMaterialUI } from './react-material-ui/index';
import { Fields as FieldsReact, Forms as FormsReact } from './react/index';
import { Fields as FieldsReactBootstrap, Forms as FormsReactBootstrap } from './react-bootstrap/index';
import { Fields as FieldsReactAntD, Forms as FormsReactAndD } from './react-antd/index';

import { mergeFields } from './helpers/merge-fields';

const Fields = mergeFields(
  FieldsReactRsuite5,
  FieldsReactMaterialUI,
  FieldsReact,
  FieldsReactBootstrap,
  FieldsReactAntD
);

const Forms = {
  ...FormsReactRsuite5,
  ...FormsReactMaterialUI,
  ...FormsReact,
  ...FormsReactBootstrap,
  ...FormsReactAndD
};

const FormGenerator = GenerateGenerator({ Fields, Forms });

export default FormGenerator ;
export * from './helpers';
export * from './costants';
export { Fields, Forms };
