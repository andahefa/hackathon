class ApiService {

    constructor(baseURL = Cypress.env('API_URL')) {
        this.baseURL = baseURL;
    }

    request(method, endpoint, data = null) {
        return cy.request({
            method,
            url: `${this.baseURL}${endpoint}`,
            body: data,
        }).then((response) => {
            return response;
        });
    }
}

export default new ApiService();
