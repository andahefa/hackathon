class CreateUserData {
    constructor(name, job) {
        this.name = name;
        this.job = job;
    }

    getUserCreationData() {
        return {
            name: this.name,
            job: this.job,
        };
    }
}

export default CreateUserData;