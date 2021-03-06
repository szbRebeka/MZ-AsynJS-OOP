import {User} from './user.js';

export class Blog {
    #title;
    #author;
    posts = [];

    constructor(title) {
        this.#title = title;
        this.#author = User;

    }

    #fetchPosts() {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                console.log('resolve', response)
                return response.json();

            }).then(data => {
                //console.log(data)
                this.posts = data
                console.log(this.posts)
            }).catch((error) => {
                console.log(error)
            });
        }

    get Posts() {

    }
}

















