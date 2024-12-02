import Ajv from 'ajv';

class Validator {
    constructor() {
        this.ajv = new Ajv();
    }

    validateSchema(schema, data) {
        const validate = this.ajv.compile(schema);
        const valid = validate(data);
        if (!valid) {
            throw new Error('Validation failed');
        }
        return true;
    }
}

export default new Validator();
