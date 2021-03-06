export class User {
    #firsName;
    #lastName;
    #email;
    constructor(firsName, lastName, email) {
        this.#firsName = firsName;
        this.#lastName = lastName;
        this.#email = email;
    }
    get fullName() {
        return `${this.#firsName} ${this.#lastName}`;
    }
    get email() {
        return this.email;
    }
}

