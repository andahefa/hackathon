import ApiService from '../../utils/ApiService.cy';
import Validator from '../../utils/Validator.cy';
import userResponseSchema from '../../../fixtures/JsonSchemaValidationGetApiUsers.json';
import userPostSchema from '../../../fixtures/JsonSchemaValidationPostApiUsers.json';
import responseActualizationUserSchema from '../../../fixtures/JsonSchemaValidationPutApiUsers.json';

class UserApiPage {

    createUser(userData) {
        return ApiService.request('POST', '/users', userData).then((response) => {
            expect(response.status).to.eq(201);
            Validator.validateSchema(userPostSchema, response.body);
            const userId = response.body.id;
            cy.wrap(userId).as('userId');
            return cy.get('@userId');
        });
    }

    //Aqui tuve que quemarle por defecto el 1 ya que es un Mock y no guarda nada al crear el usuario. 
    verifyUser(userId) {
        return ApiService.request('GET', `/users/1`).then((response) => {
            expect(response.status).to.eq(200);
            Validator.validateSchema(userResponseSchema, response.body);
            expect(response.body.data.first_name).to.eq('George');
        });
    }

    validateCreationUser(userData) {
        return this.createUser(userData).then((userId) => {
            return this.verifyUser(userId);
        });
    }

    updateUser(userData) {
        return ApiService.request('PUT', `/users/1`, userData).then((response) => {
            expect(response.status).to.eq(200);
            Validator.validateSchema(responseActualizationUserSchema, response.body);
        });
    }
}

export default new UserApiPage();
