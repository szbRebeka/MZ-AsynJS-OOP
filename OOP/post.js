import {Blog} from './blog.js'

export class Post{
    title;
    body;
    #id;
    constructor(body, id, title) {

        this.title = title;
        this.body = body;
        this.#id = id;
    }
    getPreview(length) {
        //iterate through each blogpost
        //save data[i].body.substring to a new variable
        // return the variable
    }
}