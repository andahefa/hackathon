class UpdateUserData {
    constructor(email, first_name, last_name) {
        this.email = email;
        this.first_name = first_name;
        this.last_name = last_name;
    }

    getUpdateUserData() {
        return {
            email: this.email,
            first_name: this.first_name,
            last_name: this.last_name
        };
    }
}

export default UpdateUserData;