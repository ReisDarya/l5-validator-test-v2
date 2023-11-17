import StringSchema from './StringSchema.js';
import ArraySchema from './ArraySchema.js';
import ObjectSchema from './ObjectSchema.js';

class Validator {
// eslint-disable-next-line
  string() {
    return new StringSchema();
  }
  // eslint-disable-next-line
  array() {
    return new ArraySchema();
  }
  // eslint-disable-next-line
  object() {
    return new ObjectSchema();
  }
}
export default Validator;
